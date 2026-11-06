import test from 'node:test';
import assert from 'node:assert/strict';
import {permitted,validQuery} from '../src/lib/policy.ts';
test('only enumerated shop reads and writes are allowed',()=>{for(const p of ['catalog/games','catalog/games/23','orders','orders/by-external/bee-123','transactions','balance'])assert.ok(permitted(p,'GET'));for(const p of ['game-orders','store-orders'])assert.equal(permitted(p,'POST'),false);});
test('admin, cross-shop and traversal proxy paths are rejected',()=>{for(const p of ['head/service-clients','admin/store-products','shops/other/orders','catalog/games/../orders','orders/2/refund','auth/me','https://example.test','orders/0','orders/by-external/a/b'])for(const method of ['GET','POST'])assert.equal(permitted(p,method),false,p);assert.equal(permitted('catalog/games','POST'),false);assert.equal(permitted('orders/1','DELETE'),false);});
test('queries cannot override tenant or authentication headers',()=>{for(const q of ['ownerId=1','shopId=2','size=101','page=-1','providerServerId=abc','size=0','apiKey=secret'])assert.equal(validQuery(new URLSearchParams(q)),false,q);assert.ok(validQuery(new URLSearchParams('page=0&size=100&providerServerId=srv_2')));});

test('fixed-shop panel cannot list, create or switch shops',()=>{for(const p of ['shops','shops/switch','register'])for(const m of ['GET','POST'])assert.equal(permitted(p,m),false);});
test('owner may select Main packages and remove only a fixed-shop listing',()=>{
 assert.equal(permitted('products','GET'),true);assert.equal(permitted('groups','GET'),true);assert.equal(permitted('groups','POST'),false);assert.equal(permitted('groups/1','DELETE'),false);assert.equal(permitted('listings','POST'),true);assert.equal(permitted('listings/12','DELETE'),true);
 for(const p of ['listings/0','listings/../12','shops/other/listings/12','catalog/games/12'])assert.equal(permitted(p,'DELETE'),false);
});

test('management paths are scoped and purchasing is unavailable in the owner BFF',()=>{for(const p of ['pricing','products/1'])assert.equal(permitted(p,'PUT'),true);for(const p of ['images','packages/bulk'])assert.equal(permitted(p,'POST'),true);assert.equal(permitted('products/1','DELETE'),true);for(const p of ['pricing/1','products/0','shops/other/products/1','groups/1'])assert.equal(permitted(p,'PUT'),false);});
