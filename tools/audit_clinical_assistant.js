const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};

function loadConst(file, expression, extras = {}) {
  const sandbox = {
    console: { log() {}, warn() {}, error() {} },
    window: {},
    document: {
      documentElement: { dataset: {} },
      getElementById() { return null; },
      querySelector() { return null; },
      querySelectorAll() { return []; },
      addEventListener() {},
      createElement() { return { style: {}, setAttribute() {}, appendChild() {}, remove() {}, select() {} }; },
      body: { appendChild() {} }
    },
    localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
    navigator: {},
    CustomEvent: function CustomEvent(type, init) { this.type = type; this.detail = init && init.detail; },
    setTimeout(fn) { if (typeof fn === 'function') fn(); return 1; },
    clearTimeout() {},
    confirm() { return true; },
    ...extras
  };
  sandbox.window = { ...sandbox.window, window: sandbox.window };
  vm.createContext(sandbox);
  vm.runInContext(`${read(file)}\nglobalThis.__result = ${expression};`, sandbox, { filename: file });
  return { value: sandbox.__result, sandbox };
}

const appData = loadConst('data.js', 'APP_DATA').value;
const calculators = loadConst('calculateurs.js', 'CALCULATEURS').value;
const protocols = loadConst('protocoles-has-officiels.js', 'PROTOCOLES_HAS_OFFICIELS').value;
const clinicalLoaded = loadConst('clinical-pathways.js', '({ pathways: CLINICAL_PATHWAYS, sources: CLINICAL_SOURCES, contexts: CLINICAL_CONTEXTS })');
const { pathways, sources, contexts } = clinicalLoaded.value;

check(Array.isArray(pathways) && pathways.length === 24, `24 parcours attendus, ${pathways && pathways.length} trouvés`);
check(Array.isArray(contexts) && contexts.length === 4, 'Les quatre contextes de soins doivent être présents');
check(pathways.some((p) => p.id === 'other'), 'Le parcours générique "other" est absent');

const pathwayIds = pathways.map((p) => p.id);
check(new Set(pathwayIds).size === pathwayIds.length, 'Doublon d’identifiant de parcours');
const pathwayById = Object.fromEntries(pathways.map((pathway) => [pathway.id, pathway]));
const chapterIds = new Set(appData.chapters.map((ch) => ch.id));
const scoreIds = new Set(calculators.map((score) => score.id));
const protocolIds = new Set(protocols.map((protocol) => protocol.id));
const contextIds = new Set(contexts.map((context) => context.id));

for (const pathway of pathways) {
  check(pathway.title && pathway.summary, `${pathway.id}: titre/résumé manquant`);
  check(Array.isArray(pathway.aliases) && pathway.aliases.length > 0, `${pathway.id}: synonymes manquants`);
  check(pathway.contexts.length === 4 && pathway.contexts.every((id) => contextIds.has(id)), `${pathway.id}: couverture des quatre contextes incomplète`);
  check(pathway.redFlags.length > 0, `${pathway.id}: aucune alerte`);
  check(pathway.history.length > 0, `${pathway.id}: interrogatoire vide`);
  check(pathway.exam.length > 0, `${pathway.id}: examen vide`);
  check(pathway.actions.length > 0 && pathway.monitoring.length > 0, `${pathway.id}: conduite/surveillance vide`);
  check(pathway.sourceRefs.length > 0, `${pathway.id}: source absente`);

  for (const sourceId of pathway.sourceRefs) check(!!sources[sourceId], `${pathway.id}: source inconnue ${sourceId}`);
  for (const chapterId of pathway.chapterIds) check(chapterIds.has(chapterId), `${pathway.id}: chapitre inconnu ${chapterId}`);
  for (const scoreId of pathway.scores) check(scoreIds.has(scoreId), `${pathway.id}: score inconnu ${scoreId}`);
  for (const protocolId of pathway.protocolIds) check(protocolIds.has(protocolId), `${pathway.id}: protocole inconnu ${protocolId}`);

  const questionIds = [...pathway.redFlags, ...pathway.history, ...pathway.exam].map((item) => item.id);
  check(new Set(questionIds).size === questionIds.length, `${pathway.id}: doublon d’identifiant de question`);
  for (const alert of pathway.redFlags) check(alert.action && alert.action.length > 15, `${pathway.id}/${alert.id}: action d’alerte insuffisante`);

  const allOutputs = [
    ...pathway.actions,
    ...pathway.monitoring,
    ...Object.values(pathway.hypotheses).flat(),
    ...Object.values(pathway.investigations).flat()
  ];
  for (const output of allOutputs) {
    if (!output || typeof output === 'string' || !output.when) continue;
    const refs = output.when.any || output.when.all || (output.when.answer ? [output.when.answer] : []);
    for (const ref of refs) check(questionIds.includes(ref), `${pathway.id}: condition vers question inconnue ${ref}`);
  }
}

check(/hypoactiv/i.test(JSON.stringify(pathwayById.delirium)), 'Confusion hypoactive non couverte');
check(/sans fièvre/i.test(JSON.stringify(pathwayById.infection)), 'Infection sans fièvre non couverte');
check(/IMC normal ou élevé n’exclut pas/i.test(JSON.stringify(pathwayById.nutrition)), 'Dénutrition avec IMC normal non couverte');
check(pathwayById.dyspnea.redFlags.some((item) => item.id === 'resp_hypox'), 'Dyspnée hypoxémiante non couverte');
check(/introduction|arrêt|dose|interaction/i.test(JSON.stringify(pathwayById.iatrogeny)), 'Iatrogénie médicamenteuse non couverte');

