(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/owner-product-groups.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OwnerProductGroups",
    ()=>OwnerProductGroups
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shop-product-groups.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const clean = (s)=>s.trim().toLowerCase();
const formInput = 'oc-input';
function StatusMark({ active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: 'opg-status ' + (active ? 'on' : 'off'),
        title: active ? 'Active' : 'Inactive',
        "aria-label": active ? 'Active' : 'Inactive',
        children: active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/components/owner-product-groups.tsx",
            lineNumber: 19,
            columnNumber: 144
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/components/owner-product-groups.tsx",
            lineNumber: 19,
            columnNumber: 163
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/owner-product-groups.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_c = StatusMark;
function ProductGroupEditor({ editing, products, groups, readOnly, onCancel, onSaved }) {
    _s();
    const available = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductGroupEditor.useMemo[available]": ()=>[
                ...products
            ].sort({
                "ProductGroupEditor.useMemo[available]": (a, b)=>a.name.localeCompare(b.name) || a.id - b.id
            }["ProductGroupEditor.useMemo[available]"])
    }["ProductGroupEditor.useMemo[available]"], [
        products
    ]);
    const original = editing?.productId || String(available[0]?.id || '');
    const [productId, setProductId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(original), [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.title || ''), [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.description || '');
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(editing?.sortOrder ?? 1)), [isActive, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.isActive !== false);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.selectedPackageIds || []), [packageQuery, setPackageQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [productQuery, setProductQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [showProduct, setShowProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [showPackages, setShowPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [saveError, setSaveError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const productDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const picked = available.find((p)=>String(p.id) === productId);
    const productPackages = picked ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packageForGroup"])(picked) : [];
    const allowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupPackageSelection"])(available, productId, groups, editing?.id);
    const availablePackages = allowed.filter((p)=>clean(p.name).includes(clean(packageQuery)));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductGroupEditor.useEffect": ()=>{
            if (!showProduct) return;
            const close = {
                "ProductGroupEditor.useEffect.close": (e)=>{
                    if (!productDropdown.current?.contains(e.target)) setShowProduct(false);
                }
            }["ProductGroupEditor.useEffect.close"];
            document.addEventListener('pointerdown', close);
            return ({
                "ProductGroupEditor.useEffect": ()=>document.removeEventListener('pointerdown', close)
            })["ProductGroupEditor.useEffect"];
        }
    }["ProductGroupEditor.useEffect"], [
        showProduct
    ]);
    const selectProduct = (id)=>{
        setProductId(id);
        setSelected([]);
        setShowProduct(false);
        setPackageQuery('');
        const product = available.find((p)=>String(p.id) === id);
        if (!editing && product) {
            const orders = groups.filter((g)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupMembership"])(g, product)).map((g)=>g.sortOrder);
            setSortOrder(String(orders.length ? Math.max(...orders) + 1 : 1));
        }
    };
    const save = async (e)=>{
        e.preventDefault();
        if (saving) return;
        setSaveError('');
        if (readOnly) {
            setSaveError(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsupportedGroupMessage"]);
            return;
        }
        setSaving(true);
        try {
            const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedGroupPayload"])({
                name: picked?.name || '',
                productId,
                title,
                description,
                code: editing?.code || `${clean(picked?.name || '').replace(/[^a-z0-9]+/g, '-')}-${clean(title).replace(/[^a-z0-9]+/g, '-')}`,
                sortOrder: Number(sortOrder),
                selectedPackageIds: selected,
                isActive,
                productCount: selected.length,
                packagesCount: selected.length
            }, available, groups, editing?.id);
            if (editing) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProductGroup"])(editing.id, payload);
            else await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProductGroup"])(payload);
            onSaved();
        } catch (e) {
            setSaveError(e instanceof Error ? e.message : 'Unable to save Package Group.');
        } finally{
            setSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-editor opg-editor",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "oc-back",
                onClick: onCancel,
                children: "← Back to Package Groups"
            }, void 0, false, {
                fileName: "[project]/src/components/owner-product-groups.tsx",
                lineNumber: 61,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "oc-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: editing ? 'Edit Package Group' : 'Create Package Group'
                }, void 0, false, {
                    fileName: "[project]/src/components/owner-product-groups.tsx",
                    lineNumber: 62,
                    columnNumber: 33
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/owner-product-groups.tsx",
                lineNumber: 62,
                columnNumber: 3
            }, this),
            readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-inline-note",
                role: "status",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsupportedGroupMessage"]
            }, void 0, false, {
                fileName: "[project]/src/components/owner-product-groups.tsx",
                lineNumber: 63,
                columnNumber: 14
            }, this),
            saveError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "opg-error",
                role: "alert",
                children: saveError
            }, void 0, false, {
                fileName: "[project]/src/components/owner-product-groups.tsx",
                lineNumber: 64,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "oc-form",
                onSubmit: save,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "oc-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Product",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 66,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 66,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "oc-combo",
                                ref: productDropdown,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "oc-input oc-combo-trigger",
                                        "aria-expanded": showProduct,
                                        onClick: ()=>{
                                            setProductQuery('');
                                            setShowProduct((v)=>!v);
                                        },
                                        disabled: !available.length,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: picked?.name || 'Select a Product'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 68,
                                                columnNumber: 182
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 68,
                                                columnNumber: 229
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 68,
                                        columnNumber: 6
                                    }, this),
                                    showProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "oc-combo-menu",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                autoFocus: true,
                                                className: formInput,
                                                placeholder: "Search product…",
                                                value: productQuery,
                                                onChange: (e)=>setProductQuery(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 69,
                                                columnNumber: 51
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "oc-combo-options",
                                                children: available.filter((p)=>clean(p.name).includes(clean(productQuery))).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        role: "option",
                                                        "aria-selected": productId === String(p.id),
                                                        onClick: ()=>selectProduct(String(p.id)),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    p.name,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        className: "opg-option-id",
                                                                        children: p.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                                        lineNumber: 69,
                                                                        columnNumber: 439
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 425
                                                            }, this),
                                                            productId === String(p.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 520
                                                            }, this)
                                                        ]
                                                    }, p.id, true, {
                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 295
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 69,
                                                columnNumber: 188
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 69,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 67,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 66,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "oc-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Title",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 72,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 72,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: formInput,
                                value: title,
                                required: true,
                                maxLength: 150,
                                onChange: (e)=>setTitle(e.target.value),
                                placeholder: "e.g. UC Top-Up & Royale Pass"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 72,
                                columnNumber: 60
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 72,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "oc-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Description (Optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 73,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: formInput,
                                value: description,
                                maxLength: 1000,
                                rows: 3,
                                onChange: (e)=>setDescription(e.target.value),
                                placeholder: "Enter package group description or category notes…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 73,
                                columnNumber: 67
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 73,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oc-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "oc-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Sort Order"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 75,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: formInput,
                                        value: sortOrder,
                                        min: 0,
                                        step: 1,
                                        required: true,
                                        onChange: (e)=>setSortOrder(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 75,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 75,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "oc-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 76,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: formInput,
                                        value: isActive ? 'On' : 'Off',
                                        onChange: (e)=>setActive(e.target.value === 'On'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "On",
                                                children: "On"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 76,
                                                columnNumber: 157
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Off",
                                                children: "Off"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 76,
                                                columnNumber: 187
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 76,
                                        columnNumber: 52
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 76,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 74,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "opg-packages",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "opg-packages-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            "Packages ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    selected.length,
                                                    " Selected"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 79,
                                                columnNumber: 52
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 79,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "oc-btn",
                                        "aria-expanded": showPackages,
                                        onClick: ()=>setShowPackages((v)=>!v),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 79,
                                                columnNumber: 202
                                            }, this),
                                            showPackages ? 'Hide Packages' : 'Add Packages'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 79,
                                        columnNumber: 95
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 79,
                                columnNumber: 5
                            }, this),
                            showPackages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "opg-package-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "opg-package-controls",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setSelected(allowed.map((p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupPackageId"])(p.id))),
                                                children: "Select All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 81,
                                                columnNumber: 44
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "|"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 81,
                                                columnNumber: 149
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setSelected([]),
                                                children: "Clear All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 81,
                                                columnNumber: 163
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 81,
                                        columnNumber: 6
                                    }, this),
                                    allowed.length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "oc-search opg-package-search",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 82,
                                                columnNumber: 71
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: formInput,
                                                placeholder: "Search packages…",
                                                value: packageQuery,
                                                onChange: (e)=>setPackageQuery(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 82,
                                                columnNumber: 90
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this),
                                    !picked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "opg-muted",
                                        children: "Choose a Product first."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this) : !productPackages.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "opg-muted",
                                        children: [
                                            "No packages found for ",
                                            picked.name,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 83,
                                        columnNumber: 92
                                    }, this) : !allowed.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "opg-muted",
                                        children: "All packages are already assigned to other groups."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 83,
                                        columnNumber: 174
                                    }, this) : !availablePackages.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "opg-muted",
                                        children: "No matching packages found."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 83,
                                        columnNumber: 280
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "opg-package-options",
                                        children: availablePackages.map((p)=>{
                                            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupPackageId"])(p.id), checked = selected.includes(id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-pressed": checked,
                                                onClick: ()=>setSelected((v)=>checked ? v.filter((n)=>n !== id) : [
                                                            ...v,
                                                            id
                                                        ]),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "opg-pkg-name",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: 'opg-tick ' + (checked ? 'checked' : ''),
                                                                children: checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 684
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 621
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: p.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 710
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 590
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: typeof p.price === 'number' ? `${p.price.toLocaleString('en-US')} MMK` : 'Not priced'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 732
                                                    }, this)
                                                ]
                                            }, id, true, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 83,
                                                columnNumber: 468
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 83,
                                        columnNumber: 337
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 80,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 78,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "opg-form-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "oc-btn primary",
                                disabled: saving || !available.length || readOnly,
                                children: saving ? 'Saving…' : editing ? 'Save Changes' : 'Create Package Group'
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 86,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "oc-btn ghost",
                                onClick: onCancel,
                                disabled: saving,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 86,
                                columnNumber: 207
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 86,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-product-groups.tsx",
                lineNumber: 65,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-product-groups.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
