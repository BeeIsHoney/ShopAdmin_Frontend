module.exports = [
(()=>{"use strict";return[
"[project]/src/app/api/connection/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/server.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$compatibility$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/service-compatibility.ts [app-route] (ecmascript)");
;
;
;
const runtime = 'nodejs';
const dynamic = 'force-dynamic';
async function GET() {
    const reply = (body)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(body, {
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    try {
        const health = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["upstream"])('health'), body = await health.json().catch(()=>({}));
        const problem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$compatibility$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspectShopHealth"])(health.status, body);
        if (problem) return reply(problem);
        const main = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["upstream"])('health/main'), connection = await main.json().catch(()=>({}));
        return reply((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$compatibility$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspectMainConnection"])(main.status, connection, body.version));
    } catch  {
        return reply({
            state: 'offline',
            message: 'Shop Backend is unavailable. Start Shop Backend on port 8081 and check the connection again.'
        });
    }
}
}),
"[project]/src/lib/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BACKEND_URL",
    ()=>BACKEND_URL,
    "MAIN_URL",
    ()=>MAIN_URL,
    "PANEL",
    ()=>PANEL
]);
// Set these server-side URLs in .env.local or in the hosting environment.
// Local development still works without an environment file.
// The admin site is shared by every shop created by Head Admin.
// The backend resolves the shop from the authenticated owner email; no shop code is entered at sign-in.
function backendUrl(value, fallback, name) {
    const configured = value?.trim() || fallback;
    try {
        const url = new URL(configured);
        if (![
            'http:',
            'https:'
        ].includes(url.protocol) || !url.hostname || url.username || url.password || url.search || url.hash) throw new Error();
        return url.toString().replace(/\/+$/, '');
    } catch  {
        throw new Error(`${name} must be a valid backend base URL without credentials, query parameters or a fragment.`);
    }
}
const BACKEND_URL = backendUrl(process.env.SHOP_BACKEND_URL, 'http://127.0.0.1:8081', 'SHOP_BACKEND_URL');
const MAIN_URL = backendUrl(process.env.MAIN_BACKEND_URL, 'http://127.0.0.1:8080', 'MAIN_BACKEND_URL');
const PANEL = {
    head: false,
    role: 'ADMIN_USER',
    title: 'Shop Admin',
    port: 3001
};
}),
"[project]/src/lib/request-origin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Next dev may put its bind address (0.0.0.0) in nextUrl. The browser uses
// the actual request Host, such as the PC's LAN address, for its Origin.
__turbopack_context__.s([
    "proxyRequestOrigin",
    ()=>proxyRequestOrigin,
    "sameRequestOrigin",
    ()=>sameRequestOrigin
]);
function sameRequestOrigin(origin, requestOrigin, host) {
    if (!origin) return true;
    try {
        const request = new URL(requestOrigin), actualHost = host ?? request.host;
        if (!actualHost || /[\s/\\?#@,]/.test(actualHost) || ![
            'http:',
            'https:'
        ].includes(request.protocol)) return false;
        const expected = new URL(`${request.protocol}//${actualHost}`), supplied = new URL(origin);
        return supplied.origin === origin && supplied.origin === expected.origin;
    } catch  {
        return false;
    }
}
function proxyRequestOrigin(requestOrigin, host, forwardedProto, forwardedHost) {
    const protocol = forwardedProto?.split(',')[0]?.trim();
    const publicHost = forwardedHost?.split(',')[0]?.trim() || host;
    return {
        host: publicHost,
        origin: (protocol === 'https' || protocol === 'http') && publicHost ? `${protocol}://${publicHost}` : requestOrigin
    };
}
}),
"[project]/src/lib/server.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkOrigin",
    ()=>checkOrigin,
    "clearTokens",
    ()=>clearTokens,
    "currentProfile",
    ()=>currentProfile,
    "jsonError",
    ()=>jsonError,
    "mainUpstream",
    ()=>mainUpstream,
    "saveShopCode",
    ()=>saveShopCode,
    "saveTokens",
    ()=>saveTokens,
    "shopCode",
    ()=>shopCode,
    "token",
    ()=>token,
    "upstream",
    ()=>upstream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$request$2d$origin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/request-origin.ts [app-route] (ecmascript)");
;
;
;
;
;
;
// A single universal admin session per browser. The chosen shop is stored only
// after the backend confirms that this owner is assigned to it.
const prefix = 'shop_admin_universal_';
const validShopCode = (code)=>typeof code === 'string' && /^[a-z0-9-]{3,60}$/.test(code);
const refreshes = new Map();
const jsonError = (message, status = 400, code)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        message,
        code
    }, {
        status,
        headers: {
            'Cache-Control': 'no-store'
        }
    });
