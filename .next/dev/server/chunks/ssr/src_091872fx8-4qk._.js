(()=>{"use strict";module.exports = [
"[project]/src/components/finance-detail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FinanceDetail",
    ()=>FinanceDetail,
    "financeDetailId",
    ()=>financeDetailId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$ReviewPaymentModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$users$2f$components$2f$UserStatusConfirmModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/services/usersApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/services/financePanelApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/currency.ts [app-ssr] (ecmascript)");
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
function financeDetailId(mode, value) {
    const id = value.replace(mode === 'orders' ? /^ord-/ : /^topup-/, '');
    return /^[1-9]\d{0,15}$/.test(id) ? id : null;
}
function DetailRow({ label, children, mono = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "finance-detail-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                scope: "row",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/finance-detail.tsx",
                lineNumber: 24,
                columnNumber: 44
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: mono ? 'finance-detail-mono' : undefined,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/finance-detail.tsx",
                lineNumber: 24,
                columnNumber: 72
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/finance-detail.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
function inputLabel(key) {
    const token = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    if ([
        'playerid',
        'userid',
        'uid',
        'id'
    ].includes(token)) return 'Player ID';
    if ([
        'serverid',
        'zoneid',
        'server',
        'zone'
    ].includes(token)) return 'Server ID';
    if ([
        'charname',
        'charactername'
    ].includes(token)) return 'Character Name';
    return key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[_-]+/g, ' ').replace(/^./, (letter)=>letter.toUpperCase());
}
function FinanceDetail({ mode, reference }) {
    const { profile, invalidate, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePanel"])();
    const id = financeDetailId(mode, reference);
    const recharge = mode === 'recharge';
    const back = recharge ? '/recharge-list' : '/order-list';
    const endpoint = recharge ? 'recharges' : 'customer-orders';
    const [paymentOpen, setPaymentOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [banOpen, setBanOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [actionError, setActionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [refundOpen, setRefundOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const actionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useData"])(`finance-detail:${profile.shop.id}:${mode}:${id}`, ()=>id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])(`${endpoint}/${id}`) : Promise.resolve(null));
    const record = result.data;
    const customerId = record?.customerId;
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useData"])(`finance-detail-user:${profile.shop.id}:${customerId ?? 'pending'}`, ()=>customerId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usersApi"].detail(String(customerId)) : Promise.resolve(null));
    const customer = user.data;
    const recent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useData"])(`finance-customer-orders:${profile.shop.id}:${customerId ?? 'pending'}`, ()=>customerId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])(`users/${customerId}/orders?size=5`) : Promise.resolve(null));
    const title = record ? recharge ? record.publicTransactionId : record.publicOrderId || `ord-${id}` : 'Order information';
    const order = record && !recharge ? record : null;
    const topup = record && recharge ? record : null;
    const status = record ? order ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderItem"])(order).status : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rechargeItem"])(topup).status : '';
    const statusClass = status === 'Completed' ? 'completed' : status === 'Refunded' ? 'refunded' : status === 'Processing' || status === 'Pending' ? 'processing' : 'failed';
    const displayName = customer?.displayName || customer?.username || order?.customerName || topup?.buyerName || '—';
    const userName = customer?.username && customer.username !== displayName ? `${displayName} (${customer.username})` : displayName;
    const updated = order?.updatedAt || topup?.reviewedAt || topup?.submittedAt || record?.createdAt;
    const inputs = Object.entries(order?.inputs || {}).filter(([, value])=>value != null && String(value).trim() !== '');
    const inputLabels = new Set(inputs.map(([key])=>inputLabel(key)));
    const canRefund = !!order && !order.refunded && [
        'PENDING',
        'PROCESSING'
    ].includes(order.status) && (order.canRefund === true || order.manual);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, [
        mode,
        reference
    ]);
    async function settle(next) {
        if (!order || actionRef.current) return;
        actionRef.current = true;
        setAction(next);
        setActionError('');
        try {
            if (next === 'REFUND') {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["send"])(`customer-orders/${order.id}/refund`, {});
                setRefundOpen(false);
                notify('Order refunded. Customer wallet credited.');
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["send"])(`customer-orders/${order.id}/settle`, {
                    action: next
                });
                notify('Order updated.');
            }
            invalidate();
        } catch (error) {
            setActionError(error instanceof Error ? error.message : 'Unable to update the order.');
        } finally{
            actionRef.current = false;
            setAction(null);
        }
    }
    const backLink = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "finance-detail-back",
        href: back,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                size: 17
            }, void 0, false, {
                fileName: "[project]/src/components/finance-detail.tsx",
                lineNumber: 77,
                columnNumber: 67
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Back"
            }, void 0, false, {
                fileName: "[project]/src/components/finance-detail.tsx",
                lineNumber: 77,
                columnNumber: 89
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/finance-detail.tsx",
        lineNumber: 77,
        columnNumber: 17
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "reference-finance-ui finance-detail-page",
        "aria-label": recharge ? 'Recharge details' : 'Product order details',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "finance-detail-content",
                children: !id || result.error || !result.loading && record === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "finance-detail-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "finance-detail-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "Order information"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-detail.tsx",
                                    lineNumber: 81,
                                    columnNumber: 140
                                }, this),
                                backLink
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-detail.tsx",
                            lineNumber: 81,
                            columnNumber: 98
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "alert",
                            className: "finance-detail-notice",
                            children: [
                                result.error || 'Order not found.',
                                result.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: invalidate,
                                    children: "Try again"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-detail.tsx",
                                    lineNumber: 81,
                                    columnNumber: 284
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-detail.tsx",
                            lineNumber: 81,
                            columnNumber: 185
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/finance-detail.tsx",
                    lineNumber: 81,
                    columnNumber: 57
                }, this) : !record ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "finance-detail-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "finance-detail-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "Order information"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-detail.tsx",
                                    lineNumber: 81,
                                    columnNumber: 452
                                }, this),
                                backLink
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-detail.tsx",
                            lineNumber: 81,
                            columnNumber: 410
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "finance-detail-notice",
                            role: "status",
                            children: "Loading order details…"
                        }, void 0, false, {
                            fileName: "[project]/src/components/finance-detail.tsx",
                            lineNumber: 81,
                            columnNumber: 497
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/finance-detail.tsx",
                    lineNumber: 81,
                    columnNumber: 369
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        result.refreshError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "finance-detail-notice",
                            role: "alert",
                            children: [
                                result.refreshError,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: invalidate,
                                    children: "Try again"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-detail.tsx",
                                    lineNumber: 82,
                                    columnNumber: 98
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-detail.tsx",
                            lineNumber: 82,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "finance-detail-layout",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "finance-detail-column",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "finance-detail-card",
                                        "aria-labelledby": "finance-order-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                className: "finance-detail-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        id: "finance-order-title",
                                                        children: title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 48
                                                    }, this),
                                                    backLink
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                lineNumber: 84,
                                                columnNumber: 6
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "finance-detail-table",
                                                "aria-label": "Order information",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        order && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Name",
                                                                    children: order.packageName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 86,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Product",
                                                                    children: order.gameName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 86,
                                                                    columnNumber: 72
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/finance-detail.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                            label: "Status",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `finance-detail-status ${statusClass}`,
                                                                children: status
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-detail.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 7
                                                        }, this),
                                                        order ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Source",
                                                                    children: order.manual ? 'Manual Order' : 'Direct Top-up'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 89,
                                                                    columnNumber: 8
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Quantity",
                                                                    children: order.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 90,
                                                                    columnNumber: 8
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Price",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(order.unitPrice))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 91,
                                                                    columnNumber: 8
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Total",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(order.sellPrice))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 92,
                                                                    columnNumber: 8
                                                                }, this),
                                                                order.playerId && !inputLabels.has('Player ID') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Player ID",
                                                                    mono: true,
                                                                    children: order.playerId
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 56
                                                                }, this),
                                                                order.serverId && !inputLabels.has('Server ID') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Server ID",
                                                                    mono: true,
                                                                    children: order.serverId
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 56
                                                                }, this),
                                                                inputs.map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                        label: inputLabel(key),
                                                                        mono: true,
                                                                        children: String(value)
                                                                    }, key, false, {
                                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                                        lineNumber: 95,
                                                                        columnNumber: 35
                                                                    }, this)),
                                                                (canRefund || order.manual && !order.refunded && [
                                                                    'PENDING',
                                                                    'PROCESSING'
                                                                ].includes(order.status)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Control",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "finance-detail-controls",
                                                                        children: [
                                                                            order.manual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                disabled: !!action,
                                                                                onClick: ()=>void settle('SUCCESS'),
                                                                                children: [
                                                                                    action === 'SUCCESS' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                        size: 16,
                                                                                        className: "animate-spin"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                                                        lineNumber: 96,
                                                                                        columnNumber: 286
                                                                                    }, this) : null,
                                                                                    "Mark delivered"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                                lineNumber: 96,
                                                                                columnNumber: 187
                                                                            }, this),
                                                                            canRefund && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: "danger",
                                                                                disabled: !!action,
                                                                                onClick: ()=>{
                                                                                    setActionError('');
                                                                                    setRefundOpen(true);
                                                                                },
                                                                                children: "Refund"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                                lineNumber: 96,
                                                                                columnNumber: 373
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 131
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 96,
                                                                    columnNumber: 104
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/finance-detail.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 14
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Amount",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(topup.amount))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 8
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Txn No.",
                                                                    mono: true,
                                                                    children: topup.publicTransactionId
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 8
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Payment",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "finance-detail-payment",
                                                                        onClick: ()=>setPaymentOpen(true),
                                                                        children: "View Payment"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                                        lineNumber: 100,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 100,
                                                                    columnNumber: 8
                                                                }, this),
                                                                topup.adminNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                    label: "Note",
                                                                    children: topup.adminNote
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 101,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/finance-detail.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 77
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                lineNumber: 85,
                                                columnNumber: 6
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                                className: "finance-detail-timestamps",
                                                children: [
                                                    "Created: ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businessTime"])(record.createdAt),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        children: " | "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 93
                                                    }, this),
                                                    "Updated: ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businessTime"])(updated)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                lineNumber: 104,
                                                columnNumber: 6
                                            }, this),
                                            actionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "finance-detail-notice",
                                                role: "alert",
                                                children: actionError
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                lineNumber: 105,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/finance-detail.tsx",
                                        lineNumber: 83,
                                        columnNumber: 83
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/finance-detail.tsx",
                                    lineNumber: 83,
                                    columnNumber: 44
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "finance-detail-column",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "finance-detail-card",
                                            "aria-labelledby": "finance-user-title",
                                            "aria-busy": user.loading,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                    className: "finance-detail-header",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            id: "finance-user-title",
                                                            children: "User"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-detail.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 48
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `finance-detail-ban ${customer?.status === 'Banned' ? 'is-banned' : ''}`,
                                                            disabled: !customer,
                                                            onClick: ()=>setBanOpen(true),
                                                            children: customer?.status === 'Banned' ? 'UNBAN' : 'BAN'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-detail.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 85
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 6
                                                }, this),
                                                (user.error || user.refreshError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "finance-detail-notice",
                                                    role: "alert",
                                                    children: [
                                                        user.error || user.refreshError,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: invalidate,
                                                            children: "Try again"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-detail.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 121
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 40
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "finance-detail-table",
                                                    "aria-label": "User information",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                label: "Customer ID",
                                                                mono: true,
                                                                children: customerId
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 7
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                label: "Name",
                                                                children: userName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 7
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                label: "Email",
                                                                mono: true,
                                                                children: customer?.email || topup?.email || 'Not linked'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 7
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                label: "Google",
                                                                mono: true,
                                                                children: customer ? customer.googleId || customer.google || 'Not linked' : user.loading ? 'Loading…' : '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 7
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                label: "Telegram",
                                                                mono: true,
                                                                children: customer ? customer.telegram || 'Not linked' : user.loading ? 'Loading…' : '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 7
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                label: "Role",
                                                                children: customer?.role || '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 7
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                label: "Balance",
                                                                children: customer ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(customer.balance)) : user.loading ? 'Loading…' : '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 7
                                                            }, this),
                                                            customer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                        label: "Status",
                                                                        children: customer.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 20
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                                                        label: "Total Spent",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(customer.totalSpent))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 75
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 18
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 76
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 6
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-detail.tsx",
                                            lineNumber: 108,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "finance-detail-card",
                                            "aria-labelledby": "finance-recent-title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                    className: "finance-detail-header",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        id: "finance-recent-title",
                                                        children: "Latest Orders History"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 127
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 85
                                                }, this),
                                                (recent.error || recent.refreshError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    role: "alert",
                                                    className: "finance-detail-notice",
                                                    children: [
                                                        recent.error || recent.refreshError,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: invalidate,
                                                            children: "Try again"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/finance-detail.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 129
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 44
                                                }, this),
                                                !recent.data && !recent.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "finance-detail-notice",
                                                    role: "status",
                                                    children: "Loading recent orders…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 35
                                                }, this) : recent.data && !recent.data.content.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "finance-detail-notice",
                                                    children: "No recent orders are available."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 154
                                                }, this) : recent.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-x-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "finance-recent-table",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            children: "Order ID"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/finance-detail.tsx",
                                                                            lineNumber: 124,
                                                                            columnNumber: 324
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            children: "Status"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/finance-detail.tsx",
                                                                            lineNumber: 124,
                                                                            columnNumber: 341
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            children: "Price"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/finance-detail.tsx",
                                                                            lineNumber: 124,
                                                                            columnNumber: 356
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 320
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 313
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: recent.data.content.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: `/order-list/ord-${item.id}`,
                                                                                    children: item.publicOrderId || `ord-${item.id}`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                                                    lineNumber: 124,
                                                                                    columnNumber: 443
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                                lineNumber: 124,
                                                                                columnNumber: 439
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderItem"])(item).status
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                                lineNumber: 124,
                                                                                columnNumber: 535
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(item.sellPrice))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                                lineNumber: 124,
                                                                                columnNumber: 568
                                                                            }, this)
                                                                        ]
                                                                    }, item.id, true, {
                                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                                        lineNumber: 124,
                                                                        columnNumber: 421
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/finance-detail.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 383
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/finance-detail.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 273
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/finance-detail.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 240
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/finance-detail.tsx",
                                            lineNumber: 122,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/finance-detail.tsx",
                                    lineNumber: 106,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/finance-detail.tsx",
                            lineNumber: 83,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/finance-detail.tsx",
                    lineNumber: 81,
                    columnNumber: 585
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/finance-detail.tsx",
                lineNumber: 80,
                columnNumber: 3
            }, this),
            refundOpen && order && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
                title: `Refund ${order.publicOrderId || `ord-${order.id}`}?`,
                onClose: ()=>{
                    if (!actionRef.current) setRefundOpen(false);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "finance-refund-copy",
                        children: [
                            "Refund ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(order.sellPrice))
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-detail.tsx",
                                lineNumber: 129,
                                columnNumber: 46
                            }, this),
                            " to this customer's wallet and stop this order?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/finance-detail.tsx",
                        lineNumber: 129,
                        columnNumber: 4
                    }, this),
                    actionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "finance-detail-notice",
                        role: "alert",
                        children: actionError
                    }, void 0, false, {
                        fileName: "[project]/src/components/finance-detail.tsx",
                        lineNumber: 130,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "finance-detail-controls finance-refund-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: !!action,
                                onClick: ()=>setRefundOpen(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/finance-detail.tsx",
                                lineNumber: 131,
                                columnNumber: 68
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "danger",
                                disabled: !!action || !canRefund,
                                onClick: ()=>void settle('REFUND'),
                                children: [
                                    action === 'REFUND' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 16,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/finance-detail.tsx",
                                        lineNumber: 131,
                                        columnNumber: 288
                                    }, this) : null,
                                    "Confirm refund"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/finance-detail.tsx",
                                lineNumber: 131,
                                columnNumber: 160
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/finance-detail.tsx",
                        lineNumber: 131,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/finance-detail.tsx",
                lineNumber: 128,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$orders$2f$components$2f$ReviewPaymentModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReviewPaymentModal"], {
                isOpen: paymentOpen && !!topup,
                onClose: ()=>setPaymentOpen(false),
                order: topup ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$financePanelApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rechargeItem"])(topup) : null,
                mode: "view"
            }, void 0, false, {
                fileName: "[project]/src/components/finance-detail.tsx",
                lineNumber: 133,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$users$2f$components$2f$UserStatusConfirmModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserStatusConfirmModal"], {
                isOpen: banOpen && !!customer,
                onClose: ()=>setBanOpen(false),
                user: customer ?? null,
                action: customer?.status === 'Banned' ? 'Unban' : 'Ban',
                onConfirm: async (selected)=>{
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usersApi"].setBanned(selected.id, selected.status !== 'Banned');
                    invalidate();
                    notify(selected.status === 'Banned' ? 'User unbanned.' : 'User banned.');
                }
            }, void 0, false, {
                fileName: "[project]/src/components/finance-detail.tsx",
                lineNumber: 134,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/finance-detail.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, this);
}
}),
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
"[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewPaymentModal",
    ()=>ReviewPaymentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/pageScrollLock.ts [app-ssr] (ecmascript)");