_s(ProductGroupEditor, "llIy+UrzQndKKC+L1FraByZTrvM=");
_c1 = ProductGroupEditor;
function OwnerProductGroups() {
    _s1();
    const { refresh, invalidate, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [readOnly, setReadOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [reload, setReload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [productFilter, setProductFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all'), [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined), [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1), [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [deleteError, setDeleteError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OwnerProductGroups.useEffect": ()=>{
            let alive = true;
            async function load() {
                setLoading(true);
                setLoadError('');
                try {
                    const shop = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('products');
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductGroups"])(shop);
                    if (alive) {
                        setProducts(shop);
                        setGroups(result.groups);
                        setReadOnly(result.readOnly);
                    }
                } catch (e) {
                    if (alive) setLoadError(e instanceof Error ? e.message : 'Unable to load Package Groups.');
                } finally{
                    if (alive) setLoading(false);
                }
            }
            void load();
            return ({
                "OwnerProductGroups.useEffect": ()=>{
                    alive = false;
                }
            })["OwnerProductGroups.useEffect"];
        }
    }["OwnerProductGroups.useEffect"], [
        reload,
        refresh
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OwnerProductGroups.useMemo[filtered]": ()=>groups.filter({
                "OwnerProductGroups.useMemo[filtered]": (g)=>{
                    const q = clean(query), matchesText = !q || [
                        g.name,
                        g.title,
                        g.code || '',
                        g.id
                    ].some({
                        "OwnerProductGroups.useMemo[filtered]": (v)=>clean(v).includes(q)
                    }["OwnerProductGroups.useMemo[filtered]"]);
                    const product = products.find({
                        "OwnerProductGroups.useMemo[filtered].product": (p)=>String(p.id) === productFilter
                    }["OwnerProductGroups.useMemo[filtered].product"]);
                    const matchesProduct = productFilter === 'all' || !!(product && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupMembership"])(g, product) || g.mainManaged && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packageForGroup"])(product).some({
                        "OwnerProductGroups.useMemo[filtered]": (p)=>g.selectedPackageIds.includes(String(p.id))
                    }["OwnerProductGroups.useMemo[filtered]"])));
                    const matchesStatus = statusFilter === 'all' || g.isActive === (statusFilter === 'active');
                    return matchesText && matchesProduct && matchesStatus;
                }
            }["OwnerProductGroups.useMemo[filtered]"]).sort({
                "OwnerProductGroups.useMemo[filtered]": (a, b)=>productFilter === 'all' ? a.name.localeCompare(b.name) || a.sortOrder - b.sortOrder : a.sortOrder - b.sortOrder || a.title.localeCompare(b.title)
            }["OwnerProductGroups.useMemo[filtered]"])
    }["OwnerProductGroups.useMemo[filtered]"], [
        groups,
        products,
        query,
        productFilter,
        statusFilter
    ]);
    const maxPage = Math.max(1, Math.ceil(filtered.length / size)), current = Math.min(page, maxPage);
    const visible = filtered.slice((current - 1) * size, current * size);
    const saved = ()=>{
        setEditing(undefined);
        setReload((n)=>n + 1);
        invalidate();
        notify('Package Group saved.');
    };
    const remove = async ()=>{
        if (!deleting || deleting.mainManaged || readOnly) return;
        setBusy(true);
        setDeleteError('');
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$product$2d$groups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProductGroup"])(deleting.id);
            setDeleting(null);
            setReload((n)=>n + 1);
            invalidate();
            notify('Package Group deleted.');
        } catch (e) {
            setDeleteError(e instanceof Error ? e.message : 'Unable to delete group.');
        } finally{
            setBusy(false);
        }
    };
    if (editing !== undefined) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductGroupEditor, {
        editing: editing,
        products: products,
        groups: groups,
        readOnly: readOnly,
        onCancel: ()=>setEditing(undefined),
        onSaved: saved
    }, editing?.id || 'create', false, {
        fileName: "[project]/src/components/owner-product-groups.tsx",
        lineNumber: 126,
        columnNumber: 32
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "oc-screen opg-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oc-search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 129,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: formInput,
                                value: query,
                                onChange: (e)=>{
                                    setQuery(e.target.value);
                                    setPage(1);
                                },
                                placeholder: "Search groups…",
                                "aria-label": "Search Package Groups"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 129,
                                columnNumber: 50
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 129,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Create Package Group",
                        className: "oc-iconbtn",
                        title: "Create Package Group",
                        onClick: ()=>setEditing(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-product-groups.tsx",
                            lineNumber: 130,
                            columnNumber: 143
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 130,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Filter Package Groups",
                        "aria-expanded": filters,
                        className: "oc-iconbtn",
                        onClick: ()=>setFilters((v)=>!v),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 131,
                                columnNumber: 140
                            }, this),
                            (productFilter !== 'all' || statusFilter !== 'all') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "opg-filter-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 131,
                                columnNumber: 207
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 131,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-product-groups.tsx",
                lineNumber: 128,
                columnNumber: 3
            }, this),
            filters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-filters",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "oc-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Product"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 133,
                                columnNumber: 69
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: formInput,
                                value: productFilter,
                                onChange: (e)=>{
                                    setProductFilter(e.target.value);
                                    setPage(1);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Products"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 133,
                                        columnNumber: 202
                                    }, this),
                                    products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: String(p.id),
                                            children: p.name
                                        }, p.id, false, {
                                            fileName: "[project]/src/components/owner-product-groups.tsx",
                                            lineNumber: 133,
                                            columnNumber: 260
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 133,
                                columnNumber: 89
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 133,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "oc-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 133,
                                columnNumber: 364
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: formInput,
                                value: statusFilter,
                                onChange: (e)=>{
                                    setStatusFilter(e.target.value);
                                    setPage(1);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 133,
                                        columnNumber: 510
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "active",
                                        children: "Active"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 133,
                                        columnNumber: 549
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "inactive",
                                        children: "Inactive"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 133,
                                        columnNumber: 587
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 133,
                                columnNumber: 383
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 133,
                        columnNumber: 336
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "oc-btn ghost",
                        onClick: ()=>{
                            setProductFilter('all');
                            setStatusFilter('all');
                            setPage(1);
                        },
                        children: "Reset filters"
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 133,
                        columnNumber: 646
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-product-groups.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, this),
            readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                className: "oc-inline-note",
                children: "Main Admin shared Package Groups are available for viewing. Creating, editing or deleting shop-owned groups requires the updated Shop Backend API. No Main Admin records can be changed here."
            }, void 0, false, {
                fileName: "[project]/src/components/owner-product-groups.tsx",
                lineNumber: 134,
                columnNumber: 14
            }, this),
            loadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: loadError,
                retry: ()=>setReload((n)=>n + 1)
            }, void 0, false, {
                fileName: "[project]/src/components/owner-product-groups.tsx",
                lineNumber: 135,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "oc-table-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oc-table-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "oc-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Product Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 137,
                                                columnNumber: 76
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Title"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 137,
                                                columnNumber: 97
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Packages"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 137,
                                                columnNumber: 111
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Sort"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 137,
                                                columnNumber: 128
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "opg-center",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 137,
                                                columnNumber: 141
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "opg-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 137,
                                                columnNumber: 179
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 137,
                                        columnNumber: 72
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                    lineNumber: 137,
                                    columnNumber: 65
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 6,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 138,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-product-groups.tsx",
                                            lineNumber: 138,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 138,
                                        columnNumber: 21
                                    }, this) : visible.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 6,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "opg-empty",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        size: 38
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 128
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "No package groups found"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 144
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 138,
                                                columnNumber: 101
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner-product-groups.tsx",
                                            lineNumber: 138,
                                            columnNumber: 85
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 138,
                                        columnNumber: 81
                                    }, this) : visible.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: group.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 239
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 235
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        group.title || group.description || group.code || '—',
                                                        group.mainManaged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: "Main Admin managed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/owner-product-groups.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 336
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 263
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: group.selectedPackageIds?.length ?? group.packagesCount ?? group.productCount ?? 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 375
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: group.sortOrder
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 462
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "opg-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusMark, {
                                                        active: group.isActive
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 515
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 488
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "opg-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "opg-row-actions",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                disabled: !!group.mainManaged,
                                                                title: group.mainManaged ? 'Managed by Main Admin' : 'Edit',
                                                                onClick: ()=>setEditing(group),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 758
                                                                    }, this),
                                                                    "Edit"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 616
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "opg-danger",
                                                                disabled: !!group.mainManaged,
                                                                title: group.mainManaged ? 'Managed by Main Admin' : 'Delete',
                                                                onClick: ()=>{
                                                                    setDeleteError('');
                                                                    setDeleting(group);
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 979
                                                                    }, this),
                                                                    "Delete"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 789
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 583
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 557
                                                }, this)
                                            ]
                                        }, group.id, true, {
                                            fileName: "[project]/src/components/owner-product-groups.tsx",
                                            lineNumber: 138,
                                            columnNumber: 216
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                    lineNumber: 138,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/owner-product-groups.tsx",
                            lineNumber: 137,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 137,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "opg-pagination",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Total: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: filtered.length.toLocaleString('en-US')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 140,
                                        columnNumber: 49
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 140,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "opg-pagination-controls",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "opg-size",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Rows per page"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 140,
                                                columnNumber: 173
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: size,
                                                onChange: (e)=>{
                                                    setSize(Number(e.target.value));
                                                    setPage(1);
                                                },
                                                children: [
                                                    10,
                                                    50,
                                                    100
                                                ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: n,
                                                        children: n
                                                    }, n, false, {
                                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 320
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 140,
                                                columnNumber: 219
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 140,
                                                columnNumber: 369
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 140,
                                        columnNumber: 145
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "opg-pager",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": "Previous page",
                                                onClick: ()=>setPage(Math.max(1, current - 1)),
                                                disabled: current === 1,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 545
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 140,
                                                columnNumber: 428
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: current
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 140,
                                                columnNumber: 578
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": "Next page",
                                                onClick: ()=>setPage(Math.min(maxPage, current + 1)),
                                                disabled: current === maxPage,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 725
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                                lineNumber: 140,
                                                columnNumber: 600
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/owner-product-groups.tsx",
                                        lineNumber: 140,
                                        columnNumber: 401
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/owner-product-groups.tsx",
                                lineNumber: 140,
                                columnNumber: 104
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-product-groups.tsx",
                        lineNumber: 140,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-product-groups.tsx",
                lineNumber: 136,
                columnNumber: 3
            }, this),
            deleting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "opg-modal-backdrop",
                role: "presentation",
                onMouseDown: (e)=>{
                    if (e.target === e.currentTarget && !busy) setDeleting(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "opg-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Delete Package Group?",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Delete Package Group?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-product-groups.tsx",
                            lineNumber: 142,
                            columnNumber: 239
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Are you sure you want to delete ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: deleting.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                    lineNumber: 142,
                                    columnNumber: 304
                                }, this),
                                "? This action cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/owner-product-groups.tsx",
                            lineNumber: 142,
                            columnNumber: 269
                        }, this),
                        deleteError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "alert",
                            className: "opg-error",
                            children: deleteError
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-product-groups.tsx",
                            lineNumber: 142,
                            columnNumber: 386
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "opg-modal-buttons",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "oc-btn ghost",
                                    disabled: busy,
                                    onClick: ()=>setDeleting(null),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                    lineNumber: 142,
                                    columnNumber: 481
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "oc-btn opg-danger-button",
                                    disabled: busy,
                                    onClick: ()=>void remove(),
                                    children: busy ? 'Deleting…' : 'Delete'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner-product-groups.tsx",
                                    lineNumber: 142,
                                    columnNumber: 591
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/owner-product-groups.tsx",
                            lineNumber: 142,
                            columnNumber: 446
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/owner-product-groups.tsx",
                    lineNumber: 142,
                    columnNumber: 145
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/owner-product-groups.tsx",
                lineNumber: 142,
                columnNumber: 14
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-product-groups.tsx",
        lineNumber: 127,
        columnNumber: 9
    }, this);
}
_s1(OwnerProductGroups, "SPnCSkRjA1ru7p9wFM+R0DdH0Cg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"]
    ];
});
_c2 = OwnerProductGroups;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatusMark");
__turbopack_context__.k.register(_c1, "ProductGroupEditor");
__turbopack_context__.k.register(_c2, "OwnerProductGroups");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/owner-product-groups.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/owner-product-groups.tsx [app-client] (ecmascript)"));
}),
"[project]/src/lib/shop-product-groups.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkedGroupPayload",
    ()=>checkedGroupPayload,
    "createProductGroup",
    ()=>createProductGroup,
    "deleteProductGroup",
    ()=>deleteProductGroup,
    "getProductGroups",
    ()=>getProductGroups,
    "groupCompatibilityError",
    ()=>groupCompatibilityError,
    "groupMembership",
    ()=>groupMembership,
    "groupPackageId",
    ()=>groupPackageId,
    "groupPackageSelection",
    ()=>groupPackageSelection,
    "packageForGroup",
    ()=>packageForGroup,
    "sharedGroupsAsReadonly",
    ()=>sharedGroupsAsReadonly,
    "unsupportedGroupMessage",
    ()=>unsupportedGroupMessage,
    "updateProductGroup",
    ()=>updateProductGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
