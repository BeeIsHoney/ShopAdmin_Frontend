import {createHash} from 'node:crypto';
import {readFile,readdir,stat,writeFile} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
process.chdir(root);
const hash=createHash('sha256');
hash.update(`node:${process.versions.node.split('.')[0]}`);
async function include(name){
 let info;try{info=await stat(name);}catch{return;}
 if(info.isDirectory()){
  for(const entry of (await readdir(name)).sort())await include(path.join(name,entry));
 }else{hash.update(name);hash.update(await readFile(name));}
}
for(const item of ['src','public','scripts','package.json','package-lock.json','tsconfig.json','next.config.ts','postcss.config.mjs','postcss.config.js','.env','.env.local','.env.production','.env.production.local'])await include(item);
// Build-time public settings must invalidate the saved production build too.
for(const key of Object.keys(process.env).filter(k=>k.startsWith('NEXT_PUBLIC_')).sort())hash.update(key+'='+process.env[key]);
const fingerprint=hash.digest('hex'),marker=path.join('.next','tornado-source.sha256');
const next=path.join(root,'node_modules','next','dist','bin','next');
function run(args){return new Promise((resolve,reject)=>{
 const child=spawn(process.execPath,[next,...args],{cwd:root,stdio:'inherit',env:process.env});
 child.on('error',reject);child.on('exit',(code,signal)=>code===0?resolve():reject(new Error(`Next stopped (${signal||code})`)));
});}
try{
 let saved='';try{saved=(await readFile(marker,'utf8')).trim();await stat('.next/BUILD_ID');}catch{saved='';}
 if(saved!==fingerprint){console.log('Preparing the production dashboard (first run or source changed)...');await run(['build','--webpack']);await writeFile(marker,fingerprint);}
 console.log('Starting Tornado Shop Admin on http://localhost:3001');
 await run(['start','-p',process.env.PORT||'3001','-H','0.0.0.0']);
}catch(error){console.error(error.message);process.exitCode=1;}