/* eslint-disable react-hooks/set-state-in-effect */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
;
;
;
;
const formatNumberWithCommas = (val)=>{
    const numericOnly = String(val).replace(/[^0-9]/g, '');
    if (!numericOnly) return '';
    return Number(numericOnly).toLocaleString('en-US');
};
const ReviewPaymentModal = ({ isOpen, onClose, order, mode = 'view', onConfirm, onCancelOrder, onAdjustBalance })=>{
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [reason, setReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [savingAction, setSavingAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const actionInFlightRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const initializedOrderKeyRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const currentOrderKey = order ? `${order.id}-${mode}` : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const unlockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lockPageScroll"])();
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape' && !actionInFlightRef.current) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md transition-all animate-fadeIn select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-[390px] sm:max-w-[400px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.35)] overflow-hidden text-white transition-all transform animate-scaleUp select-text",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "payment-review-dialog-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "payment-review-dialog-title",
                                className: "text-xs sm:text-sm font-bold text-white tracking-tight",
                                children: isAdjustMode ? 'Balance Adjustment' : order.publicTransactionId || `tx${String(order.id).replace(/^(?:topup-|#)/, '')}`
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    if (!savingAction && !actionInFlightRef.current) onClose();
                                },
                                disabled: Boolean(savingAction),
                                className: "text-white/40 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                    submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "alert",
                        className: "m-3 rounded border border-red-500/30 p-2 text-xs text-red-300",
                        children: submitError
                    }, void 0, false, {
                        fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                        lineNumber: 186,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)),
                    isViewMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-center items-center overflow-auto p-4 max-h-[80vh] bg-black/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleConfirmSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 sm:p-4 space-y-3",
                                children: [
                                    !isAdjustMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[200px] h-[300px] shrink-0 aspect-[2/3] bg-black/50 border border-white/10 rounded-lg overflow-hidden flex items-center justify-center relative shadow-inner",
                                            children: order.receiptUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: order.receiptUrl,
                                                alt: `Receipt for ${order.publicTransactionId || `tx${String(order.id).replace(/^(?:topup-|#)/, '')}`}`,
                                                referrerPolicy: "no-referrer",
                                                className: "w-full h-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 205,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "payment-review-amount",
                                                className: "block text-xs font-semibold text-white/80",
                                                children: "Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    isAdjustMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "payment-review-reason",
                                                className: "block text-xs font-semibold text-white/80",
                                                children: "Reason"
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/orders/components/ReviewPaymentModal.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            !isViewMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3.5 sm:px-4 py-2.5 border-t border-white/10 bg-white/[0.01]",
                                children: isAdjustMode ? /* Adjust Balance: Debit & Credit buttons with equal sizes */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                void handleDebitClick();
                                            },
                                            disabled: Boolean(savingAction) || !isValidAmount,
                                            className: "flex-1 bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60",
                                            children: savingAction === 'debit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: Boolean(savingAction) || !isValidAmount,
                                            className: "flex-1 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60",
                                            children: savingAction === 'credit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
                                }, ("TURBOPACK compile-time value", void 0)) : /* Review Order: Reject & Approve buttons with equal sizes */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                void handleCancelClick();
                                            },
                                            disabled: Boolean(savingAction),
                                            className: "flex-1 bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60",
                                            children: savingAction === 'reject' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: Boolean(savingAction) || !isValidAmount,
                                            className: "flex-1 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)] active:scale-[0.99] font-semibold text-xs sm:text-sm py-1.5 rounded-lg transition-all cursor-pointer text-center disabled:cursor-not-allowed disabled:opacity-60",
                                            children: savingAction === 'approve' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
"[project]/src/reference-ui/shared/utils/currency.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];})()

//# sourceMappingURL=src_091872fx8-4qk._.js.map