const fs = require('fs');
const vm = require('vm');

const sandbox = {
  localStorage: { getItem: () => null, setItem: () => {} },
  document: {
    createElement: (t) => ({textContent:'', innerHTML:''}),
    querySelectorAll: () => [],
    querySelector: () => null,
    getElementById: () => null,
    documentElement: { setAttribute: () => {} },
    addEventListener: () => {}
  },
  window: { addEventListener: () => {}, scrollTo: () => {}, scrollY: 0 },
  navigator: { serviceWorker: { register: () => ({catch:()=>{}}) } },
  setTimeout, setInterval, clearInterval, clearTimeout,
  console, FIGURES: {}, alert: () => {}, confirm: () => false,
  requestAnimationFrame: (cb) => cb()
};

vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('data.js', 'utf8'), sandbox);

const raw = Array(9).fill("123 Preamble filler line.").join("\n") + "\nI. Keep Section\n12345678901234567890\nII. Full Section\nThis is some long body text with more than 20 characters.";

const appSrc = fs.readFileSync('app.js', 'utf8');

// Replace the R3 prune replacement logic to show logs
const modifiedApp = appSrc
  .replace('function renderChapter(raw,chId){', `function renderChapter(raw,chId){
    console.log("=== ENTER renderChapter ===");`)
  .replace('for(let i=0;i<lines.length;i++){', `console.log("lines:", lines);
    for(let i=0;i<lines.length;i++){`)
  .replace('let l=lines[i];', `let l=lines[i];
      console.log("LOOP i:", i, "l:", JSON.stringify(l), "pastPreamble:", pastPreamble, "inSection:", inSection);`)
  .replace('if (hasSibling) {\n          html+=`<div class="toc-hidden" style="display:none">${replaceCitations(esc(l))}</div>`;\n          continue;\n        }', `if (hasSibling) {
          console.log("  hasSibling is TRUE! Pushing to toc-hidden and continuing");
          html+='<div class="toc-hidden" style="display:none">' + replaceCitations(esc(l)) + '</div>';
          continue;
        }`)
  .replace('const secM=l.match(SECTION_RE);', `const secM=l.match(SECTION_RE);
      if(secM) console.log("  secM matched:", secM[1], secM[2]);`)
  .replace('html = html.replace(/<section class="manual-section">([\\s\\S]*?)<\\/section>/g, (match, inner) => {', `console.log("HTML before R3:", html);
    html = html.replace(/<section class="manual-section">([\\s\\S]*?)<\\/section>/g, (match, inner) => {
      console.log("  R3 examining:", JSON.stringify(inner.substring(0, 80)));`)
  .replace("if (plainText.length < 20) {\n      return '';\n    }", `console.log("    plainText.length:", plainText.length, "content:", JSON.stringify(plainText));
      if (plainText.length < 20) {
        console.log("    -> DELETED because length < 20!");
        return '';
      } else {
        console.log("    -> KEPT!");
      }`)
  .replace("return html||'<div class=\"empty\"><div class=\"empty-text\">Aucun contenu structuré</div></div>';", `console.log("Final HTML returning:", html);
    return html||'<div class="empty"><div class="empty-text">Aucun contenu structuré</div></div>';`);

vm.runInContext(modifiedApp, sandbox);
vm.runInContext(`renderChapter(${JSON.stringify(raw)}, "ch1")`, sandbox);
