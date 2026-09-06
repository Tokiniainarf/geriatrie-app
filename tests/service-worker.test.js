const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const source=fs.readFileSync(path.join(__dirname,'../sw.js'),'utf8');
function setup({failInstall=false}={}){
  const handlers={},deleted=[];let skipped=0;const requested=[];
  const cache={addAll:async()=>{if(failInstall)throw Error('offline');},match:async key=>{requested.push(key);return new Response('cached');}};
  const context={URL,Request,Response,Set,caches:{open:async()=>cache,keys:async()=>['geriatrie-v280','geriatrie-v283','other-app-v1'],delete:async key=>deleted.push(key)},
    self:{registration:{scope:'https://example.test/geriatrie/'},location:{origin:'https://example.test'},addEventListener:(name,fn)=>handlers[name]=fn,skipWaiting:()=>{skipped++;},clients:{claim:async()=>{}}},
    fetch:async()=>{throw Error('offline');}};
  context.Request=class extends Request{constructor(url,options){super(new URL(url,context.self.registration.scope),options);}};
  vm.runInNewContext(source,context);
  return {handlers,deleted,requested,get skipped(){return skipped;}};
}
test('failed shell download rejects installation and does not activate',async()=>{
  const env=setup({failInstall:true});let pending;
  env.handlers.install({waitUntil:p=>pending=p});
  await assert.rejects(pending,/offline/);assert.equal(env.skipped,0);
});
test('activation preserves caches belonging to other applications',async()=>{
  const env=setup();let pending;env.handlers.activate({waitUntil:p=>pending=p});await pending;
  assert.deepEqual(env.deleted,['geriatrie-v280']);
});
test('versioned runtime scripts resolve offline against canonical precache keys',async()=>{
  const env=setup();let response;
  env.handlers.fetch({request:new Request('https://example.test/geriatrie/app.js?v=279'),respondWith:p=>response=p});
  assert.equal(await (await response).text(),'cached');
  assert.deepEqual(env.requested,['https://example.test/geriatrie/app.js']);
});
test('external resources and large media are not cached by the shell',()=>{
  const env=setup();let intercepted=false;
  for(const url of ['https://other.test/a.js','https://example.test/geriatrie/audio/a.mp3'])
    env.handlers.fetch({request:new Request(url),respondWith:()=>intercepted=true});
  assert.equal(intercepted,false);
});
test('all dynamically loaded scripts are present in the production output',()=>{
  const root=path.join(__dirname,'..');
  const html=fs.readFileSync(path.join(root,'dist/index.html'),'utf8');
  const scripts=[...html.matchAll(/src: '([^']+)'/g)].map(m=>m[1].split('?')[0]);
  assert.ok(scripts.length>=20);
  for(const file of [...scripts,'sw.js','workspace.css']) assert.ok(fs.existsSync(path.join(root,'dist',file)),file);
});
