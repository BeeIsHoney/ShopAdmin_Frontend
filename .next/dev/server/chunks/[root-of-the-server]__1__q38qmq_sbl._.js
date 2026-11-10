module.exports = [
(()=>{"use strict";return[
"[project]/src/app/api/session/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2d$otp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telegram-otp.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/server.ts [app-route] (ecmascript) <locals>");
;
;
;
const runtime = 'nodejs';
const dynamic = 'force-dynamic';
async function GET(req) {
    try {
        const code = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shopCode"])();
        if (!code) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Please sign in.', 401);
        const access = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["token"])(req.nextUrl.protocol === 'https:');
        if (!access) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Please sign in.', 401);
        const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["currentProfile"])(access, code);
        if (!profile) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clearTokens"])();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Please sign in with your shop owner account.', 401);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(profile, {
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    } catch  {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Shop Backend is unavailable. Please try again shortly.', 503, 'SHOP_BACKEND_UNAVAILABLE');
    }
}
async function POST(req) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["checkOrigin"])(req)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Invalid request origin.', 403);
    let body;
    try {
        body = await req.json();
    } catch  {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Enter a valid email and password.');
    }
    if (!body || typeof body !== 'object') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Email and password are required.');
    const { email, password } = body;
    if (typeof email !== 'string' || typeof password !== 'string' || !email.trim() || !password || email.length > 254 || password.length > 72) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Email and password are required.');
    try {
        // The Shop Backend validates shop membership before issuing a usable login.
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["upstream"])('auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.trim(),
                password
            })
        });
        const result = await r.json().catch(()=>({
                message: 'Unable to sign in.'
            }));
        if (!r.ok) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])(result.message || 'Unable to sign in.', r.status, result.code);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2d$otp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isTelegramChallenge"])(result)) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clearTokens"])();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
                headers: {
                    'Cache-Control': 'no-store'
                }
            });
        }
        if (typeof result.accessToken !== 'string' || typeof result.refreshToken !== 'string' || !Number.isFinite(Date.parse(result.accessExpiresAt)) || !Number.isFinite(Date.parse(result.refreshExpiresAt))) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Shop Backend returned an invalid login response.', 502);
        const code = typeof result.shopCode === 'string' ? result.shopCode : '';
        if (!/^[a-z0-9-]{3,60}$/.test(code)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Shop Backend did not resolve an assigned shop. Update and restart Shop Backend.', 502);
        const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["currentProfile"])(result.accessToken, code);
        if (!profile) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('This owner cannot access the assigned shop.', 403);
        const secure = req.nextUrl.protocol === 'https:';
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["saveTokens"])(result, secure);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["saveShopCode"])(code, result.refreshExpiresAt, secure);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(profile, {
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    } catch  {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Shop Backend is unavailable. Please try again shortly.', 503, 'SHOP_BACKEND_UNAVAILABLE');
    }
}
async function DELETE(req) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["checkOrigin"])(req)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonError"])('Invalid request origin.', 403);
    try {
        const access = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["token"])(req.nextUrl.protocol === 'https:');
        if (access) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["upstream"])('auth/logout', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${access}`
            }
        });
    } catch  {}
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clearTokens"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true
    }, {
        headers: {
            'Cache-Control': 'no-store'
        }
    });
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
"[project]/src/lib/telegram-otp.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTelegramChallenge",
    ()=>isTelegramChallenge
]);
function isTelegramChallenge(value) {
    if (!value || typeof value !== 'object') return false;
    const v = value;
    return v.status === 'OTP_REQUIRED' && typeof v.challengeId === 'string' && /^[a-f0-9-]{36}$/.test(v.challengeId) && typeof v.expiresAt === 'string' && Number.isFinite(Date.parse(v.expiresAt)) && typeof v.resendAvailableAt === 'string' && Number.isFinite(Date.parse(v.resendAvailableAt)) && typeof v.deliveryBot === 'string' && v.deliveryBot.length > 0 && v.deliveryBot.length < 81;
}
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1__q38qmq_sbl._.js.map