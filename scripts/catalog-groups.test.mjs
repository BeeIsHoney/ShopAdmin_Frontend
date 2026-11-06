import test from 'node:test';import assert from 'node:assert/strict';
import {requestedGroup,groupTotals} from '../src/lib/catalog-groups.ts';
test('group links preselect a Main group without accepting arbitrary values',()=>{
 assert.equal(requestedGroup('group=12'),'12');assert.equal(requestedGroup('group=2&shopCode=other'),'2');
 for(const q of ['group=0','group=-1','group=../groups','group=NaN','shopCode=other'])assert.equal(requestedGroup(q),'');
});
test('empty Main groups remain visible with zero selected games/packages',()=>{assert.deepEqual(groupTotals([],1),{games:0,packages:0});});
test('group counts use package assignments without duplicating shared games',()=>{
 const products=[{id:7,packages:[{id:1,groupId:1},{id:2,groupId:1},{id:3,groupId:2}]},{id:8,packages:[{id:4,groupId:2}]}];
 assert.deepEqual(groupTotals(products,1),{games:1,packages:2});assert.deepEqual(groupTotals(products,2),{games:2,packages:2});
});
