(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/src/components/list-ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListPager",
    ()=>ListPager,
    "ListStatus",
    ()=>ListStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ListStatus({ active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: 'bee-status ' + (active ? 'enabled' : 'disabled'),
        role: "img",
        "aria-label": active ? 'Active' : 'Inactive',
        children: active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            size: 17
        }, void 0, false, {
            fileName: "[project]/src/components/list-ui.tsx",
            lineNumber: 4,
            columnNumber: 183
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/src/components/list-ui.tsx",
            lineNumber: 4,
            columnNumber: 202
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/list-ui.tsx",
        lineNumber: 4,
        columnNumber: 62
    }, this);
}
_c = ListStatus;
function ListPager({ total, page, size, onPage, onSize }) {
    const pages = Math.max(1, Math.ceil(total / size)), current = Math.min(page, pages - 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bee-list-footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "Total: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: total.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/components/list-ui.tsx",
                        lineNumber: 5,
                        columnNumber: 277
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/list-ui.tsx",
                lineNumber: 5,
                columnNumber: 264
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        "aria-label": "Records per page",
                        value: size,
                        onChange: (e)=>onSize(Number(e.target.value)),
                        children: [
                            10,
                            25,
                            50,
                            100
                        ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: n
                            }, n, false, {
                                fileName: "[project]/src/components/list-ui.tsx",
                                lineNumber: 5,
                                columnNumber: 439
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/list-ui.tsx",
                        lineNumber: 5,
                        columnNumber: 320
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bee-pagination",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                "aria-label": "Previous page",
                                disabled: !current,
                                onClick: ()=>onPage(current - 1),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/list-ui.tsx",
                                    lineNumber: 5,
                                    columnNumber: 597
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/list-ui.tsx",
                                lineNumber: 5,
                                columnNumber: 510
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: current + 1
                            }, void 0, false, {
                                fileName: "[project]/src/components/list-ui.tsx",
                                lineNumber: 5,
                                columnNumber: 630
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                "aria-label": "Next page",
                                disabled: current + 1 >= pages,
                                onClick: ()=>onPage(current + 1),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/list-ui.tsx",
                                    lineNumber: 5,
                                    columnNumber: 745
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/list-ui.tsx",
                                lineNumber: 5,
                                columnNumber: 654
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/list-ui.tsx",
                        lineNumber: 5,
                        columnNumber: 478
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/list-ui.tsx",
                lineNumber: 5,
                columnNumber: 315
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/list-ui.tsx",
        lineNumber: 5,
        columnNumber: 231
    }, this);
}
_c1 = ListPager;
var _c, _c1;
__turbopack_context__.k.register(_c, "ListStatus");
__turbopack_context__.k.register(_c1, "ListPager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/owner-catalog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OwnerDiscounts",
    ()=>OwnerDiscounts,
    "OwnerPackages",
    ()=>OwnerPackages,
    "OwnerProducts",
    ()=>OwnerProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shop-catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/owner-catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$owner$2d$image$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/owner-image-field.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/list-ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
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
const baseField = 'oc-input';
const clean = (s)=>s.trim().toLowerCase();
const listed = (p)=>p.packages.filter((x)=>x.listed !== false);
const initialManualField = ()=>({
        id: '',
        label: '',
        placeholder: '',
        required: true,
        type: 'Text Input'
    });
function OwnerHeader({ title, back, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "oc-header",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                back && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: back,
                    className: "oc-back",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 18,
                            columnNumber: 204
                        }, this),
                        "Back"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 18,
                    columnNumber: 147
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 18,
                    columnNumber: 240
                }, this),
                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 18,
                    columnNumber: 270
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/owner-catalog.tsx",
            lineNumber: 18,
            columnNumber: 135
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 18,
        columnNumber: 105
    }, this);
}
_c = OwnerHeader;
function Field({ label, required, children, hint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "oc-field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 19,
                        columnNumber: 172
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 19,
                columnNumber: 148
            }, this),
            children,
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 19,
                columnNumber: 207
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 19,
        columnNumber: 120
    }, this);
}
_c1 = Field;
function Actions({ save = 'Save', onCancel, busy }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-submit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "oc-btn ghost",
                onClick: onCancel,
                disabled: busy,
                children: "Cancel"
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 20,
                columnNumber: 127
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "oc-btn primary",
                disabled: busy,
                children: busy ? 'Saving…' : save
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 20,
                columnNumber: 224
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 20,
        columnNumber: 100
    }, this);
}
_c2 = Actions;
function CatalogSelect({ value, onChange, items, placeholder, disabled = false }) {
    _s();
    const [opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CatalogSelect.useEffect": ()=>{
            if (!opened) return;
            const onPointer = {
                "CatalogSelect.useEffect.onPointer": (e)=>{
                    if (!container.current?.contains(e.target)) setOpened(false);
                }
            }["CatalogSelect.useEffect.onPointer"];
            const onKey = {
                "CatalogSelect.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') setOpened(false);
                }
            }["CatalogSelect.useEffect.onKey"];
            document.addEventListener('pointerdown', onPointer);
            document.addEventListener('keydown', onKey);
            return ({
                "CatalogSelect.useEffect": ()=>{
                    document.removeEventListener('pointerdown', onPointer);
                    document.removeEventListener('keydown', onKey);
                }
            })["CatalogSelect.useEffect"];
        }
    }["CatalogSelect.useEffect"], [
        opened
    ]);
    const selected = items.find((x)=>x.value === value), filtered = items.filter((x)=>clean(x.label).includes(clean(query)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-combo",
        ref: container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: baseField + ' oc-combo-trigger',
                type: "button",
                disabled: disabled,
                "aria-expanded": opened,
                onClick: ()=>{
                    setQuery('');
                    setOpened((v)=>!v);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: selected?.label || placeholder
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 25,
                        columnNumber: 205
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 25,
                        columnNumber: 248
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 25,
                columnNumber: 51
            }, this),
            opened && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-combo-menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: baseField,
                        autoFocus: true,
                        value: query,
                        onChange: (e)=>setQuery(e.target.value),
                        placeholder: "Search…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 25,
                        columnNumber: 321
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "listbox",
                        className: "oc-combo-options",
                        children: [
                            filtered.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    role: "option",
                                    "aria-selected": item.value === value,
                                    onClick: ()=>{
                                        onChange(item.value);
                                        setOpened(false);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 25,
                                            columnNumber: 648
                                        }, this),
                                        item.value === value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 25,
                                            columnNumber: 694
                                        }, this)
                                    ]
                                }, item.value, true, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 25,
                                    columnNumber: 505
                                }, this)),
                            !filtered.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "No matches"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 25,
                                columnNumber: 743
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 25,
                        columnNumber: 436
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 25,
                columnNumber: 290
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(CatalogSelect, "MP8EAOCp6uWigEzqxcI4/wp1CIY=");
_c3 = CatalogSelect;
function PageToolbar({ query, setQuery, openCreate, showFilter, filterOpen }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-toolbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-search",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        size: 17
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 27,
                        columnNumber: 235
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: baseField,
                        placeholder: "Search…",
                        value: query,
                        onChange: (e)=>setQuery(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 27,
                        columnNumber: 254
                    }, this),
                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Clear search",
                        onClick: ()=>setQuery(''),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 27,
                            columnNumber: 442
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 27,
                        columnNumber: 367
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 27,
                columnNumber: 208
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "oc-iconbtn",
                "aria-label": "Create new",
                onClick: openCreate,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 27,
                    columnNumber: 562
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 27,
                columnNumber: 472
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "oc-iconbtn",
                "aria-label": "Filters",
                "aria-expanded": filterOpen,
                onClick: showFilter,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                    size: 17
                }, void 0, false, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 27,
                    columnNumber: 702
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 27,
                columnNumber: 588
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 27,
        columnNumber: 180
    }, this);
}
_c4 = PageToolbar;
function CatalogTable({ headers, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-table-scroll",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "oc-table",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: headers.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: v
                            }, v, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 28,
                                columnNumber: 176
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 28,
                        columnNumber: 156
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 28,
                    columnNumber: 149
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 28,
                    columnNumber: 211
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/owner-catalog.tsx",
            lineNumber: 28,
            columnNumber: 121
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 28,
        columnNumber: 88
    }, this);
}
_c5 = CatalogTable;
function CatalogName({ name, description, image, fallbackImage }) {
    _s1();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const src = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageSource"])(image),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageSource"])(fallbackImage)
    ].find((value)=>value && !failed.includes(value));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-item-name",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "oc-item-icon",
                "aria-hidden": "true",
                children: src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: "",
                    width: 40,
                    height: 40,
                    loading: "lazy",
                    decoding: "async",
                    referrerPolicy: "no-referrer",
                    onError: ()=>setFailed((values)=>values.includes(src) ? values : [
                                ...values,
                                src
                            ])
                }, src, false, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 32,
                    columnNumber: 94
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 32,
                    columnNumber: 289
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 32,
                columnNumber: 39
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "oc-item-label",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 32,
                        columnNumber: 350
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 32,
                        columnNumber: 363
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 32,
                columnNumber: 318
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_s1(CatalogName, "U42VEFoGTFCYPkz+OaO+ZCNso0U=");
_c6 = CatalogName;
function checkMainError(err) {
    return err instanceof Error ? err.message : 'Unable to save. Please retry.';
}
function OwnerProducts() {
    _s2();
    const { invalidate, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    const { data: main, error: mainError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('main-shop-catalog', {
        "OwnerProducts.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('catalog/games')
    }["OwnerProducts.useData"]);
    const { data: mine, error: mineError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('shop-products', {
        "OwnerProducts.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('products')
    }["OwnerProducts.useData"]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all'), [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10), [remove, setRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OwnerProducts.useMemo[rows]": ()=>[
                ...mine || []
            ].filter({
                "OwnerProducts.useMemo[rows]": (p)=>clean(p.name).includes(clean(query)) && (status === 'all' || p.active !== false === (status === 'active'))
            }["OwnerProducts.useMemo[rows]"]).sort({
                "OwnerProducts.useMemo[rows]": (a, b)=>(a.sortOrder || 0) - (b.sortOrder || 0) || a.id - b.id
            }["OwnerProducts.useMemo[rows]"])
    }["OwnerProducts.useMemo[rows]"], [
        mine,
        query,
        status
    ]);
    const current = Math.min(page, Math.max(0, Math.ceil(rows.length / size) - 1));
    if (editing !== null) {
        if (mainError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
            message: mainError,
            retry: invalidate
        }, void 0, false, {
            fileName: "[project]/src/components/owner-catalog.tsx",
            lineNumber: 44,
            columnNumber: 41
        }, this);
        if (!main) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/owner-catalog.tsx",
            lineNumber: 44,
            columnNumber: 108
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerProductForm, {
            editing: editing === 'new' ? null : editing,
            main: main,
            onBack: ()=>setEditing(null),
            onSaved: ()=>{
                setEditing(null);
                invalidate();
                notify('Product saved.');
            }
        }, editing === 'new' ? 'new' : editing.id, false, {
            fileName: "[project]/src/components/owner-catalog.tsx",
            lineNumber: 44,
            columnNumber: 126
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageToolbar, {
                query: query,
                setQuery: (v)=>{
                    setQuery(v);
                    setPage(0);
                },
                openCreate: ()=>setEditing('new'),
                showFilter: ()=>setFilters((v)=>!v),
                filterOpen: filters
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 45,
                columnNumber: 36
            }, this),
            filters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-filters",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Status",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: baseField,
                            value: status,
                            onChange: (e)=>{
                                setStatus(e.target.value);
                                setPage(0);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "all",
                                    children: "All statuses"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 46,
                                    columnNumber: 161
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "active",
                                    children: "Active"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 46,
                                    columnNumber: 202
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "inactive",
                                    children: "Inactive"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 46,
                                    columnNumber: 240
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 46,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 46,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "oc-btn ghost",
                        onClick: ()=>{
                            setStatus('all');
                        },
                        children: "Reset filters"
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 46,
                        columnNumber: 299
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 46,
                columnNumber: 12
            }, this),
            (mainError || mineError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: mainError || mineError,
                retry: invalidate
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 47,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-table-card",
                children: [
                    !mine ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 48,
                        columnNumber: 40
                    }, this) : !rows.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                        title: "No shop products",
                        text: "Use + to create a product from an available Main source or Manual."
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 48,
                        columnNumber: 64
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatalogTable, {
                        headers: [
                            'Name',
                            'Source',
                            'Packages',
                            'Sort',
                            'Status',
                            'Actions'
                        ],
                        children: rows.slice(current * size, (current + 1) * size).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatalogName, {
                                            name: p.name,
                                            description: p.category || 'Product',
                                            image: p.image || p.imageUrl,
                                            fallbackImage: main?.find((x)=>x.id === p.id)?.image
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 48,
                                            columnNumber: 320
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 48,
                                        columnNumber: 316
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: main?.find((x)=>x.id === p.id)?.name || 'Manual'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 48,
                                        columnNumber: 467
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: listed(p).length
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 48,
                                        columnNumber: 520
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: p.sortOrder ?? 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 48,
                                        columnNumber: 547
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListStatus"], {
                                            active: p.active !== false
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 48,
                                            columnNumber: 576
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 48,
                                        columnNumber: 572
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "oc-row-actions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/product-packages?product=${p.id}`,
                                                    "aria-label": `Packages for ${p.name}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 743
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 656
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "aria-label": `Edit ${p.name}`,
                                                    onClick: ()=>setEditing(p),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 840
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 774
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "danger",
                                                    "aria-label": `Delete ${p.name}`,
                                                    onClick: ()=>setRemove(p),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 953
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 867
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 48,
                                            columnNumber: 624
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 48,
                                        columnNumber: 620
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 48,
                                columnNumber: 301
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 48,
                        columnNumber: 172
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListPager"], {
                        total: rows.length,
                        page: current,
                        size: size,
                        onPage: setPage,
                        onSize: (n)=>{
                            setSize(n);
                            setPage(0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 48,
                        columnNumber: 1015
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 48,
                columnNumber: 2
            }, this),
            remove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                title: "Remove shop product?",
                description: remove.name,
                onClose: ()=>setRemove(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                    submit: "Remove from shop",
                    danger: true,
                    onCancel: ()=>setRemove(null),
                    onSubmit: async ()=>{
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`products/${remove.id}`, {
                            method: 'DELETE'
                        });
                        setRemove(null);
                        invalidate();
                        notify('Product removed from this shop.');
                    },
                    children: "This does not remove the Main Admin source product or order history."
                }, void 0, false, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 49,
                    columnNumber: 103
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 49,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_s2(OwnerProducts, "LPL2KKBBfDhyM4gx6R33OxrrKm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c7 = OwnerProducts;
function OwnerProductForm({ editing, main, onBack, onSaved }) {
    _s3();
    const sourceProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerSources"])(main), originalSource = editing && sourceProducts.some((p)=>p.id === editing.id) ? String(editing.id) : editing?.mainName ? 'unavailable' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANUAL_SOURCE"];
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(originalSource || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANUAL_SOURCE"]), [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.name || ''), [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.note || ''), [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.image || ''), [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.active !== false), [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.sortOrder || 0), [delivery, setDelivery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.deliveryEstimate || ''), [fields, setFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "OwnerProductForm.useState": ()=>editing && !sourceProducts.some({
                "OwnerProductForm.useState": (p)=>p.id === editing.id
            }["OwnerProductForm.useState"]) ? (editing.requiredFields || []).map({
                "OwnerProductForm.useState": (f, i)=>({
                        id: f.id || f.key || `field_${i + 1}`,
                        label: f.label || f.name || '',
                        placeholder: f.placeholder || '',
                        required: f.required !== false,
                        type: 'Text Input'
                    })
            }["OwnerProductForm.useState"]) : []
    }["OwnerProductForm.useState"]), [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const groupId = 0;
    const selected = sourceProducts.find((p)=>String(p.id) === source);
    function changeSource(v) {
        setSource(v);
        const game = sourceProducts.find((p)=>String(p.id) === v);
        if (game) {
            setName(game.name);
            setFields([]);
        } else if (!editing) {
            setName('');
        }
    }
    async function submit(e) {
        e.preventDefault();
        if (saving || uploading) return;
        setSaving(true);
        setError('');
        try {
            if (!name.trim()) throw Error('Enter a product name.');
            const inputFields = source === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANUAL_SOURCE"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textFields"])(fields) : [];
            if (editing) {
                const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productDraft"])(editing, groupId, editing.id);
                d.name = name.trim();
                d.note = note.trim();
                d.image = image;
                d.active = active;
                d.sortOrder = sortOrder;
                if (source === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANUAL_SOURCE"]) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])(`products/${editing.id}`, {
                        ...d,
                        groupId: null,
                        inputFields,
                        deliveryEstimate: delivery.trim() || null
                    }, 'PUT');
                } else await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveShopProduct"])(editing.id, d);
            } else await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOwnerProduct"])({
                sourceProductId: selected?.id || null,
                name: name.trim(),
                groupId,
                note: note.trim(),
                image,
                active,
                sortOrder,
                inputFields,
                deliveryEstimate: delivery.trim() || null
            });
            onSaved();
        } catch (err) {
            setError(checkMainError(err));
        } finally{
            setSaving(false);
        }
    }
    const sources = [
        {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANUAL_SOURCE"],
            label: 'Manual'
        },
        ...sourceProducts.map((p)=>({
                value: String(p.id),
                label: p.name
            })),
        ...originalSource === 'unavailable' ? [
            {
                value: 'unavailable',
                label: 'Main source unavailable'
            }
        ] : []
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-editor",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerHeader, {
                title: editing ? 'Edit Product' : 'Create Product',
                back: onBack
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 65,
                columnNumber: 36
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: submit,
                className: "oc-form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Name",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: baseField,
                            required: true,
                            maxLength: 128,
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            placeholder: "Product name"
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 66,
                            columnNumber: 31
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 66,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Source",
                        required: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatalogSelect, {
                                value: source,
                                onChange: changeSource,
                                items: sources,
                                placeholder: "Select a source",
                                disabled: !!editing
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 67,
                                columnNumber: 33
                            }, this),
                            editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Source cannot change for an existing product."
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 67,
                                columnNumber: 165
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 67,
                        columnNumber: 2
                    }, this),
                    editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "oc-inline-note",
                        children: "Existing product source remains attached to its Main catalog identity."
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 68,
                        columnNumber: 12
                    }, this),
                    source === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANUAL_SOURCE"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oc-manual",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "oc-section-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "User Input Fields"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 69,
                                        columnNumber: 90
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "oc-btn",
                                        onClick: ()=>setFields((v)=>[
                                                    ...v,
                                                    initialManualField()
                                                ]),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-catalog.tsx",
                                                lineNumber: 69,
                                                columnNumber: 211
                                            }, this),
                                            "Add Field"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 69,
                                        columnNumber: 114
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 69,
                                columnNumber: 54
                            }, this),
                            fields.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "oc-manual-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "oc-section-heading",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Field ",
                                                        i + 1,
                                                        " · Text Input"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 348
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-label": `Remove field ${i + 1}`,
                                                    onClick: ()=>setFields((v)=>v.filter((_, k)=>i !== k)),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 493
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 385
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 69,
                                            columnNumber: 312
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "oc-grid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                    label: "Key",
                                                    required: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: baseField,
                                                        maxLength: 60,
                                                        value: f.id,
                                                        placeholder: "player_id",
                                                        onChange: (e)=>setFields((v)=>v.map((k, j)=>j === i ? {
                                                                        ...k,
                                                                        id: e.target.value
                                                                    } : k))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 580
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 552
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                    label: "Label",
                                                    required: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: baseField,
                                                        maxLength: 80,
                                                        value: f.label,
                                                        placeholder: "Player ID",
                                                        onChange: (e)=>setFields((v)=>v.map((k, j)=>j === i ? {
                                                                        ...k,
                                                                        label: e.target.value
                                                                    } : k))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 775
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 745
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 69,
                                            columnNumber: 527
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Placeholder",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: baseField,
                                                value: f.placeholder,
                                                maxLength: 120,
                                                onChange: (e)=>setFields((v)=>v.map((k, j)=>j === i ? {
                                                                ...k,
                                                                placeholder: e.target.value
                                                            } : k))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-catalog.tsx",
                                                lineNumber: 69,
                                                columnNumber: 979
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 69,
                                            columnNumber: 952
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "oc-check",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: f.required,
                                                    onChange: (e)=>setFields((v)=>v.map((k, j)=>j === i ? {
                                                                    ...k,
                                                                    required: e.target.checked
                                                                } : k))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 1167
                                                }, this),
                                                "Required field"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 69,
                                            columnNumber: 1139
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 69,
                                    columnNumber: 271
                                }, this)),
                            !fields.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "oc-hint",
                                children: "Manual fields use Text Input only. There is no Select Type, API Validation, or provider field mapping."
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 69,
                                columnNumber: 1342
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 69,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Estimated Delivery",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: baseField,
                            maxLength: 120,
                            disabled: source !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANUAL_SOURCE"],
                            value: source === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANUAL_SOURCE"] ? delivery : selected?.deliveryEstimate || '',
                            onChange: (e)=>setDelivery(e.target.value),
                            placeholder: "e.g. Less than 2 minutes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 70,
                            columnNumber: 36
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 70,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$owner$2d$image$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                        label: "Logo / Image",
                        value: image,
                        onChange: setImage,
                        onBusyChange: setUploading
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 71,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Important Note",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: baseField,
                            rows: 3,
                            value: note,
                            onChange: (e)=>setNote(e.target.value),
                            maxLength: 1000
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 72,
                            columnNumber: 32
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 72,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oc-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Status",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: baseField,
                                    value: active ? 'On' : 'Off',
                                    onChange: (e)=>setActive(e.target.value === 'On'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "On"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 73,
                                            columnNumber: 152
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Off"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 73,
                                            columnNumber: 171
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 73,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 73,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Sort Order",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: baseField,
                                    type: "number",
                                    min: 0,
                                    step: 1,
                                    value: sortOrder,
                                    onChange: (e)=>setSortOrder(Number(e.target.value))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 73,
                                    columnNumber: 234
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 73,
                                columnNumber: 208
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 73,
                        columnNumber: 2
                    }, this),
                    !editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "oc-hint",
                        children: "Products are created separately from Product Packages. The Shop Backend must support standalone product creation to save this form."
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                        message: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 75,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                        onCancel: onBack,
                        busy: saving || uploading,
                        save: editing ? 'Update Product' : 'Create Product'
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 75,
                        columnNumber: 38
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 65,
                columnNumber: 112
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s3(OwnerProductForm, "GQtzEUuNJpvebBfBQw5ZYo/0Cr0=");
_c8 = OwnerProductForm;
function OwnerPackages() {
    _s4();
    const { invalidate, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])(), params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { data: main, error: mainError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('main-shop-catalog', {
        "OwnerPackages.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('catalog/games')
    }["OwnerPackages.useData"]);
    const { data: mine, error: mineError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('shop-products', {
        "OwnerPackages.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('products')
    }["OwnerPackages.useData"]);
    const { data: pricing, error: pricingError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('shop-pricing', {
        "OwnerPackages.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('pricing')
    }["OwnerPackages.useData"]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all'), [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10), [remove, setRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OwnerPackages.useEffect": ()=>{
            const p = params.get('product');
            if (p && /^\d+$/.test(p)) {
                setSelectedProduct(p);
                setPage(0);
            }
        }
    }["OwnerPackages.useEffect"], [
        params
    ]);
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OwnerPackages.useMemo[rows]": ()=>(mine || []).flatMap({
                "OwnerPackages.useMemo[rows]": (product)=>listed(product).map({
                        "OwnerPackages.useMemo[rows]": (p)=>({
                                product,
                                pack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packageDraft"])(p),
                                source: p
                            })
                    }["OwnerPackages.useMemo[rows]"])
            }["OwnerPackages.useMemo[rows]"]).filter({
                "OwnerPackages.useMemo[rows]": (r)=>clean(r.pack.name).includes(clean(query)) && (!selectedProduct || String(r.product.id) === selectedProduct) && (status === 'all' || r.pack.active === (status === 'active'))
            }["OwnerPackages.useMemo[rows]"]).sort({
                "OwnerPackages.useMemo[rows]": (a, b)=>(a.pack.sortOrder || 0) - (b.pack.sortOrder || 0) || a.product.id - b.product.id
            }["OwnerPackages.useMemo[rows]"])
    }["OwnerPackages.useMemo[rows]"], [
        mine,
        query,
        selectedProduct,
        status
    ]);
    const current = Math.min(page, Math.max(0, Math.ceil(rows.length / size) - 1));
    if (editing !== null) {
        if (mainError || mineError || pricingError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
            message: mainError || mineError || pricingError,
            retry: invalidate
        }, void 0, false, {
            fileName: "[project]/src/components/owner-catalog.tsx",
            lineNumber: 88,
            columnNumber: 66
        }, this);
        if (!main || !mine || !pricing) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/owner-catalog.tsx",
            lineNumber: 88,
            columnNumber: 175
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerPackageForm, {
            editing: editing === 'new' ? null : editing,
            main: main,
            mine: mine,
            pricing: pricing,
            initialProductId: selectedProduct,
            onBack: ()=>setEditing(null),
            onSaved: ()=>{
                setEditing(null);
                invalidate();
                notify('Package saved.');
            }
        }, editing === 'new' ? 'new' : `${editing.product.id}-${editing.pack.id}`, false, {
            fileName: "[project]/src/components/owner-catalog.tsx",
            lineNumber: 88,
            columnNumber: 193
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageToolbar, {
                query: query,
                setQuery: (v)=>{
                    setQuery(v);
                    setPage(0);
                },
                openCreate: ()=>setEditing('new'),
                showFilter: ()=>setFilters((x)=>!x),
                filterOpen: filters
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 89,
                columnNumber: 36
            }, this),
            filters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-filters",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Product Type",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: baseField,
                            value: selectedProduct,
                            onChange: (e)=>{
                                setSelectedProduct(e.target.value);
                                setPage(0);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "All products"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 90,
                                    columnNumber: 185
                                }, this),
                                mine?.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: p.id,
                                        children: p.name
                                    }, p.id, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 90,
                                        columnNumber: 237
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 90,
                            columnNumber: 68
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 90,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Status",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: baseField,
                            value: status,
                            onChange: (e)=>setStatus(e.target.value),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "all",
                                    children: "All statuses"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 90,
                                    columnNumber: 412
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "active",
                                    children: "Active"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 90,
                                    columnNumber: 453
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "inactive",
                                    children: "Inactive"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 90,
                                    columnNumber: 491
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 90,
                            columnNumber: 327
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 90,
                        columnNumber: 305
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "oc-btn ghost",
                        onClick: ()=>{
                            setSelectedProduct('');
                            setStatus('all');
                        },
                        children: "Reset filters"
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 90,
                        columnNumber: 550
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 90,
                columnNumber: 12
            }, this),
            (mainError || mineError || pricingError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: mainError || mineError || pricingError,
                retry: invalidate
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 91,
                columnNumber: 41
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-table-card",
                children: [
                    !mine ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 92,
                        columnNumber: 40
                    }, this) : !rows.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                        title: "No shop packages",
                        text: "Use + to create a package for one of your Products."
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 92,
                        columnNumber: 64
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatalogTable, {
                        headers: [
                            'Name / Product',
                            'Selling Price',
                            'Discount',
                            'Sort',
                            'Status',
                            'Actions'
                        ],
                        children: rows.slice(current * size, (current + 1) * size).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatalogName, {
                                            name: r.pack.name,
                                            description: r.product.name,
                                            image: r.pack.image,
                                            fallbackImage: r.product.image || r.product.imageUrl
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 92,
                                            columnNumber: 348
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 92,
                                        columnNumber: 344
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mmk"])(r.source.price)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 92,
                                        columnNumber: 488
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: [
                                            r.pack.discountPercent || 0,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 92,
                                        columnNumber: 518
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: r.pack.sortOrder || 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 92,
                                        columnNumber: 555
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListStatus"], {
                                            active: r.pack.active
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 92,
                                            columnNumber: 589
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 92,
                                        columnNumber: 585
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "oc-row-actions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "aria-label": `Edit ${r.pack.name}`,
                                                    onClick: ()=>setEditing({
                                                            product: r.product,
                                                            pack: r.pack
                                                        }),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 767
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 666
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "danger",
                                                    "aria-label": `Remove ${r.pack.name}`,
                                                    onClick: ()=>setRemove({
                                                            product: r.product,
                                                            pack: r.pack
                                                        }),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 915
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 794
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 92,
                                            columnNumber: 634
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 92,
                                        columnNumber: 630
                                    }, this)
                                ]
                            }, `${r.product.id}-${r.pack.id}`, true, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 92,
                                columnNumber: 303
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 92,
                        columnNumber: 157
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListPager"], {
                        total: rows.length,
                        page: current,
                        size: size,
                        onPage: setPage,
                        onSize: (n)=>{
                            setSize(n);
                            setPage(0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 92,
                        columnNumber: 977
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 92,
                columnNumber: 2
            }, this),
            remove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                title: "Remove shop package?",
                description: remove.pack.name,
                onClose: ()=>setRemove(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                    submit: "Remove package",
                    danger: true,
                    onCancel: ()=>setRemove(null),
                    onSubmit: async ()=>{
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])('packages/bulk', {
                            packageIds: [
                                remove.pack.id
                            ],
                            action: 'DELETE'
                        });
                        setRemove(null);
                        invalidate();
                        notify('Package removed from this shop.');
                    },
                    children: "The Main package will not be deleted."
                }, void 0, false, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 93,
                    columnNumber: 108
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 93,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 89,
        columnNumber: 9
    }, this);
}
_s4(OwnerPackages, "9f6FigEMg80l+FQyJIKgntYrUKM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c9 = OwnerPackages;
function OwnerPackageForm({ editing, main, mine, pricing, initialProductId, onBack, onSaved }) {
    _s5();
    const [productId, setProductId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(editing?.product.id || initialProductId || '')), [sku, setSku] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(editing?.pack.id || '')), [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.pack.name || ''), [priceMode, setPriceMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.pack.priceMode || 'AUTO'), [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(editing?.pack.sellingPriceMmk || '')), [discount, setDiscount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(editing?.pack.discountPercent || 0)), [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(editing?.pack.sortOrder || 0)), [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.pack.active !== false), [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.pack.note || ''), [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.pack.image || ''), [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const product = mine.find((p)=>String(p.id) === productId), source = main.find((p)=>p.id === product?.id), manual = !!product && !source && !product.mainName, available = source?.packages || [], selected = available.find((p)=>String(p.id) === sku), already = product?.packages.some((p)=>p.id === selected?.id && p.listed !== false), cost = Number(selected?.costUsd || 0);
    const actualPriceMode = manual ? 'MANUAL' : priceMode;
    const base = actualPriceMode === 'MANUAL' ? Number(price) || 0 : pricing.usdMmkRate > 0 ? cost * pricing.usdMmkRate * (1 + pricing.profitPercent / 100) : 0;
    const unit = {
        EXACT: 0,
        TENS: 10,
        FIFTIES: 50,
        HUNDREDS: 100
    }[pricing.rounding] || 0;
    const estimate = actualPriceMode === 'AUTO' && unit ? Math.ceil(base / unit) * unit : base;
    const final = estimate * (1 - (Number(discount) || 0) / 100);
    function changeProduct(v) {
        setProductId(v);
        setSku('');
        setName('');
        setPriceMode(main.some((p)=>String(p.id) === v) ? 'AUTO' : 'MANUAL');
        setPrice('');
        setDiscount('0');
        setNote('');
        setImage('');
    }
    function changeSku(v) {
        setSku(v);
        const pack = available.find((p)=>String(p.id) === v);
        if (pack) {
            setName(pack.name);
            const local = product?.packages.find((p)=>p.id === pack.id && p.listed !== false);
            if (local) {
                setName(local.name);
                setPriceMode(local.priceMode);
                setPrice(String(local.sellingPriceMmk ?? ''));
                setDiscount(String(local.discountPercent || 0));
                setSort(String(local.sortOrder || 0));
                setActive(local.active !== false);
                setNote(local.note || '');
                setImage(local.image || '');
            } else {
                setPriceMode('AUTO');
                setPrice('');
                setDiscount('0');
            }
        }
    }
    async function submit(e) {
        e.preventDefault();
        if (busy || uploading) return;
        setError('');
        setBusy(true);
        try {
            if (!product) throw Error('Select Product Type.');
            if (!manual && !source) throw Error('The selected Head Admin source is unavailable. Refresh your Main catalog.');
            if (!manual && !selected) throw Error('Select a package supplied by Head Admin.');
            if (!name.trim()) throw Error('Enter a package name.');
            const percent = Number(discount);
            if (!Number.isFinite(percent) || percent < 0 || percent > 99.99) throw Error('Discount must be between 0 and 99.99%.');
            if (actualPriceMode === 'MANUAL' && (!Number.isFinite(Number(price)) || Number(price) <= 0)) throw Error('Enter a valid positive MMK price.');
            const draft = {
                id: selected?.id || editing?.pack.id || 0,
                name: name.trim(),
                priceMode: actualPriceMode,
                sellingPriceMmk: actualPriceMode === 'MANUAL' ? Number(price) : null,
                discountPercent: percent,
                sortOrder: Number(sort) || 0,
                active,
                note: note.trim(),
                image
            };
            if (manual) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createManualPackage"])({
                productId: product.id,
                name: draft.name,
                priceMode: draft.priceMode,
                sellingPriceMmk: draft.sellingPriceMmk,
                discountPercent: draft.discountPercent,
                active: draft.active,
                sortOrder: draft.sortOrder,
                image: draft.image,
                note: draft.note
            }, editing?.pack.id);
            else {
                // Source/category are resolved by the chosen Product Type and Head Admin package ID.
                const attached = {
                    ...product,
                    packages: source.packages.map((p)=>{
                        const saved = product.packages.find((x)=>x.id === p.id && x.listed !== false);
                        return saved || {
                            ...p,
                            listed: false
                        };
                    })
                };
                if (!attached.packages.some((p)=>p.id === draft.id)) throw Error('Package no longer belongs to this product.');
                const groupId = 0;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveShopPackage"])(attached, draft, groupId);
            }
            onSaved();
        } catch (err) {
            setError(checkMainError(err));
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-editor",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerHeader, {
                title: editing ? 'Edit Product Package' : 'Create Product Package',
                back: onBack
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 120,
                columnNumber: 36
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "oc-form",
                onSubmit: submit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Product Type",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatalogSelect, {
                            value: productId,
                            onChange: changeProduct,
                            placeholder: "Select Product",
                            items: mine.map((p)=>({
                                    value: String(p.id),
                                    label: p.name
                                }))
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 121,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 121,
                        columnNumber: 2
                    }, this),
                    product && !manual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Package",
                        required: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatalogSelect, {
                                value: sku,
                                onChange: changeSku,
                                placeholder: "Select Package",
                                items: available.map((p)=>({
                                        value: String(p.id),
                                        label: p.name
                                    }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 122,
                                columnNumber: 53
                            }, this),
                            !!selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: already ? 'Already added to this shop · editing its settings' : 'Available from Head Admin catalog'
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 122,
                                columnNumber: 206
                            }, this),
                            !available.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "No packages are currently provided for this Product Type."
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 122,
                                columnNumber: 339
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 122,
                        columnNumber: 21
                    }, this),
                    product && manual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "oc-info",
                        children: "Manual Product Type: package name is entered directly. No Source or Category selection is needed."
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 123,
                        columnNumber: 20
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Name",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: baseField,
                            maxLength: 128,
                            required: true,
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            placeholder: "Package name"
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 124,
                            columnNumber: 31
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 124,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oc-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Price Mode",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: baseField,
                                    value: manual ? 'MANUAL' : priceMode,
                                    disabled: manual,
                                    onChange: (e)=>setPriceMode(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "AUTO",
                                            children: "Automatic MMK"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 125,
                                            columnNumber: 207
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "MANUAL",
                                            children: "Manual MMK"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 125,
                                            columnNumber: 250
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 125,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 125,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Selling Price (MMK)",
                                required: priceMode === 'MANUAL',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: baseField,
                                    type: "number",
                                    inputMode: "decimal",
                                    min: "0.01",
                                    step: "0.01",
                                    required: actualPriceMode === 'MANUAL',
                                    disabled: actualPriceMode === 'AUTO',
                                    value: actualPriceMode === 'AUTO' ? estimate || '' : price,
                                    onChange: (e)=>setPrice(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 125,
                                    columnNumber: 376
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 125,
                                columnNumber: 309
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 125,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oc-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Discount (%)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: baseField,
                                    type: "number",
                                    inputMode: "decimal",
                                    step: "0.01",
                                    min: "0",
                                    max: "99.99",
                                    required: true,
                                    value: discount,
                                    onChange: (e)=>setDiscount(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 126,
                                    columnNumber: 55
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 126,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Sort Order",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: baseField,
                                    type: "number",
                                    min: "0",
                                    step: "1",
                                    value: sort,
                                    onChange: (e)=>setSort(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 126,
                                    columnNumber: 253
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 126,
                                columnNumber: 227
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 126,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oc-price",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Customer Price"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 127,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: final > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mmk"])(final) : 'Not priced'
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 127,
                                columnNumber: 55
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: [
                                    source ? `Automatic rates follow the Main catalog cost and your shop pricing settings.` : 'Manual package',
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 127,
                                columnNumber: 105
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 127,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$owner$2d$image$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                        label: "Package Image",
                        value: image,
                        onChange: setImage,
                        onBusyChange: setUploading
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 128,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Important Note",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: baseField,
                            rows: 3,
                            value: note,
                            onChange: (e)=>setNote(e.target.value),
                            maxLength: 1000
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 128,
                            columnNumber: 129
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 128,
                        columnNumber: 99
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Status",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: baseField,
                            value: active ? 'On' : 'Off',
                            onChange: (e)=>setActive(e.target.value === 'On'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "On"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 129,
                                    columnNumber: 127
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Off"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                    lineNumber: 129,
                                    columnNumber: 146
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 129,
                            columnNumber: 24
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 129,
                        columnNumber: 2
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                        message: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 130,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                        save: editing ? 'Update Package' : 'Create Package',
                        onCancel: onBack,
                        busy: busy || uploading
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 130,
                        columnNumber: 38
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 120,
                columnNumber: 128
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 120,
        columnNumber: 9
    }, this);
}
_s5(OwnerPackageForm, "pw12fZPXxZkSWYQcEGt01gmWLRs=");
_c10 = OwnerPackageForm;
function OwnerDiscounts() {
    _s6();
    const { invalidate, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    const { data: mine, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('shop-products', {
        "OwnerDiscounts.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('products')
    }["OwnerDiscounts.useData"]);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all'), [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10), [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chosen, setChosen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [percent, setPercent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0'), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [saveError, setSaveError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const options = (mine || []).flatMap((product)=>listed(product).map((p)=>({
                product,
                pack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packageDraft"])(p)
            })));
    const rows = options.filter((r)=>r.pack.discountPercent > 0 && (!query || clean(r.pack.name).includes(clean(query)) || clean(r.product.name).includes(clean(query))) && (status === 'all' || r.pack.active === (status === 'active'))), current = Math.min(page, Math.max(0, Math.ceil(rows.length / size) - 1));
    const item = editing === 'new' ? options.find((r)=>`${r.product.id}:${r.pack.id}` === chosen) : editing;
    async function save(e) {
        e.preventDefault();
        if (!item || busy) return;
        setBusy(true);
        setSaveError('');
        try {
            const n = Number(percent);
            if (!Number.isFinite(n) || n < 0 || n > 99.99) throw Error('Enter a discount from 0 to 99.99%.');
            const groupId = 0;
            const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productDraft"])(item.product, groupId, item.product.id);
            const existing = d.packages.find((p)=>p.id === item.pack.id);
            if (!existing) throw Error('This package is no longer listed in your shop.');
            existing.discountPercent = n;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$owner$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveShopProduct"])(item.product.id, d);
            setEditing(null);
            setChosen('');
            invalidate();
            notify('Discount updated.');
        } catch (e) {
            setSaveError(checkMainError(e));
        } finally{
            setBusy(false);
        }
    }
    function edit(row) {
        setEditing(row);
        setPercent(String(row.pack.discountPercent));
        setSaveError('');
    }
    if (editing !== null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-editor",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerHeader, {
                title: editing === 'new' ? 'Create Product Discount' : 'Edit Product Discount',
                back: ()=>setEditing(null)
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 151,
                columnNumber: 54
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "oc-form",
                onSubmit: save,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Product Package",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatalogSelect, {
                            value: item ? `${item.product.id}:${item.pack.id}` : chosen,
                            onChange: setChosen,
                            disabled: editing !== 'new',
                            placeholder: "Select a package",
                            items: options.map((r)=>({
                                    value: `${r.product.id}:${r.pack.id}`,
                                    label: `${r.product.name} · ${r.pack.name}`
                                }))
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 151,
                            columnNumber: 252
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 151,
                        columnNumber: 212
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Discount (%)",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: baseField,
                            min: "0",
                            max: "99.99",
                            step: "0.01",
                            type: "number",
                            value: percent,
                            onChange: (e)=>setPercent(e.target.value),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-catalog.tsx",
                            lineNumber: 151,
                            columnNumber: 557
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 151,
                        columnNumber: 520
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "oc-hint",
                        children: "Discount applies to this shop only. Setting 0% removes it. Main catalog prices remain unchanged."
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 151,
                        columnNumber: 707
                    }, this),
                    saveError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                        message: saveError
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 151,
                        columnNumber: 842
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                        save: "Save Discount",
                        onCancel: ()=>setEditing(null),
                        busy: busy
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 151,
                        columnNumber: 874
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 151,
                columnNumber: 170
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 151,
        columnNumber: 27
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageToolbar, {
                query: query,
                setQuery: (v)=>{
                    setQuery(v);
                    setPage(0);
                },
                openCreate: ()=>{
                    setEditing('new');
                    setChosen('');
                    setPercent('0');
                },
                showFilter: ()=>setFilters((v)=>!v),
                filterOpen: filters
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 152,
                columnNumber: 36
            }, this),
            filters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-filters",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                    label: "Status",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: baseField,
                        value: status,
                        onChange: (e)=>setStatus(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 152,
                                columnNumber: 373
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "active",
                                children: "Active"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 152,
                                columnNumber: 405
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "inactive",
                                children: "Inactive"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 152,
                                columnNumber: 443
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 152,
                        columnNumber: 288
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/owner-catalog.tsx",
                    lineNumber: 152,
                    columnNumber: 266
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 152,
                columnNumber: 238
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: error,
                retry: invalidate
            }, void 0, false, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 152,
                columnNumber: 517
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-table-card",
                children: [
                    !mine ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 152,
                        columnNumber: 602
                    }, this) : !rows.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                        title: "No product discounts",
                        text: "Use + to apply a discount to an existing shop package."
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 152,
                        columnNumber: 626
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatalogTable, {
                        headers: [
                            'Product / Package',
                            'Discount',
                            'Sort',
                            'Status',
                            'Actions'
                        ],
                        children: rows.slice(current * size, (current + 1) * size).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatalogName, {
                                            name: r.pack.name,
                                            description: r.product.name,
                                            image: r.pack.image,
                                            fallbackImage: r.product.image || r.product.imageUrl
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 152,
                                            columnNumber: 904
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 152,
                                        columnNumber: 900
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: [
                                            r.pack.discountPercent,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 152,
                                        columnNumber: 1044
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: r.pack.sortOrder
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 152,
                                        columnNumber: 1078
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListStatus"], {
                                            active: r.pack.active
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 152,
                                            columnNumber: 1109
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 152,
                                        columnNumber: 1105
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "oc-row-actions",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                "aria-label": `Edit discount for ${r.pack.name}`,
                                                onClick: ()=>edit(r),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-catalog.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 1264
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-catalog.tsx",
                                                lineNumber: 152,
                                                columnNumber: 1186
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-catalog.tsx",
                                            lineNumber: 152,
                                            columnNumber: 1154
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-catalog.tsx",
                                        lineNumber: 152,
                                        columnNumber: 1150
                                    }, this)
                                ]
                            }, `${r.product.id}-${r.pack.id}`, true, {
                                fileName: "[project]/src/components/owner-catalog.tsx",
                                lineNumber: 152,
                                columnNumber: 859
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 152,
                        columnNumber: 726
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListPager"], {
                        total: rows.length,
                        page: current,
                        size: size,
                        onPage: setPage,
                        onSize: (n)=>{
                            setPage(0);
                            setSize(n);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-catalog.tsx",
                        lineNumber: 152,
                        columnNumber: 1325
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-catalog.tsx",
                lineNumber: 152,
                columnNumber: 564
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-catalog.tsx",
        lineNumber: 152,
        columnNumber: 9
    }, this);
}
_s6(OwnerDiscounts, "evuEfyTfQwS2ua5dWKGIfaAWHIY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c11 = OwnerDiscounts;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "OwnerHeader");
__turbopack_context__.k.register(_c1, "Field");
__turbopack_context__.k.register(_c2, "Actions");
__turbopack_context__.k.register(_c3, "CatalogSelect");
__turbopack_context__.k.register(_c4, "PageToolbar");
__turbopack_context__.k.register(_c5, "CatalogTable");
__turbopack_context__.k.register(_c6, "CatalogName");
__turbopack_context__.k.register(_c7, "OwnerProducts");
__turbopack_context__.k.register(_c8, "OwnerProductForm");
__turbopack_context__.k.register(_c9, "OwnerPackages");
__turbopack_context__.k.register(_c10, "OwnerPackageForm");
__turbopack_context__.k.register(_c11, "OwnerDiscounts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/owner-catalog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MANUAL_SOURCE",
    ()=>MANUAL_SOURCE,
    "createManualPackage",
    ()=>createManualPackage,
    "createOwnerProduct",
    ()=>createOwnerProduct,
    "listingDraft",
    ()=>listingDraft,
    "mainProduct",
    ()=>mainProduct,
    "ownerSources",
    ()=>ownerSources,
    "saveShopPackage",
    ()=>saveShopPackage,
    "saveShopProduct",
    ()=>saveShopProduct,
    "sourceKey",
    ()=>sourceKey,
    "textFields",
    ()=>textFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shop-catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
;
;
const MANUAL_SOURCE = 'manual';
const sourceKey = (p)=>String(p.id);
function ownerSources(main) {
    const ids = new Set();
    return main.filter((p)=>{
        if (!Number.isSafeInteger(p.id) || p.id <= 0 || !p.name?.trim() || ids.has(p.id)) return false;
        ids.add(p.id);
        return true;
    });
}
function textFields(fields) {
    const used = new Set();
    return fields.map((f, i)=>{
        const label = f.label.trim(), id = f.id.trim() || `field_${i + 1}`;
        if (!label || !/^[A-Za-z][A-Za-z0-9_]{0,59}$/.test(id) || used.has(id.toLowerCase())) throw Error('Each manual input field needs a unique letter/number/underscore key (starting with a letter) and label.');
        used.add(id.toLowerCase());
        return {
            id,
            label,
            placeholder: f.placeholder.trim(),
            required: f.required,
            type: 'Text Input'
        };
    });
}
function listingDraft(g, groupId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productDraft"])(g, groupId, g.id);
}
async function saveShopProduct(id, d) {
    // Atomic update of shop metadata and package selections, including an empty new product.
    // Never forward provider secrets, hidden Main IDs or API validation config.
    if (!d.name.trim()) throw Error('Enter a product name.');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])(`products/${id}`, d.packages.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productPayload"])(d) : {
        ...d,
        groupId: null,
        name: d.name.trim(),
        packages: []
    }, 'PUT');
}
async function saveShopPackage(g, p, groupId) {
    const d = listingDraft(g, groupId);
    d.packages = [
        ...d.packages.filter((item)=>item.id !== p.id),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packagePayload"])(p)
    ];
    return saveShopProduct(g.id, d);
}
async function createOwnerProduct(value) {
    // Requires corresponding new Shop Backend owner-product create contract.
    // No fake local success and no accidental Head Admin catalog mutations.
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])('products', {
            ...value,
            groupId: null
        });
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"] && ([
            405,
            501
        ].includes(e.status) || e.status === 404 && /endpoint not found|no static resource/i.test(e.message))) throw Error('This new standalone Product creation workflow needs the updated Shop Backend POST /shops/{code}/products endpoint. Existing Main products are untouched.');
        throw e;
    }
}
async function createManualPackage(value, packageId) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])(packageId ? `packages/${packageId}` : 'packages', value, packageId ? 'PUT' : 'POST');
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"] && ([
            405,
            501
        ].includes(e.status) || e.status === 404 && /endpoint not found|no static resource/i.test(e.message))) throw Error('Manual packages need an updated Shop Backend POST /shops/{code}/packages endpoint.');
        throw e;
    }
}
async function mainProduct(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`catalog/games/${id}`);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/src/components/owner-catalog.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/owner-catalog.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_06t0sdolo1tok._.js.map