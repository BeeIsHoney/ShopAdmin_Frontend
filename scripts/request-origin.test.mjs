import test from 'node:test';import assert from 'node:assert/strict';
import {sameRequestOrigin} from '../src/lib/request-origin.ts';
test('phone LAN origin matches the actual request Host rather than the bind address',()=>{assert.equal(sameRequestOrigin('http://192.168.1.50:3001','http://0.0.0.0:3001','192.168.1.50:3001'),true);});
test('localhost origin still works',()=>{assert.equal(sameRequestOrigin('http://localhost:3001','http://localhost:3001','localhost:3001'),true);});
test('another website is rejected',()=>{assert.equal(sameRequestOrigin('https://other.test','http://0.0.0.0:3001','192.168.1.50:3001'),false);});
test('origin scheme and port must match',()=>{assert.equal(sameRequestOrigin('https://192.168.1.50:3001','http://0.0.0.0:3001','192.168.1.50:3001'),false);assert.equal(sameRequestOrigin('http://192.168.1.50:3000','http://0.0.0.0:3001','192.168.1.50:3001'),false);});
test('malformed origins and host injection are rejected',()=>{for(const origin of ['null','https://','http://192.168.1.50:3001/path'])assert.equal(sameRequestOrigin(origin,'http://0.0.0.0:3001','192.168.1.50:3001'),false);for(const host of ['user@192.168.1.50:3001','192.168.1.50:3001/extra','192.168.1.50:3001,other'])assert.equal(sameRequestOrigin('http://192.168.1.50:3001','http://0.0.0.0:3001',host),false);});
test('IPv6 and default ports compare as URL origins',()=>{assert.equal(sameRequestOrigin('http://[::1]:3001','http://0.0.0.0:3001','[::1]:3001'),true);assert.equal(sameRequestOrigin('https://shop.test','https://0.0.0.0','shop.test:443'),true);});
test('requests with no Origin retain existing server-client behavior',()=>{assert.equal(sameRequestOrigin(null,'http://localhost:3001','localhost:3001'),true);});
