module.exports = [
(()=>{"use strict";return[
"[project]/src/lib/commerce-reference.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/customer-commerce.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recordBalanceAdjustment",
    ()=>recordBalanceAdjustment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$commerce$2d$reference$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/commerce-reference.ts [app-ssr] (ecmascript)");
;
;
async function recordBalanceAdjustment(shop, owner, customer, request) {
    const body = JSON.stringify(request);
    const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$commerce$2d$reference$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commerceReferenceHash"])(body);
    const slot = `owner:${shop}:${owner}:customer:${customer}:adjustment:${hash}`;
    let key;
    try {
        key = sessionStorage.getItem(slot) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$commerce$2d$reference$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commerceRequestKey"])();
        sessionStorage.setItem(slot, key);
    } catch  {
        throw Error('Allow browser session storage before adjusting a balance.');
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])(`customers/${customer}/balance-adjustments`, {
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
}),
"[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BalanceAdjustmentsView",
    ()=>BalanceAdjustmentsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/displayName.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$components$2f$FinanceSkeletons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$OrderFilterDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$NewAdjustmentModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/dateRange.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/services/financePanelApi.ts [app-ssr] (ecmascript)");
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
const getTypeBadge = (type)=>{
    if (type === 'increase') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
            children: "increase"
        }, void 0, false, {
            fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20",
        children: "decrease"
    }, void 0, false, {
        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const BalanceAdjustmentsView = ()=>{
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(true);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [retry, setRetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const { refresh, profile, invalidate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePanel"])();
    const [adjustments, setAdjustments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showFilter, setShowFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('createdAt');
    const [sortAsc, setSortAsc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>({
            paymentType: 'all',
            status: 'all',
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayDateRange"])()
        }));
    // Pagination States
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [itemsPerPage, setItemsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [isItemsPerPageOpen, setIsItemsPerPageOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const itemsPerPageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Click outside to close items-per-page dropdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        setLoadError('');
        Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminPanelApi"].adjustments.list(),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminPanelApi"].users.list()
        ]).then(([items, userItems])=>{
            if (!active) return;
            setAdjustments(items);
            setUsers(userItems);
        }).catch((error)=>{
            if (active) setLoadError(error instanceof Error ? error.message : 'Unable to load records.');
        }).finally(()=>{
            if (active) setIsLoading(false);
        });
        const handleClickOutside = (event)=>{
            if (itemsPerPageRef.current && !itemsPerPageRef.current.contains(event.target)) {
                setIsItemsPerPageOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            active = false;
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        refresh,
        retry
    ]);
    // Handle adding new adjustment
    const handleAddAdjustment = async (newAdj)=>{
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminPanelApi"].adjustments.create({
            userId: newAdj.userId,
            type: newAdj.type,
            amount: newAdj.amount,
            remark: newAdj.remark
        }, {
            shop: profile.shop.code,
            owner: profile.id
        });
        setAdjustments((prev)=>[
                created,
                ...prev
            ]);
        setCurrentPage(1);
        invalidate();
    };
    // Sort toggle handler
    const handleSort = (field)=>{
        if (sortField === field) {
            setSortAsc(!sortAsc);
        } else {
            setSortField(field);
            setSortAsc(false);
        }
    };
    // Filter & Sort Data
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const result = adjustments.filter((item)=>{
            const lowerQuery = searchTerm.toLowerCase();
            const matchesSearch = !searchTerm || item.userId.toLowerCase().includes(lowerQuery) || item.userName.toLowerCase().includes(lowerQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["displayName"])(item).toLowerCase().includes(lowerQuery) || item.type.toLowerCase().includes(lowerQuery) || item.amount.toString().includes(lowerQuery) || item.remark && item.remark.toLowerCase().includes(lowerQuery) || item.createdAt.toLowerCase().includes(lowerQuery);
            const matchesType = filters.status === 'all' || item.type.toLowerCase() === filters.status.toLowerCase();
            const matchesDate = !filters.quickRange || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateWithinDisplayRange"])(item.createdAt, filters.startDate, filters.endDate);
            return matchesSearch && matchesType && matchesDate;
        });
        return result.sort((a, b)=>{
            let comparison = 0;
            if (sortField === 'userId') {
                comparison = a.userId.localeCompare(b.userId);
            } else if (sortField === 'userName') {
                comparison = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["displayName"])(a).localeCompare((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["displayName"])(b));
            } else if (sortField === 'amount') {
                comparison = a.amount - b.amount;
            } else if (sortField === 'remark') {
                comparison = (a.remark || '').localeCompare(b.remark || '');
            } else {
                comparison = Date.parse(a.createdAt) - Date.parse(b.createdAt);
            }
            return sortAsc ? comparison : -comparison;
        });
    }, [
        adjustments,
        searchTerm,
        filters,
        sortField,
        sortAsc
    ]);
    // Calculation Logic
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
    const paginatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const start = (currentPage - 1) * itemsPerPage;
        return filteredData.slice(start, start + itemsPerPage);
    }, [
        filteredData,
        currentPage,
        itemsPerPage,
        refresh,
        retry
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$components$2f$FinanceSkeletons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminPageSkeleton"], {}, void 0, false, {
            fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
            lineNumber: 155,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-3 sm:space-y-4 flex-1 flex flex-col",
        children: [
            loadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300",
                children: [
                    loadError,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "ml-3 underline",
                        onClick: ()=>setRetry((v)=>v + 1),
                        children: "Try again"
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                        lineNumber: 160,
                        columnNumber: 137
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                lineNumber: 160,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-end gap-2.5 sm:gap-3 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 sm:flex-initial sm:w-64 lg:w-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 z-10 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search adjustments...",
                                value: searchTerm,
                                onChange: (e)=>{
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                },
                                className: "w-full h-[38px] bg-black/40 border border-white/10 rounded-lg text-white/90 pl-9 pr-9 text-sm transition-all placeholder:text-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl focus:outline-none focus:border-white/30"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setSearchTerm('');
                                    setCurrentPage(1);
                                },
                                className: "absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white transition-colors cursor-pointer",
                                "aria-label": "Clear search",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIsModalOpen(true),
                        "aria-label": "New adjustment",
                        title: "New Adjustment",
                        className: "glass-effect-btn h-[38px] w-[38px] p-0 relative flex items-center justify-center border-white/10 hover:border-white/30 shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl hover:bg-white/10 cursor-pointer text-white/80 hover:text-white transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowFilter(!showFilter),
                        "aria-label": "Open balance adjustment filters",
                        "aria-expanded": showFilter,
                        className: `glass-effect-btn h-[38px] w-[38px] p-0 relative flex items-center justify-center border-white/10 hover:border-white/30 shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl ${showFilter ? 'bg-white/20 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'bg-black/40'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$OrderFilterDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderFilterDropdown"], {
                isOpen: showFilter,
                onClose: ()=>setShowFilter(false),
                onApply: (newFilters)=>{
                    setFilters(newFilters);
                    setCurrentPage(1);
                },
                initialFilters: filters,
                title: "Balance Adjustments Filter",
                statusOptions: [
                    {
                        label: 'All',
                        value: 'all'
                    },
                    {
                        label: 'Increase',
                        value: 'increase'
                    },
                    {
                        label: 'Decrease',
                        value: 'decrease'
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-container w-full flex-1 flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full overflow-x-auto custom-scrollbar flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-[10px] sm:text-[11px] md:text-sm whitespace-nowrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-white/5 text-white/50 border-b border-white/10 sticky top-0 z-10 backdrop-blur-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            {
                                                field: 'userId',
                                                label: 'ID'
                                            },
                                            {
                                                field: null,
                                                label: 'Type'
                                            },
                                            {
                                                field: 'userName',
                                                label: 'Username'
                                            },
                                            {
                                                field: 'amount',
                                                label: 'Amount'
                                            },
                                            {
                                                field: 'remark',
                                                label: 'Remark'
                                            },
                                            {
                                                field: 'createdAt',
                                                label: 'Created at'
                                            }
                                        ].map(({ field, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                "aria-sort": field && sortField === field ? sortAsc ? 'ascending' : 'descending' : undefined,
                                                className: "px-2 py-1.5 font-medium sm:px-2.5 sm:py-2 md:px-4 md:py-2.5",
                                                children: field ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleSort(field),
                                                    className: "group flex items-center gap-1 rounded hover:text-white",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)) : label
                                            }, label, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-white/5 text-white/80",
                                    children: paginatedData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 6,
                                            className: "h-[500px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center h-full text-white/40 space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        className: "w-12 h-12 opacity-50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium",
                                                        children: "Balance Adjustments Not Found"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                lineNumber: 268,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: paginatedData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-white/5 transition-colors group cursor-default",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/50 group-hover:text-white/80 transition-colors",
                                                        children: item.userId
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5",
                                                        children: getTypeBadge(item.type)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 font-medium text-white/90",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["displayName"])(item)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/70",
                                                        children: item.amount.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/70",
                                                        children: item.remark || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-4 md:py-2.5 text-white/70",
                                                        children: item.createdAt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                lineNumber: 277,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                        lineNumber: 275,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 sm:p-4 border-t border-white/10 bg-black/20 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white/40 text-sm min-w-[80px]",
                                children: [
                                    "Total: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/90 font-medium",
                                        children: Intl.NumberFormat('en-US', {
                                            notation: "compact",
                                            maximumFractionDigits: 1
                                        }).format(totalItems)
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                        lineNumber: 307,
                                        columnNumber: 20
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 sm:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        ref: itemsPerPageRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsItemsPerPageOpen(!isItemsPerPageOpen),
                                                className: "glass-effect-btn w-[72px] h-7 px-2.5 flex items-center justify-between text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: itemsPerPage
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-3.5 h-3.5 text-white/40 transition-transform shrink-0 ${isItemsPerPageOpen ? 'rotate-180' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: isItemsPerPageOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    className: "absolute bottom-full right-0 mb-2 w-full min-w-[72px] bg-[#161616] border border-white/15 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.9)] overflow-hidden z-50",
                                                    children: [
                                                        10,
                                                        50,
                                                        100
                                                    ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setItemsPerPage(num);
                                                                setCurrentPage(1);
                                                                setIsItemsPerPageOpen(false);
                                                            },
                                                            className: `w-full text-left px-3 py-1.5 text-xs transition-colors cursor-pointer ${itemsPerPage === num ? 'bg-white/20 text-white font-bold' : 'text-white/60 hover:bg-white/10 hover:text-white'}`,
                                                            children: num
                                                        }, num, false, {
                                                            fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-effect-btn h-7 flex items-center px-1 gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": "Previous page",
                                                onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                                disabled: currentPage === 1,
                                                className: `p-1 flex items-center justify-center rounded hover:bg-white/10 transition-colors shrink-0 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'text-white/80 hover:text-white'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/90 text-xs text-center select-none font-medium w-8 shrink-0",
                                                children: currentPage
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": "Next page",
                                                onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                                disabled: currentPage === totalPages || totalPages === 0,
                                                className: `p-1 flex items-center justify-center rounded hover:bg-white/10 transition-colors shrink-0 ${currentPage === totalPages || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : 'text-white/80 hover:text-white'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$NewAdjustmentModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewAdjustmentModal"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onSubmit: handleAddAdjustment,
                users: users
            }, void 0, false, {
                fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewAdjustmentModal",
    ()=>NewAdjustmentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/displayName.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/pageScrollLock.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const NewAdjustmentModal = ({ isOpen, onClose, onSubmit, users })=>{
    const [selectedUserId, setSelectedUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [userSearchQuery, setUserSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [remark, setRemark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isUserDropdownOpen, setIsUserDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const userDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typeDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedUser = users.find((u)=>u.id === selectedUserId);
    const nameAndIdValue = selectedUser ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["displayName"])(selectedUser)} (${selectedUser.id})` : '';
    const emailAndTgValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedUser) return '';
        const parts = [];
        if (selectedUser.email) parts.push(selectedUser.email);
        if (selectedUser.telegram) parts.push(selectedUser.telegram);
        return parts.join(' • ');
    }, [
        selectedUser
    ]);
    const balanceValue = selectedUser ? `${selectedUser.balance.toLocaleString()} Ks` : '';
    const filteredUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const q = userSearchQuery.trim().toLowerCase();
        if (!q) return users;
        return users.filter((u)=>u.id.toLowerCase().includes(q) || u.username.toLowerCase().includes(q) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["displayName"])(u).toLowerCase().includes(q) || (u.email || '').toLowerCase().includes(q) || (u.telegram || '').toLowerCase().includes(q));
    }, [
        userSearchQuery,
        users
    ]);
    const handleClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>{
        if (isSaving) return;
        setSelectedUserId('');
        setUserSearchQuery('');
        setType('');
        setAmount('');
        setRemark('');
        setSubmitError('');
        setIsUserDropdownOpen(false);
        setIsTypeDropdownOpen(false);
        onClose();
    }, [
        onClose,
        isSaving
    ]);
    // Prevent background scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const unlockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lockPageScroll"])();
        return ()=>{
            unlockScroll();
        };
    }, [
        isOpen
    ]);
    // Handle escape key and click outside dropdowns
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape') {
                if (isUserDropdownOpen) setIsUserDropdownOpen(false);
                else if (isTypeDropdownOpen) setIsTypeDropdownOpen(false);
                else if (isOpen) handleClose();
            }
        };
        const handleClickOutside = (e)=>{
            if (userDropdownRef.current && !userDropdownRef.current.contains(e.target)) {
                setIsUserDropdownOpen(false);
            }
            if (typeDropdownRef.current && !typeDropdownRef.current.contains(e.target)) {
                setIsTypeDropdownOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        isOpen,
        isUserDropdownOpen,
        isTypeDropdownOpen,
        handleClose
    ]);
    const handleSubmit = async (e)=>{
        if (e) e.preventDefault();
        if (isSaving) return;
        if (!selectedUserId || !type || !amount || !remark.trim() || !Number.isFinite(Number(amount)) || Number(amount) <= 0) {
            return;
        }
        if (selectedUser && type) {
            setIsSaving(true);
            setSubmitError('');
            try {
                await onSubmit({
                    userId: selectedUser.id,
                    userName: selectedUser.username,
                    displayName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["displayName"])(selectedUser),
                    type,
                    amount: Number(amount),
                    remark: remark.trim()
                });
                handleClose();
            } catch (error) {
                // Do not close the dialog or silently swallow a failed wallet save.
                // A rejected request must not look like a successful adjustment.
                setSubmitError(error instanceof Error && error.message.trim() ? error.message : 'Unable to save balance adjustment. Please try again after checking the backend status.');
            } finally{
                setIsSaving(false);
            }
        }
    };
    const labelClass = "block text-[11px] font-medium text-white/70 mb-1";
    const inputClass = "w-full bg-black/40 border border-white/10 focus:border-white/40 focus:ring-1 focus:ring-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder:text-white/30 transition-all outline-none";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm select-none transition-all overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": "Close balance adjustment dialog",
                    className: "absolute inset-0 cursor-default",
                    onClick: handleClose
                }, void 0, false, {
                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 10
                    },
                    transition: {
                        duration: 0.2,
                        ease: 'easeOut'
                    },
                    className: "relative z-10 w-full max-w-[370px] max-h-[calc(100vh-2rem)] flex flex-col bg-[#0d0d0d] border border-white/10 shadow-2xl rounded-lg overflow-hidden text-white select-text my-auto",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "adjustment-dialog-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3.5 py-3 border-b border-white/5 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "adjustment-dialog-title",
                                    className: "text-sm font-bold text-white tracking-tight",
                                    children: "Create Balance Adjustment"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleClose,
                                    className: "text-white/40 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer",
                                    "aria-label": "Close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "p-3.5 space-y-2.5 overflow-y-auto custom-scrollbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative ${isUserDropdownOpen ? 'z-50' : 'z-10'}`,
                                    ref: userDropdownRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "user-search-input",
                                            className: labelClass,
                                            children: [
                                                "User (ID, Name, Email & TG)",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500 ml-0.5",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 46
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "w-3.5 h-3.5 text-white/40 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "user-search-input",
                                                    type: "text",
                                                    required: true,
                                                    autoComplete: "off",
                                                    value: userSearchQuery,
                                                    placeholder: "Search by ID, Name, Email, or @TG...",
                                                    onFocus: ()=>setIsUserDropdownOpen(true),
                                                    onChange: (e)=>{
                                                        setUserSearchQuery(e.target.value);
                                                        setIsUserDropdownOpen(true);
                                                        if (selectedUserId && e.target.value !== nameAndIdValue) {
                                                            setSelectedUserId('');
                                                        }
                                                    },
                                                    className: `${inputClass} pl-8 pr-7.5`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    tabIndex: -1,
                                                    onClick: ()=>{
                                                        if (selectedUserId || userSearchQuery) {
                                                            setSelectedUserId('');
                                                            setUserSearchQuery('');
                                                            setIsUserDropdownOpen(true);
                                                        } else {
                                                            setIsUserDropdownOpen(!isUserDropdownOpen);
                                                        }
                                                    },
                                                    className: "absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 p-0.5 rounded cursor-pointer transition-colors",
                                                    children: userSearchQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-3.5 h-3.5 transition-transform ${isUserDropdownOpen ? 'rotate-180' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isUserDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: -4
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -4
                                                },
                                                transition: {
                                                    duration: 0.15
                                                },
                                                className: "absolute top-full left-0 right-0 mt-1 bg-[#161616] border border-white/10 rounded-lg shadow-xl flex flex-col overflow-hidden max-h-40 overflow-y-auto custom-scrollbar",
                                                children: filteredUsers.length > 0 ? filteredUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setSelectedUserId(user.id);
                                                            setUserSearchQuery(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["displayName"])(user)} (${user.id})`);
                                                            setIsUserDropdownOpen(false);
                                                        },
                                                        className: `w-full text-left px-2.5 py-1.5 text-xs hover:bg-white/10 transition-colors flex flex-col gap-0.5 cursor-pointer ${selectedUserId === user.id ? 'bg-white/10' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-white/90 text-[11px]",
                                                                        children: [
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["displayName"])(user),
                                                                            " (",
                                                                            user.id,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    user.telegram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-white/50",
                                                                        children: user.telegram
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 33
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-white/40",
                                                                children: [
                                                                    user.email,
                                                                    " • ",
                                                                    user.telegram
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, user.id, true, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-3 py-2.5 text-center text-xs text-white/40",
                                                    children: "No users found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                lineNumber: 235,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-1.5 bg-white/[0.02] border border-white/5 rounded-lg p-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-white/50 shrink-0",
                                                    children: "Name & (ID)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-medium text-white/90 truncate text-right",
                                                    children: nameAndIdValue || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-white/50 shrink-0",
                                                    children: "Email & TG"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-white/70 truncate text-right",
                                                    children: emailAndTgValue || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-white/50 shrink-0",
                                                    children: "Balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-semibold text-white/95 text-right",
                                                    children: balanceValue || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `relative ${isTypeDropdownOpen ? 'z-50' : 'z-10'}`,
                                            ref: typeDropdownRef,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "type-dropdown-button",
                                                    className: labelClass,
                                                    children: [
                                                        "Type",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500 ml-0.5",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            tabIndex: -1,
                                                            autoComplete: "off",
                                                            className: "opacity-0 absolute inset-0 pointer-events-none w-full h-full",
                                                            value: type,
                                                            onChange: ()=>{},
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            id: "type-dropdown-button",
                                                            type: "button",
                                                            onClick: ()=>setIsTypeDropdownOpen(!isTypeDropdownOpen),
                                                            className: `${inputClass} flex items-center justify-between cursor-pointer`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `truncate text-xs ${type ? 'text-white font-medium' : 'text-white/30'}`,
                                                                    children: type === 'increase' ? 'Increase' : type === 'decrease' ? 'Decrease' : 'Select'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: `w-3 h-3 text-white/40 shrink-0 ml-1 transition-transform ${isTypeDropdownOpen ? 'rotate-180' : ''}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    children: isTypeDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: -4
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            y: -4
                                                        },
                                                        transition: {
                                                            duration: 0.15
                                                        },
                                                        className: "absolute top-full left-0 right-0 mt-1 bg-[#161616] border border-white/10 rounded-lg shadow-xl flex flex-col overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setType('increase');
                                                                    setIsTypeDropdownOpen(false);
                                                                },
                                                                className: `w-full text-left px-2.5 py-1.5 text-xs hover:bg-white/10 transition-colors cursor-pointer ${type === 'increase' ? 'bg-white/5 text-emerald-400' : 'text-white/90'}`,
                                                                children: "Increase"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setType('decrease');
                                                                    setIsTypeDropdownOpen(false);
                                                                },
                                                                className: `w-full text-left px-2.5 py-1.5 text-xs hover:bg-white/10 transition-colors cursor-pointer ${type === 'decrease' ? 'bg-white/5 text-red-400' : 'text-white/90'}`,
                                                                children: "Decrease"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "adjustment-amount",
                                                    className: labelClass,
                                                    children: [
                                                        "Amount",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500 ml-0.5",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "adjustment-amount",
                                                    type: "number",
                                                    required: true,
                                                    value: amount,
                                                    placeholder: "0",
                                                    onChange: (e)=>setAmount(e.target.value),
                                                    min: "1",
                                                    className: inputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "adjustment-remark",
                                            className: labelClass,
                                            children: [
                                                "Remark ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/40 font-normal text-[10px]",
                                                    children: "(Required)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 26
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "adjustment-remark",
                                            type: "text",
                                            required: true,
                                            maxLength: 300,
                                            placeholder: "Enter reason",
                                            value: remark,
                                            onChange: (e)=>setRemark(e.target.value),
                                            className: inputClass
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    role: "alert",
                                    className: "rounded-md border border-red-500/30 bg-red-500/10 px-2.5 py-2 text-xs text-red-300",
                                    children: submitError
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                    lineNumber: 392,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2.5 border-t border-white/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleClose,
                                            className: "px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 font-medium text-xs rounded-md active:scale-[0.98] transition-all cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 399,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSaving,
                                            className: "px-4 py-1.5 bg-white hover:bg-neutral-200 text-black font-semibold text-xs rounded-md active:scale-[0.98] transition-all cursor-pointer shadow-[0_0_12px_rgba(255,255,255,0.12)] hover:shadow-[0_0_18px_rgba(255,255,255,0.2)] border border-white/40 disabled:cursor-not-allowed disabled:opacity-60",
                                            children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 80
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Saving..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                                lineNumber: 411,
                                                columnNumber: 31
                                            }, ("TURBOPACK compile-time value", void 0)) : 'Create'
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                            lineNumber: 406,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                                    lineNumber: 398,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
            lineNumber: 150,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/reference-ui/features/orders/components/NewAdjustmentModal.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderFilterDropdown",
    ()=>OrderFilterDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/pageScrollLock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/dateRange.ts [app-ssr] (ecmascript)");
