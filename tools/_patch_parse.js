const fs = require('fs');
const path = require('path');
const appPath = path.join(__dirname, '..', 'app.js');
let app = fs.readFileSync(appPath, 'utf8');
const start = app.indexOf('function parsePracticeItems(raw, chId){');
const end = app.indexOf('function renderPracticeChapter(raw, chId){');
if (start < 0 || end < 0) {
  console.error('markers not found', start, end);
  process.exit(1);
}

const neu = `function parsePracticeItems(raw, chId){
  unweaveTwoColumnOCR(raw);
  const blocks = unweaveTwoColumnOCR._lastBlocks || [];
  const items = [];
  let pendingStem = '';
  let waitMarker = null;
  let waitStem = '';

  const defaultStem = (type) => type === 'KFP'
    ? 'Sélectionnez la (les) proposition(s) pertinente(s)'
    : 'Quelle(s) est (sont) la (les) proposition(s) exacte(s) ?';

  const makeItem = (label, stem, vignette, options, answer) => {
    let rang = '';
    const rangM = String(label).match(/^([AB])\\s*(QRM|QRU)/i);
    if (rangM) rang = rangM[1].toUpperCase();
    let type = 'QCM';
    if (/KFP/i.test(label) || chId === 'ch19') type = 'KFP';
    else if (/Question\\s+\\d+/i.test(label) || chId === 'ch18') type = 'MDP';
    else if (/QRM|QRU/i.test(label) || chId === 'ch20') type = 'QI';

    let st = String(stem || '').replace(/\\s+/g, ' ').trim();
    let vg = String(vignette || '').replace(/\\s+/g, ' ').trim();

    if (st.length > 140) {
      const qm = st.lastIndexOf('?');
      if (qm > 40) {
        const head = st.slice(0, qm + 1).trim();
        const tail = st.slice(qm + 1).trim();
        if (tail.length > 12 && /quel|parmi|indiquez|concernant/i.test(tail)) {
          vg = (vg ? vg + ' ' : '') + head;
          st = tail;
        } else if (head.length > 80 && tail.length < 8) {
          vg = (vg ? vg + ' ' : '') + head;
          st = defaultStem(type);
        }
      }
    }
    const qIdx = st.search(/quel(?:le)?\\(s\\)|parmi\\s+(ces|les)|indiquez|concernant\\s+[a-zà-ÿ]|que\\s+pouvez|que\\s+faut/i);
    if (qIdx > 12) {
      vg = (vg ? vg + ' ' : '') + st.slice(0, qIdx).trim();
      st = st.slice(qIdx).trim();
    }
    if (/^(matiques|blématiques|pro-|gine|appartenant)\\b/i.test(st) || st.length < 10) {
      st = (options && options.length >= 2) ? defaultStem(type) : st;
    }

    options = (options || []).filter(o => {
      const t = String(o.text || '').trim();
      if (t.length < 3) return false;
      if (/Elsevier|droits réservés|Mini-dossiers|Questions isolées/i.test(t)) return false;
      return true;
    }).slice(0, 10);

    // Require solid MCQ shape
    if (options.length < 3 && !answer) return null;
    if (options.length >= 2 && options.every(o => /[A-H]/.test(o.letter)) && !options.some(o => o.letter === 'A') && options.length < 4) return null;

    const maxM = (st + ' ' + vg).match(/\\[maximum\\s+(\\d+)\\]/i);
    const max = maxM ? maxM[1] : '';
    st = st.replace(/\\[maximum\\s+\\d+\\]/ig, '').trim();

    return {
      label: label || 'QCM', type, rang, max,
      stem: (st || defaultStem(type)).slice(0, 500),
      vignette: vg.slice(0, 900),
      options,
      answer: String(answer || '').slice(0, 600)
    };
  };

  for (const b of blocks) {
    const stemText = (b.stemParts || []).join(' ').replace(/\\s+/g, ' ').trim();
    const answer = (b.answers || []).join(' ').replace(/^R[eé]ponses?\\s*:\\s*/i, '').trim();
    const sets = b.optionSets || [];

    if (!b.marker && !sets.length) {
      if (stemText.length > 30 && !/^(Les key-features|Les questions isolées)/i.test(stemText)) {
        pendingStem = (pendingStem ? pendingStem + ' ' : '') + stemText;
      }
      continue;
    }

    if (b.marker && !sets.length) {
      const fullStem = [waitStem, pendingStem, stemText].filter(Boolean).join(' ');
      waitMarker = b.marker;
      waitStem = fullStem;
      pendingStem = '';
      if (answer) {
        const it = makeItem(b.marker, fullStem, '', [], answer);
        if (it) items.push(it);
        waitMarker = null; waitStem = '';
      }
      continue;
    }

    if (sets.length) {
      let label = b.marker || waitMarker || 'QCM';
      let stem = [waitStem, pendingStem, stemText].filter(Boolean).join(' ');
      waitMarker = null; waitStem = ''; pendingStem = '';

      for (let si = 0; si < sets.length; si++) {
        let st = stem;
        let vg = '';
        if (si > 0) {
          const parts = stem.split(/(?=quel(?:le)?\\(s\\)|parmi\\s+(ces|les)|concernant\\s+)/i);
          if (parts.length >= 2) {
            st = parts[parts.length - 1].trim();
            vg = parts.slice(0, -1).join(' ').trim();
          } else {
            st = defaultStem(chId === 'ch19' ? 'KFP' : 'QI');
          }
          label = 'QCM';
        }
        const it = makeItem(si === 0 ? label : 'QCM', st, vg, sets[si], si === 0 ? answer : '');
        if (it) items.push(it);
      }
    }
  }

  return { intro: '', items };
}

`;

app = app.slice(0, start) + neu + app.slice(end);
fs.writeFileSync(appPath, app);
console.log('OK parsePracticeItems patched', neu.length);
