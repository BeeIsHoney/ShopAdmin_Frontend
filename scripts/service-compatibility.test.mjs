import test from 'node:test';import assert from 'node:assert/strict';
import {inspectShopHealth,inspectMainConnection,missingCatalogRoute} from '../src/lib/service-compatibility.ts';
test('old Shop Backend is identified before group requests are made',()=>{
 const result=inspectShopHealth(200,{service:'ShopServiceBackend',version:'1.1.0'});assert.equal(result.state,'update_required');assert.match(result.message,/old 8081/);
 assert.equal(inspectShopHealth(200,{service:'ShopServiceBackend'}).state,'update_required');
 assert.equal(inspectShopHealth(200,{service:'MainServiceBackend',version:'1.4.0'}).state,'update_required');
});
test('working group-capable backends remain compatible',()=>{
 for(const version of ['1.4.0','2.0.0'])assert.equal(inspectShopHealth(200,{service:'ShopServiceBackend',version}),null);
 assert.equal(inspectShopHealth(200,{service:'ShopServiceBackend',features:{shopManagement:true}}),null);
});
test('missing Main catalog endpoints request Main update',()=>{
 assert.equal(inspectMainConnection(404,{}).state,'update_required');
 assert.equal(inspectMainConnection(503,{code:'MAIN_UPDATE_REQUIRED'}).state,'update_required');
 assert.equal(inspectMainConnection(503,{code:'MAIN_NOT_CONFIGURED'}).state,'setup_required');
 assert.equal(inspectMainConnection(403,{message:'API access is inactive'}).message,'API access is inactive');
});
test('successful connection retains running versions and requires connected true',()=>{
 const result=inspectMainConnection(200,{connected:true,mainApiVersion:'shop-listings-v1.0'},'1.3.0');assert.equal(result.state,'connected');assert.equal(result.shopVersion,'1.3.0');
 assert.equal(inspectMainConnection(200,{}).state,'connection_error');
});
test('missing collection routes are distinct from tenant and entity 404s',()=>{
 assert.ok(missingCatalogRoute('groups',404,{message:'Endpoint not found'}));assert.ok(missingCatalogRoute('products',404,{}));
 assert.equal(missingCatalogRoute('groups',404,{code:'SHOP_NOT_FOUND',message:'Shop not found'}),false);
 assert.equal(missingCatalogRoute('products',404,{message:'Shop not found'}),false);
 assert.equal(missingCatalogRoute('catalog/games/9',404,{}),false);assert.equal(missingCatalogRoute('groups',401,{}),false);
});