;
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
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFilters?.status || 'all');
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>initialFilters?.startDate || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayDateRange"])().startDate);
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>initialFilters?.endDate || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayDateRange"])().endDate);
    const [selectedQuickRange, setSelectedQuickRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFilters?.quickRange || (includeAllTime ? 'All Time' : 'Last 30 Days'));
    const [awaitingPaymentOnly, setAwaitingPaymentOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Boolean(initialFilters?.awaitingPaymentOnly));
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDateRangeDropdownOpen, setIsDateRangeDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statusSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dateRangeSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sync state when initialFilters changes or modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialFilters) {
            const fallbackRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayDateRange"])();
            // This animated dialog stays mounted, so refresh the draft when it reopens.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setStatus(initialFilters.status || 'all');
            setStartDate(initialFilters.startDate || fallbackRange.startDate);
            setEndDate(initialFilters.endDate || fallbackRange.endDate);
            setSelectedQuickRange(initialFilters.quickRange || (includeAllTime ? 'All Time' : 'Last 30 Days'));
            setAwaitingPaymentOnly(Boolean(initialFilters.awaitingPaymentOnly));
        }
    }, [
        initialFilters,
        isOpen,
        includeAllTime
    ]);
    // Lock background body scroll when modal is open (like Review Order modal)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const unlockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lockPageScroll"])();
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            unlockScroll();
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        isOpen,
        onClose
    ]);
    // Click outside to close inner selects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleOutsideClick = (e)=>{
            if (statusSelectRef.current && !statusSelectRef.current.contains(e.target)) {
                setIsStatusDropdownOpen(false);
            }
            if (dateRangeSelectRef.current && !dateRangeSelectRef.current.contains(e.target)) {
                setIsDateRangeDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return ()=>document.removeEventListener('mousedown', handleOutsideClick);
    }, []);
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
            const rangeDates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getQuickDisplayDateRange"])(range);
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
        const defaultRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayDateRange"])();
        setStatus('all');
        setStartDate(defaultRange.startDate);
        setEndDate(defaultRange.endDate);
        setSelectedQuickRange(includeAllTime ? 'All Time' : 'Last 30 Days');
        setAwaitingPaymentOnly(false);
        setIsStatusDropdownOpen(false);
        setIsDateRangeDropdownOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-6 sm:pt-10 bg-black/75 backdrop-blur-md transition-all select-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": "Close order filter dialog",
                    className: "absolute inset-0 cursor-default",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-white/10 bg-white/[0.02] rounded-t-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "order-filter-dialog-title",
                                    className: "text-base sm:text-lg font-bold text-white tracking-tight",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 space-y-3 sm:space-y-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `space-y-1 relative ${isStatusDropdownOpen ? 'z-50' : 'z-10'}`,
                                    ref: statusSelectRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "block text-xs sm:text-sm font-medium text-white/70",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setIsStatusDropdownOpen(!isStatusDropdownOpen);
                                                    },
                                                    className: "w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white flex items-center justify-between shadow-inner hover:border-white/20 focus:border-white/30 transition-colors cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: statusOptions.find((opt)=>opt.value === status)?.label || status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    children: isStatusDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
                                                        children: statusOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `space-y-1 relative ${isDateRangeDropdownOpen ? 'z-50' : 'z-10'}`,
                                    ref: dateRangeSelectRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "block text-xs sm:text-sm font-medium text-white/70",
                                            children: "Date Range"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setIsDateRangeDropdownOpen(!isDateRangeDropdownOpen);
                                                        setIsStatusDropdownOpen(false);
                                                    },
                                                    className: "w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white flex items-center justify-between shadow-inner hover:border-white/20 focus:border-white/30 transition-colors cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: selectedQuickRange || 'Select Date'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    children: isDateRangeDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
                                                        children: dateRangeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: selectedQuickRange === 'Select Date' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "order-filter-start-date",
                                                        className: "block text-xs font-medium text-white/60",
                                                        children: "Start Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "order-filter-start-date",
                                                        type: "date",
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toIsoDate"])(startDate),
                                                        onChange: (e)=>{
                                                            setStartDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisplayDate"])(e.target.value));
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "order-filter-end-date",
                                                        className: "block text-xs font-medium text-white/60",
                                                        children: "End Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "order-filter-end-date",
                                                        type: "date",
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toIsoDate"])(endDate),
                                                        onChange: (e)=>{
                                                            setEndDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$dateRange$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisplayDate"])(e.target.value));
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
                                showAwaitingPaymentToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/35 px-3.5 py-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm font-medium text-white/70",
                                                    children: "Awaiting Payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            role: "switch",
                                            "aria-checked": awaitingPaymentOnly,
                                            "aria-label": "Show awaiting payment orders only",
                                            onClick: ()=>setAwaitingPaymentOnly((current)=>!current),
                                            className: `relative h-6 w-12 shrink-0 rounded-full border transition-colors cursor-pointer ${awaitingPaymentOnly ? 'bg-white/20 border-white/35' : 'bg-black/60 border-white/15'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute left-0 top-1 h-4 w-4 rounded-full bg-white transition-transform ${awaitingPaymentOnly ? 'translate-x-7' : 'translate-x-1'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 sm:px-5 py-3 sm:py-3.5 bg-black/40 border-t border-white/10 flex items-center justify-end gap-2.5 rounded-b-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleReset,
                                    className: "mr-auto rounded-lg px-3 py-1.5 text-xs font-medium text-white/55 hover:bg-white/5 hover:text-white",
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleApply,
                                    className: "ultimate-3d-btn text-xs sm:text-sm px-5 py-1.5 font-bold cursor-pointer",
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/orders/components/OrderFilterDropdown.tsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminPageSkeleton",
    ()=>AdminPageSkeleton,
    "DashboardSkeleton",
    ()=>DashboardSkeleton,
    "SkeletonBlock",
    ()=>SkeletonBlock,
    "TableSkeletonRows",
    ()=>TableSkeletonRows
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const widthClasses = [
    'w-20',
    'w-28',
    'w-16',
    'w-24',
    'w-32',
    'w-14'
];
const SkeletonBlock = ({ className = '' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        className: `animate-shimmer-dark rounded-md bg-white/5 ${className}`
    }, void 0, false, {
        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const TableSkeletonRows = ({ columns, rows = 7 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: Array.from({
            length: rows
        }).map((_, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "pointer-events-none border-b border-white/5",
                children: Array.from({
                    length: columns
                }).map((__, columnIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: `h-3.5 ${widthClasses[(rowIndex + columnIndex) % widthClasses.length]} max-w-full`
                        }, void 0, false, {
                            fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, `skeleton-cell-${rowIndex}-${columnIndex}`, false, {
                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, `skeleton-row-${rowIndex}`, false, {
                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const AdminPageSkeleton = ({ label = 'Loading…' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex min-h-[55vh] w-full flex-1 flex-col gap-4",
        role: "status",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden gap-2 sm:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-9 w-28"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                lineNumber: 40,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-9 w-28"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                lineNumber: 41,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                        lineNumber: 39,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex min-w-0 flex-1 items-center justify-end gap-2 sm:flex-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-9 min-w-0 flex-1 sm:w-64 sm:flex-none lg:w-80"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                lineNumber: 44,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-9 w-9 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                lineNumber: 45,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                        lineNumber: 43,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-container flex min-h-80 flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-4 border-b border-white/10 bg-white/5 px-4 py-3 sm:grid-cols-6",
                        children: Array.from({
                            length: 6
                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-3 w-16 max-w-full"
                            }, `header-${index}`, false, {
                                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                        lineNumber: 50,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 divide-y divide-white/5 px-4",
                        children: Array.from({
                            length: 7
                        }).map((_, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-4 py-3 sm:grid-cols-6",
                                children: Array.from({
                                    length: 6
                                }).map((__, columnIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: `h-3.5 ${widthClasses[(rowIndex + columnIndex) % widthClasses.length]} max-w-full`
                                    }, `page-cell-${rowIndex}-${columnIndex}`, false, {
                                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, `page-row-${rowIndex}`, false, {
                                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                        lineNumber: 55,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-t border-white/10 bg-black/20 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-3.5 w-20"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                lineNumber: 68,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-7 w-16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                        lineNumber: 70,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-7 w-24"
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                        lineNumber: 71,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                lineNumber: 69,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                        lineNumber: 67,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                lineNumber: 49,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DashboardSkeleton = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex w-full flex-1 flex-col gap-4",
        role: "status",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Loading dashboard…"
            }, void 0, false, {
                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                lineNumber: 80,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                        className: "h-9 w-32"
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                        lineNumber: 83,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                        className: "h-9 w-32"
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                        lineNumber: 84,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                        className: "h-9 w-24"
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                        lineNumber: 85,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
                children: Array.from({
                    length: 10
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "liquid-glass-card rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-3 w-20"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "mt-4 h-7 w-28"
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `kpi-${index}`, true, {
                        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
                lineNumber: 87,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/reference-ui/shared/components/FinanceSkeletons.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/reference-ui/shared/services/financePanelApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$customer$2d$commerce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/customer-commerce.ts [app-ssr] (ecmascript)");
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])(`${path}?page=${page}&size=100`);
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
            const p = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])('customer-orders?' + financeQuery(f));
            return cursorPage({
                ...p,
                content: p.content.map(orderItem)
            });
        }
    },
    topUps: {
        page: async (f)=>{
            const p = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])('recharges?' + financeQuery(f, true));
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
            const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$customer$2d$commerce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recordBalanceAdjustment"])(scope.shop, scope.owner, id, {
                amount: value.type === 'decrease' ? -amount : amount,
                note
            });
            return adjustment(row);
        }
    }
};
}),
"[project]/src/reference-ui/shared/utils/dateRange.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
]})(),
"[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx [app-ssr] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx [app-ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=src_0e537x022dp3x._.js.map