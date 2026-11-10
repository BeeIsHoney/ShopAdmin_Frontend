(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/finance-check.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FinanceCheck",
    ()=>FinanceCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$customer$2d$commerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/customer-commerce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$OrderTopNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/components/OrderTopNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$OrderFilterDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$order$2d$list$2f$components$2f$OrderListCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$recharge$2d$list$2f$components$2f$RechargeListCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$ReviewPaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/services/financePanelApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/dateRange.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/currency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$hooks$2f$financeNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/hooks/financeNavigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/services/usersApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$users$2f$components$2f$UserStatusConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const width = 'w-full max-w-[560px] md:max-w-[760px] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1180px]';
const glass = 'border border-white/10 bg-black/40 rounded-lg backdrop-blur-md shadow-lg';
function FinanceCheck({ mode }) {
    _s();
    const { profile, cache, invalidate, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    const recharge = mode === 'recharge';
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$hooks$2f$financeNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const [statusUser, setStatusUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10), [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [showSearch, setShowSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [showFilter, setShowFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: 'all',
        startDate: '',
        endDate: ''
    }), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [dialogMode, setDialogMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('view'), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [, tick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinanceCheck.useEffect": ()=>{
            const t = setTimeout({
                "FinanceCheck.useEffect.t": ()=>{
                    setSearch(query);
                    setPage(0);
                }
            }["FinanceCheck.useEffect.t"], 350);
            return ({
                "FinanceCheck.useEffect": ()=>clearTimeout(t)
            })["FinanceCheck.useEffect"];
        }
    }["FinanceCheck.useEffect"], [
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinanceCheck.useEffect": ()=>{
            const t = setInterval({
                "FinanceCheck.useEffect.t": ()=>tick({
                        "FinanceCheck.useEffect.t": (v)=>v + 1
                    }["FinanceCheck.useEffect.t"])
            }["FinanceCheck.useEffect.t"], 1000);
            return ({
                "FinanceCheck.useEffect": ()=>clearInterval(t)
            })["FinanceCheck.useEffect"];
        }
    }["FinanceCheck.useEffect"], []);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["financeQuery"])({
        size,
        cursor: `page:${page}`,
        search,
        status: filters.status,
        startDate: filters.quickRange ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toIsoDate"])(filters.startDate) : undefined,
        endDate: filters.quickRange ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toIsoDate"])(filters.endDate) : undefined
    }, recharge).toString();
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])(`finance-check:${mode}:${params}`, {
        "FinanceCheck.useData[result]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`${recharge ? 'recharges' : 'customer-orders'}?${params}`)
    }["FinanceCheck.useData[result]"]);
    const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('customer-wallet:summary', {
        "FinanceCheck.useData[summary]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('customer-wallet/summary')
    }["FinanceCheck.useData[summary]"]);
    const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('payment-settings', {
        "FinanceCheck.useData[settings]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('payment-settings')
    }["FinanceCheck.useData[settings]"]);
    const rows = result.data?.content || [];
    const openRecharge = async (row, requested)=>{
        if (busy) return;
        setBusy(true);
        setError('');
        try {
            const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('recharges/' + row.id);
            if (requested === 'review' && r.status !== 'PENDING') throw Error('This payment has already been reviewed. Refresh the list.');
            if (requested === 'adjust' && r.status !== 'APPROVED') throw Error('Only completed recharges can be adjusted.');
            setSelected(r);
            setDialogMode(requested);
        } catch (e) {
            setError(e.message);
        } finally{
            setBusy(false);
        }
    };
    const openInfo = (row)=>{
        const record = rows.find((r)=>String(r.id) === row.id);
        if (record) {
            cache.seed(`finance-detail:${profile.shop.id}:${mode}:${row.id}`, record);
            void cache.load(`finance-detail-user:${profile.shop.id}:${record.customerId}`, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersApi"].detail(String(record.customerId)));
        }
        navigate(`${recharge ? '/recharge-list/topup-' : '/order-list/ord-'}${row.id}`);
    };
    const openBan = async (row)=>{
        if (busy) return;
        const record = rows.find((r)=>String(r.id) === row.id);
        if (!record) return;
        setBusy(true);
        setError('');
        try {
            setStatusUser(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersApi"].detail(String(record.customerId)));
        } catch (e) {
            setError(e.message);
        } finally{
            setBusy(false);
        }
    };
    const changeReview = async (id, action, amount)=>{
        const n = Number(amount);
        if (action === 'APPROVE' && (!Number.isInteger(n) || n < 50 || n > 1000000 || n % 50 !== 0)) throw Error('Enter 50 to 1,000,000 MMK in multiples of 50.');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])(`recharges/${id}/review`, {
            action,
            amount: action === 'APPROVE' ? n : null,
            note: action === 'REJECT' ? 'Payment could not be verified' : 'Payment verified'
        });
        invalidate();
        notify(action === 'APPROVE' ? 'Recharge approved. Customer wallet credited.' : 'Recharge rejected.');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "reference-finance-ui finance-check-page",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full space-y-3 sm:space-y-4 flex-1 flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex flex-col items-center gap-2 sm:gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${width} ${glass} h-12 flex items-center justify-center text-xs font-bold`,
                                    "aria-label": "Total customer wallet balance",
                                    children: summary.data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(summary.data.walletBalance) : summary.error ? 'Balance unavailable' : 'Loading balance…'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-check.tsx",
                                    lineNumber: 37,
                                    columnNumber: 70
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$OrderTopNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderTopNav"], {
                                    active: mode,
                                    onActiveRefresh: invalidate
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-check.tsx",
                                    lineNumber: 37,
                                    columnNumber: 324
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-check.tsx",
                            lineNumber: 37,
                            columnNumber: 2
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${width} ${glass} p-3.5 sm:p-4 relative z-20`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-2 mb-3 w-full",
                                    children: [
                                        [
                                            'Today',
                                            'Search',
                                            'Filter'
                                        ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "w-full border border-white/10 px-2 py-1.5 rounded-lg font-bold text-xs sm:text-sm text-white/70 bg-white/5 hover:bg-white/10",
                                                onClick: ()=>{
                                                    if (label === 'Today') {
                                                        setFilters((s)=>({
                                                                ...s,
                                                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuickDisplayDateRange"])('Today'),
                                                                quickRange: 'Today'
                                                            }));
                                                        setPage(0);
                                                    } else if (label === 'Search') {
                                                        setShowSearch((v)=>!v);
                                                        setShowFilter(false);
                                                    } else {
                                                        setShowFilter((v)=>!v);
                                                        setShowSearch(false);
                                                    }
                                                },
                                                children: label
                                            }, label, false, {
                                                fileName: "[project]/src/components/finance-check.tsx",
                                                lineNumber: 39,
                                                columnNumber: 94
                                            }, this)),
                                        recharge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: busy || !settings.data,
                                            "aria-pressed": settings.data?.paymentsEnabled || false,
                                            className: "w-full border border-white/10 bg-white/5 px-1.5 py-1.5 rounded-lg font-bold text-xs",
                                            onClick: async ()=>{
                                                setBusy(true);
                                                setError('');
                                                try {
                                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])('payment-settings', {
                                                        paymentsEnabled: !settings.data?.paymentsEnabled
                                                    }, 'PUT');
                                                    invalidate();
                                                } catch (e) {
                                                    setError(e.message);
                                                } finally{
                                                    setBusy(false);
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: settings.data?.paymentsEnabled ? 'text-emerald-400' : 'text-white/50',
                                                children: busy ? 'Saving…' : settings.data?.paymentsEnabled ? 'Online' : 'Offline'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/finance-check.tsx",
                                                lineNumber: 40,
                                                columnNumber: 434
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/finance-check.tsx",
                                            lineNumber: 40,
                                            columnNumber: 12
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "w-full border border-white/10 rounded-lg bg-white/5 text-xs text-white/70",
                                            onClick: invalidate,
                                            children: "Refresh"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/finance-check.tsx",
                                            lineNumber: 40,
                                            columnNumber: 601
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/finance-check.tsx",
                                    lineNumber: 39,
                                    columnNumber: 2
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between py-1 px-0.5 text-xs sm:text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/40",
                                            children: [
                                                "Loaded: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "text-white/90",
                                                    children: rows.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-check.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 124
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-check.tsx",
                                            lineNumber: 41,
                                            columnNumber: 84
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    "aria-label": "Rows per page",
                                                    value: size,
                                                    onChange: (e)=>{
                                                        setSize(Number(e.target.value));
                                                        setPage(0);
                                                    },
                                                    className: "glass-effect-btn text-xs h-7 px-2",
                                                    children: [
                                                        10,
                                                        50,
                                                        100
                                                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: n,
                                                            children: n
                                                        }, n, false, {
                                                            fileName: "[project]/src/components/finance-check.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 392
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-check.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 218
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "glass-effect-btn h-7 flex items-center gap-4 px-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            "aria-label": "Previous page",
                                                            disabled: !page,
                                                            onClick: ()=>setPage((v)=>v - 1),
                                                            children: "‹"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-check.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 508
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: page + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-check.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 600
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            "aria-label": "Next page",
                                                            disabled: !result.data || result.data.last,
                                                            onClick: ()=>setPage((v)=>v + 1),
                                                            children: "›"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-check.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 621
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-check.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 441
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-check.tsx",
                                            lineNumber: 41,
                                            columnNumber: 177
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/finance-check.tsx",
                                    lineNumber: 41,
                                    columnNumber: 2
                                }, this),
                                showSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    autoFocus: true,
                                    "aria-label": "Search orders",
                                    maxLength: 100,
                                    className: "mt-3 w-full h-[38px] rounded-lg border border-white/10 bg-black/40 px-3 text-sm text-white",
                                    placeholder: "Search Order ID, Buyer...",
                                    value: query,
                                    onChange: (e)=>setQuery(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-check.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$OrderFilterDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderFilterDropdown"], {
                                    isOpen: showFilter,
                                    onClose: ()=>setShowFilter(false),
                                    onApply: (f)=>{
                                        setFilters(f);
                                        setPage(0);
                                    },
                                    initialFilters: filters,
                                    title: recharge ? 'Recharge Filter' : 'Orders Filter',
                                    statusOptions: [
                                        {
                                            label: 'All',
                                            value: 'all'
                                        },
                                        {
                                            label: 'Completed',
                                            value: 'completed'
                                        },
                                        {
                                            label: 'Processing',
                                            value: 'processing'
                                        },
                                        {
                                            label: recharge ? 'Rejected' : 'Failed',
                                            value: recharge ? 'cancelled' : 'failed'
                                        }
                                    ],
                                    includeAllTime: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-check.tsx",
                                    lineNumber: 43,
                                    columnNumber: 2
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-check.tsx",
                            lineNumber: 38,
                            columnNumber: 2
                        }, this),
                        (error || result.error || result.refreshError || summary.error || settings.error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: width,
                            role: "alert",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border border-red-500/30 rounded-lg p-3 text-sm text-red-300",
                                children: [
                                    error || result.error || result.refreshError || summary.error || settings.error,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ml-3 underline",
                                        onClick: invalidate,
                                        children: "Try again"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/finance-check.tsx",
                                        lineNumber: 45,
                                        columnNumber: 263
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/finance-check.tsx",
                                lineNumber: 45,
                                columnNumber: 114
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/finance-check.tsx",
                            lineNumber: 45,
                            columnNumber: 78
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${width} space-y-3 sm:space-y-4`,
                            "aria-busy": result.loading,
                            children: !result.data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "p-6 text-center text-white/50",
                                children: "Loading…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-check.tsx",
                                lineNumber: 46,
                                columnNumber: 94
                            }, this) : !rows.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `${glass} p-10 text-center text-white/40`,
                                children: "No orders found"
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-check.tsx",
                                lineNumber: 46,
                                columnNumber: 165
                            }, this) : rows.map((row)=>recharge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$recharge$2d$list$2f$components$2f$RechargeListCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RechargeListCard"], {
                                    order: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rechargeItem"])(row),
                                    onViewPayment: (r)=>void openRecharge(r, 'view'),
                                    onModify: (r)=>void openRecharge(r, r.isConfirmed ? 'adjust' : 'review'),
                                    onInfo: (r)=>void openInfo(r),
                                    onBan: (r)=>void openBan(r)
                                }, row.id, false, {
                                    fileName: "[project]/src/components/finance-check.tsx",
                                    lineNumber: 46,
                                    columnNumber: 265
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$order$2d$list$2f$components$2f$OrderListCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderListCard"], {
                                    order: {
                                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderItem"])(row),
                                        uid: row.playerId || '',
                                        price: Number(row.sellPrice)
                                    },
                                    onInfo: (r)=>void openInfo(r),
                                    onBan: (r)=>void openBan(r),
                                    onCopyInfo: async (r)=>{
                                        try {
                                            await navigator.clipboard.writeText([
                                                r.publicOrderId,
                                                r.product,
                                                r.uid,
                                                r.serverId,
                                                r.packageName,
                                                `Qty: ${r.quantity}`
                                            ].filter(Boolean).join('\n'));
                                            notify('Order information copied.');
                                        } catch  {
                                            setError('Unable to copy. Open order information to view the details.');
                                        }
                                    },
                                    onManualStatusChange: async (r, status)=>{
                                        try {
                                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])(`customer-orders/${r.id}/settle`, {
                                                action: status === 'Completed' ? 'SUCCESS' : 'REFUND'
                                            });
                                            invalidate();
                                            notify('Order updated.');
                                        } catch (e) {
                                            setError(e.message);
                                        }
                                    }
                                }, row.id, false, {
                                    fileName: "[project]/src/components/finance-check.tsx",
                                    lineNumber: 46,
                                    columnNumber: 509
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/finance-check.tsx",
                            lineNumber: 46,
                            columnNumber: 2
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/finance-check.tsx",
                    lineNumber: 36,
                    columnNumber: 69
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$ReviewPaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReviewPaymentModal"], {
                    isOpen: !!selected,
                    onClose: ()=>setSelected(null),
                    order: selected ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rechargeItem"])(selected) : null,
                    mode: dialogMode,
                    onConfirm: (id, amount)=>changeReview(id, 'APPROVE', amount),
                    onCancelOrder: (id)=>changeReview(id, 'REJECT'),
                    onAdjustBalance: async (_id, amount, reason, type)=>{
                        if (!selected || !reason.trim()) throw Error('Enter an adjustment reason.');
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$customer$2d$commerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordBalanceAdjustment"])(profile.shop.code, profile.id, selected.customerId, {
                            amount: (type === 'debit' ? -1 : 1) * Number(amount),
                            note: `${selected.publicTransactionId}: ${reason.trim()}`
                        });
                        invalidate();
                        notify('Customer wallet adjusted.');
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/finance-check.tsx",
                    lineNumber: 48,
                    columnNumber: 2
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$users$2f$components$2f$UserStatusConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserStatusConfirmModal"], {
                    isOpen: !!statusUser,
                    onClose: ()=>setStatusUser(null),
                    user: statusUser,
                    action: statusUser?.status === 'Banned' ? 'Unban' : 'Ban',
                    onConfirm: async (user)=>{
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersApi"].setBanned(user.id, user.status !== 'Banned');
                        invalidate();
                        notify(user.status === 'Banned' ? 'User unbanned.' : 'User banned.');
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/finance-check.tsx",
                    lineNumber: 49,
                    columnNumber: 2
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/finance-check.tsx",
            lineNumber: 36,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/finance-check.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(FinanceCheck, "str8rPTU36duB+3nI6DaJcWJUeg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$hooks$2f$financeNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c = FinanceCheck;
var _c;
__turbopack_context__.k.register(_c, "FinanceCheck");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/commerce-reference.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Cache lookup only. Reused keys are checked against the full payload by Main. */ __turbopack_context__.s([
    "commerceReferenceHash",
    ()=>commerceReferenceHash,
    "commerceRequestKey",
    ()=>commerceRequestKey
]);
async function commerceReferenceHash(value) {
    const bytes = new TextEncoder().encode(value);
    if (crypto.subtle) return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))).map((n)=>n.toString(16).padStart(2, '0')).join('');
    // Phone testing over a LAN HTTP address has getRandomValues but no SubtleCrypto.
    let a = 2166136261, b = 3339675911;
    for (const n of bytes){
        a = Math.imul(a ^ n, 16777619);
        b = Math.imul(b ^ n, 2246822519);
    }
    return `local_${(a >>> 0).toString(16)}_${(b >>> 0).toString(16)}`;
}
function commerceRequestKey() {
    return Array.from(crypto.getRandomValues(new Uint8Array(16))).map((n)=>n.toString(16).padStart(2, '0')).join('');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/customer-commerce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recordBalanceAdjustment",
    ()=>recordBalanceAdjustment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$commerce$2d$reference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/commerce-reference.ts [app-client] (ecmascript)");
;
;
async function recordBalanceAdjustment(shop, owner, customer, request) {
    const body = JSON.stringify(request);
    const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$commerce$2d$reference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commerceReferenceHash"])(body);
    const slot = `owner:${shop}:${owner}:customer:${customer}:adjustment:${hash}`;
    let key;
    try {
        key = sessionStorage.getItem(slot) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$commerce$2d$reference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commerceRequestKey"])();
        sessionStorage.setItem(slot, key);
    } catch  {
        throw Error('Allow browser session storage before adjusting a balance.');
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`customers/${customer}/balance-adjustments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': key
        },
        body
    });
    if (!Number.isSafeInteger(result?.id) || result.id < 1) throw Error('Unable to confirm the adjustment. Refresh transactions before retrying.');
    try {
        sessionStorage.removeItem(slot);
    } catch  {}
    return result;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderFilterDropdown",
    ()=>OrderFilterDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/pageScrollLock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/dateRange.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const OrderFilterDropdown = ({ isOpen, onClose, onApply, initialFilters, title = 'Recharge Filter', statusOptions = [
    {
        label: 'All',
        value: 'all'
    },
    {
        label: 'Completed',
        value: 'completed'
    },
    {
        label: 'Processing',
        value: 'processing'
    },
    {
        label: 'Failed',
        value: 'failed'
    }
], includeAllTime = false, showAwaitingPaymentToggle = false })=>{
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFilters?.status || 'all');
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "OrderFilterDropdown.useState": ()=>initialFilters?.startDate || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisplayDateRange"])().startDate
    }["OrderFilterDropdown.useState"]);
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "OrderFilterDropdown.useState": ()=>initialFilters?.endDate || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisplayDateRange"])().endDate
    }["OrderFilterDropdown.useState"]);
    const [selectedQuickRange, setSelectedQuickRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFilters?.quickRange || (includeAllTime ? 'All Time' : 'Last 30 Days'));
    const [awaitingPaymentOnly, setAwaitingPaymentOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "OrderFilterDropdown.useState": ()=>Boolean(initialFilters?.awaitingPaymentOnly)
    }["OrderFilterDropdown.useState"]);
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDateRangeDropdownOpen, setIsDateRangeDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statusSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dateRangeSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sync state when initialFilters changes or modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderFilterDropdown.useEffect": ()=>{
            if (initialFilters) {
                const fallbackRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisplayDateRange"])();
                // This animated dialog stays mounted, so refresh the draft when it reopens.
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setStatus(initialFilters.status || 'all');
                setStartDate(initialFilters.startDate || fallbackRange.startDate);
                setEndDate(initialFilters.endDate || fallbackRange.endDate);
                setSelectedQuickRange(initialFilters.quickRange || (includeAllTime ? 'All Time' : 'Last 30 Days'));
                setAwaitingPaymentOnly(Boolean(initialFilters.awaitingPaymentOnly));
            }
        }
    }["OrderFilterDropdown.useEffect"], [
        initialFilters,
        isOpen,
        includeAllTime
    ]);
    // Lock background body scroll when modal is open (like Review Order modal)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderFilterDropdown.useEffect": ()=>{
            if (!isOpen) return;
            const unlockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lockPageScroll"])();
            const handleKeyDown = {
                "OrderFilterDropdown.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape') {
                        onClose();
                    }
                }
            }["OrderFilterDropdown.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "OrderFilterDropdown.useEffect": ()=>{
                    unlockScroll();
                    window.removeEventListener('keydown', handleKeyDown);
                }
            })["OrderFilterDropdown.useEffect"];
        }
    }["OrderFilterDropdown.useEffect"], [
        isOpen,
        onClose
    ]);
    // Click outside to close inner selects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderFilterDropdown.useEffect": ()=>{
            const handleOutsideClick = {
                "OrderFilterDropdown.useEffect.handleOutsideClick": (e)=>{
                    if (statusSelectRef.current && !statusSelectRef.current.contains(e.target)) {
                        setIsStatusDropdownOpen(false);
                    }
                    if (dateRangeSelectRef.current && !dateRangeSelectRef.current.contains(e.target)) {
                        setIsDateRangeDropdownOpen(false);
                    }
                }
            }["OrderFilterDropdown.useEffect.handleOutsideClick"];
            document.addEventListener('mousedown', handleOutsideClick);
            return ({
                "OrderFilterDropdown.useEffect": ()=>document.removeEventListener('mousedown', handleOutsideClick)
            })["OrderFilterDropdown.useEffect"];
        }
    }["OrderFilterDropdown.useEffect"], []);
    const dateRangeOptions = includeAllTime ? [
        'All Time',
        'Today',
        'Last 2 Days',
        'Last 7 Days',
        'Last 30 Days',
        'Select Date'
    ] : [
        'Today',
        'Last 2 Days',
        'Last 7 Days',
        'Last 30 Days',
        'Select Date'
    ];
    const handleQuickRange = (range)=>{
        setSelectedQuickRange(range);
        setIsDateRangeDropdownOpen(false);
        if (range === 'All Time') return;
        if (range !== 'Select Date') {
            const rangeDates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuickDisplayDateRange"])(range);
            setStartDate(rangeDates.startDate);
            setEndDate(rangeDates.endDate);
        }
    };
    const handleApply = ()=>{
        onApply({
            status,
            startDate,
            endDate,
            quickRange: selectedQuickRange === 'All Time' ? undefined : selectedQuickRange,
            awaitingPaymentOnly: showAwaitingPaymentToggle ? awaitingPaymentOnly : undefined
        });
        onClose();
    };
    const handleReset = ()=>{
        const defaultRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisplayDateRange"])();
        setStatus('all');
        setStartDate(defaultRange.startDate);
        setEndDate(defaultRange.endDate);
        setSelectedQuickRange(includeAllTime ? 'All Time' : 'Last 30 Days');
        setAwaitingPaymentOnly(false);
        setIsStatusDropdownOpen(false);
        setIsDateRangeDropdownOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-6 sm:pt-10 bg-black/75 backdrop-blur-md transition-all select-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": "Close order filter dialog",
                    className: "absolute inset-0 cursor-default",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    ref: containerRef,
                    initial: {
                        opacity: 0,
                        y: -70,
                        scale: 0.96
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -70,
                        scale: 0.96
                    },
                    transition: {
                        duration: 0.25,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    className: "relative z-10 w-full max-w-[400px] sm:max-w-[430px] bg-[#121212] text-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-white/15 select-text",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "order-filter-dialog-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-white/10 bg-white/[0.02] rounded-t-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "order-filter-dialog-title",
                                    className: "text-base sm:text-lg font-bold text-white tracking-tight",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 space-y-3 sm:space-y-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `space-y-1 relative ${isStatusDropdownOpen ? 'z-50' : 'z-10'}`,
                                    ref: statusSelectRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "block text-xs sm:text-sm font-medium text-white/70",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setIsStatusDropdownOpen(!isStatusDropdownOpen);
                                                    },
                                                    className: "w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white flex items-center justify-between shadow-inner hover:border-white/20 focus:border-white/30 transition-colors cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: statusOptions.find((opt)=>opt.value === status)?.label || status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `w-4 h-4 text-white/50 transition-transform ${isStatusDropdownOpen ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    children: isStatusDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 4
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            y: 4
                                                        },
                                                        className: "absolute top-full left-0 right-0 mt-1.5 bg-[#181818] border border-white/15 rounded-lg shadow-[0_12px_36px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden max-h-48 overflow-y-auto",
                                                        children: statusOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setStatus(opt.value);
                                                                    setIsStatusDropdownOpen(false);
                                                                },
                                                                className: `w-full text-left px-3.5 py-1.5 text-xs sm:text-sm transition-colors cursor-pointer ${status === opt.value ? 'bg-white/15 text-white font-bold' : 'text-white/70 hover:bg-white/5 hover:text-white'}`,
                                                                children: opt.label
                                                            }, opt.value, false, {
                                                                fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `space-y-1 relative ${isDateRangeDropdownOpen ? 'z-50' : 'z-10'}`,
                                    ref: dateRangeSelectRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "block text-xs sm:text-sm font-medium text-white/70",
                                            children: "Date Range"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setIsDateRangeDropdownOpen(!isDateRangeDropdownOpen);
                                                        setIsStatusDropdownOpen(false);
                                                    },
                                                    className: "w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white flex items-center justify-between shadow-inner hover:border-white/20 focus:border-white/30 transition-colors cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: selectedQuickRange || 'Select Date'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `w-4 h-4 text-white/50 transition-transform ${isDateRangeDropdownOpen ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    children: isDateRangeDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 4
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            y: 4
                                                        },
                                                        className: "absolute top-full left-0 right-0 mt-1.5 bg-[#181818] border border-white/15 rounded-lg shadow-[0_12px_36px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden max-h-48 overflow-y-auto",
                                                        children: dateRangeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleQuickRange(opt),
                                                                className: `w-full text-left px-3.5 py-1.5 text-xs sm:text-sm transition-colors cursor-pointer ${selectedQuickRange === opt ? 'bg-white/15 text-white font-bold' : 'text-white/70 hover:bg-white/5 hover:text-white'}`,
                                                                children: opt
                                                            }, opt, false, {
                                                                fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: selectedQuickRange === 'Select Date' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            height: 0,
                                            marginTop: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            height: 'auto',
                                            marginTop: 12
                                        },
                                        exit: {
                                            opacity: 0,
                                            height: 0,
                                            marginTop: 0
                                        },
                                        className: "grid grid-cols-2 gap-3 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "order-filter-start-date",
                                                        className: "block text-xs font-medium text-white/60",
                                                        children: "Start Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "order-filter-start-date",
                                                        type: "date",
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toIsoDate"])(startDate),
                                                        onChange: (e)=>{
                                                            setStartDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisplayDate"])(e.target.value));
                                                        },
                                                        onClick: (e)=>{
                                                            try {
                                                                e.currentTarget.showPicker?.();
                                                            } catch  {}
                                                        },
                                                        className: "w-full bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white shadow-inner focus:outline-none focus:border-white/40 hover:border-white/20 transition-colors [color-scheme:dark] cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                lineNumber: 307,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "order-filter-end-date",
                                                        className: "block text-xs font-medium text-white/60",
                                                        children: "End Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "order-filter-end-date",
                                                        type: "date",
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toIsoDate"])(endDate),
                                                        onChange: (e)=>{
                                                            setEndDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisplayDate"])(e.target.value));
                                                        },
                                                        onClick: (e)=>{
                                                            try {
                                                                e.currentTarget.showPicker?.();
                                                            } catch  {}
                                                        },
                                                        className: "w-full bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white shadow-inner focus:outline-none focus:border-white/40 hover:border-white/20 transition-colors [color-scheme:dark] cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                lineNumber: 326,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                        lineNumber: 301,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                showAwaitingPaymentToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/35 px-3.5 py-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm font-medium text-white/70",
                                                    children: "Awaiting Payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] sm:text-xs text-white/35",
                                                    children: "ON shows awaiting-payment orders only."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                            lineNumber: 351,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            role: "switch",
                                            "aria-checked": awaitingPaymentOnly,
                                            "aria-label": "Show awaiting payment orders only",
                                            onClick: ()=>setAwaitingPaymentOnly((current)=>!current),
                                            className: `relative h-6 w-12 shrink-0 rounded-full border transition-colors cursor-pointer ${awaitingPaymentOnly ? 'bg-white/20 border-white/35' : 'bg-black/60 border-white/15'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute left-0 top-1 h-4 w-4 rounded-full bg-white transition-transform ${awaitingPaymentOnly ? 'translate-x-7' : 'translate-x-1'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: awaitingPaymentOnly ? 'On' : 'Off'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                            lineNumber: 355,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-7 text-right text-[10px] font-semibold uppercase text-white/50",
                                            children: awaitingPaymentOnly ? 'On' : 'Off'
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                            lineNumber: 374,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 350,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 sm:px-5 py-3 sm:py-3.5 bg-black/40 border-t border-white/10 flex items-center justify-end gap-2.5 rounded-b-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleReset,
                                    className: "mr-auto rounded-lg px-3 py-1.5 text-xs font-medium text-white/55 hover:bg-white/5 hover:text-white",
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleApply,
                                    className: "ultimate-3d-btn text-xs sm:text-sm px-5 py-1.5 font-bold cursor-pointer",
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "glass-effect-btn text-xs sm:text-sm px-4 py-1.5 text-white/80 hover:text-white border border-white/10 hover:border-white/20 cursor-pointer",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 397,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                            lineNumber: 382,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
            lineNumber: 158,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OrderFilterDropdown, "OgY8q9bDesXa6qFGdA7rzN0zZEY=");
_c = OrderFilterDropdown;
var _c;
__turbopack_context__.k.register(_c, "OrderFilterDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/orders/components/OrderTopNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderTopNav",
    ()=>OrderTopNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$hooks$2f$financeNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/hooks/financeNavigation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const OrderTopNav = ({ active, onActiveRefresh })=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$hooks$2f$financeNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const handleOrdersClick = ()=>{
        if (active === 'orders') {
            void onActiveRefresh?.();
            return;
        }
        navigate('/order-list');
    };
    const handleRechargeClick = ()=>{
        if (active === 'recharge') {
            void onActiveRefresh?.();
            return;
        }
        navigate('/recharge-list');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-3 gap-2 p-1.5 rounded-lg bg-black/40 border border-white/10 w-full max-w-[560px] md:max-w-[760px] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1180px] h-12 backdrop-blur-md shadow-lg items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleOrdersClick,
                className: `w-full h-full rounded-lg font-bold text-sm md:text-[15px] transition-all flex items-center justify-center ${active === 'orders' ? 'bg-white/10 border border-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'text-white/50 hover:text-white/90 hover:bg-white/5 border border-transparent'} select-none [-webkit-tap-highlight-color:transparent]`,
                children: "Orders"
            }, void 0, false, {
                fileName: "[project]/src/reference-ui/features/orders/components/OrderTopNav.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleRechargeClick,
                className: `w-full h-full rounded-lg font-bold text-sm md:text-[15px] transition-all flex items-center justify-center ${active === 'recharge' ? 'bg-white/10 border border-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'text-white/50 hover:text-white/90 hover:bg-white/5 border border-transparent'} select-none [-webkit-tap-highlight-color:transparent]`,
                children: "Recharge"
            }, void 0, false, {
                fileName: "[project]/src/reference-ui/features/orders/components/OrderTopNav.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>navigate('/'),
                className: "w-full h-full rounded-lg font-bold text-sm md:text-[15px] transition-all flex items-center justify-center text-white/50 hover:text-white/90 hover:bg-white/5 border border-transparent select-none [-webkit-tap-highlight-color:transparent]",
                children: "Home"
            }, void 0, false, {
                fileName: "[project]/src/reference-ui/features/orders/components/OrderTopNav.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/reference-ui/features/orders/components/OrderTopNav.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OrderTopNav, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$hooks$2f$financeNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]
    ];
});
_c = OrderTopNav;
var _c;
__turbopack_context__.k.register(_c, "OrderTopNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewPaymentModal",
    ()=>ReviewPaymentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/pageScrollLock.ts [app-client] (ecmascript)");
/* eslint-disable react-hooks/set-state-in-effect */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const formatNumberWithCommas = (val)=>{
    const numericOnly = String(val).replace(/[^0-9]/g, '');
    if (!numericOnly) return '';
    return Number(numericOnly).toLocaleString('en-US');
};
const ReviewPaymentModal = ({ isOpen, onClose, order, mode = 'view', onConfirm, onCancelOrder, onAdjustBalance })=>{
    _s();
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [reason, setReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [savingAction, setSavingAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const actionInFlightRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const initializedOrderKeyRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const currentOrderKey = order ? `${order.id}-${mode}` : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewPaymentModal.useEffect": ()=>{
            if (!isOpen || !order) {
                initializedOrderKeyRef.current = null;
                return;
            }
            // Polling can replace the order object. Keep the amount the admin is editing
            // until this dialog closes or switches to a different order/mode.
            if (initializedOrderKeyRef.current === currentOrderKey) return;
            initializedOrderKeyRef.current = currentOrderKey;
            const value = 'amount' in order && typeof order.amount === 'number' ? order.amount : order.purchaseAmount || '';
            setAmount(formatNumberWithCommas(value));
            setReason('');
            setSubmitError('');
        }
    }["ReviewPaymentModal.useEffect"], [
        currentOrderKey,
        isOpen,
        order
    ]);
    const isViewMode = mode === 'view';
    const isAdjustMode = mode === 'adjust';
    const numericAmount = Number(amount.replace(/,/g, ''));
    const isPositiveAmount = Number.isInteger(numericAmount) && numericAmount > 0;
    const isValidAmount = isAdjustMode ? isPositiveAmount : isPositiveAmount && numericAmount <= 1_000_000;
    // Lock background body scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewPaymentModal.useEffect": ()=>{
            if (!isOpen) return;
            const unlockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lockPageScroll"])();
            const handleKeyDown = {
                "ReviewPaymentModal.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape' && !actionInFlightRef.current) {
                        onClose();
                    }
                }
            }["ReviewPaymentModal.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "ReviewPaymentModal.useEffect": ()=>{
                    unlockScroll();
                    window.removeEventListener('keydown', handleKeyDown);
                }
            })["ReviewPaymentModal.useEffect"];
        }
    }["ReviewPaymentModal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen || !order) return null;
    const handleAmountChange = (e)=>{
        const rawVal = e.target.value.replace(/[^0-9]/g, '');
        setAmount(rawVal ? Number(rawVal).toLocaleString('en-US') : '');
    };
    const handleConfirmSubmit = async (e)=>{
        e.preventDefault();
        if (savingAction || actionInFlightRef.current || !isValidAmount) return;
        setSubmitError('');
        actionInFlightRef.current = true;
        const action = isAdjustMode ? 'credit' : 'approve';
        setSavingAction(action);
        try {
            if (isAdjustMode) {
                if (onAdjustBalance) {
                    await onAdjustBalance(order.id, amount.replace(/,/g, ''), reason, 'credit');
                }
            } else if (onConfirm) {
                await onConfirm(order.id, amount.replace(/,/g, ''));
            }
            onClose();
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Unable to save. Please try again.');
        } finally{
            actionInFlightRef.current = false;
            setSavingAction(null);
        }
    };
    const handleDebitClick = async ()=>{
        if (savingAction || actionInFlightRef.current || !isValidAmount) return;
        setSubmitError('');
        actionInFlightRef.current = true;
        setSavingAction('debit');
        try {
            if (onAdjustBalance) {
                await onAdjustBalance(order.id, amount.replace(/,/g, ''), reason, 'debit');
            }
            onClose();
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Unable to save. Please try again.');
        } finally{
            actionInFlightRef.current = false;
            setSavingAction(null);
        }
    };
    const handleCancelClick = async ()=>{
        if (savingAction || actionInFlightRef.current) return;
        setSubmitError('');
        actionInFlightRef.current = true;
        setSavingAction('reject');
        try {
            if (onCancelOrder) {
                await onCancelOrder(order.id);
            }
            onClose();
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Unable to save. Please try again.');
        } finally{
            actionInFlightRef.current = false;
            setSavingAction(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md transition-all animate-fadeIn select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Close payment review dialog",
                className: "absolute inset-0 cursor-default",
                onClick: ()=>{
                    if (!savingAction && !actionInFlightRef.current) onClose();
                },
                disabled: Boolean(savingAction)
            }, void 0, false, {
                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-[390px] sm:max-w-[400px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.35)] overflow-hidden text-white transition-all transform animate-scaleUp select-text",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "payment-review-dialog-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "payment-review-dialog-title",
                                className: "text-xs sm:text-sm font-bold text-white tracking-tight",
                                children: isAdjustMode ? 'Balance Adjustment' : order.publicTransactionId || `tx${String(order.id).replace(/^(?:topup-|#)/, '')}`
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    if (!savingAction && !actionInFlightRef.current) onClose();
                                },
                                disabled: Boolean(savingAction),
                                className: "text-white/40 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "alert",
                        className: "m-3 rounded border border-red-500/30 p-2 text-xs text-red-300",
                        children: submitError
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                        lineNumber: 186,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)),
                    isViewMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-center items-center overflow-auto p-4 max-h-[80vh] bg-black/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: order.receiptUrl || undefined,
                            alt: `Receipt for ${order.publicTransactionId || `tx${String(order.id).replace(/^(?:topup-|#)/, '')}`}`,
                            referrerPolicy: "no-referrer",
                            className: "max-w-full h-auto rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleConfirmSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 sm:p-4 space-y-3",
                                children: [
                                    !isAdjustMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[200px] h-[300px] shrink-0 aspect-[2/3] bg-black/50 border border-white/10 rounded-lg overflow-hidden flex items-center justify-center relative shadow-inner",
                                            children: order.receiptUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: order.receiptUrl,
                                                alt: `Receipt for ${order.publicTransactionId || `tx${String(order.id).replace(/^(?:topup-|#)/, '')}`}`,
                                                referrerPolicy: "no-referrer",
                                                className: "w-full h-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 205,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/50 p-3",
                                                children: "No payment screenshot submitted."
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 212,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "payment-review-amount",
                                                className: "block text-xs font-semibold text-white/80",
                                                children: "Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "payment-review-amount",
                                                type: "text",
                                                readOnly: isViewMode,
                                                value: amount,
                                                onChange: handleAmountChange,
                                                placeholder: "31,000",
                                                className: `w-full bg-black/40 border border-white/10 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg outline-none transition-all ${isViewMode ? 'cursor-not-allowed select-none text-white/90 font-medium' : 'focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isAdjustMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "payment-review-reason",
                                                className: "block text-xs font-semibold text-white/80",
                                                children: "Reason"
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "payment-review-reason",
                                                type: "text",
                                                value: reason,
                                                onChange: (e)=>setReason(e.target.value),
                                                placeholder: "Reason for adjustment...",
                                                className: "w-full bg-black/40 border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg outline-none transition-all placeholder:text-white/30"
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isViewMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3.5 sm:px-4 py-2.5 border-t border-white/10 bg-white/[0.01]",
                                children: isAdjustMode ? /* Adjust Balance: Debit & Credit buttons with equal sizes */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                void handleDebitClick();
                                            },
                                            disabled: Boolean(savingAction) || !isValidAmount,
                                            className: "flex-1 bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60",
                                            children: savingAction === 'debit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 98
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Saving..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 268,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0)) : 'Debit'
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                            lineNumber: 262,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: Boolean(savingAction) || !isValidAmount,
                                            className: "flex-1 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60",
                                            children: savingAction === 'credit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 99
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Saving..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 275,
                                                columnNumber: 50
                                            }, ("TURBOPACK compile-time value", void 0)) : 'Credit'
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                            lineNumber: 270,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /* Review Order: Reject & Approve buttons with equal sizes */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                void handleCancelClick();
                                            },
                                            disabled: Boolean(savingAction),
                                            className: "flex-1 bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60",
                                            children: savingAction === 'reject' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 99
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Saving..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 287,
                                                columnNumber: 50
                                            }, ("TURBOPACK compile-time value", void 0)) : 'Reject'
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: Boolean(savingAction) || !isValidAmount,
                                            className: "flex-1 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60",
                                            children: savingAction === 'approve' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 100
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Saving..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 294,
                                                columnNumber: 51
                                            }, ("TURBOPACK compile-time value", void 0)) : 'Approve'
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ReviewPaymentModal, "H06kdXr2X1poFnHqxDdDRGJzGl8=");
_c = ReviewPaymentModal;
var _c;
__turbopack_context__.k.register(_c, "ReviewPaymentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderListCard",
    ()=>OrderListCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/currency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$utils$2f$gameOrderHelper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/utils/gameOrderHelper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$utils$2f$orderSource$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/utils/orderSource.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$order$2d$list$2f$manualOrder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/order-list/manualOrder.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$order$2d$list$2f$holdingOrder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/order-list/holdingOrder.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const OrderListCard = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ order, onChat, onBan, onInfo, onCopyInfo, onManualStatusChange, onHoldingRefund })=>{
    _s();
    const [manualAction, setManualAction] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const manualActionInFlightRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const handleManualStatusChange = async (status)=>{
        if (manualActionInFlightRef.current || !onManualStatusChange) return;
        manualActionInFlightRef.current = true;
        setManualAction(status);
        try {
            await onManualStatusChange(order, status);
        } finally{
            manualActionInFlightRef.current = false;
            setManualAction(null);
        }
    };
    const getStatusColorClass = ()=>{
        switch(order.status?.toLowerCase()){
            case 'completed':
                return 'text-emerald-400';
            case 'processing':
                return 'text-amber-400';
            case 'pending':
            case 'holding':
                return 'text-amber-400';
            case 'refunded':
                return 'text-sky-400';
            case 'failed':
                return 'text-red-500';
            default:
                return 'text-white/80';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-black/40 backdrop-blur-xl rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.35)] border border-white/10 overflow-hidden text-white transition-all hover:border-white/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-stretch text-xs sm:text-sm bg-white/[0.02]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[42%] sm:w-[38%] p-2.5 sm:p-3 border-r border-white/10 flex flex-col items-center justify-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs sm:text-sm font-bold text-white tracking-tight flex items-center justify-center gap-1.5",
                                children: order.publicOrderId || `ord-${order.id.replace(/^(?:order-|store-order-)/, '')}`
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] sm:text-xs font-medium text-white/50 mt-0.5",
                                children: order.timeAgo
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[58%] sm:w-[62%] p-2.5 sm:p-3 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/10 text-white border border-white/15 font-bold text-xs sm:text-sm px-3 py-1 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.05)] flex items-center justify-center shrink-0",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(order.price)
                        }, void 0, false, {
                            fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-stretch text-xs sm:text-sm border-t border-white/10 bg-white/[0.01]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 border-r border-white/10 flex items-center justify-center gap-1.5",
                        children: [
                            onChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChat?.(order),
                                className: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 flex items-center justify-center hover:bg-emerald-500/20 active:scale-95 transition-all shadow-[0_0_8px_rgba(16,185,129,0.1)] cursor-pointer",
                                title: "Chat",
                                "aria-label": "Chat",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 86,
                                columnNumber: 23
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onInfo?.(order),
                                className: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 flex items-center justify-center hover:bg-amber-500/20 active:scale-95 transition-all shadow-[0_0_8px_rgba(245,158,11,0.1)] cursor-pointer",
                                title: "Info",
                                "aria-label": "View information",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 stroke-[2.5]"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            onBan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onBan?.(order),
                                className: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-400 flex items-center justify-center hover:bg-rose-500/20 active:scale-95 transition-all shadow-[0_0_8px_rgba(244,63,94,0.1)] cursor-pointer",
                                title: "Block",
                                "aria-label": "Block user",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0 0h24v24H0z",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "currentColor",
                                            d: "M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-1.9 0-3.6.6-4.9 1.7l11.2 11.2c1-1.4 1.7-3.1 1.7-4.9c0-4.4-3.6-8-8-8m4.9 14.3L5.7 7.1C4.6 8.4 4 10.1 4 12c0 4.4 3.6 8 8 8c1.9 0 3.6-.6 4.9-1.7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 108,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 text-left flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-xs sm:text-sm text-white",
                                children: order.buyerName || order.username
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            order.buyerCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[11px] sm:text-xs text-cyan-400 ml-1",
                                children: [
                                    "( ",
                                    order.buyerCode,
                                    " )"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/10 divide-y divide-white/10 text-white text-xs sm:text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[42%] sm:w-[38%] py-1 px-2.5 sm:px-3 border-r border-white/10 bg-white/[0.01] flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onCopyInfo?.(order),
                                    className: "Btn",
                                    title: "Copy Order Information",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text",
                                            children: "Copy Info"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "effect"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[58%] sm:w-[62%] py-1 px-2.5 sm:px-3 font-semibold text-white flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate text-xs sm:text-sm font-mono",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$utils$2f$gameOrderHelper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOrderUidDisplay"])(order)
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]",
                                children: "Source"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[58%] sm:w-[62%] py-1 px-2.5 sm:px-3 font-semibold text-white flex items-center",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$utils$2f$orderSource$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrderSourceLabel"])(order.source)
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]",
                                children: "Quantity"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[58%] sm:w-[62%] py-1 px-2.5 sm:px-3 font-semibold text-white flex items-center",
                                children: order.quantity
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]",
                                children: "Package"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[58%] sm:w-[62%] py-1 px-2.5 sm:px-3 font-semibold text-white flex items-center",
                                children: order.packageName
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-rose-400/90 border-r border-white/10 bg-white/[0.01]",
                                children: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 font-semibold text-rose-400 flex items-center",
                                children: order.duration
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `font-semibold capitalize ${getStatusColorClass()}`,
                                    children: order.status?.toLowerCase() === 'pending' ? 'Processing' : order.status
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$order$2d$list$2f$holdingOrder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canCancelAndRefundOrder"])(order) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01] flex items-center",
                                children: "Control"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[58%] sm:w-[62%] py-1.5 px-2.5 sm:px-3 flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onHoldingRefund?.(order),
                                    className: "border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 px-2.5 py-1 rounded text-xs font-bold transition-all active:scale-95 cursor-pointer",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$order$2d$list$2f$holdingOrder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelRefundMode"])(order) === 'FORCE' ? 'Force Cancel & Refund' : 'Cancel & Refund'
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$order$2d$list$2f$manualOrder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canResolveManualOrder"])(order) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01] flex items-center",
                                children: "Control"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[58%] sm:w-[62%] py-1.5 px-2.5 sm:px-3 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            void handleManualStatusChange('Failed');
                                        },
                                        disabled: manualAction !== null,
                                        className: "border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 px-2.5 py-1 rounded text-xs font-bold transition-all active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-1.5",
                                        children: [
                                            manualAction === 'Failed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-3.5 h-3.5 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                                lineNumber: 243,
                                                columnNumber: 47
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            manualAction === 'Failed' ? 'Processing...' : 'Fail'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            void handleManualStatusChange('Completed');
                                        },
                                        disabled: manualAction !== null,
                                        className: "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 px-2.5 py-1 rounded text-xs font-bold transition-all active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-1.5",
                                        children: [
                                            manualAction === 'Completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-3.5 h-3.5 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                                lineNumber: 252,
                                                columnNumber: 50
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            manualAction === 'Completed' ? 'Processing...' : 'Complete'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/reference-ui/features/orders/order-list/components/OrderListCard.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "NdKCUX0kwFkGPuDN2p5sKZfJ96I=")), "NdKCUX0kwFkGPuDN2p5sKZfJ96I=");
_c1 = OrderListCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "OrderListCard$React.memo");
__turbopack_context__.k.register(_c1, "OrderListCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/orders/order-list/holdingOrder.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canCancelAndRefundOrder",
    ()=>canCancelAndRefundOrder,
    "canRefundHoldingOrder",
    ()=>canRefundHoldingOrder,
    "cancelRefundMode",
    ()=>cancelRefundMode,
    "holdingReasonLabel",
    ()=>holdingReasonLabel,
    "isHoldingOrder",
    ()=>isHoldingOrder
]);
const isHoldingOrder = (order)=>order.status === 'Holding' || order.status === 'Pending' && order.pendingReason === 'PROVIDER_BALANCE';
const cancelRefundMode = (order)=>{
    if (!order) return null;
    return order.cancelRefundMode === 'SAFE' || order.cancelRefundMode === 'FORCE' ? order.cancelRefundMode : isHoldingOrder(order) && order.canCancelHolding === true ? 'SAFE' : null;
};
const canCancelAndRefundOrder = (order)=>cancelRefundMode(order) !== null;
const canRefundHoldingOrder = (order)=>isHoldingOrder(order) && cancelRefundMode(order) === 'SAFE';
const holdingReasonLabel = (order)=>{
    if (order.pendingReason === 'PROVIDER_BALANCE') return 'Provider balance insufficient';
    if (order.pendingReason === 'PROVIDER_RETRY') return 'Temporary provider retry';
    if (order.pendingReason === 'PROVIDER_RECONCILIATION') return 'Provider reconciliation required';
    return order.pendingReason || 'Not available';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/orders/order-list/manualOrder.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyManualOrderResolution",
    ()=>applyManualOrderResolution,
    "canResolveManualOrder",
    ()=>canResolveManualOrder
]);
const canResolveManualOrder = (order)=>{
    if (order.source !== 'manual') return false;
    if (typeof order.canResolveManualOrder === 'boolean') return order.canResolveManualOrder;
    // Compatibility with responses predating the server eligibility flag.
    const source = order.directProviderSource?.toLowerCase();
    if (source === 'manual order') return order.status === 'Pending';
    if (source === 'manual' || source == null) return order.status === 'Processing';
    return false;
};
const applyManualOrderResolution = (order, nextStatus)=>{
    if (!canResolveManualOrder(order)) return null;
    return {
        ...order,
        status: nextStatus,
        canResolveManualOrder: false,
        updatedAt: new Date().toISOString()
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RechargeListCard",
    ()=>RechargeListCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/currency.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const RechargeListCard = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ order, onViewPayment, onModify, onChat, onBan, onInfo })=>{
    _s();
    const isConfirmed = order.isConfirmed ?? order.status?.toLowerCase() === 'completed';
    const isEditable = order.isEditable ?? true;
    const reviewedAt = order.updatedAt;
    const reviewedAtMs = reviewedAt ? Date.parse(reviewedAt) : Number.NaN;
    const adjustExpiresAtMs = Number.isFinite(reviewedAtMs) ? reviewedAtMs + 12 * 60 * 60 * 1000 : Number.NaN;
    const [, setAdjustExpiryTick] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const adjustWindowOpen = isConfirmed && Number.isFinite(adjustExpiresAtMs) && Date.now() < adjustExpiresAtMs;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RechargeListCard.useEffect": ()=>{
            if (!isConfirmed || !Number.isFinite(adjustExpiresAtMs)) return;
            const remainingMs = adjustExpiresAtMs - Date.now();
            if (remainingMs <= 0) return;
            const timer = window.setTimeout({
                "RechargeListCard.useEffect.timer": ()=>setAdjustExpiryTick({
                        "RechargeListCard.useEffect.timer": (value)=>value + 1
                    }["RechargeListCard.useEffect.timer"])
            }["RechargeListCard.useEffect.timer"], remainingMs);
            return ({
                "RechargeListCard.useEffect": ()=>window.clearTimeout(timer)
            })["RechargeListCard.useEffect"];
        }
    }["RechargeListCard.useEffect"], [
        adjustExpiresAtMs,
        isConfirmed
    ]);
    const showModifyButton = isConfirmed ? adjustWindowOpen : isEditable;
    const amountValue = 'amount' in order && typeof order.amount === 'number' ? order.amount : typeof order.purchaseAmount === 'number' ? order.purchaseAmount : Number(order.purchaseAmount) || 0;
    const getStatusColorClass = ()=>{
        switch(order.status?.toLowerCase()){
            case 'completed':
                return 'text-emerald-400';
            case 'processing':
            case 'pending':
                return 'text-amber-400';
            case 'refunded':
                return 'text-sky-400';
            case 'cancelled':
                return 'text-red-500';
            case 'failed':
                return 'text-red-500';
            default:
                return 'text-white/80';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-black/40 backdrop-blur-xl rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.35)] border border-white/10 overflow-hidden text-white transition-all hover:border-white/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-stretch text-xs sm:text-sm bg-white/[0.02]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[42%] sm:w-[38%] p-2.5 sm:p-3 border-r border-white/10 flex flex-col items-center justify-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs sm:text-sm font-bold text-white tracking-tight flex items-center justify-center gap-1",
                                children: order.publicTransactionId || `tx${order.id.replace(/^(?:topup-|#)/, '')}`
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] sm:text-xs font-medium text-white/50 mt-0.5",
                                children: order.timeAgo
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[58%] sm:w-[62%] p-2.5 sm:p-3 flex flex-col items-center justify-center",
                        children: [
                            showModifyButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onModify?.(order),
                                className: `w-full text-center text-xs py-1.5 px-3 rounded-lg transition-all cursor-pointer font-semibold ${isConfirmed ? 'bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.12)] active:scale-[0.99]' : 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.1)] active:scale-[0.99]'}`,
                                children: isConfirmed ? 'Adjust' : 'Review'
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            order.status?.toLowerCase() !== 'processing' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onViewPayment?.(order),
                                className: "text-[10px] sm:text-xs font-medium text-white/50 hover:text-white/80 transition-colors mt-2 underline decoration-white/30 underline-offset-2 cursor-pointer",
                                children: "View Payment"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": "true",
                                className: "text-[10px] sm:text-xs font-medium mt-2 invisible select-none",
                                children: "View Payment"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-stretch text-xs sm:text-sm border-t border-white/10 bg-white/[0.01]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 border-r border-white/10 flex items-center justify-center gap-1.5",
                        children: [
                            onChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChat?.(order),
                                className: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 flex items-center justify-center hover:bg-emerald-500/20 active:scale-95 transition-all shadow-[0_0_8px_rgba(16,185,129,0.1)] cursor-pointer",
                                title: "Chat",
                                "aria-label": "Chat",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 116,
                                columnNumber: 23
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onInfo?.(order),
                                className: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 flex items-center justify-center hover:bg-amber-500/20 active:scale-95 transition-all shadow-[0_0_8px_rgba(245,158,11,0.1)] cursor-pointer",
                                title: "Info",
                                "aria-label": "View information",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 stroke-[2.5]"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            onBan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onBan?.(order),
                                className: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-400 flex items-center justify-center hover:bg-rose-500/20 active:scale-95 transition-all shadow-[0_0_8px_rgba(244,63,94,0.1)] cursor-pointer",
                                title: "Block",
                                "aria-label": "Block user",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0 0h24v24H0z",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "currentColor",
                                            d: "M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-1.9 0-3.6.6-4.9 1.7l11.2 11.2c1-1.4 1.7-3.1 1.7-4.9c0-4.4-3.6-8-8-8m4.9 14.3L5.7 7.1C4.6 8.4 4 10.1 4 12c0 4.4 3.6 8 8 8c1.9 0 3.6-.6 4.9-1.7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 138,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 text-left flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-xs sm:text-sm text-white",
                                children: order.buyerName || order.username
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            order.buyerCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[11px] sm:text-xs text-cyan-400 ml-1",
                                children: [
                                    "( ",
                                    order.buyerCode,
                                    " )"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/10 divide-y divide-white/10 text-white text-xs sm:text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]",
                                children: "Amount"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 font-semibold text-white flex items-center",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(amountValue)
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-rose-400/90 border-r border-white/10 bg-white/[0.01]",
                                children: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 font-semibold text-rose-400 flex items-center",
                                children: order.duration || '—'
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[42%] sm:w-[38%] py-2 px-2.5 sm:px-3 font-medium text-white/70 border-r border-white/10 bg-white/[0.01]",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[58%] sm:w-[62%] py-2 px-2.5 sm:px-3 flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `font-semibold capitalize ${getStatusColorClass()}`,
                                    children: order.status?.toLowerCase() === 'pending' ? 'Processing' : order.status || 'Processing'
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/reference-ui/features/orders/recharge-list/components/RechargeListCard.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "m+xGm5KrCgOQ9xbZvYrLi37yiAU=")), "m+xGm5KrCgOQ9xbZvYrLi37yiAU=");
_c1 = RechargeListCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "RechargeListCard$React.memo");
__turbopack_context__.k.register(_c1, "RechargeListCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/orders/utils/gameOrderHelper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOrderGameFields",
    ()=>resolveOrderGameFields,
    "resolveOrderProduct",
    ()=>resolveOrderProduct,
    "resolveOrderUidDisplay",
    ()=>resolveOrderUidDisplay
]);
const resolveOrderProduct = (order)=>{
    if (order.product) {
        return order.product.toLowerCase();
    }
    if (order.gameType) {
        return order.gameType.toLowerCase();
    }
    return '';
};
const resolveOrderGameFields = (order)=>{
    if (order.gameFields && order.gameFields.length > 0) {
        return order.gameFields;
    }
    const fields = [];
    // Primary Game ID
    if (order.uid) {
        fields.push({
            label: 'Game ID',
            value: String(order.uid)
        });
    }
    // Explicit Server ID
    if (order.serverId) {
        fields.push({
            label: 'Server ID',
            value: String(order.serverId)
        });
    }
    // Explicit Region
    if (order.region) {
        fields.push({
            label: 'Region',
            value: String(order.region)
        });
    }
    // Fallback from serverTag when serverId/region are not explicitly provided
    if (!order.serverId && !order.region && order.serverTag) {
        const rawTag = order.serverTag.trim();
        const lowerTag = rawTag.toLowerCase();
        if (/^\d+$/.test(rawTag)) {
            fields.push({
                label: 'Server ID',
                value: rawTag
            });
        } else if ([
            'asia',
            'glb',
            'sea',
            'eu',
            'na'
        ].includes(lowerTag)) {
            fields.push({
                label: 'Region',
                value: rawTag
            });
        } else if (lowerTag === 'bls') {
        // 'bls' is a product/game tag for Arena Breakout; no separate server/region field
        } else {
            fields.push({
                label: 'Server ID',
                value: rawTag
            });
        }
    }
    return fields;
};
const resolveOrderUidDisplay = (order)=>{
    const primaryId = String(order.uid || '').trim();
    const fields = resolveOrderGameFields(order);
    const product = resolveOrderProduct(order);
    // Secondary fields (all non-Game ID fields)
    const secondaryFields = fields.filter((f)=>f.label.toLowerCase() !== 'game id');
    if (secondaryFields.length > 0 && secondaryFields[0]?.value) {
        return `${primaryId} (${secondaryFields[0].value})`;
    }
    return product ? `${primaryId} (${product})` : primaryId || '—';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/orders/utils/orderSource.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrderSourceLabel",
    ()=>getOrderSourceLabel
]);
const ORDER_SOURCE_LABELS = {
    manual: 'Manual',
    direct_topup: 'Direct Top-ups',
    gift_card_voucher: 'GiftCards & Vouchers'
};
const getOrderSourceLabel = (source)=>ORDER_SOURCE_LABELS[source];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/shared/hooks/financeNavigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavigate",
    ()=>useNavigate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useNavigate() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return (path)=>router.push(path);
}
_s(useNavigate, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/shared/services/financePanelApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminPanelApi",
    ()=>adminPanelApi,
    "businessTime",
    ()=>businessTime,
    "duration",
    ()=>duration,
    "financeQuery",
    ()=>financeQuery,
    "orderItem",
    ()=>orderItem,
    "rechargeItem",
    ()=>rechargeItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$customer$2d$commerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/customer-commerce.ts [app-client] (ecmascript)");
;
;
const status = (s)=>({
        SUCCESS: 'Completed',
        PENDING: 'Processing',
        PROCESSING: 'Processing',
        FAILED: 'Failed',
        REFUNDED: 'Refunded',
        CANCELLED: 'Cancelled',
        AWAITING_PAYMENT: 'Pending',
        APPROVED: 'Completed',
        REJECTED: 'Cancelled',
        EXPIRED: 'Cancelled'
    })[s] || 'Unknown';
function duration(start, end, now = Date.now()) {
    if (!start) return '—';
    const seconds = Math.max(0, Math.floor(((end ? Date.parse(end) : now) - Date.parse(start)) / 1000));
    return Number.isFinite(seconds) ? `${Math.floor(seconds / 60)}m ${seconds % 60}s` : '—';
}
function businessTime(value) {
    if (!value) return '—';
    const d = new Date(value);
    return Number.isFinite(d.valueOf()) ? d.toLocaleString('en-US', {
        timeZone: 'Asia/Yangon'
    }) : '—';
}
function orderItem(r) {
    return {
        id: String(r.id),
        publicOrderId: r.publicOrderId,
        status: status(r.status),
        source: r.manual ? 'manual' : 'direct_topup',
        canResolveManualOrder: r.manual && [
            'PENDING',
            'PROCESSING'
        ].includes(r.status),
        username: r.customerName || `Customer #${r.customerId}`,
        buyerName: r.customerName,
        buyerCode: String(r.customerId),
        uid: [
            r.playerId,
            r.serverId && `(${r.serverId})`
        ].filter(Boolean).join(' ') || '—',
        packageName: r.packageName,
        price: Number(r.unitPrice),
        quantity: r.quantity,
        currency: 'Ks',
        createdAt: r.createdAt,
        updatedAt: r.updatedAt,
        product: r.gameName,
        serverId: r.serverId,
        timeAgo: businessTime(r.createdAt),
        duration: duration(r.createdAt, [
            'PENDING',
            'PROCESSING'
        ].includes(r.status) ? undefined : r.updatedAt),
        orderInputs: Object.entries(r.inputs || {}).map(([key, value])=>({
                key,
                label: key,
                value: String(value ?? '')
            }))
    };
}
function rechargeItem(r) {
    return {
        id: String(r.id),
        publicTransactionId: r.publicTransactionId,
        status: status(r.status),
        username: r.buyerName || `Customer #${r.customerId}`,
        buyerName: r.buyerName,
        buyerCode: String(r.customerId),
        amount: Number(r.amount),
        currency: 'Ks',
        createdAt: r.createdAt,
        updatedAt: r.reviewedAt,
        paymentType: r.paymentDisplayName,
        isConfirmed: r.status === 'APPROVED',
        isEditable: r.status === 'PENDING' && r.hasReceipt,
        receiptUrl: r.receiptUrl,
        userEmail: r.email,
        timeAgo: businessTime(r.createdAt),
        duration: duration(r.submittedAt, r.reviewedAt)
    };
}
function financeQuery(f, recharge = false) {
    const page = f.cursor ? Number(f.cursor.replace(/^page:/, '')) : 0;
    if (!Number.isSafeInteger(page) || page < 0) throw Error('Invalid page.');
    const q = new URLSearchParams({
        page: String(page),
        size: String(f.size || 10),
        q: (f.search || '').slice(0, 100)
    });
    const st = (f.status || 'all').toLowerCase();
    q.set('status', (recharge ? ({
        completed: 'APPROVED',
        processing: 'PENDING',
        cancelled: 'CANCELLED'
    })[st] : ({
        completed: 'SUCCESS',
        processing: 'ACTIVE',
        active: 'ACTIVE',
        failed: 'FAILED',
        refunded: 'REFUNDED'
    })[st]) || 'ALL');
    if (recharge) {
        q.set('visible', String(!f.awaitingPaymentOnly));
        if (f.awaitingPaymentOnly) q.set('status', 'AWAITING_PAYMENT');
    }
    if (f.startDate) q.set('startDate', f.startDate);
    if (f.endDate) q.set('endDate', f.endDate);
    return q;
}
function cursorPage(p) {
    return {
        items: p.content,
        hasNext: !p.last && p.number + 1 < p.totalPages,
        nextCursor: !p.last ? `page:${p.number + 1}` : null
    };
}
async function all(path) {
    const rows = [];
    for(let page = 0; page < 1000; page++){
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`${path}?page=${page}&size=100`);
        if (!Array.isArray(result.content)) throw Error('Unable to read records.');
        rows.push(...result.content);
        if (result.last || page + 1 >= result.totalPages) return rows;
    }
    throw Error('Too many records to load at once. Please contact Main Admin.');
}
function adjustment(r) {
    return {
        id: String(r.id),
        userId: String(r.customerId),
        userName: r.customerName || `Customer #${r.customerId}`,
        type: Number(r.amount) >= 0 ? 'increase' : 'decrease',
        amount: Math.abs(Number(r.amount)),
        remark: r.note || '',
        createdAt: businessTime(r.createdAt)
    };
}
const adminPanelApi = {
    orders: {
        page: async (f)=>{
            const p = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('customer-orders?' + financeQuery(f));
            return cursorPage({
                ...p,
                content: p.content.map(orderItem)
            });
        }
    },
    topUps: {
        page: async (f)=>{
            const p = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('recharges?' + financeQuery(f, true));
            return cursorPage({
                ...p,
                content: p.content.map(rechargeItem)
            });
        }
    },
    users: {
        list: async ()=>(await all('customers')).map((c)=>({
                    id: String(c.id),
                    username: c.userName,
                    displayName: c.displayName,
                    email: c.email,
                    balance: Number(c.balance),
                    status: c.enabled ? 'Active' : 'Disabled',
                    createdAt: c.createdAt
                }))
    },
    adjustments: {
        list: async ()=>(await all('balance-adjustments')).map(adjustment),
        create: async (value, scope)=>{
            const id = Number(value.userId), amount = Number(value.amount), note = value.remark?.trim() || '';
            if (!Number.isSafeInteger(id) || id < 1 || !Number.isFinite(amount) || amount <= 0 || !note) throw Error('Choose a user and enter a positive amount and reason.');
            const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$customer$2d$commerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordBalanceAdjustment"])(scope.shop, scope.owner, id, {
                amount: value.type === 'decrease' ? -amount : amount,
                note
            });
            return adjustment(row);
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/shared/utils/currency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAdaptiveUSD",
    ()=>formatAdaptiveUSD,
    "formatCurrency",
    ()=>formatCurrency,
    "formatMMK",
    ()=>formatMMK,
    "formatUSD",
    ()=>formatUSD
]);
const formatMMK = (amount)=>{
    if (amount === null || amount === undefined || Number.isNaN(Number(amount))) {
        return '0 Ks';
    }
    return `${new Intl.NumberFormat('en-US').format(Number(amount))} Ks`;
};
const formatUSD = (amount)=>{
    if (amount === null || amount === undefined || Number.isNaN(Number(amount))) {
        return '$0.00';
    }
    return `$${new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(Number(amount))}`;
};
const formatCurrency = (amount, currency = 'Ks')=>{
    if (amount === null || amount === undefined || Number.isNaN(Number(amount))) {
        return `0 ${currency}`;
    }
    return `${new Intl.NumberFormat('en-US').format(Number(amount))} ${currency}`;
};
const formatAdaptiveUSD = (amount)=>{
    if (amount === null || amount === undefined || Number.isNaN(Number(amount))) {
        return '$0';
    }
    const val = Number(amount);
    const absVal = Math.abs(val);
    let fractionDigits = 2;
    if (absVal >= 1000) {
        fractionDigits = 0;
    } else if (absVal >= 100) {
        fractionDigits = 1;
    } else {
        fractionDigits = 2;
    }
    return `$${new Intl.NumberFormat('en-US', {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits
    }).format(val)}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/shared/utils/dateRange.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDisplayDate",
    ()=>formatDisplayDate,
    "formatIsoDate",
    ()=>formatIsoDate,
    "getDisplayDateRange",
    ()=>getDisplayDateRange,
    "getIsoDateRange",
    ()=>getIsoDateRange,
    "getQuickDisplayDateRange",
    ()=>getQuickDisplayDateRange,
    "isDateWithinDisplayRange",
    ()=>isDateWithinDisplayRange,
    "toDisplayDate",
    ()=>toDisplayDate,
    "toIsoDate",
    ()=>toIsoDate
]);
const pad = (value)=>String(value).padStart(2, '0');
const formatDisplayDate = (date)=>`${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()}`;
const formatIsoDate = (date)=>`${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const toIsoDate = (displayDate)=>{
    if (!displayDate) return '';
    if (/^\d{4}-\d{2}-\d{2}$/.test(displayDate)) return displayDate;
    const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(displayDate);
    return match ? `${match[3]}-${match[1]}-${match[2]}` : '';
};
const toDisplayDate = (isoDate)=>{
    if (!isoDate) return '';
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(isoDate)) return isoDate;
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
    return match ? `${match[2]}/${match[3]}/${match[1]}` : '';
};
const getDisplayDateRange = (daysBack = 30, now = new Date())=>{
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const start = new Date(end);
    start.setDate(start.getDate() - Math.max(0, daysBack));
    return {
        startDate: formatDisplayDate(start),
        endDate: formatDisplayDate(end)
    };
};
const getIsoDateRange = (daysBack = 30, now = new Date())=>{
    const displayRange = getDisplayDateRange(daysBack, now);
    return {
        startDate: toIsoDate(displayRange.startDate),
        endDate: toIsoDate(displayRange.endDate)
    };
};
const getQuickDisplayDateRange = (range, now = new Date())=>{
    const daysByRange = {
        Today: 0,
        'Last 2 Days': 2,
        'Last 7 Days': 7,
        'Last 30 Days': 30
    };
    return getDisplayDateRange(daysByRange[range], now);
};
const isDateWithinDisplayRange = (value, startDate, endDate)=>{
    if (!value) return false;
    const directIsoValue = /^(\d{4}-\d{2}-\d{2})/.exec(value)?.[1];
    const parsedValue = directIsoValue ? undefined : new Date(value);
    const isoValue = directIsoValue || (parsedValue && !Number.isNaN(parsedValue.getTime()) ? formatIsoDate(parsedValue) : undefined);
    const isoStart = toIsoDate(startDate);
    const isoEnd = toIsoDate(endDate);
    if (!isoValue || !isoStart || !isoEnd || isoStart > isoEnd) return false;
    return isoValue >= isoStart && isoValue <= isoEnd;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_147m_74o1j0tr._.js.map