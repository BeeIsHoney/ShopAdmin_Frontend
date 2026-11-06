import test from 'node:test';import assert from 'node:assert/strict';
import {permitted} from '../src/lib/policy.ts';
test('owner management BFF does not permit customer checkout',()=>{assert.equal(permitted('game-orders','POST'),false);assert.equal(permitted('store-orders','POST'),false);assert.equal(permitted('products/1','PUT'),true);});
