import pathlib
p = pathlib.Path('C:/Users/tokin/geriatrie-app/brainfeed.js')
lines = p.read_text(encoding='utf-8').splitlines()

new_block = """    const qLower = (fc.question || '').toLowerCase();
    const aLower = correctClean.toLowerCase();
    const ctx = qLower + ' ' + aLower;

    // Fallback: related flashcards, prefer same chapter and similar theme
    let candidates = allFlash.filter(f => f.id !== fc.id && f.answer);
    if (fc.chapter) {
      const sameChap = candidates.filter(f => f.chapter === fc.chapter);
      if (sameChap.length >= 4) candidates = sameChap;
    }
    if (fc.tags && fc.tags.length) {
      const sameTags = candidates.filter(f => f.tags && f.tags.some(t => fc.tags.includes(t)));
      if (sameTags.length >= 4) candidates = sameTags;
    }

    // Detect answer type: treatment, definition, score, symptom, exam
    const isTreatment = /traitement|1ere intention|thérapeutique|prendre en charge|guérir|soigner|analgésie|médicament|prescrire|déprescri/.test(ctx);
    const isDefinition = /définition|qu'est-ce que|c'est quoi|signifie|correspond|désigne/.test(ctx);
    const isScore = /score|échelle|test|évaluation|seuil|interpréter|interprétation/.test(ctx);
    const isSymptom = /signe|symptôme|clinique|manifestation|douleur|marche/.test(ctx);
    const isExam = /bilan|exam|biologie|imagerie|radiographie|scanner|irm/.test(ctx);

    const wrong = shuffle(candidates)
      .map(f => {
        const a = cleanAnswer(f.answer);
        if (a.length < 8 || a.length > 90 || a === correctClean) return null;
        if (/\d/.test(a) && !/\d/.test(correctClean)) return null;
        if (!/\d/.test(a) && /\d/.test(correctClean)) return null;
        return a;
      })
      .filter(Boolean);

    let uniq = [...new Set(wrong)].slice(0, 1); // only one answer from other flashcards
    const themeDistractors = {
      treatment: ['Antibiotique en 1ère intention', 'Aucun traitement nécessaire', 'Hospitalisation systématique', 'Kinesithérapie seule suffit'],
      definition: ['Une complication aiguë', 'Un symptôme non spécifique', 'Un médicament', 'Une procédure chirurgicale'],
      score: ['Score de 0/30', 'Score toujours interprété brut', 'Score normal ≥ 25/30', 'Score non validé chez la PA'],
      symptom: ['Douleur neuropathique', 'Signe de décompensation cardiaque', 'Manifestation iatrogène', 'Symptôme psychogène'],
      exam: ['Bilan biologique systématique', 'Scanner cérébral systématique', 'Aucun examen complémentaire', 'Hospitalisation pour bilan'],
      nutrition: ['Complémentation systématique par nutrition parentérale', 'IMC > 25 = obésité', 'Albumine > 40 g/L = normal'],
      chute: ['Le TUG < 10 s = risque élevé', 'Arrêter toute activité physique', 'Contention systématique'],
      cognition: ['Le MMS augmente avec l’âge', 'Prescrire un anticholinergique', 'La confusion est chronique et irréversible'],
      douleur: ['L’EVA est impossible chez la PA', 'Le paracétamol est contre-indiqué', 'Douleur = toujours psychogène'],
      pharma: ['Les BZD sont recommandées chez la PA', 'La polymédication est sans risque', 'Arrêter brutalement tous les traitements'],
      ethique: ['L’acharnement est obligatoire', 'Les directives anticipées sont non contraignantes', 'La sédation est toujours interdite'],
      incontinence: ['L’incontinence est normale avec l’âge', 'Pose systématique de sonde à demeure', 'Pas de rééducation périnéale'],
      osteo: ['La vitamine D est inutile chez la PA', 'Le scanner est l’examen de 1re intention', 'Pas de prévention des chutes'],
      default: ['Aucune de ces réponses', 'Contre-indication absolue', 'Surveillance simple']
    };
    let key = 'default';
    if (isTreatment) key = 'treatment';
    else if (isDefinition) key = 'definition';
    else if (isScore) key = 'score';
    else if (isSymptom) key = 'symptom';
    else if (isExam) key = 'exam';
    else if (/nutrition|mna|albumine|imc|dénutri|poids/.test(ctx)) key = 'nutrition';
    else if (/chute|tinetti|tug|marche|équilibre/.test(ctx)) key = 'chute';
    else if (/démence|cognitif|mms|alzheimer|confusion|delirium/.test(ctx)) key = 'cognition';
    else if (/douleur|eva|ecpa/.test(ctx)) key = 'douleur';
    else if (/pharmaco|médicament|iatrogène|stopp|beers|psychotrope/.test(ctx)) key = 'pharma';
    else if (/éthique|palliatif|fin de vie|directives|leonetti/.test(ctx)) key = 'ethique';
    else if (/incontinen|vésico|sphinctér/.test(ctx)) key = 'incontinence';
    else if (/ostéopor|fracture|osseux|vitamine d/.test(ctx)) key = 'osteo';

    while (uniq.length < 3) {
      const candidate = themeDistractors[key][uniq.length % themeDistractors[key].length];
      if (!uniq.includes(candidate)) uniq.push(candidate); else uniq.push('Aucune de ces réponses');
    }

    const options = shuffle([
      { text: correctClean, correct: true },
      ...uniq.map(t => ({ text: t, correct: false }))
    ]);
    return options.slice(0, 4);
  }"""

new_lines = lines[:261] + new_block.splitlines() + lines[316:]
sep = '\r\n' if '\r\n' in p.read_text(encoding='utf-8') else '\n'
p.write_text(sep.join(new_lines), encoding='utf-8')
print('replaced')
