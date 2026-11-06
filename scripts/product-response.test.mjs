import test from 'node:test';import assert from 'node:assert/strict';
import {productDraft} from '../src/lib/shop-catalog.ts';
const product={id:17,name:'Bee Arena',mainName:'Arena Breakout',active:true,sortOrder:0,packages:[{id:71,name:'65 Bonds',costUsd:1,currency:'MMK',price:4500,listed:true,groupId:3,priceMode:'AUTO',discountPercent:0,active:true,sortOrder:0}]};
test('single-product object initializes the selected package draft',()=>{const draft=productDraft(product,0,17);assert.equal(draft.name,'Bee Arena');assert.equal(draft.groupId,3);assert.deepEqual(draft.packages.map(p=>p.id),[71]);});
test('previous single-product array initializes the same editor draft',()=>{assert.deepEqual(productDraft([product],0,17),productDraft(product,0,17));});
test('missing packages produce a readable data error instead of a TypeError',()=>{assert.throws(()=>productDraft({id:17,name:'Broken'},0,17),e=>e instanceof Error&&!(e instanceof TypeError)&&/product data/i.test(e.message));});
test('null and non-array packages are rejected before rendering',()=>{for(const raw of [null,{},[],{...product,packages:null},{...product,packages:{}}])assert.throws(()=>productDraft(raw,0,17),/product data/i);});
test('response for a different product or ambiguous array is rejected',()=>{assert.throws(()=>productDraft(product,0,99),/product data/i);assert.throws(()=>productDraft([product,product],0,17),/product data/i);});
test('malformed package rows and prices are rejected',()=>{for(const p of [null,{...product.packages[0],costUsd:undefined},{...product.packages[0],price:NaN},{...product.packages[0],currency:'USD'}])assert.throws(()=>productDraft({...product,packages:[p]},0,17),/product data/i);});