const checkOrigin = (req)=>{
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$request$2d$origin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["proxyRequestOrigin"])(req.nextUrl.origin, req.headers.get('host'), req.headers.get('x-forwarded-proto'), req.headers.get('x-forwarded-host'));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$request$2d$origin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sameRequestOrigin"])(req.headers.get('origin'), target.origin, target.host);
};
async function upstream(path, init = {}) {
    return fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BACKEND_URL"]}/api/${path}`, {
        ...init,
        cache: 'no-store',
        redirect: 'error',
        signal: init.signal ?? AbortSignal.timeout(45000)
    });
}
async function mainUpstream(path, init = {}) {
    return fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAIN_URL"]}/api/${path}`, {
        ...init,
        cache: 'no-store',
        redirect: 'error',
        signal: init.signal ?? AbortSignal.timeout(45000)
    });
}
async function saveTokens(pair, secure) {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    for (const [name, value, expiry] of [
        [
            'access',
            pair.accessToken,
            pair.accessExpiresAt
        ],
        [
            'refresh',
            pair.refreshToken,
            pair.refreshExpiresAt
        ]
    ]){
        jar.set(prefix + name, value, {
            httpOnly: true,
            sameSite: 'lax',
            secure,
            path: '/',
            maxAge: Math.max(0, Math.floor((new Date(expiry).getTime() - Date.now()) / 1000))
        });
    }
}
async function shopCode() {
    const code = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).get(prefix + 'shop')?.value;
    return validShopCode(code) ? code : null;
}
async function saveShopCode(code, expiresAt, secure) {
    if (!validShopCode(code)) throw Error('Invalid shop code.');
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).set(prefix + 'shop', code, {
        httpOnly: true,
        sameSite: 'lax',
        secure,
        path: '/',
        maxAge: Math.max(0, Math.floor((new Date(expiresAt).getTime() - Date.now()) / 1000))
    });
}
async function clearTokens() {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    for (const k of [
        'access',
        'refresh',
        'shop'
    ])jar.delete(prefix + k);
}
async function token(secure) {
    if (!await shopCode()) return null;
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])(), access = jar.get(prefix + 'access')?.value;
    if (access) {
        try {
            const p = JSON.parse(Buffer.from(access.split('.')[1], 'base64url').toString());
            if (typeof p.exp === 'number' && Number.isFinite(p.exp) && p.exp * 1000 > Date.now() + 60000) return access;
        } catch  {}
    }
    const refresh = jar.get(prefix + 'refresh')?.value;
    if (!refresh) return null;
    const key = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])('sha256').update(refresh).digest('hex'), now = Date.now();
    for (const [k, v] of refreshes)if (v.until < now) refreshes.delete(k);
    let entry = refreshes.get(key);
    if (!entry) {
        const promise = (async ()=>{
            const r = await upstream('auth/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    refreshToken: refresh
                })
            });
            if (r.status >= 500) throw Error('Shop Backend is unavailable.');
            return r.ok ? await r.json() : null;
        })();
        entry = {
            promise,
            until: now + 30000
        };
        refreshes.set(key, entry);
    }
    const pair = await entry.promise;
    if (!pair) {
        await clearTokens();
        return null;
    }
    await saveTokens(pair, secure);
    return pair.accessToken;
}
async function currentProfile(access, code) {
    if (!validShopCode(code)) return null;
    const headers = {
        Authorization: `Bearer ${access}`
    };
    const [owner, response] = await Promise.all([
        upstream('auth/me', {
            headers
        }),
        upstream(`shops/${code}/profile`, {
            headers
        })
    ]);
    if (owner.status >= 500 || response.status >= 500) throw Error('Shop Backend is unavailable.');
    if (!owner.ok || !response.ok) return null;
    const p = await owner.json(), s = await response.json();
    if (p.role !== 'ADMIN_USER' || !p.enabled || s.ownerId !== p.id || s.shopCode !== code || s.enabled === false) return null;
    return {
        ...p,
        balance: s.balance,
        shop: {
            id: s.shopId,
            ownerId: s.ownerId,
            name: s.shopName,
            code: s.shopCode,
            enabled: true,
            subscription: s.subscription
        }
    };
}
;
}),
"[project]/src/lib/service-compatibility.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "catalogUpdateMessage",
    ()=>catalogUpdateMessage,
    "inspectMainConnection",
    ()=>inspectMainConnection,
    "inspectShopHealth",
    ()=>inspectShopHealth,
    "missingCatalogRoute",
    ()=>missingCatalogRoute
]);
function inspectShopHealth(status, body) {
    if (status !== 200) return {
        state: 'offline',
        message: 'Start Shop Backend on port 8081, then check the connection again.'
    };
    const version = body.version || 'unknown', parts = /^(\d+)\.(\d+)\.(\d+)/.exec(version);
    const supported = body.service === 'ShopServiceBackend' && (body.features?.shopManagement || parts && (Number(parts[1]) > 1 || Number(parts[1]) === 1 && Number(parts[2]) >= 4));
    if (!supported) return {
        state: 'update_required',
        shopVersion: version,
        message: `Shop Backend ${version} does not support shop catalog management. Stop the old 8081 process and clean-build Shop Backend v1.4.0. Keep the existing API Key + Secret.`
    };
    return null;
}
function inspectMainConnection(status, body, shopVersion) {
    if (status === 200 && body.connected === true) return {
        state: 'connected',
        shopVersion,
        mainApiVersion: body.mainApiVersion,
        message: 'Main and Shop Backends are connected. Groups and shop products are available.'
    };
    if (body.code === 'MAIN_NOT_CONFIGURED') return {
        state: 'setup_required',
        shopVersion,
        message: 'Generate a Key + Secret in Main Admin, add both to Shop Backend, then restart it.'
    };
    if (status === 404 || body.code === 'MAIN_UPDATE_REQUIRED') return {
        state: 'update_required',
        shopVersion,
        message: 'Main Backend is missing shop catalog management. Stop the old 8080 process, clean-build Main Backend v1.5.0, then restart Shop Backend.'
    };
    return {
        state: 'connection_error',
        shopVersion,
        message: body.message || 'Check that Main Backend is running and its service API access is active.'
    };
}
function missingCatalogRoute(path, status, body) {
    return status === 404 && [
        'groups',
        'products'
    ].includes(path) && body.code !== 'SHOP_NOT_FOUND' && !/shop.*not found|owner|not owned/i.test(body.message || '');
}
const catalogUpdateMessage = 'Shop catalog endpoints are missing. Stop old services, clean-build Main Backend v1.5.0 and Shop Backend v1.4.0, then restart both. Existing accounts and API credentials remain valid.';
}),
]})(),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0bfp6lvsds09v._.js.map