;
const groupPackageId = (value)=>String(value);
const packageForGroup = (product)=>product.packages.filter((p)=>p.listed !== false);
function groupMembership(group, product) {
    return group.productId ? group.productId === String(product.id) : group.name.trim().toLowerCase() === product.name.trim().toLowerCase();
}
function groupPackageSelection(products, productId, groups, editingId) {
    const product = products.find((p)=>String(p.id) === productId);
    if (!product) return [];
    const occupied = new Set(groups.filter((g)=>g.id !== editingId && groupMembership(g, product)).flatMap((g)=>g.selectedPackageIds));
    return packageForGroup(product).filter((p)=>!occupied.has(groupPackageId(p.id)));
}
function checkedGroupPayload(value, products, groups, editingId) {
    const product = products.find((p)=>String(p.id) === value.productId);
    if (!product) throw Error('Choose an available shop product.');
    if (!value.title.trim()) throw Error('Package Group title is required.');
    if (!Number.isSafeInteger(value.sortOrder) || value.sortOrder < 0) throw Error('Sort Order must be a non-negative integer.');
    const selected = [
        ...new Set(value.selectedPackageIds)
    ];
    const allowed = new Set(groupPackageSelection(products, value.productId, groups, editingId).map((p)=>String(p.id)));
    if (selected.some((id)=>!allowed.has(id))) throw Error('A package cannot be assigned to multiple Package Groups or another product. Refresh and select again.');
    return {
        ...value,
        name: product.name,
        productId: String(product.id),
        title: value.title.trim(),
        description: value.description?.trim() || undefined,
        sortOrder: value.sortOrder,
        selectedPackageIds: selected,
        productCount: selected.length,
        packagesCount: selected.length
    };
}
function sharedGroupsAsReadonly(shared, products) {
    return shared.map((g)=>{
        const packs = products.flatMap((product)=>packageForGroup(product).filter((p)=>p.groupId === g.id).map((p)=>String(p.id)));
        return {
            id: `main-${g.id}`,
            productId: '',
            name: g.name,
            title: g.name,
            description: 'Managed by Main Admin',
            sortOrder: g.sortOrder ?? g.id,
            selectedPackageIds: packs,
            isActive: g.enabled !== false,
            packagesCount: packs.length,
            productCount: packs.length,
            mainManaged: true
        };
    });
}
const unsupportedGroupMessage = 'Update and restart Shop Backend to create Package Groups for this shop.';
const groupCompatibilityError = (e)=>e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"] && [
        404,
        405,
        501
    ].includes(e.status);
async function getProductGroups(products) {
    try {
        const groups = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('product-groups');
        if (!Array.isArray(groups)) throw Error('Invalid Package Groups response.');
        return {
            groups,
            readOnly: false
        };
    } catch (e) {
        if (!groupCompatibilityError(e)) throw e;
        throw new Error(unsupportedGroupMessage);
    }
}
async function createProductGroup(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])('product-groups', data);
}
async function updateProductGroup(id, data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])(`product-groups/${encodeURIComponent(id)}`, data, 'PUT');
}
async function deleteProductGroup(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`product-groups/${encodeURIComponent(id)}`, {
        method: 'DELETE'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1muq4096dsdke._.js.map