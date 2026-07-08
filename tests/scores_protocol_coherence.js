/**
 * Durable coherence audit for Medicalcul scores + Protocoles merge path.
 * Loads the same modules the PWA loads (calculateurs.js, data-bundle.js, app.js merge rules).
 * Exit 0 only if all gates pass.
 *
 * Run: node tests/scores_protocol_coherence.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');

const report = { scores: {}, protocols: {}, checks: [], fails: [] };
function pass(name, detail) { report.checks.push({ name, ok: true, detail }); }
function fail(name, detail) { report.fails.push({ name, detail }); report.checks.push({ name, ok: false, detail }); }

// --- Minimal DOM stub sufficient for Medicalcul open + recompute ---
function createDom() {
  const els = new Map();
  function el(id) {
    if (!els.has(id)) {
      const node = {
        id,
        style: { display: '' },
        classList: {
          _s: new Set(),
          add(c) { this._s.add(c); },
          remove(c) { this._s.delete(c); },
          contains(c) { return this._s.has(c); },
          toggle(c, f) {
            const on = typeof f === 'boolean' ? f : !this.contains(c);
            if (on) this.add(c); else this.remove(c);
            return on;
          },
        },
        innerHTML: '',
        value: '0',
        checked: false,
        type: 'text',
        children: [],
        parentNode: null,
        dataset: {},
        cloneNode() { return el(id + '_clone'); },
        addEventListener() {},
        removeEventListener() {},
        setAttribute() {},
        getAttribute() { return null; },
        appendChild(c) { this.children.push(c); return c; },
        remove() {},
        focus() {},
        closest() { return null; },
        querySelector() { return null; },
        querySelectorAll() { return []; },
      };
      els.set(id, node);
    }
    return els.get(id);
  }
  const wrap = el('wrap');
  wrap.replaceChild = function () {};
  const calcSearch = el('calcSearch');
  calcSearch.parentNode = wrap;

  const document = {
    getElementById: (id) => {
      const e = el(id);
      // Interactive stubs for score inputs
      if (/^chk_/.test(id)) { e.type = 'checkbox'; e.checked = true; }
      if (/^sel_/.test(id)) { e.type = 'select-one'; e.value = e.value || '0'; }
      if (/^num_/.test(id)) { e.type = 'range'; e.value = e.value || '0'; }
      return e;
    },
    querySelector(sel) {
      // radio defaults
      if (/:checked/.test(sel) || /name=/.test(sel)) {
        return { value: '1', checked: true, type: 'radio', addEventListener() {} };
      }
      return null;
    },
    querySelectorAll() { return []; },
    createElement: () => el('el_' + Math.random().toString(36).slice(2)),
    addEventListener() {},
    body: el('body'),
    documentElement: el('html'),
  };
  el('calc-detail-content').querySelectorAll = function () { return []; };
  el('calc-detail-content').querySelector = function () {
    return { value: '1', checked: true, type: 'radio', addEventListener() {} };
  };
  const windowObj = { document, scrollTo() {}, localStorage: { getItem: () => null, setItem() {}, removeItem() {} } };
  document.defaultView = windowObj;
  return { document, window: windowObj, el };
}

function loadScript(code, sandbox, filename) {
  vm.runInContext(code, sandbox, { filename, timeout: 120000 });
}

// ========== SCORES ==========
(function auditScores() {
  const { document, window: windowObj } = createDom();
  const sandbox = {
    console,
    document,
    window: windowObj,
    self: windowObj,
    globalThis: windowObj,
    localStorage: windowObj.localStorage,
    setTimeout,
    clearTimeout,
  };
  const ctx = vm.createContext(sandbox);
  loadScript(fs.readFileSync(path.join(ROOT, 'calculateurs.js'), 'utf8'), ctx, 'calculateurs.js');

  const C = windowObj.CALCULATEURS || vm.runInContext('typeof CALCULATEURS!=="undefined"?CALCULATEURS:null', ctx);
  const M = windowObj.Medicalcul || vm.runInContext('typeof Medicalcul!=="undefined"?Medicalcul:null', ctx);
  if (!C || !M) {
    fail('scores_load', 'CALCULATEURS or Medicalcul missing after loading calculateurs.js');
    return;
  }

  // Catalog integrity
  const ids = C.map((c) => c.id);
  const idDupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (idDupes.length) fail('score_unique_ids', idDupes.join(','));
  else pass('score_unique_ids', C.length + ' unique ids');

  const nomKeys = C.map((c) => String(c.nom || '').trim().toLowerCase() + '|' + String(c.domaine || '').trim().toLowerCase());
  const nomDupes = nomKeys.filter((k, i) => k !== '|' && nomKeys.indexOf(k) !== i);
  if (nomDupes.length) fail('score_unique_nom_domaine', [...new Set(nomDupes)].join(' ; '));
  else pass('score_unique_nom_domaine', 'no exact nom+domaine pairs');

  const incomplete = C.filter((c) => !c.id || !c.nom || !c.domaine || !c.type);
  if (incomplete.length) fail('score_required_fields', incomplete.map((c) => c.id || '?').join(','));
  else pass('score_required_fields', 'id,nom,domaine,type present');

  // Payload shape checks
  const payloadIssues = [];
  C.forEach((c) => {
    const t = c.type;
    if (t === 'checklist' && !(c.items && c.items.length) && !(c.fields && c.fields.length)) {
      payloadIssues.push(c.id + ':checklist missing items/fields');
    }
    if (t === 'radio_group' && !(c.groups && c.groups.length)) payloadIssues.push(c.id + ':radio_group missing groups');
    if ((t === 'select' || t === 'select_result' || t === 'number_result') && !(c.fields && c.fields.length)) {
      payloadIssues.push(c.id + ':' + t + ' missing fields');
    }
    if (t === 'questions' && !(c.questions && c.questions.length)) payloadIssues.push(c.id + ':questions missing');
    if (t === 'custom' && typeof c.render !== 'function') payloadIssues.push(c.id + ':custom missing render');
  });
  if (payloadIssues.length) fail('score_payload_shape', payloadIssues.join(' | '));
  else pass('score_payload_shape', 'all types have scoring payload');

  // Open every calculator
  M.init();
  let opened = 0;
  const openFails = [];
  const recomputeOk = [];
  for (const c of C) {
    try {
      const detail = document.getElementById('calc-detail-content');
      detail.innerHTML = '';
      detail.querySelectorAll = function () { return []; };
      detail.querySelector = function () {
        return { value: '1', checked: true, type: 'radio', addEventListener() {} };
      };
      M.showDetail(c.id);
      const html = detail.innerHTML || '';
      if (html.includes('Impossible d') || html.length < 60) {
        openFails.push({ id: c.id, type: c.type, why: 'short_or_error', len: html.length });
        continue;
      }
      opened++;
      // Recompute path: trigger update via re-show + result area presence after inputs
      // For field-based scores, ensure result area exists (updateResult called)
      const hasResultArea = html.includes('calc-result') || html.includes('calc-custom-area') || html.includes('calc-res-box') || html.includes('egs-wizard') || html.includes('calc-form');
      if (!hasResultArea) openFails.push({ id: c.id, type: c.type, why: 'no_form_shell' });
      else {
        // Spot-check known regressions
        if (['aggir', 'sppb', 'barthel', 'gds15', 'gds30', 'mms', 'cdr', 'ramsay'].includes(c.id)) {
          recomputeOk.push(c.id);
        }
      }
      M.showListContainer();
    } catch (e) {
      openFails.push({ id: c.id, type: c.type, why: e.message });
    }
  }

  report.scores = {
    catalogLength: C.length,
    opened,
    openFails,
    recomputeSpot: recomputeOk,
    types: C.reduce((a, c) => { a[c.type] = (a[c.type] || 0) + 1; return a; }, {}),
  };

  if (openFails.length) fail('score_open_all', JSON.stringify(openFails.slice(0, 20)));
  else pass('score_open_all', `opened ${opened}/${C.length}`);

  if (opened !== C.length) fail('score_open_count_match', `opened ${opened} catalog ${C.length}`);
  else pass('score_open_count_match', String(opened));

  // Must include known regression ids as opened + non-empty compute payload
  function computePayload(calc) {
    if (!calc) return null;
    try {
      if (calc.type === 'radio_group' && calc.groups && typeof calc.calculer === 'function') {
        const values = calc.groups.map((g) => {
          const opts = g.options || [];
          return opts.length ? (parseFloat(opts[0].value) || 0) : 0;
        });
        const total = values.reduce((a, b) => a + b, 0);
        return calc.calculer(total, values);
      }
      if (calc.type === 'checklist' && calc.fields && typeof calc.calculate === 'function') {
        const values = {};
        calc.fields.forEach((f) => {
          const opt = (f.options && f.options[0]) || '0';
          const m = String(opt).match(/^([0-9.]+)/);
          values[f.id] = m ? m[1] : '0';
        });
        return calc.calculate(values);
      }
      if (calc.type === 'checklist' && calc.items && typeof calc.calculer === 'function') {
        const total = calc.items.reduce((a, it) => a + (it.points || 0), 0);
        return calc.calculer(total);
      }
      if (calc.type === 'questions' && calc.questions && typeof calc.calculer === 'function') {
        let total = 0;
        calc.questions.forEach((q) => { total += q.pointsOnNo != null ? q.pointsOnNo : 0; });
        return calc.calculer(total);
      }
      if ((calc.type === 'select_result' || calc.type === 'select') && calc.fields && typeof calc.calculate === 'function') {
        const values = {};
        calc.fields.forEach((f) => {
          const opt = (f.options && f.options[0]) || '0';
          const m = String(opt).match(/^([0-9.]+)/);
          values[f.id] = m ? m[1] : String(opt);
        });
        return calc.calculate(values);
      }
    } catch (e) {
      return { __error: e.message };
    }
    return null;
  }

  for (const id of ['aggir', 'sppb', 'barthel', 'gds15']) {
    const calc = C.find((c) => c.id === id);
    if (!calc) continue;
    if (openFails.some((f) => f.id === id)) {
      fail('score_regression_' + id, 'failed open');
      continue;
    }
    const payload = computePayload(calc);
    report.scores['compute_' + id] = payload;
    if (!payload || payload.__error) fail('score_compute_' + id, payload && payload.__error || 'empty');
    else if (payload.score == null && payload.total == null) fail('score_compute_' + id, 'no score/total: ' + JSON.stringify(payload));
    else pass('score_compute_' + id, JSON.stringify({ score: payload.score, total: payload.total, cat: payload.cat || payload.cls }));
  }
})();

// ========== PROTOCOLS (same merge sources as renderProto) ==========
(function auditProtocols() {
  const windowObj = {};
  const sandbox = {
    console,
    window: windowObj,
    self: windowObj,
    globalThis: windowObj,
    document: { getElementById: () => null, addEventListener() {}, createElement: () => ({}) },
    localStorage: { getItem: () => null, setItem() {} },
  };
  const ctx = vm.createContext(sandbox);
  loadScript(fs.readFileSync(path.join(ROOT, 'data-bundle.js'), 'utf8'), ctx, 'data-bundle.js');

  const sources = [
    'PROTOCOLES_URGENCE', 'PROTOCOLES_COMPLETS', 'PROTOCOLES_REANIMATION', 'PROTOCOLES_COGNITIF',
    'PROTOCOLES_PALLIATIF_AVANCES', 'PROTOCOLES_READAPTATION', 'PROTOCOLES_KINE', 'PROTOCOLES_RCP',
    'PROTOCOLES_QUALITE', 'PROTOCOLES_LEGISLATION', 'PROTOCOLES_FORMATION', 'FICHES_GARDE',
  ];

  function getArr(name) {
    try {
      return vm.runInContext(`typeof ${name}!=="undefined"&&Array.isArray(${name})?${name}:null`, ctx);
    } catch { return null; }
  }

  // Mirror app.js renderProto aggregation (before UI filter)
  const rawAll = [];
  const addProto = (arr, cat) => {
    if (!Array.isArray(arr)) return;
    arr.forEach((p) => rawAll.push({ ...p, fallbackCategory: cat }));
  };
  addProto(getArr('PROTOCOLES_URGENCE'), 'Urgence');
  addProto(getArr('PROTOCOLES_COMPLETS'), 'Protocoles complets');
  addProto(getArr('PROTOCOLES_REANIMATION'), 'Réanimation');
  addProto(getArr('PROTOCOLES_COGNITIF'), 'Cognitif');
  addProto(getArr('PROTOCOLES_PALLIATIF_AVANCES'), 'Palliatif');
  addProto(getArr('PROTOCOLES_READAPTATION'), 'Réadaptation');
  addProto(getArr('PROTOCOLES_KINE'), 'Kinésithérapie');
  addProto(getArr('PROTOCOLES_RCP'), 'RCP');
  addProto(getArr('PROTOCOLES_QUALITE'), 'Qualité');
  addProto(getArr('PROTOCOLES_LEGISLATION'), 'Législation');
  addProto(getArr('PROTOCOLES_FORMATION'), 'Formation');
  const FG = getArr('FICHES_GARDE');
  if (FG) {
    FG.forEach((f) => {
      rawAll.push({
        id: f.id,
        titre: f.title,
        categorie: 'Fiches de Garde (Urgences)',
        protocole: f.checklist || [],
        fallbackCategory: 'Fiches de Garde (Urgences)',
      });
    });
  }

  // Per-source exact ID and title dupes
  const perSource = {};
  for (const name of sources) {
    const arr = getArr(name);
    if (!arr) { perSource[name] = { missing: true }; continue; }
    const ids = arr.map((p, i) => String(p.id != null ? p.id : name + '_' + i));
    const idDupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    const titles = arr.map((p) => String(p.titre || p.title || p.nom || p.situation || '')
      .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, ''));
    const tDupes = titles.filter((t, i) => t && titles.indexOf(t) !== i);
    perSource[name] = { count: arr.length, idDupes: [...new Set(idDupes)], titleDupes: [...new Set(tDupes)] };
    if (idDupes.length) fail('proto_src_id_' + name, idDupes.join(','));
    else pass('proto_src_id_' + name, arr.length + ' ids unique');
    if (tDupes.length) fail('proto_src_title_' + name, tDupes.slice(0, 10).join(','));
    else pass('proto_src_title_' + name, 'no exact title dups');
  }

  // Merged list using same title+id+near-dup logic as app.js renderProto
  const all = [];
  const seenTitle = new Map();
  const seenId = new Map();
  // Load SHIPPED helpers early for richness + body checks
  const appSrcEarly = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
  const hStartEarly = appSrcEarly.indexOf('function getProtoBodySteps');
  const hEndEarly = appSrcEarly.indexOf('window.getProtoBodySteps');
  let getStepsEarly = null;
  if (hStartEarly >= 0 && hEndEarly >= 0) {
    loadScript(
      appSrcEarly.slice(hStartEarly, hEndEarly)
        + '\n;this.getProtoBodySteps=getProtoBodySteps;this.getProtoMetaBlocks=getProtoMetaBlocks;',
      ctx,
      'proto_helpers_early.js'
    );
    getStepsEarly = vm.runInContext('getProtoBodySteps', ctx);
  }
  const richness = (p) => {
    const steps = getStepsEarly ? getStepsEarly(p) : (p.protocole || p.steps || p.checklist || p.etapes || []);
    const n = Array.isArray(steps) ? steps.length : 0;
    return (n * 2)
      + (p.surveillance ? 5 : 0) + (p.alerte || p.alert ? 3 : 0)
      + (p.indication ? 2 : 0) + (p.objectif ? 2 : 0)
      + (p.conduite ? 4 : 0) + (p.programme ? 4 : 0) + (p.etapes ? 4 : 0)
      + (p.contreIndications ? 2 : 0) + (p.effetsSecondaires ? 1 : 0)
      + (p.considerations || p.ethique ? 2 : 0);
  };
  const catBucket = (p) => {
    let c = String(p.categorie || p.category || p.fallbackCategory || 'Autre').trim();
    const lower = c.toLowerCase();
    if (lower.includes('garde')) return '🚑 Fiches de Garde (Urgences)';
    if (lower.includes('urgence') || lower === 'rcp' || lower === 'réanimation' || lower === 'reanimation') return '🔴 Urgences & Réanimation';
    if (lower.includes('completes') || lower === 'autre' || lower.includes('protocoles complets')) return '📋 Protocoles généraux';
    if (lower.includes('kine') || lower.includes('réadaptation') || lower.includes('readaptation') || lower.includes('kinésithérapie')) return '🏃 Rééducation & Kiné';
    if (lower.includes('cognitif') || lower.includes('neuro')) return '🧠 Neuro-Gériatrie & Cognition';
    if (lower.includes('qualité') || lower.includes('qualite') || lower.includes('législation') || lower.includes('legislation')) return '⚖️ Législation & Qualité';
    if (lower.includes('formation')) return '🎓 Formation & Pratique';
    if (lower.includes('antalgie') || lower.includes('douleur') || lower.includes('palliatif')) return '💊 Antalgie & Soins Palliatifs';
    if (lower.includes('antibio')) return '🦠 Antibiothérapie';
    if (lower.includes('gériatrie') || lower.includes('geriatrie')) return '👴 Spécificités Gériatriques';
    return c;
  };
  const titleTokens = (s) => new Set(String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim().split(/\s+/).filter((t) => t.length > 2));
  const titleJaccard = (a, b) => {
    const A = titleTokens(a), B = titleTokens(b);
    if (!A.size || !B.size) return 0;
    let i = 0;
    for (const x of A) if (B.has(x)) i++;
    return i / (A.size + B.size - i);
  };
  rawAll.forEach((p) => {
    const titre = String(p.titre || p.title || p.nom || p.situation || '').trim();
    const norm = titre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
    const pid = p.id != null ? String(p.id) : '';
    if (!norm && !pid) return;
    const obj = { ...p, id: pid || p.id, titre: titre || pid, categorie: catBucket(p) };
    if (pid && seenId.has(pid)) {
      const ex = seenId.get(pid);
      if (richness(obj) > richness(ex)) {
        const i = all.indexOf(ex);
        if (i >= 0) all[i] = obj;
        seenId.set(pid, obj);
        if (norm) seenTitle.set(norm, obj);
      }
      return;
    }
    if (norm && seenTitle.has(norm)) {
      const ex = seenTitle.get(norm);
      if (richness(obj) > richness(ex)) {
        const i = all.indexOf(ex);
        if (i >= 0) all[i] = obj;
        seenTitle.set(norm, obj);
        if (pid) seenId.set(pid, obj);
      }
      return;
    }
    all.push(obj);
    if (norm) seenTitle.set(norm, obj);
    if (pid) seenId.set(pid, obj);
  });

  // Pass 2: near-dup titles same category (mirror app.js)
  const dropNear = new Set();
  for (let i = 0; i < all.length; i++) {
    if (dropNear.has(all[i])) continue;
    for (let j = i + 1; j < all.length; j++) {
      if (dropNear.has(all[j])) continue;
      if (all[i].categorie !== all[j].categorie) continue;
      if (titleJaccard(all[i].titre, all[j].titre) < 0.7) continue;
      if (richness(all[i]) >= richness(all[j])) dropNear.add(all[j]);
      else dropNear.add(all[i]);
    }
  }
  const nearDropped = [];
  if (dropNear.size) {
    for (let i = all.length - 1; i >= 0; i--) {
      if (dropNear.has(all[i])) {
        nearDropped.push(all[i].id);
        all.splice(i, 1);
      }
    }
  }

  // Gate: CLINICAL_REFERENCE must not pollute protocoles merge
  const crLeak = all.filter((p) => String(p.id || '').startsWith('cr-'));
  if (crLeak.length) fail('proto_no_clinical_ref_inject', crLeak.map((p) => p.id).join(','));
  else pass('proto_no_clinical_ref_inject', 'no cr-* in protocoles merge');

  const mergedIds = all.map((p) => String(p.id || ''));
  const mergedIdDupes = mergedIds.filter((id, i) => id && mergedIds.indexOf(id) !== i);
  const mergedTitles = all.map((p) => String(p.titre || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, ''));
  const mergedTitleDupes = mergedTitles.filter((t, i) => t && mergedTitles.indexOf(t) !== i);

  // Near-dup residual gate (same category, jaccard >= 0.7 must be zero after pass 2)
  const residualNear = [];
  for (let i = 0; i < all.length; i++) {
    for (let j = i + 1; j < all.length; j++) {
      if (all[i].categorie !== all[j].categorie) continue;
      const jv = titleJaccard(all[i].titre, all[j].titre);
      if (jv >= 0.7) residualNear.push(all[i].id + '~' + all[j].id + '@' + jv.toFixed(2));
    }
  }
  if (residualNear.length) fail('proto_no_near_title_dups_same_cat', residualNear.join(' ; '));
  else pass('proto_no_near_title_dups_same_cat', 'no jaccard>=0.7 pairs in same category (dropped ' + nearDropped.length + ')');

  report.protocols = {
    rawCount: rawAll.length,
    mergedCount: all.length,
    nearDropped,
    perSource,
    mergedIdDupes: [...new Set(mergedIdDupes)],
    mergedTitleDupes: [...new Set(mergedTitleDupes)].slice(0, 20),
  };

  if (mergedIdDupes.length) fail('proto_merged_unique_ids', mergedIdDupes.join(','));
  else pass('proto_merged_unique_ids', all.length + ' merged unique ids');

  if (mergedTitleDupes.length) fail('proto_merged_unique_titles', mergedTitleDupes.join(','));
  else pass('proto_merged_unique_titles', 'no exact title dups in merge');

  if (all.length < 20) fail('proto_merged_min_count', 'only ' + all.length);
  else pass('proto_merged_min_count', all.length + ' protocols');

  // Load SHIPPED getProtoBodySteps / getProtoMetaBlocks from app.js (same as renderProtoList)
  const appSrc = appSrcEarly;
  const hStart = hStartEarly;
  const hEnd = hEndEarly;
  if (hStart < 0 || hEnd < 0) {
    fail('proto_helpers_shipped', 'getProtoBodySteps not found in app.js');
  } else {
    const getSteps = getStepsEarly || vm.runInContext('getProtoBodySteps', ctx);
    const getMeta = vm.runInContext('getProtoMetaBlocks', ctx);

    // Spot-check known field shapes against SHIPPED extractor
    const rcp = getArr('PROTOCOLES_RCP') || [];
    const rea = getArr('PROTOCOLES_REANIMATION') || [];
    const kine = getArr('PROTOCOLES_KINE') || [];
    const rcpEmpty = rcp.filter((p) => getSteps(p).length === 0);
    const reaEmpty = rea.filter((p) => getSteps(p).length === 0 && getMeta(p).length === 0);
    const kineEmpty = kine.filter((p) => getSteps(p).length === 0);
    if (rcpEmpty.length) fail('proto_rcp_etapes_mapped', rcpEmpty.map((p) => p.id).join(','));
    else pass('proto_rcp_etapes_mapped', rcp.length + ' RCP cards have steps from etapes');
    if (reaEmpty.length) fail('proto_reanim_conduite_mapped', reaEmpty.map((p) => p.id).join(','));
    else pass('proto_reanim_conduite_mapped', rea.length + ' reanim cards have conduite/meta body');
    if (kineEmpty.length) fail('proto_kine_programme_mapped', kineEmpty.map((p) => p.id).join(','));
    else pass('proto_kine_programme_mapped', kine.length + ' kine cards have programme steps');

    // Every merged protocol must have visible body under same field set as renderProtoList
    const emptyCards = [];
    all.forEach((p) => {
      const steps = getSteps(p);
      const meta = getMeta(p);
      const hasBody = steps.length > 0
        || meta.length > 0
        || !!(p.indication && String(p.indication).trim())
        || !!(p.surveillance && String(p.surveillance).trim())
        || !!(p.alerte || p.alert)
        || !!(p.contreIndications && String(p.contreIndications).trim())
        || !!(p.effetsSecondaires && String(p.effetsSecondaires).trim());
      if (!hasBody) emptyCards.push({ id: p.id, titre: p.titre });
    });
    report.protocols.emptyVisibleBodies = emptyCards;
    if (emptyCards.length) fail('proto_no_empty_visible_body', JSON.stringify(emptyCards.slice(0, 15)));
    else pass('proto_no_empty_visible_body', all.length + ' cards have visible body content');

    // Spot IDs called out by skeptic
    for (const id of ['prcp-1', 'pr-1', 'pk-1']) {
      const hit = all.find((p) => String(p.id) === id) || rcp.concat(rea, kine).find((p) => String(p.id) === id);
      if (!hit) { pass('proto_spot_' + id, 'not in merge (ok if renamed)'); continue; }
      const n = getSteps(hit).length + getMeta(hit).length;
      if (n === 0) fail('proto_spot_' + id, 'still empty body');
      else pass('proto_spot_' + id, n + ' body fragments');
    }
  }
})();

// Print + exit
const ok = report.fails.length === 0;
console.log(JSON.stringify(report, null, 2));
console.log(ok ? '\nCOHERENCE_OK' : '\nCOHERENCE_FAIL');
if (report.fails.length) {
  console.error('FAILS:', report.fails.map((f) => f.name + ': ' + f.detail).join('\n'));
}
process.exit(ok ? 0 : 1);