const assistantCode = read('clinical-assistant.js');
check(!/\blocalStorage\b|\bsessionStorage\b|\bindexedDB\b/.test(assistantCode), 'Le moteur clinique ne doit utiliser aucun stockage persistant');
check(!/https?:\/\//.test(read('clinical-pathways.js')), 'Le référentiel clinique ne doit pas dépendre de liens externes');
check(!/draftPathwayId/.test(assistantCode), 'La consultation ne doit pas imposer un scénario avant la saisie du patient');
check(/Motif d’entrée ou problème principal/.test(assistantCode), 'Champ de motif patient absent');
check(/automaticAlerts/.test(assistantCode), 'Analyse automatique des constantes absente');

const indexHtml = read('index.html');
const swCode = read('sw.js');
for (const asset of ['clinical-pathways.js', 'clinical-assistant.js']) {
  check(indexHtml.includes(asset), `${asset}: absent du chargeur`);
  check(swCode.includes(`'./${asset}'`), `${asset}: absent du cache PWA`);
}
check(indexHtml.includes('vClinique') && indexHtml.includes("sw('clinique')"), 'Vue ou carte clinique absente');
check(swCode.includes("geriatrie-v262"), 'Version de cache PWA non incrémentée');

// Consultation déterministe, sans DOM : les données du patient activent les axes utiles.
const assistantSandbox = {
  console: { log() {}, warn() {}, error() {} },
  window: {},
  CLINICAL_PATHWAYS: pathways,
  CLINICAL_CONTEXTS: contexts,
  CLINICAL_SOURCES: sources,
  CALCULATEURS: calculators,
  PROTOCOLES_HAS_OFFICIELS: protocols,
  APP_DATA: appData,
  document: {
    documentElement: { dataset: {} },
    getElementById() { return null; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    addEventListener() {},
    createElement() { return { style: {}, setAttribute() {}, appendChild() {}, remove() {}, select() {} }; },
    body: { appendChild() {}, classList: { add() {}, remove() {} } }
  },
  navigator: {},
  CustomEvent: function CustomEvent(type, init) { this.type = type; this.detail = init && init.detail; },
  setTimeout() { return 1; },
  clearTimeout() {},
  confirm() { return true; }
};
assistantSandbox.window = assistantSandbox;
vm.createContext(assistantSandbox);
vm.runInContext(assistantCode, assistantSandbox, { filename: 'clinical-assistant.js' });
assistantSandbox.ClinicalAssistant.start({ setting: 'admission' });
assistantSandbox.ClinicalAssistant.answer('chiefComplaint', 'Chute ce matin avec douleur de hanche et traumatisme crânien sans perte de connaissance');
assistantSandbox.ClinicalAssistant.answer('age', '84');
assistantSandbox.ClinicalAssistant.answer('medications', 'Apixaban et benzodiazépine récemment introduite');
assistantSandbox.ClinicalAssistant.answer('spo2', '87');
const oriented = assistantSandbox.ClinicalAssistant.inspect();
check(oriented.activePathwayIds.includes('fall'), 'Le motif libre ne déclenche pas l’axe chute');
check(!oriented.activePathwayIds.includes('syncope'), 'Une perte de connaissance explicitement niée active à tort l’axe syncope');
check(oriented.activePathwayIds.includes('dyspnea'), 'Une SpO₂ basse ne déclenche pas l’axe respiratoire');
check(oriented.activePathwayIds.includes('iatrogeny'), 'Une modification médicamenteuse à risque ne déclenche pas l’axe iatrogénie');
check(oriented.automaticAlertCount === 1, 'La SpO₂ critique ne déclenche pas l’alerte automatique');
assistantSandbox.ClinicalAssistant.answer('fall_head', 'yes');
assistantSandbox.ClinicalAssistant.answer('fall_anticoag', 'yes');
assistantSandbox.ClinicalAssistant.importScore('tug', { score: '18 s', interpretation: 'Mobilité à interpréter dans le contexte.' });
const patientSummary = assistantSandbox.ClinicalAssistant.buildSummary();
check(patientSummary.includes('Chute ce matin avec douleur de hanche'), 'Motif du patient non exporté');
check(patientSummary.includes('SpO₂ renseignée à 87 %'), 'Alerte issue des constantes non exportée');
check(patientSummary.includes('Traumatisme crânien'), 'Alerte traumatique non exportée');
check(patientSummary.includes('Anticoagulant') && patientSummary.includes('vigilance hémorragique'), 'Alerte anticoagulant non exportée');
check(patientSummary.includes('Timed Up and Go') && patientSummary.includes('18 s'), 'Score non exporté');
check(assistantSandbox.ClinicalAssistant.inspect().active === true, 'Session clinique non active après démarrage');

if (failures.length) {
  console.error(`AUDIT ASSISTANT CLINIQUE: ${failures.length} échec(s)`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`AUDIT ASSISTANT CLINIQUE: OK`);
console.log(`- ${pathways.length} domaines combinables dans ${contexts.length} contextes`);
console.log(`- ${new Set(pathways.flatMap((p) => p.scores)).size} scores reliés`);
console.log(`- ${new Set(pathways.flatMap((p) => p.protocolIds)).size} protocoles HAS reliés`);
console.log(`- stockage clinique persistant: aucun`);
