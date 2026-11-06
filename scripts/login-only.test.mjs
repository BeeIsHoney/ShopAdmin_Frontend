import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import ts from 'typescript';
import nextConfig from '../next.config.ts';
const root=fileURLToPath(new URL('../src/components/',import.meta.url));
function walk(node,fn){fn(node);ts.forEachChild(node,c=>walk(c,fn));}
function parse(file){return ts.createSourceFile(file,readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);}
test('BeeShop auth UI has email/password inputs only',()=>{
 const tree=parse(path.join(root,'panel.tsx')),names=[];
 walk(tree,node=>{if((ts.isJsxSelfClosingElement(node)||ts.isJsxOpeningElement(node))&&node.tagName.getText(tree)==='input')for(const a of node.attributes.properties)if(ts.isJsxAttribute(a)&&a.name.getText(tree)==='name'&&a.initializer&&ts.isStringLiteral(a.initializer))names.push(a.initializer.text);});
 assert.deepEqual(names.sort(),['email','password']);
});
test('shop creation and sign-up URLs redirect before rendering the UI',async()=>{
 const routes=await nextConfig.redirects();
 for(const prefix of ['register','signup','create-shop','shops','auth/register']){
  const rule=routes.find(r=>r.source===`/${prefix}/:path*`);
  assert.ok(rule,prefix);assert.equal(rule.destination,'/login');assert.equal(rule.permanent,false);
 }
});
test('BeeShop components have no sign-up or shop-creation links',()=>{
 for(const name of readdirSync(root).filter(n=>n.endsWith('.tsx'))){
  const tree=parse(path.join(root,name));
  walk(tree,node=>{if(ts.isJsxAttribute(node)&&node.name.getText(tree)==='href'&&node.initializer&&ts.isStringLiteral(node.initializer))assert.doesNotMatch(node.initializer.text,/^\/(?:register|signup|create-shop|shops)(?:\/|$)/,name);});
 }
});
