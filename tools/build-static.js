/* Keep classic-script URLs intact: Vite cannot discover the sequential loader. */
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const out=path.join(root,'dist');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
const shell=vm.runInNewContext(sw.slice(0,sw.indexOf('const coreURLs'))+';CORE');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const scripts=[...html.matchAll(/src: '([^']+)'/g)].map(match=>match[1].split('?')[0]);
const files=new Set([...shell.filter(file=>file!=='./').map(file=>file.replace(/^\.\//,'')),...scripts,'sw.js']);
for(const file of files) if(!fs.existsSync(path.join(root,file))) throw Error(`Required runtime asset missing: ${file}`);
// Only remove the fixed build output belonging to this project.
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});
for(const file of files){
  const target=path.join(out,file);
  fs.mkdirSync(path.dirname(target),{recursive:true});
  fs.copyFileSync(path.join(root,file),target);
}
for(const directory of ['images','audio','assets','icons']){
  const source=path.join(root,directory);
  if(fs.existsSync(source))fs.cpSync(source,path.join(out,directory),{recursive:true});
  else console.warn(`Media directory absent: ${directory}. Use a full checkout for deployment.`);
}
console.log(`Static build complete: ${files.size} runtime files, original URLs preserved.`);
