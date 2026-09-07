const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.join(__dirname,'..');
function load(){const context={console,window:{addEventListener(){}},document:{addEventListener(){},getElementById(){return null},querySelectorAll(){return []}},navigator:{},localStorage:{getItem(){return null},setItem(){}},setTimeout,clearTimeout};vm.createContext(context);for(const name of ['data-bundle.js','brainfeed.js','podcasts-data.js'])vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),context);return context;}
const ctx=load();
const result=vm.runInContext('BrainFeed.audit()',ctx);
const cards=result.pools.allFlash;
const card=id=>cards.find(c=>String(c.id)===String(id));
test('AOD card no longer transfers apixaban criteria to dabigatran',()=>{assert.match(card(3895).answer,/ne pas lui transposer/);});
test('teriparatide and lecanemab cards use verified European references',()=>{assert.match(card(3977).answer,/24 mois/);assert.match(card(9526).answer,/3e, 5e, 7e et 14e/);assert.match(card(9522).answer,/homozygotes sont exclus/);});
test('sarcopenia and consent preserve essential qualifying criteria',()=>{assert.match(card(3667).answer,/force musculaire et/);assert.match(card(3932).answer,/peut exprimer sa volonté/);assert.match(card(3914).answer,/3133/);});
test('all editorial feed quizzes have one correct answer and an explanation',()=>{for(const c of result.pools.quizFlash){assert.equal(c.options.filter(o=>o.correct).length,1,c.id);assert.ok(c.explanation,c.id);assert.equal(new Set(c.options.map(o=>o.text)).size,c.options.length,c.id);}});
test('corrected podcast summaries disclose unchanged recordings',()=>{const pods=vm.runInContext('PODCASTS_DATA',ctx);for(const id of ['pod-01','pod-08','pod-12','pod-16','pod-22','pod-26'])assert.match(pods.find(p=>p.id===id).reviewNote,/pas été réenregistrée/);});
