
const SECTION_RE=/^([IVX]+).\s+(.+)/;
const LETTER_RE=/^([A-Z]).\s+(.+)/;
const RANG_RE=/^RANG\s+[A-C]/i;
const BULLET_RE=/^[•-]/;
const NUM_LIST_RE=/^(\d+)[\s.)-](.+)/;
const RUN_HDR_RE=/^(Page\s+\d+|Chapitre\s+\d+|Vieillissement|Gériatrie)/i;
const SKIP_LINE_RE=/^(\d+|[A-Z]\.\s*$)/;
const SYLLABUS_RE=/^ECN\s+/;
const SYLLABUS_ROW_RE=/^RANG_[A-Z]/;
const DIAGRAM_RE=/^Fig\./;

function esc(str){return (str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;')} 

const APP_DATA = { chapters: [{ id: 'ch1', t: 'Chapitre 1' }] };

function renderChapter(raw,chId){
  const ch=APP_DATA.chapters.find(c=>c.id===chId);
  const titleRe=ch?new RegExp('^'+ch.t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\s*$','i'):null;
  
  // 1. Fix hyphens with spaces (OCR hyphenations) with French accent support
  let text = raw.replace(/([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)-\s+([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)/g, (match, p1, p2) => {
    const prefixes = /^(pré|diffé|repré|dé|con|in|re|trans|inter|intra|co|physio|patho|neuro|ostéo|sympto|cardio|broncho|pneumo|hémato|hépato|néphro|gastro|entéro|myo|dermo|ophtalmo|oto|rhino|laryngo|géronto|géria|psycho|démogra|socio|anthro|biolo|médico|chimio|radiothé|immuno|anti|auto|hyper|hypo|dys|poly|multi|micro|macro|péri|para|post|supra|infra|extra|ultra|pseudo|semi|hémi|mono|bi|tri|quadri|tétra|penta|hexa|pluri)$/i;
    const normP1Prefix = p1.replace(/[éèêë]/gi, 'e').replace(/[àâä]/gi, 'a').replace(/[ôö]/gi, 'o').replace(/[ùûü]/gi, 'u').replace(/ç/gi, 'c');
    if (prefixes.test(p1) || prefixes.test(normP1Prefix)) {
      return p1 + p2;
    }
    if (p2.match(/^[a-zà-öø-ÿœŒæÆÀ-ÖØ-ß]/i)) {
      const compoundBases = /^(garde|arc|celui|celle|ceux|celles|moi|toi|soi|nous|vous|lui|leur|eux|y|en|ci|là|bas|haut|arrière|avant|après|entre|sous|sur|sans|contre|non|quasi|vice)$/i;
      if (compoundBases.test(p1)) return p1 + '-' + p2;
      return p1 + p2;
    }
    return p1 + '-' + p2;
  });

  // 2. Fix standard hyphenations at end of lines
  text = text.replace(/([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)-\s*\n\s*([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)/g, '$1$2');

  const rawLines = text.replace(/\r\n/g,'\n').split('\n').map(l=>l.trim());
  
  // 3. Preprocess and merge split headings
  const preprocessedLines = [];
  for (let i = 0; i < rawLines.length; i++) {
    let l = rawLines[i];
    if (l === '') {
      if (preprocessedLines.length > 0 && preprocessedLines[preprocessedLines.length - 1] !== '') {
        preprocessedLines.push('');
      }
      continue;
    }
    
    // Merge Roman numeral on its own line followed by title
    if (/^[IVX]+$/.test(l)) {
      if (i + 1 < rawLines.length && rawLines[i+1] && !/[.!?]$/.test(rawLines[i+1]) && rawLines[i+1].length < 100) {
        l = l + '. ' + rawLines[i+1];
        i++;
      }
    }
    // Merge capital letter on its own line followed by title
    else if (/^[A-Z]$/.test(l)) {
      if (i + 1 < rawLines.length && rawLines[i+1] && !/[.!?]$/.test(rawLines[i+1]) && rawLines[i+1].length < 100) {
        l = l + '. ' + rawLines[i+1];
        i++;
      }
    }
    
    // Fix merged letters/numerals on the same line (OCR artifact)
    l = l.replace(/^([IVX]+)\.?\s*([A-ZÀ-ÖØ-ßŒÆ][a-zà-öø-ÿœæ].*)/, '$1. $2');
    
    // For letter headings, prevent modifying ECN rank table rows or prose paragraphs
    const letterM = l.match(/^([A-Z])\.?\s*([A-ZÀ-ÖØ-ßŒÆ][a-zà-öø-ÿœæ].*)/);
    if (letterM) {
      const rest = letterM[2];
      const isEcnTable = /^(Définition|Épidémiologie|Éléments|Prise en charge|Diagnostic|Rubrique|Intitulé|Descriptif|Prévalence|Facteurs|B\s|C\s)/i.test(rest);
      const isProse = /^(Le|La|Les|L'|Il|Elle|Pour|C'est|Ainsi|On|En|Un|Une|Cette|Ce|Cela|De|Du|Des|Dans|Avec|Son|Sa|Ses|Sur|Par|Au|Aux|Tout|Tous|Bien|Mais|Or|Donc|Chez|Après|Avant|Depuis)\b/i.test(rest);
      if (!isEcnTable && !isProse && rest.length <= 80) {
        l = letterM[1] + '. ' + rest;
      }
    }
    
    preprocessedLines.push(l);
  }

  // 4. Filter OCR junk, keeping empty lines for paragraph breaks
  let lines = preprocessedLines.filter((l,i,arr)=>{
    if(l === '') return true;
    if(RUN_HDR_RE.test(l))return false;
    if(SKIP_LINE_RE.test(l))return false;
    if(titleRe&&titleRe.test(l))return false;
    if(/^Page\s+\d+$/i.test(l))return false;
    if(SYLLABUS_RE.test(l))return false;
    if(SYLLABUS_ROW_RE.test(l))return false;
    if(/^En lien avec/.test(l))return false;
    if(DIAGRAM_RE.test(l)&&!/Fig\.\s*\d+\.\d+/.test(l))return false;
    return true;
  });

  // Filter ITEM table rows before first section + kill short garbage
  let firstSec=-1;
  for(let i=0;i<lines.length;i++){if(SECTION_RE.test(lines[i])||LETTER_RE.test(lines[i])){firstSec=i;break}}
  if(firstSec>0){
    lines=lines.filter((l,i)=>{
      if(l === '') return true;
      if(i>=firstSec)return true;
      if(RANG_RE.test(l))return true;
      if(/Situations?\s+de\s+départ/i.test(l))return true;
      if(/^\d{2,3}\s+/.test(l))return true;
      if(BULLET_RE.test(l))return true;
      if(l.length > 40 && /[.!?]/.test(l)) return true;
      if(/gérontologie|gériatrie|vieillissement/i.test(l)) return true;
      return false;
    });
  }
  // Kill remaining short non-sentence fragments (common OCR junk)
  lines = lines.filter(l => {
    if(l === '') return true;
    if (l.length >= 50) return true;
    if (RANG_RE.test(l)) return true;
    if (BULLET_RE.test(l) || SECTION_RE.test(l) || LETTER_RE.test(l)) return true;
    if (/^Fig\.|Tableau|Encadré|^\d{2,3}\s+/.test(l)) return true;
    if (/[.!?]$/.test(l)) return true;
    if (/^Situations?\s+de\s+départ/i.test(l)) return true;
    return false;
  });
  // R2 — Filtrer les listes de sections internes (TOC dupliquees dans le corps)
  // Proteger les 40 premieres lignes
  const preambleHeadings = new Set();
  for (let pi = 0; pi < Math.min(lines.length, 40); pi++) {
    if (SECTION_RE.test(lines[pi]) || LETTER_RE.test(lines[pi])) preambleHeadings.add(lines[pi]);
  }
  const isLongDoc = lines.length > 8;
  lines = lines.filter((l, i) => {
    if(l === '') return true;
    if (isLongDoc && (i < 40 || preambleHeadings.has(l))) return true;
    const isSec = SECTION_RE.test(l);
    const isLet = LETTER_RE.test(l);
    if (!isSec && !isLet) return true;
    const re = isSec ? SECTION_RE : LETTER_RE;
    let nxtFound = false, prvFound = false;
    for (let j = i + 1, cnt = 0; j < lines.length && cnt < 5; j++) {
      if (!lines[j]) continue; cnt++;
      if (re.test(lines[j])) { nxtFound = true; break; }
      if (lines[j].length > 50 && /[.!?]/.test(lines[j])) break;
    }
    for (let j = i - 1, cnt = 0; j >= 0 && cnt < 5; j--) {
      if (!lines[j]) continue; cnt++;
      if (re.test(lines[j])) { prvFound = true; break; }
      if (lines[j].length > 50 && /[.!?]/.test(lines[j])) break;
    }
    return !(nxtFound || prvFound);
  });
  let html='';let paraBuf=[];let bulletBuf=[];let inSection=false;let inSit=false;let inCallout=false;let calloutTitle='';let calloutBuf=[];let inNumList=false;let numBuf=[];let pastPreamble=false;let lettrinePlaced=false;

  function markBodyStart(){pastPreamble=true}
  function isPreambleLine(l){
    if(/^\d{3}\s+\S/.test(l))return true;
    if(/^ITEM\s/i.test(l))return true;
    if(/^En lien avec/i.test(l))return true;
    if(/^diagnostic et thérapeutique/i.test(l))return true;
    return false;
  }

  function flushPara(rang){
    if(!paraBuf.length)return;
    const merged=paraBuf.join(" ").replace(/\s+/g," ").trim();
    paraBuf=[];
    if(merged.length<12)return;
    const chip=rang?`<span class="rang-inline rang-${rang==="A"?"a":"b"}">Rang ${rang}</span>`:"";
    let pClass = "";
    if (inSection && !lettrinePlaced) {
      pClass = ' class="has-lettrine"';
      lettrinePlaced = true;
    }
    // No more splitting - create large continuous blocks
    html+=`<div class="para-card">${chip}<p${pClass}>${esc(merged)}</p></div>`;
  }

  function flushBullets(){
    if(!bulletBuf.length)return;
    html+=`<div class="reader-list-card"><ul class="reader-list">${bulletBuf.map(b=>`<li>${esc(b)}</li>`).join('')}</ul></div>`;
    bulletBuf=[];
  }
  function flushNumList(){
    if(!numBuf.length)return;
    html+=`<div class="reader-list-card"><ol class="reader-list num">${numBuf.map(b=>`<li>${esc(b)}</li>`).join('')}</ol></div>`;
    numBuf=[];inNumList=false;
  }
  function flushCallout(){
    if(!calloutBuf.length&&!calloutTitle)return;
    html+=`<aside class="callout"><div class="callout-title">${esc(calloutTitle||'Encadré')}</div><div class="callout-body">${calloutBuf.map(p=>`<p>${esc(p)}</p>`).join('')}</div></aside>`;
    calloutBuf=[];calloutTitle='';inCallout=false;
  }
  function closeSection(){if(inSection){html+=`</div></section>`;inSection=false}}

  const first35Headings = new Set();
  const outlineCap = lines.slice(0, 35);
  for (const ol of outlineCap) {
    const om = ol.match(SECTION_RE);
    if (om) {
      const key = om[1] + '|' + om[2];
      first35Headings.add(key);
    }
  }

  for(let i=0;i<lines.length;i++){
    let l=lines[i];
    if(!l){flushBullets();flushNumList();if(inCallout)flushCallout();continue}

    if(/^Situations?\s+de\s+départ/i.test(l)){
      flushBullets();flushNumList();closeSection();
      markBodyStart();
      html+=`<div class="situations-card"><div class="situations-title">Situations de départ</div><ul class="situations-list">`;
      inSit=true;continue;
    }
    if(inSit){
      // Check if this line belongs to situations list
      const parts = l.split(/\s*(?=\b\d{2,3}\b\s+)/);
      let matchedAny = false;
      let items = [];
      for (const part of parts) {
        const sm = part.trim().match(/^(\d{2,3})\s+(.+)/);
        if (sm) {
          items.push(sm);
          matchedAny = true;
        }
      }
      
      if (matchedAny) {
        for (const sm of items) {
          html += `<li><span class="sit-badge-turquoise">${sm[1]}</span> ${esc(sm[2].replace(/\.$/, ''))}</li>`;
        }
        continue;
      }
      
      if (/^En lien avec/i.test(l)) {
        html += `<li class="sit-group-title">${esc(l)}</li>`;
        continue;
      }
      
      // If it's not a situation item or group header, the block has ended
      html += `</ul></div>`;
      inSit = false;
      i--; // re-evaluate this line in main loop
      continue;
    }

    const enc=l.match(/^Encadré\s+([\d.]+)/i);
    if(enc){flushBullets();flushNumList();flushCallout();calloutTitle='Encadré '+enc[1];inCallout=true;continue}
    if(inCallout){
      if(SECTION_RE.test(l)||LETTER_RE.test(l)||/^Tableau\s+/i.test(l)){flushCallout()}
      else if(BULLET_RE.test(l)){calloutBuf.push(l.match(BULLET_RE)[1]);continue}
      else if(l.length<200){calloutBuf.push(l);continue}
      else flushCallout();
    }

    const figM=l.match(/Fig\.\s*(\d+\.\d+)/);
    if(figM&&typeof FIGURES!=='undefined'){
      flushPara();flushBullets();flushNumList();
      const figId=figM[1];
      if(typeof renderInteractiveFigure==='function'){
        html+=`<figure class="fig-block">${renderInteractiveFigure(figId)}<figcaption>Figure ${figId}</figcaption></figure>`;
      }else{
        const src=FIGURES[figId]?.[0];
        if(src&&!src.includes('figures/page_')){
          html+=`<figure class="fig-block"><img src="${src}" alt="Figure ${figId}" loading="lazy"><figcaption>Figure ${figId}</figcaption></figure>`;
        }
      }
      continue;
    }

    const tab=l.match(/^Tableau\s+([\d.]+)\.\s*(.*)/i);
    if(tab){flushPara();flushBullets();html+=`<div class="table-lead"><span class="table-badge">Tableau ${tab[1]}</span><span>${esc(tab[2]||'')}</span></div>`;continue}

    const secM=l.match(SECTION_RE);
    if(secM){
      if(!pastPreamble){
        let hasSibling = false;
        for (let j = i + 1, cnt = 0; j < lines.length && cnt < 5; j++) {
          if (!lines[j]) continue; cnt++;
          if (SECTION_RE.test(lines[j])) { hasSibling = true; break; }
        }
        for (let j = i - 1, cnt = 0; j >= 0 && cnt < 5; j--) {
          if (!lines[j]) continue; cnt++;
          if (SECTION_RE.test(lines[j])) { hasSibling = true; break; }
        }
        if (hasSibling) continue;
        markBodyStart();
      }
      flushPara();flushBullets();flushNumList();closeSection();
      html+=`<section class="manual-section"><header class="section-head"><span class="section-num">${esc(secM[1])}</span><span class="section-title">${esc(secM[2])}</span></header><div class="section-body">`;
      inSection=true;lettrinePlaced=false;continue;
    }

    const letM=l.match(LETTER_RE);
    if(letM&&letM[2].length>2){
      markBodyStart();
      flushPara();flushBullets();flushNumList();
      html+=`<h3 class="sub-head"><span class="sub-letter">${esc(letM[1])}</span>${esc(letM[2])}</h3>`;
      continue;
    }

    const numM=l.match(NUM_LIST_RE);
    if(numM&&numM[2].length<120){
      flushBullets();
      inNumList=true;numBuf.push(numM[2]);continue;
    }
    if(inNumList&&l.length<100&&!SECTION_RE.test(l)){numBuf.push(l);continue}
    if(inNumList)flushNumList();

    const bulM=l.match(BULLET_RE);
    const isAutoBullet = bulM || l.endsWith(';') || (bulletBuf.length > 0 && l.endsWith('.'));
    if(isAutoBullet && !SECTION_RE.test(l) && !LETTER_RE.test(l) && !RANG_RE.test(l)){
      flushNumList();
      const cleanL = l.replace(/^[•\-–]\s*/, '');
      bulletBuf.push(cleanL);
      continue;
    }
    // Bullet continuation: if we have bullets and line is not structural, append to last bullet
    if(bulletBuf.length){
      const isStruct=SECTION_RE.test(l)||LETTER_RE.test(l)||/^Situations?\s+de\s+départ/i.test(l)||/^Encadré\s+/i.test(l)||/^Tableau\s+/i.test(l)||/^Fig\.\s*\d/i.test(l)||RANG_RE.test(l)||/^\d{2,3}\s+/.test(l);
      if(!isStruct&&l.length<200){
        bulletBuf[bulletBuf.length-1]+=' '+l;continue;
      }
      flushBullets();
    }

    const rangM=l.match(RANG_RE);
    if(rangM&&!/Rubrique|Intitulé|Descriptif|Connaître|Modifications|Éléments physiopathologiques/.test(l)){
      const body=rangM[2];
      // If body starts with prose words, treat as paragraph not rang annotation
      const isProse=/^(Le |La |Les |L'|Il |Elle |Pour |C'est|Ainsi|On |En |Un |Une |Cette |Ce |Cela |De |Du |Des |Dans |Avec |Son |Sa |Ses |Sur |Par |Au |Aux |Tout |Tous |Bien |Mais |Or |Donc |Chez|Avec|Après|Avant|Depuis)/i.test(body);
      if(isProse){
        paraBuf.push(body);
        markBodyStart();
        continue;
      }
      if(body.length<100&&!/[.;:]$/.test(body)){
        flushPara();html+=`<div class="def-block"><span class="rang-badge ${rangM[1]==='A'?'rang-a':'rang-b'}">Rang ${rangM[1]}</span><span class="def-text">${esc(body)}</span></div>`;
        continue;
      }
      paraBuf.push(body);flushPara(rangM[1]);markBodyStart();continue;
    }

    if(!pastPreamble){
      if(isPreambleLine(l))continue;
      markBodyStart();
    }

    if(/^Critères de /i.test(l)){flushPara();html+=`<div class="callout callout-soft"><div class="callout-title">${esc(l)}</div><ul class="reader-list">`;
      let j=i+1;while(j<lines.length&&NUM_LIST_RE.test(lines[j])){const nm=lines[j].match(NUM_LIST_RE);html+=`<li>${esc(nm[2])}</li>`;j++}html+=`</ul></div>`;i=j-1;continue}

    if(/^(\d{1,3})$/.test(l))continue;
    if(/^diagnostic et thérapeutique/i.test(l))continue;
    if(/^\w{4,20}$/.test(l)&&!/^(Fig|Tableau|Encadré)/i.test(l))continue;
    if(l.length<15&&!/[.!?]/.test(l)&&!/^[A-Z]\./.test(l)&&!BULLET_RE.test(l)&&!SECTION_RE.test(l)&&!LETTER_RE.test(l))continue;
    // OCR garbage - catch specific patterns that leak through preamble
    if(/Bouchon\s*\)/.test(l))continue;
    if(/vieillissemnt|viellissement/.test(l))continue;
    if(/physiopathologiques\s+physiopathologiques/i.test(l))continue;
    if(/et sans incapacité/i.test(l)&&!(/espérance de vie/i.test(l)))continue;
    if(/\bgine\b/.test(l))continue;
    if(/physiopathologiques.*(gine|agents étiologiques)/i.test(l))continue;
    if(/anthropologiques\s+populationnel/i.test(l))continue;

    paraBuf.push(l);
  }
  flushPara();flushBullets();flushNumList();if(inCallout)flushCallout();if(inSit)html+=`</ul></div>`;closeSection();
  // R3 — Supprimer les sections sans contenu (en-tete de plan sans texte correspondant dans la BDD)
  html = html.replace(/<section class="manual-section">([\s\S]*?)<\/section>/g, (match, inner) => {
    const bodyIndex = inner.indexOf('<div class="section-body">');
    if (bodyIndex === -1) return '';
    const bodyHtml = inner.substring(bodyIndex + '<div class="section-body">'.length);
    const cleanBodyHtml = bodyHtml.replace(/<\/div>\s*$/, '');
    let text = cleanBodyHtml.replace(/<[^>]+>/g, '');
    text = text.replace(/&nbsp;/gi, ' ')
               .replace(/&lt;/gi, '<')
               .replace(/&gt;/gi, '>')
               .replace(/&amp;/gi, '&')
               .replace(/&[a-z0-9]+;/gi, '');
    const plainText = text.trim();
    if (plainText.length < 20) {
      return '';
    }
    return match;
  });

  // Now build the outline from the kept sections
  const keptSections = [];
  const secRegex = /<section class="manual-section"><header class="section-head"><span class="section-num">(.*?)<\/span><span class="section-title">(.*?)<\/span>/g;
  let match;
  while ((match = secRegex.exec(html)) !== null) {
    const num = match[1];
    const title = match[2];
    const key = num + '|' + title;
    if (first35Headings.has(key)) {
      keptSections.push({ num, title });
    }
  }

  if (keptSections.length >= 3) {
    const outlineHtml = `<details class="ch-outline" aria-label="Plan du chapitre"><summary>Plan du chapitre</summary><ul>${keptSections.slice(0, 8).map(s => `<li><span class="outline-num">${esc(s.num)}</span> ${esc(s.title)}</li>`).join('')}</ul></details>`;
    html = outlineHtml + html;
  }

  return html||'<div class="empty"><div class="empty-text">Aucun contenu structuré</div></div>';
}


const raw = "I. Intro\nII. Body\nIII. Conclusion\n" + Array(10).fill("Prose line.").join("\n") + "\nI. Intro\nThis is prose.";
console.log('--- RUNNING renderChapter ---');
const html = renderChapter(raw, "ch1");
console.log('HTML Output:\n', html);
