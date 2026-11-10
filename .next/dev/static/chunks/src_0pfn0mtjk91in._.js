(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/appearance.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Appearance",
    ()=>Appearance,
    "AppearanceProvider",
    ()=>AppearanceProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-theme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AppearanceProvider({ children }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ADMIN_THEME"]);
    const [storageAvailable, setStorageAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppearanceProvider.useEffect": ()=>{
            const apply = {
                "AppearanceProvider.useEffect.apply": (value)=>{
                    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminTheme"])(value);
                    document.documentElement.dataset.adminTheme = next;
                    setTheme(next);
                }
            }["AppearanceProvider.useEffect.apply"];
            try {
                apply(localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_THEME_KEY"]));
            } catch  {
                apply(document.documentElement.dataset.adminTheme);
                setStorageAvailable(false);
            }
            const sync = {
                "AppearanceProvider.useEffect.sync": (event)=>{
                    if (event.storageArea === window.localStorage && (event.key === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_THEME_KEY"] || event.key === null)) {
                        apply(event.newValue);
                    }
                }
            }["AppearanceProvider.useEffect.sync"];
            window.addEventListener('storage', sync);
            return ({
                "AppearanceProvider.useEffect": ()=>window.removeEventListener('storage', sync)
            })["AppearanceProvider.useEffect"];
        }
    }["AppearanceProvider.useEffect"], []);
    function selectTheme(value) {
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminTheme"])(value);
        document.documentElement.dataset.adminTheme = next;
        setTheme(next);
        try {
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_THEME_KEY"], next);
            setStorageAvailable(true);
        } catch  {
            setStorageAvailable(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            selectTheme,
            storageAvailable
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/appearance.tsx",
        lineNumber: 52,
        columnNumber: 10
    }, this);
}
_s(AppearanceProvider, "rTX9aXaFEQSR3NUqaVBoi0I9lSE=");
_c = AppearanceProvider;
const themes = [
    {
        id: 'blue-glass',
        name: 'Blue Glass',
        description: 'Dark navy, soft glass surfaces and blue accents.',
        default: true
    },
    {
        id: 'original',
        name: 'Original',
        description: 'The original black dashboard with neutral accents.',
        default: false
    }
];
function Appearance() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) throw new Error('Appearance requires AppearanceProvider.');
    const { theme, selectTheme, storageAvailable } = context;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "appearance-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Appearance"
                        }, void 0, false, {
                            fileName: "[project]/src/components/appearance.tsx",
                            lineNumber: 66,
                            columnNumber: 38
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Choose how your admin dashboard looks."
                        }, void 0, false, {
                            fileName: "[project]/src/components/appearance.tsx",
                            lineNumber: 66,
                            columnNumber: 57
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/appearance.tsx",
                    lineNumber: 66,
                    columnNumber: 33
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/appearance.tsx",
                lineNumber: 66,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card appearance-card",
                "aria-labelledby": "appearance-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-head",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "appearance-title",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/appearance.tsx",
                                            lineNumber: 68,
                                            columnNumber: 68
                                        }, this),
                                        " Theme"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/appearance.tsx",
                                    lineNumber: 68,
                                    columnNumber: 42
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Changes apply immediately."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/appearance.tsx",
                                    lineNumber: 68,
                                    columnNumber: 99
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/appearance.tsx",
                            lineNumber: 68,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/appearance.tsx",
                        lineNumber: 68,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                        className: "appearance-options",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                className: "appearance-sr-only",
                                children: "Dashboard theme"
                            }, void 0, false, {
                                fileName: "[project]/src/components/appearance.tsx",
                                lineNumber: 70,
                                columnNumber: 9
                            }, this),
                            themes.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "theme-option",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "admin-theme",
                                            value: option.id,
                                            checked: theme === option.id,
                                            onChange: ()=>selectTheme(option.id)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/appearance.tsx",
                                            lineNumber: 72,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "theme-option-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `theme-preview preview-${option.id}`,
                                                    "aria-hidden": "true",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "preview-sidebar",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/appearance.tsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 121
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/appearance.tsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 125
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/appearance.tsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 129
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/appearance.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 87
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "preview-main",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "preview-header"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/appearance.tsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 171
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "preview-stats",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                            fileName: "[project]/src/components/appearance.tsx",
                                                                            lineNumber: 74,
                                                                            columnNumber: 237
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                            fileName: "[project]/src/components/appearance.tsx",
                                                                            lineNumber: 74,
                                                                            columnNumber: 241
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/appearance.tsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 205
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "preview-table",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                            fileName: "[project]/src/components/appearance.tsx",
                                                                            lineNumber: 74,
                                                                            columnNumber: 284
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                            fileName: "[project]/src/components/appearance.tsx",
                                                                            lineNumber: 74,
                                                                            columnNumber: 288
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                            fileName: "[project]/src/components/appearance.tsx",
                                                                            lineNumber: 74,
                                                                            columnNumber: 292
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/appearance.tsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 252
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/appearance.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 140
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/appearance.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "theme-option-heading",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: option.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/appearance.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 52
                                                        }, this),
                                                        option.default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: "Default"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/appearance.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 91
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "theme-selected",
                                                            "aria-hidden": "true",
                                                            children: theme === option.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appearance.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 190
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/appearance.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 114
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/appearance.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "theme-description",
                                                    children: option.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/appearance.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/appearance.tsx",
                                            lineNumber: 73,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, option.id, true, {
                                    fileName: "[project]/src/components/appearance.tsx",
                                    lineNumber: 71,
                                    columnNumber: 31
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appearance.tsx",
                        lineNumber: 69,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "appearance-note",
                        role: "status",
                        children: storageAvailable ? 'Your theme is saved in this browser.' : 'Your theme is applied for this visit. Browser storage is unavailable.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/appearance.tsx",
                        lineNumber: 80,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/appearance.tsx",
                lineNumber: 67,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/appearance.tsx",
        lineNumber: 65,
        columnNumber: 10
    }, this);
}
_s1(Appearance, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c1 = Appearance;
var _c, _c1;
__turbopack_context__.k.register(_c, "AppearanceProvider");
__turbopack_context__.k.register(_c1, "Appearance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelProvider",
    ()=>PanelProvider,
    "useData",
    ()=>useData,
    "usePanel",
    ()=>usePanel,
    "useRealtime",
    ()=>useRealtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$query$2d$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/query-cache.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
const Context = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const usePanel = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
};
_s(usePanel, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function PanelProvider({ profile, children, onLogout }) {
    _s1();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(profile), [cache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PanelProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$query$2d$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryCache"]()
    }["PanelProvider.useState"]), [refresh, setRefresh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PanelProvider.useCallback[invalidate]": ()=>{
            cache.invalidate();
            setRefresh({
                "PanelProvider.useCallback[invalidate]": (n)=>n + 1
            }["PanelProvider.useCallback[invalidate]"]);
        }
    }["PanelProvider.useCallback[invalidate]"], [
        cache
    ]);
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PanelProvider.useCallback[notify]": (text)=>{
            setMessage(text);
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout({
                "PanelProvider.useCallback[notify]": ()=>setMessage('')
            }["PanelProvider.useCallback[notify]"], 4500);
        }
    }["PanelProvider.useCallback[notify]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PanelProvider.useEffect": ()=>({
                "PanelProvider.useEffect": ()=>{
                    cache.clear();
                    if (timer.current) clearTimeout(timer.current);
                }
            })["PanelProvider.useEffect"]
    }["PanelProvider.useEffect"], [
        cache
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PanelProvider.useEffect": ()=>{
            if (!refresh) return;
            let active = true;
            fetch('/api/session', {
                cache: 'no-store'
            }).then({
                "PanelProvider.useEffect": async (r)=>{
                    if (!active) return;
                    if (r.ok) setCurrent(await r.json());
                    else if (r.status === 401) window.dispatchEvent(new Event('jiafu:expired'));
                }
            }["PanelProvider.useEffect"]).catch({
                "PanelProvider.useEffect": ()=>{}
            }["PanelProvider.useEffect"]);
            return ({
                "PanelProvider.useEffect": ()=>{
                    active = false;
                }
            })["PanelProvider.useEffect"];
        }
    }["PanelProvider.useEffect"], [
        refresh
    ]);
    async function logout() {
        cache.clear();
        try {
            await fetch('/api/session', {
                method: 'DELETE'
            });
        } finally{
            onLogout();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Context.Provider, {
        value: {
            profile: current,
            cache,
            refresh,
            invalidate,
            notify,
            logout
        },
        children: [
            children,
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toast",
                role: "status",
                children: [
                    message,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Dismiss notification",
                        onClick: ()=>setMessage(''),
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/context.tsx",
                        lineNumber: 14,
                        columnNumber: 158
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/context.tsx",
                lineNumber: 14,
                columnNumber: 112
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/context.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s1(PanelProvider, "bswiSCl3JVtRseZTxSkMdvIg0YY=");
_c = PanelProvider;
function useData(key, loader) {
    _s2();
    const { refresh, cache } = usePanel(), ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(loader);
    ref.current = loader;
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useData.useCallback[subscribe]": (notify)=>cache.subscribe(key, notify)
    }["useData.useCallback[subscribe]"], [
        cache,
        key
    ]);
    const get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useData.useCallback[get]": ()=>cache.get(key)
    }["useData.useCallback[get]"], [
        cache,
        key
    ]);
    const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, get, get);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useData.useEffect": ()=>{
            void cache.load(key, {
                "useData.useEffect": ()=>ref.current()
            }["useData.useEffect"]);
        }
    }["useData.useEffect"], [
        cache,
        key,
        refresh
    ]);
    return {
        data: snapshot.data,
        error: snapshot.data === undefined ? snapshot.error : '',
        loading: snapshot.loading,
        refreshError: snapshot.data === undefined ? '' : snapshot.error
    };
}
_s2(useData, "yKYEKqN0+Lbgc3MpYx/A2OPVjz4=", false, function() {
    return [
        usePanel,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
function useRealtime(invalidate) {
    _s3();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('connecting');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRealtime.useEffect": ()=>{
            let source = null, poll = null, debounce = null;
            function changed() {
                if (debounce) clearTimeout(debounce);
                debounce = setTimeout(invalidate, 350);
            }
            function connect() {
                source?.close();
                if (poll) {
                    clearInterval(poll);
                    poll = null;
                }
                if (document.hidden) {
                    setState('paused');
                    return;
                }
                setState('connecting');
                source = new EventSource('/api/events');
                source.addEventListener('connected', {
                    "useRealtime.useEffect.connect": ()=>{
                        setState('live');
                        changed();
                        if (poll) {
                            clearInterval(poll);
                            poll = null;
                        }
                    }
                }["useRealtime.useEffect.connect"]);
                source.addEventListener('change', changed);
                source.onerror = ({
                    "useRealtime.useEffect.connect": ()=>{
                        setState('polling');
                        if (!poll) poll = setInterval({
                            "useRealtime.useEffect.connect": ()=>{
                                if (!document.hidden) invalidate();
                            }
                        }["useRealtime.useEffect.connect"], 15000);
                    }
                })["useRealtime.useEffect.connect"];
            }
            function visible() {
                connect();
                if (!document.hidden) invalidate();
            }
            document.addEventListener('visibilitychange', visible);
            connect();
            return ({
                "useRealtime.useEffect": ()=>{
                    source?.close();
                    if (poll) clearInterval(poll);
                    if (debounce) clearTimeout(debounce);
                    document.removeEventListener('visibilitychange', visible);
                }
            })["useRealtime.useEffect"];
        }
    }["useRealtime.useEffect"], [
        invalidate
    ]);
    return state;
}
_s3(useRealtime, "v9trEZK64HXPWudedqAWLYWjt8I=");
var _c;
__turbopack_context__.k.register(_c, "PanelProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/customer-security.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomerSecurity",
    ()=>CustomerSecurity,
    "ShopIpBans",
    ()=>ShopIpBans
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/services/usersApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function BanForm({ draft, onCancel, onSaved }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(draft), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "customer-ip-form",
        onSubmit: async (event)=>{
            event.preventDefault();
            if (busy) return;
            setBusy(true);
            setError('');
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersApi"].banIp(form);
                onSaved();
            } catch (reason) {
                setError(reason.message);
            } finally{
                setBusy(false);
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "IP address",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        "aria-label": "IP address to ban",
                        required: true,
                        value: form.ip,
                        maxLength: 64,
                        readOnly: draft.sourceUserId !== undefined,
                        onChange: (e)=>setForm((s)=>({
                                    ...s,
                                    ip: e.target.value
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 11,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 11,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Reason",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        "aria-label": "IP ban reason",
                        value: form.reason,
                        maxLength: 500,
                        onChange: (e)=>setForm((s)=>({
                                    ...s,
                                    reason: e.target.value
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 12,
                        columnNumber: 16
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 12,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "customer-ip-check",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: form.permanentBanAccounts,
                        onChange: (e)=>setForm((s)=>({
                                    ...s,
                                    permanentBanAccounts: e.target.checked
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 13,
                        columnNumber: 40
                    }, this),
                    "Also ban customer accounts detected on this IP in this shop"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 13,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "customer-security-help",
                children: "This blocks the IP for this shop and closes its active shop sessions."
            }, void 0, false, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 14,
                columnNumber: 3
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "customer-security-error",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "customer-security-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        disabled: busy,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 16,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: busy,
                        className: "danger",
                        children: busy ? 'Saving…' : 'Confirm IP ban'
                    }, void 0, false, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 16,
                        columnNumber: 118
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 16,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/customer-security.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_s(BanForm, "y4h3wPYzazVdEiKhotW6uT7y/w4=");
_c = BanForm;
function Unban({ ban, onSaved }) {
    _s1();
    const [confirm, setConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "customer-ip-unban",
        children: [
            confirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Unban ",
                            ban.ip,
                            "?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 21,
                        columnNumber: 56
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: busy,
                        type: "button",
                        onClick: async ()=>{
                            setBusy(true);
                            try {
                                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersApi"].unbanIp(ban.id);
                                onSaved();
                                setConfirm(false);
                            } catch (reason) {
                                setError(reason.message);
                            } finally{
                                setBusy(false);
                            }
                        },
                        children: busy ? 'Saving…' : 'Confirm'
                    }, void 0, false, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 21,
                        columnNumber: 84
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: busy,
                        onClick: ()=>setConfirm(false),
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 21,
                        columnNumber: 332
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 21,
                columnNumber: 54
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": `Unban IP ${ban.ip}`,
                onClick: ()=>setConfirm(true),
                children: "Unban IP"
            }, void 0, false, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 21,
                columnNumber: 421
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                role: "alert",
                className: "customer-security-error",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 21,
                columnNumber: 534
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/customer-security.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_s1(Unban, "94/8amKskY6WwqOr5Ae7h3PDyg4=");
_c1 = Unban;
function CustomerSecurity({ userId }) {
    _s2();
    const { profile, invalidate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])(`customer-security:${profile.shop.id}:${userId}`, {
        "CustomerSecurity.useData[data]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersApi"].security(userId)
    }["CustomerSecurity.useData[data]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "customer-security",
        "aria-label": "Customer IP security",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Recent IP addresses"
            }, void 0, false, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 26,
                columnNumber: 82
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "customer-security-help",
                children: [
                    "Activity in ",
                    profile.shop.name
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 26,
                columnNumber: 110
            }, this),
            (data.error || data.refreshError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "customer-security-error",
                children: [
                    data.error || data.refreshError,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: invalidate,
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 27,
                        columnNumber: 120
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 27,
                columnNumber: 37
            }, this),
            !data.data && !data.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                children: "Loading IP activity…"
            }, void 0, false, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 28,
                columnNumber: 28
            }, this) : data.data && !data.data.recentIps.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "customer-security-help",
                children: "No recorded IP activity yet. An IP is recorded when the customer signs in or uses the website."
            }, void 0, false, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 28,
                columnNumber: 109
            }, this) : data.data?.recentIps.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "customer-ip-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: item.ip
                                }, void 0, false, {
                                    fileName: "[project]/src/components/customer-security.tsx",
                                    lineNumber: 28,
                                    columnNumber: 329
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"])(item.lastSeenAt),
                                        " · ",
                                        item.activeSession ? 'Active session' : 'Previous session'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/customer-security.tsx",
                                    lineNumber: 28,
                                    columnNumber: 355
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/customer-security.tsx",
                            lineNumber: 28,
                            columnNumber: 324
                        }, this),
                        item.banned && item.banId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Unban, {
                            ban: {
                                id: item.banId,
                                ip: item.ip
                            },
                            onSaved: invalidate
                        }, void 0, false, {
                            fileName: "[project]/src/components/customer-security.tsx",
                            lineNumber: 28,
                            columnNumber: 483
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "danger",
                            "aria-label": `Ban IP ${item.ip}`,
                            onClick: ()=>setDraft({
                                    ip: item.ip,
                                    sourceUserId: Number(userId),
                                    reason: '',
                                    permanentBanAccounts: false
                                }),
                            children: "Ban IP"
                        }, void 0, false, {
                            fileName: "[project]/src/components/customer-security.tsx",
                            lineNumber: 28,
                            columnNumber: 546
                        }, this)
                    ]
                }, item.ip, true, {
                    fileName: "[project]/src/components/customer-security.tsx",
                    lineNumber: 28,
                    columnNumber: 277
                }, this)),
            draft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BanForm, {
                draft: draft,
                onCancel: ()=>setDraft(null),
                onSaved: ()=>{
                    setDraft(null);
                    invalidate();
                }
            }, draft.ip, false, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 29,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/customer-security.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_s2(CustomerSecurity, "0gTXVCz5fWcQgZiUxZOewSyKcXk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c2 = CustomerSecurity;
function ShopIpBans() {
    _s3();
    const { profile, invalidate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    const [adding, setAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])(`shop-ip-bans:${profile.shop.id}`, {
        "ShopIpBans.useData[result]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersApi"].ipBans()
    }["ShopIpBans.useData[result]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "customer-security customer-ip-blacklist",
        "aria-label": "Shop IP blacklist",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "customer-ip-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "IP blacklist"
                            }, void 0, false, {
                                fileName: "[project]/src/components/customer-security.tsx",
                                lineNumber: 35,
                                columnNumber: 143
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "customer-security-help",
                                children: profile.shop.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/customer-security.tsx",
                                lineNumber: 35,
                                columnNumber: 164
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 35,
                        columnNumber: 138
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setAdding((v)=>!v),
                        children: adding ? 'Close' : 'Add IP ban'
                    }, void 0, false, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 35,
                        columnNumber: 231
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 35,
                columnNumber: 101
            }, this),
            adding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BanForm, {
                draft: {
                    ip: '',
                    reason: '',
                    permanentBanAccounts: false
                },
                onCancel: ()=>setAdding(false),
                onSaved: ()=>{
                    setAdding(false);
                    invalidate();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 36,
                columnNumber: 12
            }, this),
            (result.error || result.refreshError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "customer-security-error",
                children: [
                    result.error || result.refreshError,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: invalidate,
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/components/customer-security.tsx",
                        lineNumber: 37,
                        columnNumber: 128
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 37,
                columnNumber: 41
            }, this),
            !result.data && !result.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                children: "Loading IP blacklist…"
            }, void 0, false, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 38,
                columnNumber: 32
            }, this) : result.data && !result.data.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "customer-security-help",
                children: "No IP addresses are banned in this shop."
            }, void 0, false, {
                fileName: "[project]/src/components/customer-security.tsx",
                lineNumber: 38,
                columnNumber: 108
            }, this) : result.data?.map((ban)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "customer-ip-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: ban.ip
                                }, void 0, false, {
                                    fileName: "[project]/src/components/customer-security.tsx",
                                    lineNumber: 38,
                                    columnNumber: 264
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: [
                                        ban.reason || 'IP restricted',
                                        " · ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"])(ban.createdAt)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/customer-security.tsx",
                                    lineNumber: 38,
                                    columnNumber: 289
                                }, this),
                                ban.permanentBanAccounts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "Account ban enabled"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/customer-security.tsx",
                                    lineNumber: 38,
                                    columnNumber: 384
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/customer-security.tsx",
                            lineNumber: 38,
                            columnNumber: 259
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Unban, {
                            ban: ban,
                            onSaved: invalidate
                        }, void 0, false, {
                            fileName: "[project]/src/components/customer-security.tsx",
                            lineNumber: 38,
                            columnNumber: 425
                        }, this)
                    ]
                }, ban.id, true, {
                    fileName: "[project]/src/components/customer-security.tsx",
                    lineNumber: 38,
                    columnNumber: 213
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/customer-security.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_s3(ShopIpBans, "PBGMBCW5iXUBS0LHD2PgznGaHIk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c3 = ShopIpBans;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "BanForm");
__turbopack_context__.k.register(_c1, "Unban");
__turbopack_context__.k.register(_c2, "CustomerSecurity");
__turbopack_context__.k.register(_c3, "ShopIpBans");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/owner-image-field.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageField",
    ()=>ImageField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-client] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shop-catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ImageField({ value, onChange, onBusyChange, label = 'Product image' }) {
    _s();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const file = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    async function upload(image) {
        setError('');
        if (![
            'image/png',
            'image/jpeg'
        ].includes(image.type) || image.size > 2 * 1024 * 1024) {
            setError('Choose a PNG/JPEG up to 2 MB.');
            return;
        }
        setBusy(true);
        onBusyChange?.(true);
        try {
            const dataUrl = await new Promise((resolve, reject)=>{
                const r = new FileReader();
                r.onload = ()=>resolve(String(r.result));
                r.onerror = reject;
                r.readAsDataURL(image);
            });
            const saved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])('images', {
                dataUrl
            });
            onChange(saved.image);
        } catch (e) {
            setError(e.message);
        } finally{
            setBusy(false);
            onBusyChange?.(false);
            if (file.current) file.current.value = '';
        }
    }
    const src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageSource"])(value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shop-image-field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "field-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/owner-image-field.tsx",
                lineNumber: 11,
                columnNumber: 43
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shop-image-editor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shop-image-preview",
                        children: src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: src,
                            alt: "Shop product preview"
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-image-field.tsx",
                            lineNumber: 11,
                            columnNumber: 163
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                            size: 30
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner-image-field.tsx",
                            lineNumber: 11,
                            columnNumber: 207
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner-image-field.tsx",
                        lineNumber: 11,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stack",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: file,
                                type: "file",
                                accept: "image/png,image/jpeg",
                                "aria-label": 'Upload ' + label.toLowerCase(),
                                disabled: busy,
                                onChange: (e)=>{
                                    const f = e.target.files?.[0];
                                    if (f) void upload(f);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-image-field.tsx",
                                lineNumber: 11,
                                columnNumber: 259
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "muted-text",
                                children: "PNG or JPEG · up to 2 MB · maximum 4096 × 4096"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-image-field.tsx",
                                lineNumber: 11,
                                columnNumber: 444
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                "aria-label": label + ' URL',
                                placeholder: "Or paste an HTTPS image URL",
                                disabled: busy,
                                value: value.startsWith('shop-image:') ? '' : value,
                                onChange: (e)=>onChange(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-image-field.tsx",
                                lineNumber: 11,
                                columnNumber: 528
                            }, this),
                            value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                disabled: busy,
                                onClick: ()=>onChange(''),
                                children: "Remove image"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-image-field.tsx",
                                lineNumber: 11,
                                columnNumber: 716
                            }, this),
                            busy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                role: "status",
                                children: "Uploading image…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner-image-field.tsx",
                                lineNumber: 11,
                                columnNumber: 796
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner-image-field.tsx",
                        lineNumber: 11,
                        columnNumber: 236
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner-image-field.tsx",
                lineNumber: 11,
                columnNumber: 87
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: error
            }, void 0, false, {
                fileName: "[project]/src/components/owner-image-field.tsx",
                lineNumber: 11,
                columnNumber: 860
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner-image-field.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_s(ImageField, "PiJWZoOnfgXdNfRw3M4G6Sg4jHE=");
_c = ImageField;
var _c;
__turbopack_context__.k.register(_c, "ImageField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Brand",
    ()=>Brand,
    "default",
    ()=>Panel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$telegram$2d$login$2d$otp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/telegram-login-otp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2d$otp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telegram-otp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-client] (ecmascript) <export default as ArrowLeftRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug.js [app-client] (ecmascript) <export default as Plug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-keyhole.js [app-client] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.js [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$views$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/views.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pricing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pricing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/user-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$appearance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/appearance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$website$2d$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/website-settings.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
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
const OwnerProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/owner-catalog.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.OwnerProducts), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/owner-catalog.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/panel.tsx",
            lineNumber: 15,
            columnNumber: 98
        }, ("TURBOPACK compile-time value", void 0))
});
_c = OwnerProducts;
const OwnerPackages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/owner-catalog.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.OwnerPackages), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/owner-catalog.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/panel.tsx",
            lineNumber: 16,
            columnNumber: 98
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = OwnerPackages;
const OwnerDiscounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/owner-catalog.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.OwnerDiscounts), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/owner-catalog.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/panel.tsx",
            lineNumber: 17,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
});
_c2 = OwnerDiscounts;
const OwnerProductGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/owner-product-groups.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.OwnerProductGroups), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/owner-product-groups.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/panel.tsx",
            lineNumber: 18,
            columnNumber: 115
        }, ("TURBOPACK compile-time value", void 0))
});
_c3 = OwnerProductGroups;
const PaymentSettingsView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/reference-ui/features/settings/PaymentSettingsView.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.PaymentSettingsView), {
    loadableGenerated: {
        modules: [
            "[project]/src/reference-ui/features/settings/PaymentSettingsView.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/panel.tsx",
            lineNumber: 19,
            columnNumber: 147
        }, ("TURBOPACK compile-time value", void 0))
});
_c4 = PaymentSettingsView;
const ProductOrdersView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/reference-ui/features/orders/ProductOrdersView.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.ProductOrdersView), {
    loadableGenerated: {
        modules: [
            "[project]/src/reference-ui/features/orders/ProductOrdersView.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/panel.tsx",
            lineNumber: 20,
            columnNumber: 139
        }, ("TURBOPACK compile-time value", void 0))
});
_c5 = ProductOrdersView;
const RechargeOrdersView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/reference-ui/features/orders/RechargeOrdersView.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.RechargeOrdersView), {
    loadableGenerated: {
        modules: [
            "[project]/src/reference-ui/features/orders/RechargeOrdersView.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/panel.tsx",
            lineNumber: 21,
            columnNumber: 142
        }, ("TURBOPACK compile-time value", void 0))
});
_c6 = RechargeOrdersView;
const BalanceAdjustmentsView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.BalanceAdjustmentsView), {
    loadableGenerated: {
        modules: [
            "[project]/src/reference-ui/features/orders/BalanceAdjustmentsView.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/panel.tsx",
            lineNumber: 22,
            columnNumber: 154
        }, ("TURBOPACK compile-time value", void 0))
});
_c7 = BalanceAdjustmentsView;
;
;
;
;
function Brand({ name = 'Shop Admin' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brand",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                title: name,
                children: [
                    name,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "brand-dot",
                        children: "."
                    }, void 0, false, {
                        fileName: "[project]/src/components/panel.tsx",
                        lineNumber: 31,
                        columnNumber: 111
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 31,
                columnNumber: 89
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "OWNER DASHBOARD"
            }, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 31,
                columnNumber: 151
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/panel.tsx",
        lineNumber: 31,
        columnNumber: 66
    }, this);
}
_c8 = Brand;
function Panel({ children }) {
    _s();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (path === '/telegram') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/panel.tsx",
        lineNumber: 34,
        columnNumber: 31
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthenticatedPanel, {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/panel.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_s(Panel, "kx72sda92+XlSh1QiZvq/YVQxpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c9 = Panel;
function AuthenticatedPanel({ children }) {
    _s1();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthenticatedPanel.useCallback[load]": async ()=>{
            try {
                const r = await fetch('/api/session', {
                    cache: 'no-store'
                });
                if (r.ok) {
                    setProfile(await r.json());
                    setError('');
                } else {
                    setProfile(null);
                    if (r.status !== 401) setError((await r.json()).message || 'Unable to load your session.');
                }
            } catch  {
                setProfile(null);
                setError('Shop Backend is unavailable. Please try again shortly.');
            } finally{
                setLoading(false);
            }
        }
    }["AuthenticatedPanel.useCallback[load]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthenticatedPanel.useEffect": ()=>{
            void load();
            const expired = {
                "AuthenticatedPanel.useEffect.expired": ()=>{
                    setProfile(null);
                    router.replace('/login');
                }
            }["AuthenticatedPanel.useEffect.expired"];
            window.addEventListener('jiafu:expired', expired);
            return ({
                "AuthenticatedPanel.useEffect": ()=>window.removeEventListener('jiafu:expired', expired)
            })["AuthenticatedPanel.useEffect"];
        }
    }["AuthenticatedPanel.useEffect"], [
        load,
        router
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "boot bee-theme",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Brand, {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 41,
                columnNumber: 53
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 41,
                columnNumber: 61
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/panel.tsx",
        lineNumber: 41,
        columnNumber: 20
    }, this);
    if (!profile) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Login, {
        initialError: error,
        onLogin: (p)=>{
            setProfile(p);
            router.replace('/');
        }
    }, void 0, false, {
        fileName: "[project]/src/components/panel.tsx",
        lineNumber: 42,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelProvider"], {
        profile: profile,
        onLogout: ()=>{
            setProfile(null);
            router.replace('/login');
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Shell, {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/panel.tsx",
            lineNumber: 43,
            columnNumber: 102
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/panel.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_s1(AuthenticatedPanel, "XZC7pnLlqPlcEZLoxSUv1XIe4b8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c10 = AuthenticatedPanel;
function Login({ initialError, onLogin }) {
    _s2();
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connection, setConnection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [checking, setChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialError), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Login.useCallback[check]": async ()=>{
            setChecking(true);
            try {
                const r = await fetch('/api/connection', {
                    cache: 'no-store'
                });
                if (!r.ok) throw Error('Connection check failed.');
                setConnection(await r.json());
            } catch  {
                setConnection({
                    state: 'offline',
                    message: 'Unable to reach Shop Backend. Please check the backend connection.'
                });
            } finally{
                setChecking(false);
            }
        }
    }["Login.useCallback[check]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Login.useEffect": ()=>{
            void check();
        }
    }["Login.useEffect"], [
        check
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "owner-login bee-theme",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "owner-login-brand",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Brand, {}, void 0, false, {
                    fileName: "[project]/src/components/panel.tsx",
                    lineNumber: 50,
                    columnNumber: 84
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 50,
                columnNumber: 49
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "terminal-card",
                "aria-label": 'Shop admin sign in',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "terminal-browser",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "browser-dots",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 50,
                                        columnNumber: 250
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 50,
                                        columnNumber: 254
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 50,
                                        columnNumber: 258
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 50,
                                columnNumber: 201
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "browser-address",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 50,
                                        columnNumber: 301
                                    }, this),
                                    "shop / admin"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 50,
                                columnNumber: 268
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/panel.tsx",
                        lineNumber: 50,
                        columnNumber: 167
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "terminal-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "terminal-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: ">"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 50,
                                                columnNumber: 417
                                            }, this),
                                            " admin.login()"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 50,
                                        columnNumber: 414
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 50,
                                                columnNumber: 452
                                            }, this),
                                            " Shop owner access"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 50,
                                        columnNumber: 446
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 50,
                                columnNumber: 380
                            }, this),
                            otp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$telegram$2d$login$2d$otp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelegramLoginOtp"], {
                                challenge: otp,
                                onVerified: onLogin,
                                onBack: ()=>setOtp(null)
                            }, void 0, false, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 50,
                                columnNumber: 512
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "login-description",
                                        children: "Sign in with your registered owner email and password. Your shop opens automatically."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 50,
                                        columnNumber: 597
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `setup-status ${connection?.state === 'connected' ? 'connected' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `live-dot ${connection?.state === 'connected' ? '' : 'muted'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/panel.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 89
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: checking ? 'Checking connection…' : connection?.state === 'connected' ? 'Shop service connected' : 'Shop service unavailable'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/panel.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 165
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>void check(),
                                                        "aria-label": "Check shop connection",
                                                        disabled: checking,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                            size: 13,
                                                            className: checking ? 'spin' : ''
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/panel.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 393
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/panel.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 289
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 51,
                                                columnNumber: 84
                                            }, this),
                                            connection?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: connection.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 51,
                                                columnNumber: 483
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 51,
                                        columnNumber: 2
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        "aria-busy": busy,
                                        onSubmit: async (e)=>{
                                            e.preventDefault();
                                            if (busy) return;
                                            setBusy(true);
                                            setError('');
                                            const f = new FormData(e.currentTarget);
                                            try {
                                                const r = await fetch('/api/session', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    body: JSON.stringify({
                                                        email: String(f.get('email')).trim(),
                                                        password: String(f.get('password'))
                                                    })
                                                });
                                                const data = await r.json();
                                                if (!r.ok) throw Error(data.message || 'Unable to sign in.');
                                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2d$otp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTelegramChallenge"])(data)) {
                                                    setOtp(data);
                                                    return;
                                                }
                                                onLogin(data);
                                            } catch (err) {
                                                setError(err.message);
                                            } finally{
                                                setBusy(false);
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                label: "Admin email / Gmail",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "login-input",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/panel.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 66
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            type: "email",
                                                            name: "email",
                                                            autoComplete: "username",
                                                            placeholder: "you@gmail.com",
                                                            maxLength: 254,
                                                            disabled: busy
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/panel.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 83
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/panel.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 55,
                                                columnNumber: 2
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                label: "Password",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "login-input password-field",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/panel.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 292
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            name: "password",
                                                            type: show ? 'text' : 'password',
                                                            maxLength: 72,
                                                            autoComplete: "current-password",
                                                            placeholder: "Enter your password",
                                                            disabled: busy
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/panel.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 316
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            "aria-label": show ? 'Hide password' : 'Show password',
                                                            "aria-pressed": show,
                                                            onClick: ()=>setShow(!show),
                                                            children: show ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/panel.tsx",
                                                                lineNumber: 55,
                                                                columnNumber: 603
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/panel.tsx",
                                                                lineNumber: 55,
                                                                columnNumber: 623
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/panel.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 476
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/panel.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 248
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 55,
                                                columnNumber: 224
                                            }, this),
                                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                                                message: error
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 56,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                variant: "primary",
                                                className: "login-submit",
                                                disabled: busy,
                                                children: [
                                                    busy ? 'Authenticating…' : 'Sign in to dashboard',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/panel.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 166
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 56,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 52,
                                        columnNumber: 2
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "login-help",
                                        children: "Use the email and password assigned to your shop by Main Admin."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 56,
                                        columnNumber: 205
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 50,
                                columnNumber: 595
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/panel.tsx",
                        lineNumber: 50,
                        columnNumber: 349
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 50,
                columnNumber: 98
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "owner-login-footer",
                children: "Shop Admin · All shops · v1.10.0"
            }, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 56,
                columnNumber: 318
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/panel.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_s2(Login, "19+LMTnvj4gfQOsJjvyL4gGWDnM=");
_c11 = Login;
const navigation = [
    {
        id: '',
        label: 'Dashboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        id: 'products',
        label: 'Products',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
    },
    {
        id: 'product-packages',
        label: 'Product Packages',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
    },
    {
        id: 'product-groups',
        label: 'Package Group',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"]
    },
    {
        id: 'product-discounts',
        label: 'Product Discounts',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    },
    {
        id: 'pricing',
        label: 'MMK pricing',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    },
    {
        id: 'product-order',
        label: 'Product Orders',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"]
    },
    {
        id: 'recharge-order',
        label: 'Recharge Orders',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
    },
    {
        id: 'balance-adjust',
        label: 'Balance Adjustments',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"]
    },
    {
        id: 'website-settings',
        label: 'Website Settings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    },
    {
        id: 'payment-settings',
        label: 'Payment Accounts',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
    },
    {
        id: 'recharge-list',
        label: 'Recharge List',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
    },
    {
        id: 'order-list',
        label: 'Order List',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"]
    },
    {
        id: 'recharge-orders',
        label: 'Recharge Orders',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"]
    },
    {
        id: 'users',
        label: 'User List',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"]
    },
    {
        id: 'transactions',
        label: 'Owner Transactions',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"]
    },
    {
        id: 'connection',
        label: 'Service status',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"]
    },
    {
        id: 'appearance',
        label: 'Appearance',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    },
    {
        id: 'account',
        label: 'My account',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"]
    }
];
const sections = [
    {
        id: 'products',
        label: 'Products',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
        items: [
            'products',
            'product-packages',
            'product-groups',
            'product-discounts'
        ]
    },
    {
        id: 'finance',
        label: 'Orders & Finance',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
        items: [
            'product-order',
            'recharge-order',
            'order-list',
            'recharge-list',
            'balance-adjust'
        ]
    },
    {
        id: 'users',
        label: 'User Management',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"],
        items: [
            'users'
        ]
    },
    {
        id: 'activity',
        label: 'Other Activity',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"],
        items: [
            'transactions'
        ]
    },
    {
        id: 'settings',
        label: 'Settings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        items: [
            'website-settings',
            'payment-settings',
            'pricing',
            'connection',
            'appearance',
            'account'
        ]
    }
];
function Shell({ children }) {
    _s3();
    const { profile, invalidate, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])(), pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])(), section = pathname.split('/')[1] || '';
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        products: true,
        finance: true,
        users: true,
        activity: false,
        settings: false
    }), [profileOpen, setProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const drawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), menuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), profileMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const realtime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtime"])(invalidate);
    const active = navigation.find((n)=>n.id === section);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Shell.useEffect": ()=>{
            setMenu(false);
            setProfileOpen(false);
            const group = sections.find({
                "Shell.useEffect.group": (g)=>g.items.includes(section)
            }["Shell.useEffect.group"]);
            if (group) setExpanded({
                "Shell.useEffect": (s)=>({
                        ...s,
                        [group.id]: true
                    })
            }["Shell.useEffect"]);
        }
    }["Shell.useEffect"], [
        pathname,
        section
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Shell.useEffect": ()=>{
            if (!menu) return;
            const before = document.activeElement, overflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            const links = {
                "Shell.useEffect.links": ()=>Array.from(drawer.current?.querySelectorAll('a[href],button:not(:disabled)') || [])
            }["Shell.useEffect.links"];
            links()[0]?.focus();
            const key = {
                "Shell.useEffect.key": (e)=>{
                    if (e.key === 'Escape') setMenu(false);
                    if (e.key === 'Tab') {
                        const list = links(), first = list[0], last = list.at(-1);
                        if (e.shiftKey && document.activeElement === first) {
                            e.preventDefault();
                            last?.focus();
                        } else if (!e.shiftKey && document.activeElement === last) {
                            e.preventDefault();
                            first?.focus();
                        }
                    }
                }
            }["Shell.useEffect.key"];
            window.addEventListener('keydown', key);
            return ({
                "Shell.useEffect": ()=>{
                    document.body.style.overflow = overflow;
                    window.removeEventListener('keydown', key);
                    (before || menuButton.current)?.focus();
                }
            })["Shell.useEffect"];
        }
    }["Shell.useEffect"], [
        menu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Shell.useEffect": ()=>{
            if (!profileOpen) return;
            const close = {
                "Shell.useEffect.close": (e)=>{
                    if (!profileMenu.current?.contains(e.target)) setProfileOpen(false);
                }
            }["Shell.useEffect.close"];
            const key = {
                "Shell.useEffect.key": (e)=>{
                    if (e.key === 'Escape') setProfileOpen(false);
                }
            }["Shell.useEffect.key"];
            document.addEventListener('mousedown', close);
            window.addEventListener('keydown', key);
            return ({
                "Shell.useEffect": ()=>{
                    document.removeEventListener('mousedown', close);
                    window.removeEventListener('keydown', key);
                }
            })["Shell.useEffect"];
        }
    }["Shell.useEffect"], [
        profileOpen
    ]);
    let view;
    switch(section){
        case '':
        case 'login':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$views$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overview"], {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 63
            }, this);
            break;
        case 'products':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerProducts, {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 102
            }, this);
            break;
        case 'product-packages':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerPackages, {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 154
            }, this);
            break;
        case 'product-groups':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerProductGroups, {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 204
            }, this);
            break;
        case 'product-discounts':
        case 'discounts':
            view = profile.shop.subscription?.permissions.specialOffers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerDiscounts, {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 332
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "notice",
                children: "Special Offers is locked by Main Admin."
            }, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 350
            }, this);
            break;
        case 'groups':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerProductGroups, {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 445
            }, this);
            break;
        case 'catalog':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerProducts, {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 493
            }, this);
            break;
        case 'order-finance':
        case 'product-orders':
        case 'product-order':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reference-finance-ui",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductOrdersView, {}, void 0, false, {
                    fileName: "[project]/src/components/panel.tsx",
                    lineNumber: 93,
                    columnNumber: 623
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 585
            }, this);
            break;
        case 'recharge-order':
        case 'recharge-orders':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reference-finance-ui",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RechargeOrdersView, {}, void 0, false, {
                    fileName: "[project]/src/components/panel.tsx",
                    lineNumber: 93,
                    columnNumber: 744
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 706
            }, this);
            break;
        case 'balance-adjustments':
        case 'balance-adjust':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reference-finance-ui",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BalanceAdjustmentsView, {}, void 0, false, {
                    fileName: "[project]/src/components/panel.tsx",
                    lineNumber: 93,
                    columnNumber: 870
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 832
            }, this);
            break;
        case 'payment-settings':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reference-payment-ui",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentSettingsView, {}, void 0, false, {
                    fileName: "[project]/src/components/panel.tsx",
                    lineNumber: 93,
                    columnNumber: 975
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 937
            }, this);
            break;
        case 'recharge-list':
        case 'order-list':
            view = null;
            break;
        case 'pricing':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pricing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PricingSettings"], {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 1085
            }, this);
            break;
        case 'users':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserList"], {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 1128
            }, this);
            break;
        case 'transactions':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$views$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transactions"], {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 1171
            }, this);
            break;
        case 'connection':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$views$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connection"], {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 1216
            }, this);
            break;
        case 'website-banners':
        case 'website-settings':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$website$2d$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebsiteSettings"], {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 1288
            }, this);
            break;
        case 'appearance':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$appearance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Appearance"], {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 1336
            }, this);
            break;
        case 'account':
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$views$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Account"], {}, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 1376
            }, this);
            break;
        default:
            view = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Page not found"
                    }, void 0, false, {
                        fileName: "[project]/src/components/panel.tsx",
                        lineNumber: 93,
                        columnNumber: 1429
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Return to dashboard"
                    }, void 0, false, {
                        fileName: "[project]/src/components/panel.tsx",
                        lineNumber: 93,
                        columnNumber: 1452
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 93,
                columnNumber: 1406
            }, this);
    }
    if (section === 'order-list' || section === 'recharge-list') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/panel.tsx",
        lineNumber: 94,
        columnNumber: 62
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "workspace bee-theme owner-workspace",
        children: [
            menu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "sidebar-scrim",
                "aria-label": "Close navigation",
                onClick: ()=>setMenu(false)
            }, void 0, false, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 95,
                columnNumber: 69
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                id: "owner-navigation",
                ref: drawer,
                "aria-label": "Shop owner navigation",
                className: `sidebar ${menu ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                "aria-label": profile.shop.name + ' dashboard',
                                onClick: ()=>setMenu(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Brand, {
                                    name: profile.shop.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/panel.tsx",
                                    lineNumber: 95,
                                    columnNumber: 400
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 95,
                                columnNumber: 312
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "icon-btn mobile-only",
                                onClick: ()=>setMenu(false),
                                "aria-label": "Close menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/panel.tsx",
                                    lineNumber: 95,
                                    columnNumber: 534
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 95,
                                columnNumber: 440
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/panel.tsx",
                        lineNumber: 95,
                        columnNumber: 281
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Primary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: ()=>setMenu(false),
                                className: !section ? 'active' : '',
                                "aria-current": !section ? 'page' : undefined,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 707
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 735
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 95,
                                columnNumber: 589
                            }, this),
                            sections.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "owner-nav-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "owner-nav-heading",
                                            "aria-controls": 'nav-' + group.id,
                                            "aria-expanded": expanded[group.id],
                                            onClick: ()=>setExpanded((s)=>({
                                                        ...s,
                                                        [group.id]: !s[group.id]
                                                    })),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(group.icon, {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/panel.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 1003
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: group.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/panel.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 1026
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 14,
                                                    className: expanded[group.id] ? '' : 'collapsed'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/panel.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 1052
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/panel.tsx",
                                            lineNumber: 95,
                                            columnNumber: 835
                                        }, this),
                                        expanded[group.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "owner-nav-children",
                                            id: 'nav-' + group.id,
                                            children: navigation.filter((n)=>group.items.includes(n.id)).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${n.id}`,
                                                    onClick: ()=>setMenu(false),
                                                    className: section === n.id ? 'active' : '',
                                                    "aria-current": section === n.id ? 'page' : undefined,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: n.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/panel.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 1416
                                                    }, this)
                                                }, n.id, false, {
                                                    fileName: "[project]/src/components/panel.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 1266
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/panel.tsx",
                                            lineNumber: 95,
                                            columnNumber: 1152
                                        }, this)
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/src/components/panel.tsx",
                                    lineNumber: 95,
                                    columnNumber: 785
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/panel.tsx",
                        lineNumber: 95,
                        columnNumber: 563
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-bottom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "connection-box",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `live-dot ${realtime === 'live' ? '' : 'muted'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/panel.tsx",
                                    lineNumber: 95,
                                    columnNumber: 1532
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: realtime === 'live' ? 'Live updates connected' : realtime === 'paused' ? 'Updates paused' : 'Automatic updates active'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/panel.tsx",
                                            lineNumber: 95,
                                            columnNumber: 1599
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: [
                                                profile.shop.code,
                                                " · Owner workspace"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/panel.tsx",
                                            lineNumber: 95,
                                            columnNumber: 1714
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/panel.tsx",
                                    lineNumber: 95,
                                    columnNumber: 1594
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/panel.tsx",
                            lineNumber: 95,
                            columnNumber: 1500
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/panel.tsx",
                        lineNumber: 95,
                        columnNumber: 1468
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 95,
                columnNumber: 164
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-column",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "topbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "owner-page-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: menuButton,
                                        className: "icon-btn mobile-only",
                                        "aria-label": "Open navigation",
                                        "aria-expanded": menu,
                                        "aria-controls": "owner-navigation",
                                        onClick: ()=>setMenu(true),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/panel.tsx",
                                            lineNumber: 96,
                                            columnNumber: 263
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 94
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: active?.label || 'Dashboard'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 289
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 96,
                                columnNumber: 58
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "topbar-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/transactions",
                                        className: "balance-pill",
                                        "aria-label": 'Owner balance ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(profile.balance) + ' USD',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 96,
                                                columnNumber: 474
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    "$",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(profile.balance)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 96,
                                                columnNumber: 493
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "USD"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 96,
                                                columnNumber: 525
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 362
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "icon-btn",
                                        "aria-label": "Refresh data",
                                        onClick: invalidate,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/panel.tsx",
                                            lineNumber: 96,
                                            columnNumber: 624
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 548
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "owner-profile",
                                        ref: profileMenu,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "avatar small",
                                                "aria-label": "Open profile menu",
                                                "aria-expanded": profileOpen,
                                                "aria-controls": "owner-profile-menu",
                                                onClick: ()=>setProfileOpen(!profileOpen),
                                                children: profile.userName[0].toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 96,
                                                columnNumber: 704
                                            }, this),
                                            profileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "owner-profile-menu",
                                                className: "owner-profile-menu",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: profile.userName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/panel.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 997
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: profile.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/panel.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 1022
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/panel.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 992
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/account",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/panel.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 1080
                                                            }, this),
                                                            "My account"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/panel.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 1058
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>void logout(),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/panel.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 1155
                                                            }, this),
                                                            "Sign out"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/panel.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 1119
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/panel.tsx",
                                                lineNumber: 96,
                                                columnNumber: 932
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/panel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 655
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 96,
                                columnNumber: 332
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/panel.tsx",
                        lineNumber: 96,
                        columnNumber: 31
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        id: "main-content",
                        className: "page-content",
                        children: [
                            view,
                            children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/panel.tsx",
                        lineNumber: 96,
                        columnNumber: 1219
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "page-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " ",
                                    profile.shop.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 96,
                                columnNumber: 1323
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    profile.shop.code,
                                    " · v1.10.0"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/panel.tsx",
                                lineNumber: 96,
                                columnNumber: 1384
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/panel.tsx",
                        lineNumber: 96,
                        columnNumber: 1291
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/panel.tsx",
                lineNumber: 96,
                columnNumber: 2
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/panel.tsx",
        lineNumber: 95,
        columnNumber: 9
    }, this);
}
_s3(Shell, "9YFOQFjon6g4MEObA2dvDnwwiUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtime"]
    ];
});
_c12 = Shell;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "OwnerProducts");
__turbopack_context__.k.register(_c1, "OwnerPackages");
__turbopack_context__.k.register(_c2, "OwnerDiscounts");
__turbopack_context__.k.register(_c3, "OwnerProductGroups");
__turbopack_context__.k.register(_c4, "PaymentSettingsView");
__turbopack_context__.k.register(_c5, "ProductOrdersView");
__turbopack_context__.k.register(_c6, "RechargeOrdersView");
__turbopack_context__.k.register(_c7, "BalanceAdjustmentsView");
__turbopack_context__.k.register(_c8, "Brand");
__turbopack_context__.k.register(_c9, "Panel");
__turbopack_context__.k.register(_c10, "AuthenticatedPanel");
__turbopack_context__.k.register(_c11, "Login");
__turbopack_context__.k.register(_c12, "Shell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pricing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingSettings",
    ()=>PricingSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shop-catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$views$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/views.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
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
function PricingSettings() {
    _s();
    const { invalidate, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])(), { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('shop-pricing', {
        "PricingSettings.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('pricing')
    }["PricingSettings.useData"]);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [cost, setCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1), init = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PricingSettings.useEffect": ()=>{
            if (data && !init.current) {
                init.current = true;
                setDraft(data);
            }
        }
    }["PricingSettings.useEffect"], [
        data
    ]);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
        message: error,
        retry: invalidate
    }, void 0, false, {
        fileName: "[project]/src/components/pricing.tsx",
        lineNumber: 13,
        columnNumber: 18
    }, this);
    if (!draft) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
        fileName: "[project]/src/components/pricing.tsx",
        lineNumber: 13,
        columnNumber: 82
    }, this);
    const d = draft, patch = (p)=>setDraft({
            ...d,
            ...p
        }), preview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["previewPrice"])(cost, d, {
        priceMode: 'AUTO',
        sellingPriceMmk: null,
        discountPercent: 0
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$views$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageTitle"], {
                title: "Pricing settings",
                sub: "Set your shop’s MMK selling prices. Your Main purchasing balance remains in USD."
            }, void 0, false, {
                fileName: "[project]/src/components/pricing.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shop-editor-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                            className: "shop-pricing-form",
                            onSubmit: async ()=>{
                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])('pricing', d, 'PUT');
                                invalidate();
                                notify('Shop pricing saved. Automatic MMK prices updated.');
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "USD → MMK rate",
                                    hint: "MMK amount for 1 USD. Set your own selling rate.",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        type: "number",
                                        inputMode: "decimal",
                                        min: "0.0001",
                                        max: "10000000",
                                        step: "0.0001",
                                        value: d.usdMmkRate || '',
                                        onChange: (e)=>patch({
                                                usdMmkRate: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pricing.tsx",
                                        lineNumber: 15,
                                        columnNumber: 445
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pricing.tsx",
                                    lineNumber: 15,
                                    columnNumber: 359
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Default profit · %",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        type: "number",
                                        inputMode: "decimal",
                                        min: "0",
                                        max: "10000",
                                        step: "0.01",
                                        value: d.profitPercent,
                                        onChange: (e)=>patch({
                                                profitPercent: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pricing.tsx",
                                        lineNumber: 15,
                                        columnNumber: 662
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pricing.tsx",
                                    lineNumber: 15,
                                    columnNumber: 628
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Automatic price rounding",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: d.rounding,
                                        onChange: (e)=>patch({
                                                rounding: e.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "EXACT",
                                                children: "Exact · 2 decimal places"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pricing.tsx",
                                                lineNumber: 15,
                                                columnNumber: 974
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "TENS",
                                                children: "Round up to 10 Ks"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pricing.tsx",
                                                lineNumber: 15,
                                                columnNumber: 1029
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "FIFTIES",
                                                children: "Round up to 50 Ks"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pricing.tsx",
                                                lineNumber: 15,
                                                columnNumber: 1076
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "HUNDREDS",
                                                children: "Round up to 100 Ks"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pricing.tsx",
                                                lineNumber: 15,
                                                columnNumber: 1126
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pricing.tsx",
                                        lineNumber: 15,
                                        columnNumber: 877
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pricing.tsx",
                                    lineNumber: 15,
                                    columnNumber: 837
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "card-footnote",
                                    children: "Auto base = Main USD cost × rate × (1 + profit %). Rounding applies before the package discount. Manual MMK prices are preserved when these settings change."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pricing.tsx",
                                    lineNumber: 15,
                                    columnNumber: 1195
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pricing.tsx",
                            lineNumber: 15,
                            columnNumber: 197
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pricing.tsx",
                        lineNumber: 15,
                        columnNumber: 171
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card shop-pricing-example",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                size: 26
                            }, void 0, false, {
                                fileName: "[project]/src/components/pricing.tsx",
                                lineNumber: 15,
                                columnNumber: 1448
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Price preview"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pricing.tsx",
                                lineNumber: 15,
                                columnNumber: 1471
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Main cost · USD",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    inputMode: "decimal",
                                    min: "0.0001",
                                    step: "0.0001",
                                    value: cost,
                                    onChange: (e)=>setCost(Number(e.target.value))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pricing.tsx",
                                    lineNumber: 15,
                                    columnNumber: 1524
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pricing.tsx",
                                lineNumber: 15,
                                columnNumber: 1493
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mmk"])(preview.final)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pricing.tsx",
                                lineNumber: 15,
                                columnNumber: 1660
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted-text",
                                children: "Before package discounts. Saving pricing does not charge your balance."
                            }, void 0, false, {
                                fileName: "[project]/src/components/pricing.tsx",
                                lineNumber: 15,
                                columnNumber: 1697
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pricing.tsx",
                        lineNumber: 15,
                        columnNumber: 1401
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pricing.tsx",
                lineNumber: 15,
                columnNumber: 135
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pricing.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_s(PricingSettings, "gzAktyhop0zAZPSNTNfPZPQ+xBg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c = PricingSettings;
var _c;
__turbopack_context__.k.register(_c, "PricingSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/telegram-login-otp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelegramLoginOtp",
    ()=>TelegramLoginOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2d$otp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telegram-otp.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TelegramLoginOtp({ challenge, onVerified, onBack }) {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(challenge), [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TelegramLoginOtp.useState": ()=>Date.now()
    }["TelegramLoginOtp.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TelegramLoginOtp.useEffect": ()=>{
            const timer = setInterval({
                "TelegramLoginOtp.useEffect.timer": ()=>setNow(Date.now())
            }["TelegramLoginOtp.useEffect.timer"], 1000);
            return ({
                "TelegramLoginOtp.useEffect": ()=>clearInterval(timer)
            })["TelegramLoginOtp.useEffect"];
        }
    }["TelegramLoginOtp.useEffect"], []);
    const wait = Math.max(0, Math.ceil((Date.parse(current.resendAvailableAt) - now) / 1000)), expired = Date.parse(current.expiresAt) <= now;
    const resend = async ()=>{
        if (busy || wait || expired) return;
        setBusy(true);
        setError('');
        try {
            const response = await fetch('/api/session/otp/resend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    challengeId: current.challengeId
                })
            });
            const value = await response.json();
            if (!response.ok) throw Error(value.message || 'Unable to resend code.');
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2d$otp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTelegramChallenge"])(value)) throw Error('Invalid verification response.');
            setCurrent(value);
            setCode('');
            setNow(Date.now());
        } catch (failure) {
            setError(failure instanceof Error ? failure.message : 'Unable to resend code.');
        } finally{
            setBusy(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Telegram verification"
            }, void 0, false, {
                fileName: "[project]/src/components/telegram-login-otp.tsx",
                lineNumber: 14,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "login-description",
                children: [
                    "Enter the 6-digit code sent to ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: current.deliveryBot
                    }, void 0, false, {
                        fileName: "[project]/src/components/telegram-login-otp.tsx",
                        lineNumber: 14,
                        columnNumber: 108
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/telegram-login-otp.tsx",
                lineNumber: 14,
                columnNumber: 44
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                "aria-busy": busy,
                onSubmit: async (event)=>{
                    event.preventDefault();
                    if (busy || expired || !/^[0-9]{6}$/.test(code)) return;
                    setBusy(true);
                    setError('');
                    try {
                        const response = await fetch('/api/session/otp', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                challengeId: current.challengeId,
                                otp: code
                            })
                        });
                        const value = await response.json();
                        if (!response.ok) throw Error(value.message || 'Invalid verification code.');
                        onVerified(value);
                    } catch (failure) {
                        setError(failure instanceof Error ? failure.message : 'Unable to verify code.');
                    } finally{
                        setBusy(false);
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Telegram code",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "login-input",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                autoFocus: true,
                                required: true,
                                type: "text",
                                name: "otp",
                                inputMode: "numeric",
                                autoComplete: "one-time-code",
                                pattern: "[0-9]{6}",
                                maxLength: 6,
                                value: code,
                                onChange: (event)=>setCode(event.target.value.replace(/[^0-9]/g, '')),
                                disabled: busy || expired,
                                placeholder: "000000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/telegram-login-otp.tsx",
                                lineNumber: 18,
                                columnNumber: 63
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/telegram-login-otp.tsx",
                            lineNumber: 18,
                            columnNumber: 34
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/telegram-login-otp.tsx",
                        lineNumber: 18,
                        columnNumber: 5
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                        message: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/telegram-login-otp.tsx",
                        lineNumber: 19,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        variant: "primary",
                        className: "login-submit",
                        disabled: busy || expired || code.length !== 6,
                        children: busy ? 'Verifying…' : 'Verify and sign in'
                    }, void 0, false, {
                        fileName: "[project]/src/components/telegram-login-otp.tsx",
                        lineNumber: 19,
                        columnNumber: 38
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/telegram-login-otp.tsx",
                lineNumber: 14,
                columnNumber: 141
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "login-help",
                children: expired ? 'Code expired. Return to sign in for a new code.' : 'Code expires in 5 minutes.'
            }, void 0, false, {
                fileName: "[project]/src/components/telegram-login-otp.tsx",
                lineNumber: 20,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        disabled: busy,
                        onClick: onBack,
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/src/components/telegram-login-otp.tsx",
                        lineNumber: 20,
                        columnNumber: 149
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        disabled: busy || wait > 0 || expired,
                        onClick: ()=>void resend(),
                        children: wait ? `Resend in ${wait}s` : 'Resend code'
                    }, void 0, false, {
                        fileName: "[project]/src/components/telegram-login-otp.tsx",
                        lineNumber: 20,
                        columnNumber: 203
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/telegram-login-otp.tsx",
                lineNumber: 20,
                columnNumber: 120
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/telegram-login-otp.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(TelegramLoginOtp, "uiCP96SNv+8l70iD6On64SVNBLk=");
_c = TelegramLoginOtp;
var _c;
__turbopack_context__.k.register(_c, "TelegramLoginOtp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/telegram-notifications.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelegramNotifications",
    ()=>TelegramNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TelegramNotifications() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [startUrl, setStartUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const inFlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TelegramNotifications.useCallback[refresh]": async ()=>{
            try {
                setStatus(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('telegram'));
                setError('');
            } catch (e) {
                setError(e.message);
            }
        }
    }["TelegramNotifications.useCallback[refresh]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TelegramNotifications.useEffect": ()=>{
            void refresh();
            const onFocus = {
                "TelegramNotifications.useEffect.onFocus": ()=>{
                    void refresh();
                }
            }["TelegramNotifications.useEffect.onFocus"];
            window.addEventListener('focus', onFocus);
            return ({
                "TelegramNotifications.useEffect": ()=>window.removeEventListener('focus', onFocus)
            })["TelegramNotifications.useEffect"];
        }
    }["TelegramNotifications.useEffect"], [
        refresh
    ]);
    const connect = async ()=>{
        if (inFlight.current) return;
        inFlight.current = true;
        setBusy(true);
        setError('');
        try {
            const result = status?.telegramId ? {
                startUrl: `https://t.me/${status.botUsername}`
            } : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])('telegram/link', {});
            if (!/^https:\/\/t\.me\/[A-Za-z0-9_]+(?:\?start=link_[A-Za-z0-9_-]{43})?$/.test(result.startUrl)) throw new Error('Invalid Telegram connection link.');
            setStartUrl(result.startUrl);
        } catch (e) {
            setError(e.message);
        } finally{
            inFlight.current = false;
            setBusy(false);
        }
    };
    const disconnect = async ()=>{
        if (inFlight.current) return;
        inFlight.current = true;
        setBusy(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('telegram', {
                method: 'DELETE'
            });
            setStartUrl('');
            await refresh();
        } catch (e) {
            setError(e.message);
        } finally{
            inFlight.current = false;
            setBusy(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                title: "Telegram notifications"
            }, void 0, false, {
                fileName: "[project]/src/components/telegram-notifications.tsx",
                lineNumber: 13,
                columnNumber: 35
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted-text",
                children: "All Shop Admins use the shared shop_admins bot. Alerts include the shop name and go to the connected owner."
            }, void 0, false, {
                fileName: "[project]/src/components/telegram-notifications.tsx",
                lineNumber: 13,
                columnNumber: 80
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: error
            }, void 0, false, {
                fileName: "[project]/src/components/telegram-notifications.tsx",
                lineNumber: 13,
                columnNumber: 225
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "card-footnote",
                children: !status ? 'Checking connection…' : !status.configured ? 'Head Admin has not configured the Shop Admin bot yet.' : status.linked ? `Connected to @${status.botUsername}.` : status.webhookReady ? status.telegramId ? `Use Telegram account ${status.telegramId} and press Start in @${status.botUsername}.` : `Connect @${status.botUsername} to receive order and recharge alerts.` : 'Bot setup is still pending.'
            }, void 0, false, {
                fileName: "[project]/src/components/telegram-notifications.tsx",
                lineNumber: 13,
                columnNumber: 253
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-footer",
                children: [
                    status?.linked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        disabled: busy,
                        onClick: ()=>void disconnect(),
                        children: "Disconnect Telegram"
                    }, void 0, false, {
                        fileName: "[project]/src/components/telegram-notifications.tsx",
                        lineNumber: 13,
                        columnNumber: 717
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        disabled: busy || !status?.configured || !status.webhookReady,
                        onClick: ()=>void connect(),
                        children: busy ? 'Preparing…' : status?.telegramId ? 'Open Admin bot' : 'Connect Telegram'
                    }, void 0, false, {
                        fileName: "[project]/src/components/telegram-notifications.tsx",
                        lineNumber: 13,
                        columnNumber: 802
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        disabled: busy,
                        onClick: ()=>void refresh(),
                        children: "Refresh status"
                    }, void 0, false, {
                        fileName: "[project]/src/components/telegram-notifications.tsx",
                        lineNumber: 13,
                        columnNumber: 982
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/telegram-notifications.tsx",
                lineNumber: 13,
                columnNumber: 672
            }, this),
            startUrl && !status?.linked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "notice",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "text-link",
                            href: startUrl,
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Open Telegram and press Start ↗"
                        }, void 0, false, {
                            fileName: "[project]/src/components/telegram-notifications.tsx",
                            lineNumber: 13,
                            columnNumber: 1119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/telegram-notifications.tsx",
                            lineNumber: 13,
                            columnNumber: 1228
                        }, this),
                        "Then return here and refresh the status. ",
                        status?.telegramId ? 'The assigned Telegram account connects when it sends /start.' : 'This link expires in 10 minutes.'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/telegram-notifications.tsx",
                    lineNumber: 13,
                    columnNumber: 1116
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/telegram-notifications.tsx",
                lineNumber: 13,
                columnNumber: 1092
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/telegram-notifications.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_s(TelegramNotifications, "OWOgqaivUYy/AAIrFMzH+IXrnuw=");
_c = TelegramNotifications;
var _c;
__turbopack_context__.k.register(_c, "TelegramNotifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "Button",
    ()=>Button,
    "CopyButton",
    ()=>CopyButton,
    "Detail",
    ()=>Detail,
    "Empty",
    ()=>Empty,
    "ErrorBox",
    ()=>ErrorBox,
    "Export",
    ()=>Export,
    "External",
    ()=>External,
    "Field",
    ()=>Field,
    "Form",
    ()=>Form,
    "Loading",
    ()=>Loading,
    "Modal",
    ()=>Modal,
    "Pager",
    ()=>Pager,
    "SearchBox",
    ()=>SearchBox,
    "SectionHead",
    ()=>SectionHead,
    "ServerBadge",
    ()=>ServerBadge,
    "Stat",
    ()=>Stat,
    "val",
    ()=>val
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$to$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownToLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js [app-client] (ecmascript) <export default as ArrowDownToLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$table$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog-table.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shop-catalog.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Button({ children, onClick, type = 'button', variant = '', disabled = false, className = '', title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        title: title,
        type: type,
        onClick: onClick,
        disabled: disabled,
        className: `btn ${variant} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 7,
        columnNumber: 241
    }, this);
}
_c = Button;
function Badge({ value }) {
    const s = typeof value === 'boolean' ? value ? 'Active' : 'Disabled' : value;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `badge ${s.toLowerCase().replaceAll('_', '-')}`,
        children: s.replaceAll('_', ' ')
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 8,
        columnNumber: 130
    }, this);
}
_c1 = Badge;
function Empty({ title = 'Nothing here yet', text = 'New records will appear here.' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "empty",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/src/components/ui.tsx",
                    lineNumber: 9,
                    columnNumber: 154
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 9,
                columnNumber: 148
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 9,
                columnNumber: 179
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 9,
                columnNumber: 195
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 9,
        columnNumber: 125
    }, this);
}
_c2 = Empty;
function Loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "loading",
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                className: "spin",
                size: 22
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 10,
                columnNumber: 73
            }, this),
            " Loading your workspace…"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 10,
        columnNumber: 34
    }, this);
}
_c3 = Loading;
function ErrorBox({ message, retry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "error-box",
        role: "alert",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 11,
                columnNumber: 124
            }, this),
            retry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                onClick: retry,
                children: "Try again"
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 11,
                columnNumber: 148
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 11,
        columnNumber: 84
    }, this);
}
_c4 = ErrorBox;
function Field({ label, children, hint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 12,
                columnNumber: 126
            }, this),
            children,
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 12,
                columnNumber: 163
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 12,
        columnNumber: 101
    }, this);
}
_c5 = Field;
function Modal({ title, description, children, onClose, wide = false }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), closeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    closeRef.current = onClose;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const old = document.activeElement;
            const overflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            const el = ref.current;
            const items = {
                "Modal.useEffect.items": ()=>Array.from(el?.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),a[href],[tabindex="0"]') ?? [])
            }["Modal.useEffect.items"];
            items()[0]?.focus();
            const key = {
                "Modal.useEffect.key": (e)=>{
                    if (e.key === 'Escape') closeRef.current();
                    if (e.key === 'Tab') {
                        const a = items(), first = a[0], last = a[a.length - 1];
                        if (e.shiftKey && document.activeElement === first) {
                            e.preventDefault();
                            last?.focus();
                        } else if (!e.shiftKey && document.activeElement === last) {
                            e.preventDefault();
                            first?.focus();
                        }
                    }
                }
            }["Modal.useEffect.key"];
            document.addEventListener('keydown', key);
            return ({
                "Modal.useEffect": ()=>{
                    document.body.style.overflow = overflow;
                    document.removeEventListener('keydown', key);
                    old?.focus();
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-backdrop",
        onMouseDown: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": title,
            className: `modal ${wide ? 'wide' : ''}`,
            ref: ref,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui.tsx",
                                    lineNumber: 16,
                                    columnNumber: 238
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui.tsx",
                                    lineNumber: 16,
                                    columnNumber: 268
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui.tsx",
                            lineNumber: 16,
                            columnNumber: 233
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "aria-label": "Close dialog",
                            className: "icon-btn",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 19
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui.tsx",
                                lineNumber: 16,
                                columnNumber: 368
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui.tsx",
                            lineNumber: 16,
                            columnNumber: 295
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui.tsx",
                    lineNumber: 16,
                    columnNumber: 205
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui.tsx",
            lineNumber: 16,
            columnNumber: 101
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_s(Modal, "En15A3Lo6X0zcojW+iioQpPvuME=");
_c6 = Modal;
function Form({ onSubmit, children, submit = 'Save changes', onCancel, danger = false, className = '' }) {
    _s1();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function handle(e) {
        e.preventDefault();
        if (busy) return;
        setBusy(true);
        setError('');
        const data = new FormData(e.currentTarget);
        try {
            await onSubmit(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong.');
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: className,
        onSubmit: handle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                disabled: busy,
                className: "form-fields",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 21,
                columnNumber: 55
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "form-error",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 21,
                columnNumber: 134
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-footer",
                children: [
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        disabled: busy,
                        onClick: onCancel,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 21,
                        columnNumber: 229
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        disabled: busy,
                        type: "submit",
                        variant: danger ? 'danger' : 'primary',
                        children: [
                            busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                                size: 16,
                                className: "spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui.tsx",
                                lineNumber: 21,
                                columnNumber: 368
                            }, this) : null,
                            busy ? 'Saving…' : submit
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 21,
                        columnNumber: 288
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 21,
                columnNumber: 189
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_s1(Form, "Hu4qBmkd895K2GO5ERH0mJMpc5Y=");
_c7 = Form;
const val = (f, key)=>String(f.get(key) ?? '').trim();
function CopyButton({ text, label = 'Copy' }) {
    _s2();
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
        onClick: async ()=>{
            try {
                await navigator.clipboard.writeText(text);
                setDone(true);
                setError(false);
                setTimeout(()=>setDone(false), 2000);
            } catch  {
                setError(true);
            }
        },
        children: [
            done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                size: 14
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 24,
                columnNumber: 325
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                size: 14
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 24,
                columnNumber: 344
            }, this),
            " ",
            error ? 'Select and copy manually' : done ? 'Copied' : label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 24,
        columnNumber: 154
    }, this);
}
_s2(CopyButton, "bM4u411pR8xZF0TINQ4ploi1sJ4=");
_c8 = CopyButton;
function SearchBox({ value, onChange, placeholder = 'Search records…' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "search-box",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 25,
                columnNumber: 172
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                "aria-label": placeholder,
                placeholder: placeholder,
                value: value,
                onChange: (e)=>onChange(e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 25,
                columnNumber: 191
            }, this),
            value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "icon-btn",
                "aria-label": "Clear search",
                onClick: ()=>onChange(''),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/ui.tsx",
                    lineNumber: 25,
                    columnNumber: 393
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 25,
                columnNumber: 311
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 25,
        columnNumber: 144
    }, this);
}
_c9 = SearchBox;
function Pager({ page, totalPages, total, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pager",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    total.toLocaleString(),
                    " total records · Page ",
                    page + 1,
                    " of ",
                    Math.max(1, totalPages)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 26,
                columnNumber: 158
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        disabled: page === 0,
                        onClick: ()=>onChange(page - 1),
                        title: "Previous page",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui.tsx",
                            lineNumber: 26,
                            columnNumber: 339
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 26,
                        columnNumber: 258
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        disabled: page + 1 >= totalPages,
                        onClick: ()=>onChange(page + 1),
                        title: "Next page",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui.tsx",
                            lineNumber: 26,
                            columnNumber: 459
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 26,
                        columnNumber: 372
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 26,
                columnNumber: 253
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 26,
        columnNumber: 135
    }, this);
}
_c10 = Pager;
function SectionHead({ title, sub, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-head",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 27,
                        columnNumber: 137
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 27,
                        columnNumber: 159
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 27,
                columnNumber: 132
            }, this),
            action
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 27,
        columnNumber: 102
    }, this);
}
_c11 = SectionHead;
function Export({ name, rows }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
        disabled: !rows.length,
        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["csv"])(name, rows),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$to$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownToLine$3e$__["ArrowDownToLine"], {
                size: 15
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 28,
                columnNumber: 149
            }, this),
            " Export CSV"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 28,
        columnNumber: 88
    }, this);
}
_c12 = Export;
function Stat({ label, value, sub, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "stat",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stat-top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 29,
                        columnNumber: 158
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "stat-icon",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 29,
                        columnNumber: 178
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 29,
                columnNumber: 132
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 29,
                columnNumber: 225
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: sub
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 29,
                columnNumber: 249
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 29,
        columnNumber: 110
    }, this);
}
_c13 = Stat;
function Detail({ label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "detail-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 30,
                columnNumber: 112
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                children: children ?? '—'
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 30,
                columnNumber: 128
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 30,
        columnNumber: 83
    }, this);
}
_c14 = Detail;
function External({ href, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "text-link",
        href: href,
        target: "_blank",
        rel: "noreferrer",
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                size: 14
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 31,
                columnNumber: 163
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 31,
        columnNumber: 83
    }, this);
}
_c15 = External;
function ServerBadge({ id, label }) {
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverLabel"])({
        providerId: id,
        serverName: label
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "server-badge",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                style: {
                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$table$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverColor"])(id || name)
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 33,
                columnNumber: 163
            }, this),
            name
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 33,
        columnNumber: 132
    }, this);
}
_c16 = ServerBadge;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "Badge");
__turbopack_context__.k.register(_c2, "Empty");
__turbopack_context__.k.register(_c3, "Loading");
__turbopack_context__.k.register(_c4, "ErrorBox");
__turbopack_context__.k.register(_c5, "Field");
__turbopack_context__.k.register(_c6, "Modal");
__turbopack_context__.k.register(_c7, "Form");
__turbopack_context__.k.register(_c8, "CopyButton");
__turbopack_context__.k.register(_c9, "SearchBox");
__turbopack_context__.k.register(_c10, "Pager");
__turbopack_context__.k.register(_c11, "SectionHead");
__turbopack_context__.k.register(_c12, "Export");
__turbopack_context__.k.register(_c13, "Stat");
__turbopack_context__.k.register(_c14, "Detail");
__turbopack_context__.k.register(_c15, "External");
__turbopack_context__.k.register(_c16, "ServerBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/user-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserList",
    ()=>UserList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/services/usersApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$users$2f$components$2f$EditUserModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/users/components/EditUserModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$users$2f$components$2f$UserFilterDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$users$2f$components$2f$UserStatusConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/displayName.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customer$2d$security$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customer-security.tsx [app-client] (ecmascript)");
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
const initialFilters = {
    plan: 'all',
    showBanned: false,
    sort: 'newest'
};
function UserList() {
    _s();
    const { profile, cache, invalidate, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    const [ipBansOpen, setIpBansOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFilters), [filterOpen, setFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [statusUser, setStatusUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserList.useEffect": ()=>{
            const timer = setTimeout({
                "UserList.useEffect.timer": ()=>{
                    setSearch(query.trim());
                    setPage(0);
                }
            }["UserList.useEffect.timer"], 250);
            return ({
                "UserList.useEffect": ()=>clearTimeout(timer)
            })["UserList.useEffect"];
        }
    }["UserList.useEffect"], [
        query
    ]);
    const params = new URLSearchParams({
        page: String(page),
        size: String(size),
        q: search,
        userStatus: filters.showBanned ? 'BANNED' : 'ACTIVE',
        userSort: filters.sort
    });
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])(`shop-users:${profile.shop.id}:${params}`, {
        "UserList.useData[result]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('users?' + params)
    }["UserList.useData[result]"]);
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])(`shop-user:${profile.shop.id}:${selected ?? 'none'}`, {
        "UserList.useData[info]": ()=>selected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersApi"].detail(selected) : Promise.resolve(null)
    }["UserList.useData[info]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserList.useEffect": ()=>{
            if (result.data && page > 0 && page >= result.data.totalPages) setPage(Math.max(0, result.data.totalPages - 1));
        }
    }["UserList.useEffect"], [
        result.data?.totalPages,
        page
    ]);
    const rows = result.data?.content ?? [];
    const openInfo = (user)=>{
        cache.seed(`shop-user:${profile.shop.id}:${user.id}`, user);
        setSelected(user.id);
    };
    const loading = !result.data && result.loading;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "reference-finance-ui reference-users-ui w-full space-y-4",
        "aria-label": `${profile.shop.name} users`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white",
                                children: "Users"
                            }, void 0, false, {
                                fileName: "[project]/src/components/user-list.tsx",
                                lineNumber: 35,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-white/45",
                                children: [
                                    profile.shop.name,
                                    " · ",
                                    filters.showBanned ? 'Banned accounts' : 'Active accounts'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user-list.tsx",
                                lineNumber: 35,
                                columnNumber: 64
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user-list.tsx",
                        lineNumber: 35,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 flex-1 justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "relative flex-1 max-w-80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user-list.tsx",
                                        lineNumber: 37,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        "aria-label": "Search shop users",
                                        value: query,
                                        maxLength: 100,
                                        onChange: (e)=>setQuery(e.target.value),
                                        placeholder: "Search ID, user, email, Telegram…",
                                        className: "w-full h-[38px] bg-black/40 border border-white/10 rounded-lg pl-9 pr-9 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user-list.tsx",
                                        lineNumber: 37,
                                        columnNumber: 153
                                    }, this),
                                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": "Clear user search",
                                        onClick: ()=>setQuery(''),
                                        className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/user-list.tsx",
                                            lineNumber: 37,
                                            columnNumber: 639
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user-list.tsx",
                                        lineNumber: 37,
                                        columnNumber: 487
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user-list.tsx",
                                lineNumber: 37,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Open user filters",
                                "aria-expanded": filterOpen,
                                onClick: ()=>setFilterOpen((v)=>!v),
                                className: "glass-effect-btn h-[38px] w-[38px] flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user-list.tsx",
                                    lineNumber: 38,
                                    columnNumber: 200
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/user-list.tsx",
                                lineNumber: 38,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user-list.tsx",
                        lineNumber: 36,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user-list.tsx",
                lineNumber: 34,
                columnNumber: 3
            }, this),
            (result.error || result.refreshError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: result.error || result.refreshError,
                retry: invalidate
            }, void 0, false, {
                fileName: "[project]/src/components/user-list.tsx",
                lineNumber: 41,
                columnNumber: 41
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "customer-ip-toggle",
                type: "button",
                "aria-expanded": ipBansOpen,
                onClick: ()=>setIpBansOpen((v)=>!v),
                children: "IP blacklist"
            }, void 0, false, {
                fileName: "[project]/src/components/user-list.tsx",
                lineNumber: 42,
                columnNumber: 3
            }, this),
            ipBansOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customer$2d$security$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShopIpBans"], {}, void 0, false, {
                fileName: "[project]/src/components/user-list.tsx",
                lineNumber: 43,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card-container w-full overflow-hidden",
                "aria-busy": result.loading,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full overflow-x-auto custom-scrollbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-[11px] md:text-sm whitespace-nowrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-white/5 text-white/50 border-b border-white/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            'ID',
                                            'User',
                                            'Balance',
                                            'Status',
                                            'Linked',
                                            'Created at',
                                            'Action'
                                        ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2.5 font-medium",
                                                children: label
                                            }, label, false, {
                                                fileName: "[project]/src/components/user-list.tsx",
                                                lineNumber: 47,
                                                columnNumber: 155
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user-list.tsx",
                                        lineNumber: 47,
                                        columnNumber: 75
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user-list.tsx",
                                    lineNumber: 47,
                                    columnNumber: 6
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-white/5 text-white/80",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 7,
                                            className: "p-12 text-center text-white/45",
                                            role: "status",
                                            children: "Loading shop users…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/user-list.tsx",
                                            lineNumber: 49,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user-list.tsx",
                                        lineNumber: 49,
                                        columnNumber: 16
                                    }, this) : !rows.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 7,
                                            className: "h-64",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center gap-3 text-white/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        size: 38
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/user-list.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 252
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: result.error ? 'Users unavailable' : 'Users Not Found'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/user-list.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 268
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/user-list.tsx",
                                                lineNumber: 49,
                                                columnNumber: 173
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/user-list.tsx",
                                            lineNumber: 49,
                                            columnNumber: 140
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user-list.tsx",
                                        lineNumber: 49,
                                        columnNumber: 136
                                    }, this) : rows.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-white/[0.04]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2.5 font-mono text-white/45",
                                                    children: user.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user-list.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 8
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2.5 font-medium text-white/90",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "text-left hover:underline",
                                                            onClick: ()=>openInfo(user),
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayName"])(user)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/user-list.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 62
                                                        }, this),
                                                        user.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            className: "block mt-0.5 text-white/40",
                                                            children: user.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/user-list.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 192
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/user-list.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 8
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2.5 font-medium",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(user.balance),
                                                        " Ks"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/user-list.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 8
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-flex px-2 py-0.5 rounded text-[10px] font-semibold border ${user.status === 'Banned' ? 'border-rose-400/25 bg-rose-400/10 text-rose-300' : 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'}`,
                                                        children: user.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/user-list.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 36
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user-list.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 8
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                title: user.telegram ? `Telegram ID: ${user.telegram}` : 'Telegram not linked',
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                    size: 16,
                                                                    className: user.telegram ? 'text-emerald-400' : 'text-white/20'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/user-list.tsx",
                                                                    lineNumber: 54,
                                                                    columnNumber: 159
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/user-list.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                title: user.email || 'Email not linked',
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    size: 16,
                                                                    className: user.email ? 'text-emerald-400' : 'text-white/20'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/user-list.tsx",
                                                                    lineNumber: 54,
                                                                    columnNumber: 289
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/user-list.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 244
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                title: user.google || 'Google not linked',
                                                                className: `font-bold text-sm ${user.google ? 'text-emerald-400' : 'text-white/20'}`,
                                                                children: "G"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/user-list.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 371
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/user-list.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 36
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user-list.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 8
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2.5 text-white/45 font-mono text-xs",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"])(user.createdAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user-list.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 8
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                "aria-label": `User info for ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayName"])(user)}`,
                                                                onClick: ()=>openInfo(user),
                                                                className: "w-7 h-7 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/user-list.tsx",
                                                                    lineNumber: 56,
                                                                    columnNumber: 302
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/user-list.tsx",
                                                                lineNumber: 56,
                                                                columnNumber: 79
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                "aria-label": `${user.status === 'Banned' ? 'Unban' : 'Ban'} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayName"])(user)}`,
                                                                onClick: ()=>setStatusUser(user),
                                                                className: "min-w-[50px] h-7 px-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-[10px] tracking-wide",
                                                                children: user.status === 'Banned' ? 'UNBAN' : 'BAN'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/user-list.tsx",
                                                                lineNumber: 56,
                                                                columnNumber: 328
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/user-list.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 36
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user-list.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 8
                                                }, this)
                                            ]
                                        }, user.id, true, {
                                            fileName: "[project]/src/components/user-list.tsx",
                                            lineNumber: 49,
                                            columnNumber: 359
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user-list.tsx",
                                    lineNumber: 48,
                                    columnNumber: 6
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/user-list.tsx",
                            lineNumber: 46,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/user-list.tsx",
                        lineNumber: 45,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "flex items-center justify-between gap-3 p-4 border-t border-white/10 bg-black/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-white/40",
                                children: [
                                    "Total: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        className: "text-white/90",
                                        children: result.data?.totalElements ?? '—'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user-list.tsx",
                                        lineNumber: 62,
                                        columnNumber: 52
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user-list.tsx",
                                lineNumber: 62,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        "aria-label": "Users per page",
                                        value: size,
                                        onChange: (e)=>{
                                            setSize(Number(e.target.value));
                                            setPage(0);
                                        },
                                        className: "glass-effect-btn h-7 px-2 text-xs",
                                        children: [
                                            10,
                                            25,
                                            50,
                                            100
                                        ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: n,
                                                children: n
                                            }, n, false, {
                                                fileName: "[project]/src/components/user-list.tsx",
                                                lineNumber: 63,
                                                columnNumber: 224
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user-list.tsx",
                                        lineNumber: 63,
                                        columnNumber: 46
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-effect-btn h-7 flex items-center gap-2 px-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": "Previous users page",
                                                disabled: !page || loading,
                                                onClick: ()=>setPage((p)=>p - 1),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user-list.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 451
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/user-list.tsx",
                                                lineNumber: 63,
                                                columnNumber: 340
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 text-xs text-center",
                                                children: page + 1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/user-list.tsx",
                                                lineNumber: 63,
                                                columnNumber: 484
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": "Next users page",
                                                disabled: !result.data || result.data.last || loading,
                                                onClick: ()=>setPage((p)=>p + 1),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user-list.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 673
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/user-list.tsx",
                                                lineNumber: 63,
                                                columnNumber: 541
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/user-list.tsx",
                                        lineNumber: 63,
                                        columnNumber: 273
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user-list.tsx",
                                lineNumber: 63,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user-list.tsx",
                        lineNumber: 61,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user-list.tsx",
                lineNumber: 44,
                columnNumber: 3
            }, this),
            selected && (info.error || info.refreshError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: info.error || info.refreshError,
                retry: invalidate
            }, void 0, false, {
                fileName: "[project]/src/components/user-list.tsx",
                lineNumber: 66,
                columnNumber: 47
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$users$2f$components$2f$UserFilterDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserFilterDropdown"], {
                isOpen: filterOpen,
                onClose: ()=>setFilterOpen(false),
                initialFilters: filters,
                onApply: (next)=>{
                    setFilters(next);
                    setPage(0);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/user-list.tsx",
                lineNumber: 67,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$users$2f$components$2f$EditUserModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditUserModal"], {
                isOpen: selected !== null,
                onClose: ()=>setSelected(null),
                user: info.data ?? null,
                currentPlan: "Basic"
            }, void 0, false, {
                fileName: "[project]/src/components/user-list.tsx",
                lineNumber: 68,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$features$2f$users$2f$components$2f$UserStatusConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserStatusConfirmModal"], {
                isOpen: statusUser !== null,
                onClose: ()=>setStatusUser(null),
                user: statusUser,
                action: statusUser?.status === 'Banned' ? 'Unban' : 'Ban',
                onConfirm: async (user)=>{
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$services$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersApi"].setBanned(user.id, user.status !== 'Banned');
                    invalidate();
                    notify(user.status === 'Banned' ? 'User unbanned.' : 'User banned. Active sessions have been revoked.');
                }
            }, void 0, false, {
                fileName: "[project]/src/components/user-list.tsx",
                lineNumber: 69,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/user-list.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_s(UserList, "lLOVmUGzCHBonESxIZ9VyleCKg4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c = UserList;
var _c;
__turbopack_context__.k.register(_c, "UserList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/views.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Account",
    ()=>Account,
    "Connection",
    ()=>Connection,
    "Overview",
    ()=>Overview,
    "PageTitle",
    ()=>PageTitle,
    "Transactions",
    ()=>Transactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$telegram$2d$notifications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/telegram-notifications.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug.js [app-client] (ecmascript) <export default as Plug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shop-catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function PageTitle({ title, sub, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "SHOP WORKSPACE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 12,
                        columnNumber: 132
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 12,
                        columnNumber: 179
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 12,
                        columnNumber: 201
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 12,
                columnNumber: 127
            }, this),
            action
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/views.tsx",
        lineNumber: 12,
        columnNumber: 99
    }, this);
}
_c = PageTitle;
function Overview() {
    _s();
    const { profile, invalidate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    const { data: products, error: productError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('shop-products', {
        "Overview.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('products')
    }["Overview.useData"]);
    const { data: pricing, error: priceError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('shop-pricing', {
        "Overview.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('pricing')
    }["Overview.useData"]);
    const { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('overview-customer-orders', {
        "Overview.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('customer-orders?page=0&size=6')
    }["Overview.useData"]);
    const packages = products?.flatMap((p)=>p.packages) || [], active = products?.filter((p)=>p.active !== false).length || 0, unpriced = packages.filter((p)=>!p.priceConfigured).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageTitle, {
                title: `${profile.shop.name} dashboard`,
                sub: "Manage your products, packages and MMK selling prices.",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/products",
                    className: "btn primary",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 19,
                            columnNumber: 179
                        }, this),
                        "Add product"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/views.tsx",
                    lineNumber: 19,
                    columnNumber: 132
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 19,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        label: "Shop products",
                        value: products?.length ?? '—',
                        sub: `${active} active products`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 20,
                            columnNumber: 128
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 20,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        label: "Shop packages",
                        value: products ? packages.length : '—',
                        sub: `${packages.filter((p)=>p.active !== false).length} active packages`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 20,
                            columnNumber: 291
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 20,
                        columnNumber: 149
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        label: "Owner balance",
                        value: `$${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(profile.balance)}`,
                        sub: "USD · Main purchasing balance",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 20,
                            columnNumber: 421
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 20,
                        columnNumber: 314
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        label: "Selling rate",
                        value: pricing?.usdMmkRate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mmk"])(pricing.usdMmkRate) : 'Not set',
                        sub: "MMK per USD · your shop rate",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 20,
                            columnNumber: 573
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 20,
                        columnNumber: 443
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        label: "Orders",
                        value: data?.totalElements ?? '—',
                        sub: "Shop product order history",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 20,
                            columnNumber: 694
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 20,
                        columnNumber: 601
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stat"], {
                        label: "Discounted packages",
                        value: products ? packages.filter((p)=>p.discountPercent > 0).length : '—',
                        sub: "Offers in your shop catalog",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 20,
                            columnNumber: 863
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 20,
                        columnNumber: 721
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 20,
                columnNumber: 2
            }, this),
            (productError || priceError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: productError || priceError,
                retry: invalidate
            }, void 0, false, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 21,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dashboard-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                title: "Catalog status",
                                sub: "Your shop’s customer-facing product settings",
                                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/products",
                                    className: "text-link",
                                    children: [
                                        "Manage products",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/views.tsx",
                                            lineNumber: 22,
                                            columnNumber: 215
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/views.tsx",
                                    lineNumber: 22,
                                    columnNumber: 155
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 22,
                                columnNumber: 60
                            }, this),
                            !products ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 22,
                                columnNumber: 259
                            }, this) : !products.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                                title: "Set up your shop catalog",
                                text: "Choose a Main product, select packages and set your own images and MMK prices."
                            }, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 22,
                                columnNumber: 287
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shop-readiness",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Active products"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 22,
                                                columnNumber: 452
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    active,
                                                    " / ",
                                                    products.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 22,
                                                columnNumber: 480
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 22,
                                        columnNumber: 447
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Packages with an MMK price"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 22,
                                                columnNumber: 526
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    packages.length - unpriced,
                                                    " / ",
                                                    packages.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 22,
                                                columnNumber: 565
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 22,
                                        columnNumber: 521
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Discounted packages"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 22,
                                                columnNumber: 629
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: packages.filter((p)=>p.discountPercent > 0).length
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 22,
                                                columnNumber: 661
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 22,
                                        columnNumber: 624
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Product images set"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 22,
                                                columnNumber: 727
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    products.filter((p)=>p.image).length,
                                                    " / ",
                                                    products.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 22,
                                                columnNumber: 758
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 22,
                                        columnNumber: 722
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 22,
                                columnNumber: 415
                            }, this),
                            !!unpriced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "notice",
                                children: [
                                    unpriced,
                                    " packages need an MMK price. Set your shop rate or enter manual prices."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 22,
                                columnNumber: 847
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/product-groups",
                                        className: "btn",
                                        children: "Package Groups"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 22,
                                        columnNumber: 988
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/pricing",
                                        className: "btn",
                                        children: "Pricing settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 22,
                                        columnNumber: 1054
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 22,
                                columnNumber: 959
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 22,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card wallet-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "OWNER WALLET"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 22,
                                        columnNumber: 1195
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 22,
                                        columnNumber: 1240
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 22,
                                columnNumber: 1169
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    "$",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(profile.balance)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 22,
                                columnNumber: 1265
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "muted-text",
                                children: "Available balance · USD"
                            }, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 22,
                                columnNumber: 1307
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Catalog setup does not charge this balance. Product selling prices are managed separately in MMK."
                            }, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 22,
                                columnNumber: 1366
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/transactions",
                                className: "text-link",
                                children: [
                                    "View transactions",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 22,
                                        columnNumber: 1536
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 22,
                                columnNumber: 1470
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 22,
                        columnNumber: 1131
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 22,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                        title: "Recent orders",
                        sub: "Shop product orders · MMK",
                        action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/product-order",
                            className: "text-link",
                            children: [
                                "All orders",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/views.tsx",
                                    lineNumber: 23,
                                    columnNumber: 163
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 23,
                            columnNumber: 103
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 23,
                        columnNumber: 28
                    }, this),
                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                        message: error,
                        retry: invalidate
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 23,
                        columnNumber: 203
                    }, this) : !data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 23,
                        columnNumber: 256
                    }, this) : !data.content.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                        title: "No orders yet",
                        text: "Shop order records will appear here."
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 23,
                        columnNumber: 288
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Order / Product"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 23,
                                                columnNumber: 409
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Total · MMK"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 23,
                                                columnNumber: 433
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 23,
                                                columnNumber: 453
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 23,
                                        columnNumber: 405
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/views.tsx",
                                    lineNumber: 23,
                                    columnNumber: 398
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: data.content.slice(0, 6).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "text-button",
                                                            href: "/product-order",
                                                            children: [
                                                                o.publicOrderId || `#${o.id}`,
                                                                " · ",
                                                                o.gameName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/views.tsx",
                                                            lineNumber: 23,
                                                            columnNumber: 539
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: [
                                                                o.packageName,
                                                                " · ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"])(o.createdAt)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/views.tsx",
                                                            lineNumber: 23,
                                                            columnNumber: 642
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/views.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 535
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "numeric",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(o.sellPrice),
                                                        " MMK"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/views.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 699
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        value: o.status === 'SUCCESS' ? 'COMPLETED' : o.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/views.tsx",
                                                        lineNumber: 23,
                                                        columnNumber: 756
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/views.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 752
                                                }, this)
                                            ]
                                        }, o.id, true, {
                                            fileName: "[project]/src/components/views.tsx",
                                            lineNumber: 23,
                                            columnNumber: 520
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/views.tsx",
                                    lineNumber: 23,
                                    columnNumber: 481
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 23,
                            columnNumber: 391
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 23,
                        columnNumber: 363
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 23,
                columnNumber: 2
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/views.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(Overview, "9KN8/bekTKaEZc+gtsfhKvCoFzk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c1 = Overview;
function Transactions() {
    _s1();
    const { profile, invalidate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])(), [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { data, error, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])(`transactions/${page}`, {
        "Transactions.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`transactions?page=${page}&size=30`)
    }["Transactions.useData"]);
    const rows = (data?.content || []).filter((t)=>`${t.publicReference || t.id} ${t.remark} ${t.type} ${t.purchaseId || ''}`.toLowerCase().includes(query.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageTitle, {
                title: "Transactions",
                sub: `Balance movements recorded for ${profile.shop.name}.`,
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Export"], {
                    name: `${profile.shop.code}-transactions.csv`,
                    rows: rows.map((t)=>({
                            reference: t.publicReference || t.id,
                            order: t.purchaseId,
                            type: t.type,
                            amount: t.amount,
                            before: t.beforeBalance,
                            after: t.afterBalance,
                            remark: t.remark,
                            date: t.date,
                            time: t.time
                        }))
                }, void 0, false, {
                    fileName: "[project]/src/components/views.tsx",
                    lineNumber: 28,
                    columnNumber: 112
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 28,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "notice",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 28,
                        columnNumber: 384
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Your owner balance is ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: [
                                    "$",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(profile.balance),
                                    " USD"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 28,
                                columnNumber: 428
                            }, this),
                            ". Owner funding and this shop’s purchase/refund records appear below."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 28,
                        columnNumber: 403
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 28,
                columnNumber: 360
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toolbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBox"], {
                            value: query,
                            onChange: setQuery,
                            placeholder: "Search this page by reference or remark…"
                        }, void 0, false, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 28,
                            columnNumber: 594
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 28,
                        columnNumber: 569
                    }, this),
                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                        message: error,
                        retry: invalidate
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 28,
                        columnNumber: 708
                    }, this) : !data && loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 28,
                        columnNumber: 770
                    }, this) : !rows.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                        title: "No transactions found"
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 28,
                        columnNumber: 794
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Reference"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 28,
                                                columnNumber: 879
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Type / Remark"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 28,
                                                columnNumber: 897
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Change · USD"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 28,
                                                columnNumber: 919
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Before · USD"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 28,
                                                columnNumber: 940
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "After · USD"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 28,
                                                columnNumber: 961
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Recorded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 28,
                                                columnNumber: 981
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 28,
                                        columnNumber: 875
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/views.tsx",
                                    lineNumber: 28,
                                    columnNumber: 868
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: rows.map((t)=>{
                                        const delta = Number(t.afterBalance) - Number(t.beforeBalance);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "mono",
                                                    children: [
                                                        "#",
                                                        t.publicReference || t.id,
                                                        t.purchaseId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: [
                                                                "Purchase #",
                                                                t.purchaseId
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/views.tsx",
                                                            lineNumber: 28,
                                                            columnNumber: 1175
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/views.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 1113
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: t.type.replaceAll('_', ' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/views.tsx",
                                                            lineNumber: 28,
                                                            columnNumber: 1224
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            className: "wrap-text",
                                                            children: t.remark
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/views.tsx",
                                                            lineNumber: 28,
                                                            columnNumber: 1259
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/views.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 1220
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: `numeric ${delta >= 0 ? 'positive' : 'negative'}`,
                                                    children: [
                                                        delta >= 0 ? '+' : '−',
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(Math.abs(delta))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/views.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 1311
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "numeric",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(t.beforeBalance)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/views.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 1418
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "numeric",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(t.afterBalance)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/views.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 1471
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "muted-text",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"])(`${t.date}T${t.time}`)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/views.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 1523
                                                }, this)
                                            ]
                                        }, t.id, true, {
                                            fileName: "[project]/src/components/views.tsx",
                                            lineNumber: 28,
                                            columnNumber: 1098
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/views.tsx",
                                    lineNumber: 28,
                                    columnNumber: 1011
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 28,
                            columnNumber: 861
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 28,
                        columnNumber: 833
                    }, this),
                    data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "table-note",
                                children: "Search applies to the current page."
                            }, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 28,
                                columnNumber: 1625
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pager"], {
                                page: page,
                                totalPages: data.totalPages,
                                total: data.totalElements,
                                onChange: setPage
                            }, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 28,
                                columnNumber: 1694
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 28,
                        columnNumber: 1623
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 28,
                columnNumber: 543
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/views.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s1(Transactions, "W5v2SjBRhh+FtCyffVXKAkgamdo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c2 = Transactions;
function Connection() {
    _s2();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function check() {
        setBusy(true);
        setError('');
        try {
            const r = await fetch('/api/connection', {
                cache: 'no-store'
            });
            if (!r.ok) throw Error('Unable to check the connection.');
            setState(await r.json());
        } catch (e) {
            setError(e.message);
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageTitle, {
                title: "Service status",
                sub: "Connection between your shop and the Shop Backend.",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    disabled: busy,
                    onClick: ()=>void check(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            size: 15,
                            className: busy ? 'spin' : ''
                        }, void 0, false, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 33,
                            columnNumber: 161
                        }, this),
                        busy ? 'Checking…' : 'Check connection'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/views.tsx",
                    lineNumber: 33,
                    columnNumber: 110
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 33,
                columnNumber: 11
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: error
            }, void 0, false, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 33,
                columnNumber: 267
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "integration-intro card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shop-icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"], {
                            size: 25
                        }, void 0, false, {
                            fileName: "[project]/src/components/views.tsx",
                            lineNumber: 33,
                            columnNumber: 367
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 33,
                        columnNumber: 339
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "SHOP ADMIN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 33,
                                columnNumber: 396
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: state?.state === 'connected' ? 'Your shop is connected' : 'Check your shop connection'
                            }, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 33,
                                columnNumber: 439
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: state?.message || 'Check the connection to see whether the running backends support groups and shop products.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 33,
                                columnNumber: 530
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 33,
                        columnNumber: 391
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 33,
                columnNumber: 295
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "notice",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                        size: 19
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 33,
                        columnNumber: 687
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "All shops use this admin site. Access and data are scoped to the shop you sign in to."
                    }, void 0, false, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 33,
                        columnNumber: 711
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 33,
                columnNumber: 663
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/views.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_s2(Connection, "kgKU3usPJEGOqHTYnBRfkUc/i6o=");
_c3 = Connection;
function Account() {
    _s3();
    const { profile, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageTitle, {
                title: "Your account",
                sub: "Your shop owner account."
            }, void 0, false, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 35,
                columnNumber: 70
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                title: "Owner profile"
                            }, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 35,
                                columnNumber: 191
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "profile-cover",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "avatar large",
                                        children: profile.userName.slice(0, 2).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 258
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: profile.userName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 339
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        value: "Shop owner"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 366
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 35,
                                columnNumber: 227
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "details-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Detail"], {
                                        label: "Owner ID",
                                        children: [
                                            "#",
                                            profile.id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 428
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Detail"], {
                                        label: "Email",
                                        children: profile.email
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 475
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Detail"], {
                                        label: "Status",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            value: profile.enabled
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/views.tsx",
                                            lineNumber: 35,
                                            columnNumber: 544
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 521
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Detail"], {
                                        label: "Created",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"])(profile.createdAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 585
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 35,
                                columnNumber: 399
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 35,
                        columnNumber: 165
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stack",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$telegram$2d$notifications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelegramNotifications"], {}, void 0, false, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 35,
                                columnNumber: 681
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                        title: "Shop workspace"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 731
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        className: "details-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Detail"], {
                                                label: "Shop",
                                                children: profile.shop.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 35,
                                                columnNumber: 797
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Detail"], {
                                                label: "Shop code",
                                                children: profile.shop.code
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 35,
                                                columnNumber: 846
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Detail"], {
                                                label: "Shop ID",
                                                children: [
                                                    "#",
                                                    profile.shop.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 35,
                                                columnNumber: 900
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Detail"], {
                                                label: "Owner balance",
                                                children: [
                                                    "$",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(profile.balance),
                                                    " USD"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/views.tsx",
                                                lineNumber: 35,
                                                columnNumber: 951
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 768
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "card-footnote",
                                        children: "This admin workspace displays data for your signed-in shop only."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 1024
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 35,
                                columnNumber: 705
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                        title: "Sign-in security"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 1157
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "muted-text",
                                        children: "Contact Head Admin if you need to reset your password."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 1196
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-footer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>void logout(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/views.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 1345
                                                }, this),
                                                "Sign out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/views.tsx",
                                            lineNumber: 35,
                                            columnNumber: 1309
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/views.tsx",
                                        lineNumber: 35,
                                        columnNumber: 1280
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/views.tsx",
                                lineNumber: 35,
                                columnNumber: 1131
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/views.tsx",
                        lineNumber: 35,
                        columnNumber: 658
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/views.tsx",
                lineNumber: 35,
                columnNumber: 134
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/views.tsx",
        lineNumber: 35,
        columnNumber: 68
    }, this);
}
_s3(Account, "uQ4pRo8pDAR1E4QcB5rt+6ztnfc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"]
    ];
});
_c4 = Account;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "PageTitle");
__turbopack_context__.k.register(_c1, "Overview");
__turbopack_context__.k.register(_c2, "Transactions");
__turbopack_context__.k.register(_c3, "Connection");
__turbopack_context__.k.register(_c4, "Account");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/website-banners.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebsiteBanners",
    ()=>WebsiteBanners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shop-catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$owner$2d$image$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/owner-image-field.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$views$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/views.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const locations = {
    HOME: {
        label: 'Home Banner',
        feature: 'homeBanner'
    },
    CATALOG: {
        label: 'Shop Catalog Banner',
        feature: 'shopCatalog'
    },
    PROFILE: {
        label: 'Profile Banner',
        feature: 'profileBanner'
    }
};
function WebsiteBanners({ placement = 'HOME' }) {
    _s();
    const { profile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    if (!profile.shop.subscription?.permissions[locations[placement].feature]) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: locations[placement].label
            }, void 0, false, {
                fileName: "[project]/src/components/website-banners.tsx",
                lineNumber: 25,
                columnNumber: 108
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Locked by Main Admin. Contact Main Admin to unlock this banner location."
            }, void 0, false, {
                fileName: "[project]/src/components/website-banners.tsx",
                lineNumber: 25,
                columnNumber: 145
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/website-banners.tsx",
        lineNumber: 25,
        columnNumber: 82
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerManager, {
        placement: placement
    }, placement, false, {
        fileName: "[project]/src/components/website-banners.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_s(WebsiteBanners, "DLQ7dLN7y8j4Txedtu5tm3KDaxs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"]
    ];
});
_c = WebsiteBanners;
function BannerManager({ placement }) {
    _s1();
    const { invalidate, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    const { data, error, refreshError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('website-banners-' + placement, {
        "BannerManager.useData": async ()=>(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('banners')).filter({
                "BannerManager.useData": (banner)=>(banner.placement ?? 'HOME') === placement
            }["BannerManager.useData"])
    }["BannerManager.useData"]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [revision, setRevision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [removing, setRemoving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function resetEditor() {
        setEditing(null);
        setRevision((value)=>value + 1);
    }
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
        message: error,
        retry: invalidate
    }, void 0, false, {
        fileName: "[project]/src/components/website-banners.tsx",
        lineNumber: 40,
        columnNumber: 21
    }, this);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
        fileName: "[project]/src/components/website-banners.tsx",
        lineNumber: 41,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$views$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageTitle"], {
                title: locations[placement].label,
                sub: "Customize this location on your customer website."
            }, void 0, false, {
                fileName: "[project]/src/components/website-banners.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, this),
            refreshError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: refreshError,
                retry: invalidate
            }, void 0, false, {
                fileName: "[project]/src/components/website-banners.tsx",
                lineNumber: 45,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "banner-settings-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                title: "Your banners",
                                sub: "Lower sort numbers appear first.",
                                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: resetEditor,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/website-banners.tsx",
                                            lineNumber: 48,
                                            columnNumber: 120
                                        }, this),
                                        " Add banner"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/website-banners.tsx",
                                    lineNumber: 48,
                                    columnNumber: 90
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/website-banners.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, this),
                            !data.some((banner)=>banner.active) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "notice",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/website-banners.tsx",
                                        lineNumber: 49,
                                        columnNumber: 73
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Your website shows its default banner until you save an active banner."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/website-banners.tsx",
                                        lineNumber: 49,
                                        columnNumber: 95
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/website-banners.tsx",
                                lineNumber: 49,
                                columnNumber: 49
                            }, this),
                            !data.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                                title: "No custom banners",
                                text: "Upload a banner using the form. Your website already shows its default banner."
                            }, void 0, false, {
                                fileName: "[project]/src/components/website-banners.tsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "website-banner-list",
                                children: data.map((banner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "website-banner-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "website-banner-preview",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageSource"])(banner.imageUrl),
                                                    alt: banner.title,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/website-banners.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/website-banners.tsx",
                                                lineNumber: 52,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "website-banner-info",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: banner.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/website-banners.tsx",
                                                                lineNumber: 53,
                                                                columnNumber: 55
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: [
                                                                    "Sort order: ",
                                                                    banner.sortOrder
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/website-banners.tsx",
                                                                lineNumber: 53,
                                                                columnNumber: 78
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/website-banners.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 50
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        value: banner.active
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/website-banners.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 129
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/website-banners.tsx",
                                                lineNumber: 53,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "row-actions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: ()=>setEditing(banner),
                                                        title: 'Edit ' + banner.title,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/website-banners.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 116
                                                            }, this),
                                                            " Edit"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/website-banners.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 42
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "danger",
                                                        onClick: ()=>setRemoving(banner),
                                                        title: 'Delete ' + banner.title,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/website-banners.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 243
                                                            }, this),
                                                            " Delete"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/website-banners.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 149
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/website-banners.tsx",
                                                lineNumber: 54,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, banner.id, true, {
                                        fileName: "[project]/src/components/website-banners.tsx",
                                        lineNumber: 51,
                                        columnNumber: 68
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/website-banners.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/website-banners.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card website-banner-editor",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                title: editing ? 'Edit banner' : 'Add banner',
                                sub: "Use a wide image, ideally 3:1, such as 1800 × 600."
                            }, void 0, false, {
                                fileName: "[project]/src/components/website-banners.tsx",
                                lineNumber: 58,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerEditor, {
                                banner: editing,
                                placement: placement,
                                onCancel: resetEditor,
                                onSaved: ()=>{
                                    resetEditor();
                                    invalidate();
                                    notify('Website banner saved.');
                                }
                            }, `${editing?.id ?? 'new'}-${revision}`, false, {
                                fileName: "[project]/src/components/website-banners.tsx",
                                lineNumber: 59,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/website-banners.tsx",
                        lineNumber: 57,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/website-banners.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, this),
            removing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                title: "Delete banner?",
                description: removing.title,
                onClose: ()=>setRemoving(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                    submit: "Delete banner",
                    danger: true,
                    onCancel: ()=>setRemoving(null),
                    onSubmit: async ()=>{
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`banners/${removing.id}`, {
                            method: 'DELETE'
                        });
                        if (editing?.id === removing.id) resetEditor();
                        setRemoving(null);
                        invalidate();
                        notify('Website banner deleted.');
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "The website shows its default banner when no active banners remain."
                    }, void 0, false, {
                        fileName: "[project]/src/components/website-banners.tsx",
                        lineNumber: 67,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/website-banners.tsx",
                    lineNumber: 63,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/website-banners.tsx",
                lineNumber: 62,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/website-banners.tsx",
        lineNumber: 43,
        columnNumber: 10
    }, this);
}
_s1(BannerManager, "Fm6ceL0ZfPhkIdKrNLMoSI5TzC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c1 = BannerManager;
function BannerEditor({ banner, placement, onCancel, onSaved }) {
    _s2();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(banner?.title ?? '');
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(banner?.imageUrl ?? '');
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(banner?.active ?? true);
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(banner?.sortOrder ?? 0);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function save(event) {
        event.preventDefault();
        if (uploading || saving) return;
        if (!title.trim() || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageSource"])(imageUrl)) {
            setError('Enter a title and upload a banner or paste an HTTPS image URL.');
            return;
        }
        if (!Number.isInteger(sortOrder) || sortOrder < 0 || sortOrder > 9999) {
            setError('Enter a sort order from 0 to 9999.');
            return;
        }
        setSaving(true);
        setError('');
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])(banner ? `banners/${banner.id}` : 'banners', {
                title: title.trim(),
                imageUrl,
                active,
                sortOrder,
                placement
            }, banner ? 'PUT' : 'POST');
            onSaved();
        } catch (failure) {
            setError(failure instanceof Error ? failure.message : 'Unable to save the banner.');
        } finally{
            setSaving(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: save,
        "aria-busy": saving || uploading,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                disabled: saving,
                className: "form-fields",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Banner title",
                        hint: "A short description for customers using screen readers.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            maxLength: 160,
                            value: title,
                            onChange: (event)=>setTitle(event.target.value),
                            placeholder: "Game top-up offers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/website-banners.tsx",
                            lineNumber: 96,
                            columnNumber: 98
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/website-banners.tsx",
                        lineNumber: 96,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$owner$2d$image$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                        label: "Banner image",
                        value: imageUrl,
                        onChange: setImageUrl,
                        onBusyChange: setUploading
                    }, void 0, false, {
                        fileName: "[project]/src/components/website-banners.tsx",
                        lineNumber: 97,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Sort order",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            type: "number",
                            min: 0,
                            max: 9999,
                            step: 1,
                            value: sortOrder,
                            onChange: (event)=>setSortOrder(Number(event.target.value))
                        }, void 0, false, {
                            fileName: "[project]/src/components/website-banners.tsx",
                            lineNumber: 98,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/website-banners.tsx",
                        lineNumber: 98,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "checkbox",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: active,
                                onChange: (event)=>setActive(event.target.checked)
                            }, void 0, false, {
                                fileName: "[project]/src/components/website-banners.tsx",
                                lineNumber: 99,
                                columnNumber: 35
                            }, this),
                            " Active — show on the customer website"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/website-banners.tsx",
                        lineNumber: 99,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/website-banners.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                message: error
            }, void 0, false, {
                fileName: "[project]/src/components/website-banners.tsx",
                lineNumber: 101,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        disabled: saving || uploading,
                        onClick: onCancel,
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/src/components/website-banners.tsx",
                        lineNumber: 102,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        variant: "primary",
                        disabled: saving || uploading,
                        children: uploading ? 'Uploading…' : saving ? 'Saving…' : banner ? 'Update banner' : 'Save banner'
                    }, void 0, false, {
                        fileName: "[project]/src/components/website-banners.tsx",
                        lineNumber: 102,
                        columnNumber: 106
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/website-banners.tsx",
                lineNumber: 102,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/website-banners.tsx",
        lineNumber: 94,
        columnNumber: 10
    }, this);
}
_s2(BannerEditor, "5M71bhyQ16FE9xMfnOTpODGew9g=");
_c2 = BannerEditor;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "WebsiteBanners");
__turbopack_context__.k.register(_c1, "BannerManager");
__turbopack_context__.k.register(_c2, "BannerEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/website-settings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebsiteSettings",
    ()=>WebsiteSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-keyhole.js [app-client] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$features$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shop-features.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$views$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/views.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$website$2d$banners$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/website-banners.tsx [app-client] (ecmascript)");
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
function WebsiteSettings() {
    _s();
    const { invalidate, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"])();
    const { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])('website-settings', {
        "WebsiteSettings.useData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('website-settings')
    }["WebsiteSettings.useData"]);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [failure, setFailure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [placement, setPlacement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('HOME');
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
        message: error,
        retry: invalidate
    }, void 0, false, {
        fileName: "[project]/src/components/website-settings.tsx",
        lineNumber: 16,
        columnNumber: 18
    }, this);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
        fileName: "[project]/src/components/website-settings.tsx",
        lineNumber: 17,
        columnNumber: 18
    }, this);
    const settings = draft ?? data.settings;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$views$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageTitle"], {
                title: "Website Settings",
                sub: "Control the website features allowed by Main Admin."
            }, void 0, false, {
                fileName: "[project]/src/components/website-settings.tsx",
                lineNumber: 19,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card website-settings-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$features$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOP_PLANS"].find((p)=>p.id === data.plan)?.label ?? 'Default',
                        sub: `1 month · Expires ${new Date(data.expiresAt).toLocaleString()}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/website-settings.tsx",
                        lineNumber: 20,
                        columnNumber: 50
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted-text",
                        children: "Locked features and subscription renewals are managed by Main Admin."
                    }, void 0, false, {
                        fileName: "[project]/src/components/website-settings.tsx",
                        lineNumber: 21,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "website-feature-grid",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$features$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOP_FEATURES"].map((feature)=>{
                            const allowed = data.permissions[feature.id] === true;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `website-feature${allowed ? '' : ' is-locked'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: feature.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/website-settings.tsx",
                                                lineNumber: 23,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: allowed ? 'Available in your shop' : 'Locked by Main Admin'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/website-settings.tsx",
                                                lineNumber: 23,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/website-settings.tsx",
                                        lineNumber: 23,
                                        columnNumber: 2
                                    }, this),
                                    !allowed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                        size: 15,
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/website-settings.tsx",
                                        lineNumber: 23,
                                        columnNumber: 130
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        "aria-label": feature.label,
                                        disabled: !allowed || saving,
                                        checked: allowed && settings[feature.id] === true,
                                        onChange: (event)=>setDraft({
                                                ...settings,
                                                [feature.id]: event.target.checked
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/website-settings.tsx",
                                        lineNumber: 23,
                                        columnNumber: 167
                                    }, this)
                                ]
                            }, feature.id, true, {
                                fileName: "[project]/src/components/website-settings.tsx",
                                lineNumber: 22,
                                columnNumber: 126
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/website-settings.tsx",
                        lineNumber: 22,
                        columnNumber: 2
                    }, this),
                    failure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
                        message: failure
                    }, void 0, false, {
                        fileName: "[project]/src/components/website-settings.tsx",
                        lineNumber: 25,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-footer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "primary",
                            disabled: saving || !draft,
                            onClick: async ()=>{
                                setSaving(true);
                                setFailure('');
                                try {
                                    const features = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$features$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOP_FEATURES"].map((f)=>[
                                            f.id,
                                            data.permissions[f.id] === true && settings[f.id] === true
                                        ]));
                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])('website-settings', {
                                        features
                                    }, 'PUT');
                                    setDraft(null);
                                    invalidate();
                                    notify('Website settings saved.');
                                } catch (error) {
                                    setFailure(error.message);
                                } finally{
                                    setSaving(false);
                                }
                            },
                            children: saving ? 'Saving…' : 'Save website settings'
                        }, void 0, false, {
                            fileName: "[project]/src/components/website-settings.tsx",
                            lineNumber: 25,
                            columnNumber: 71
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/website-settings.tsx",
                        lineNumber: 25,
                        columnNumber: 42
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/website-settings.tsx",
                lineNumber: 20,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "banner-placement-tabs",
                role: "group",
                "aria-label": "Banner location",
                children: [
                    {
                        id: 'HOME',
                        label: 'Home Banner'
                    },
                    {
                        id: 'CATALOG',
                        label: 'Shop Catalog Banner'
                    },
                    {
                        id: 'PROFILE',
                        label: 'Profile Banner'
                    }
                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: placement === item.id ? 'primary' : undefined,
                        "aria-pressed": placement === item.id,
                        onClick: ()=>setPlacement(item.id),
                        children: item.label
                    }, item.id, false, {
                        fileName: "[project]/src/components/website-settings.tsx",
                        lineNumber: 26,
                        columnNumber: 220
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/website-settings.tsx",
                lineNumber: 26,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$website$2d$banners$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebsiteBanners"], {
                placement: placement
            }, placement, false, {
                fileName: "[project]/src/components/website-settings.tsx",
                lineNumber: 27,
                columnNumber: 2
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/website-settings.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(WebsiteSettings, "kz3CLleJwEeN7aYi63yYeBqOy6U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c = WebsiteSettings;
var _c;
__turbopack_context__.k.register(_c, "WebsiteSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin-theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADMIN_THEME_BOOTSTRAP",
    ()=>ADMIN_THEME_BOOTSTRAP,
    "ADMIN_THEME_KEY",
    ()=>ADMIN_THEME_KEY,
    "DEFAULT_ADMIN_THEME",
    ()=>DEFAULT_ADMIN_THEME,
    "adminTheme",
    ()=>adminTheme
]);
const ADMIN_THEME_KEY = 'shop-admin:theme';
const DEFAULT_ADMIN_THEME = 'blue-glass';
function adminTheme(value) {
    return value === 'original' ? 'original' : DEFAULT_ADMIN_THEME;
}
const ADMIN_THEME_BOOTSTRAP = `(()=>{let theme='${DEFAULT_ADMIN_THEME}';try{if(localStorage.getItem('${ADMIN_THEME_KEY}')==='original')theme='original'}catch{}document.documentElement.dataset.adminTheme=theme})()`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/catalog-table.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "catalogRows",
    ()=>catalogRows,
    "serverColor",
    ()=>serverColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shop-catalog.ts [app-client] (ecmascript)");
;
function serverColor(id) {
    const digits = /^(?:srv_|Server )([1-9]\d*)$/.exec(id || '')?.[1];
    if (!digits) return '#a1a1aa';
    const n = BigInt(digits), palette = [
        205,
        285,
        100,
        38,
        345,
        170,
        245,
        15
    ];
    const hue = n <= 8n ? palette[Number(n) - 1] : Number(((n - 1n) * 13751n + 21000n) % 36000n) / 100;
    return `hsl(${hue} 78% 66%)`;
}
function catalogRows(products, f) {
    const query = f.query.trim().toLocaleLowerCase();
    return products.flatMap((product)=>product.packages.filter((pack)=>(!f.own || pack.listed !== false) && (!f.game || String(product.id) === f.game) && (f.server === 'ALL' || pack.providerId === f.server) && (!f.own || !f.group || String(pack.groupId) === f.group) && (f.status === 'ALL' || (f.own ? (product.active !== false && pack.active !== false) === (f.status === 'ACTIVE') : Boolean(pack.listed) === (f.status === 'ADDED'))) && (!query || [
                product.name,
                product.mainName,
                pack.name,
                pack.mainName,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shop$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverLabel"])(pack)
            ].some((v)=>v?.toLocaleLowerCase().includes(query)))).map((pack)=>({
                product,
                pack
            }))).sort((a, b)=>(a.product.sortOrder || 0) - (b.product.sortOrder || 0) || (a.pack.sortOrder || 0) - (b.pack.sortOrder || 0) || a.product.id - b.product.id || a.pack.id - b.pack.id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "api",
    ()=>api,
    "csv",
    ()=>csv,
    "date",
    ()=>date,
    "money",
    ()=>money,
    "send",
    ()=>send,
    "status",
    ()=>status,
    "total",
    ()=>total
]);
class ApiError extends Error {
    status;
    code;
    constructor(message, status, code){
        super(message);
        this.status = status;
        this.code = code;
    }
}
async function api(path, init = {}) {
    const r = await fetch(`/api/backend/${path.replace(/^\//, '')}`, {
        ...init,
        cache: 'no-store',
        headers: {
            ...init.body ? {
                'Content-Type': 'application/json'
            } : {},
            ...init.headers
        }
    });
    const data = r.status === 204 ? undefined : await r.json().catch(()=>({
            message: 'The server returned an unreadable response.'
        }));
    if (!r.ok) {
        if (r.status === 401) window.dispatchEvent(new Event('jiafu:expired'));
        throw new ApiError(data?.message || `Request failed (${r.status}).`, r.status, data?.code);
    }
    return data;
}
const send = (path, body, method = 'POST', headers)=>api(path, {
        method,
        body: JSON.stringify(body),
        headers
    });
function money(n) {
    return Number(n ?? 0).toLocaleString('en-US', {
        maximumFractionDigits: 4
    });
}
function date(value) {
    if (!value) return '—';
    const d = new Date(value);
    return Number.isNaN(d.valueOf()) ? '—' : d.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}
const total = (p)=>p.order.totalPrice ?? p.order.sellPrice ?? 0;
const status = (p)=>{
    const value = p.order.status?.toUpperCase() || 'PENDING';
    return value === 'SUCCESS' ? 'COMPLETED' : value;
};
function csv(name, rows) {
    if (!rows.length) return;
    const keys = Object.keys(rows[0]);
    const escape = (v)=>{
        let s = String(v ?? '');
        if (/^[=+@-]/.test(s)) s = "'" + s;
        return '"' + s.replaceAll('"', '""') + '"';
    };
    const b = new Blob([
        '\ufeff' + [
            keys.map(escape).join(','),
            ...rows.map((r)=>keys.map((k)=>escape(r[k])).join(','))
        ].join('\r\n')
    ], {
        type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(b), a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/query-cache.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryCache",
    ()=>QueryCache
]);
const EMPTY = Object.freeze({
    data: undefined,
    error: '',
    loading: true,
    version: -1
});
class QueryCache {
    records = new Map();
    pending = new Map();
    listeners = new Map();
    version = 0;
    generation = 0;
    get(key) {
        return this.records.get(key) ?? EMPTY;
    }
    subscribe(key, notify) {
        let group = this.listeners.get(key);
        if (!group) {
            group = new Set();
            this.listeners.set(key, group);
        }
        group.add(notify);
        return ()=>{
            group.delete(notify);
            if (!group.size) this.listeners.delete(key);
        };
    }
    publish(key, value) {
        this.records.set(key, value);
        this.listeners.get(key)?.forEach((fn)=>fn());
    }
    invalidate() {
        this.version++;
    }
    seed(key, data) {
        if (this.get(key).data === undefined) this.publish(key, {
            data,
            error: '',
            loading: false,
            version: -1
        });
    }
    clear() {
        this.generation++;
        this.version++;
        this.records.clear();
        this.pending.clear();
        this.listeners.forEach((group)=>group.forEach((fn)=>fn()));
    }
    load(key, loader) {
        const pending = this.pending.get(key);
        if (pending) return pending;
        const before = this.get(key);
        if (before.data !== undefined && before.version === this.version) return Promise.resolve();
        const version = this.version, generation = this.generation;
        this.publish(key, {
            ...before,
            error: '',
            loading: before.data === undefined
        });
        const job = Promise.resolve().then(loader).then((data)=>{
            if (generation === this.generation) this.publish(key, {
                data,
                error: '',
                loading: false,
                version
            });
        }, (error)=>{
            if (generation === this.generation) this.publish(key, {
                ...this.get(key),
                loading: false,
                error: error instanceof Error ? error.message : 'Could not update this data.'
            });
        }).then(()=>{
            if (generation !== this.generation) return;
            this.pending.delete(key);
            if (version !== this.version && this.listeners.get(key)?.size) return this.load(key, loader);
        });
        this.pending.set(key, job);
        return job;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/shop-catalog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageSource",
    ()=>imageSource,
    "mmk",
    ()=>mmk,
    "packageDraft",
    ()=>packageDraft,
    "packagePayload",
    ()=>packagePayload,
    "previewPrice",
    ()=>previewPrice,
    "productDraft",
    ()=>productDraft,
    "productPayload",
    ()=>productPayload,
    "readShopProduct",
    ()=>readShopProduct,
    "serverLabel",
    ()=>serverLabel
]);
const mmk = (value)=>value == null ? 'Not priced' : `${Number(value).toLocaleString('en-US', {
        maximumFractionDigits: 2
    })} Ks`;
function serverLabel(pack) {
    return /^Server [1-9]\d*$/.test(pack.serverName || '') ? pack.serverName : /^srv_[1-9]\d*$/.test(pack.providerId || '') ? 'Server ' + pack.providerId.slice(4) : 'Server';
}
function imageSource(value) {
    if (!value) return '';
    if (/^shop-image:[a-f0-9-]{36}$/.test(value)) return '/api/backend/images/' + value.slice(11);
    try {
        const u = new URL(value);
        return u.protocol === 'https:' && !u.username && !u.password ? value : '';
    } catch  {
        return '';
    }
}
function previewPrice(cost, settings, p) {
    let base = p.priceMode === 'MANUAL' ? p.sellingPriceMmk : settings.usdMmkRate > 0 ? cost * settings.usdMmkRate * (1 + settings.profitPercent / 100) : null;
    if (base == null || !Number.isFinite(base) || base <= 0) return {
        base: null,
        final: null
    };
    const unit = {
        EXACT: 0,
        TENS: 10,
        FIFTIES: 50,
        HUNDREDS: 100
    }[settings.rounding];
    if (p.priceMode === 'AUTO' && unit) base = Math.ceil(Number(base.toFixed(6)) / unit) * unit;
    base = Math.round((base + Number.EPSILON) * 100) / 100;
    return {
        base,
        final: Math.round((base * (1 - p.discountPercent / 100) + Number.EPSILON) * 100) / 100
    };
}
function packageDraft(p) {
    return {
        id: p.id,
        name: p.name,
        priceMode: p.priceMode || 'AUTO',
        sellingPriceMmk: p.priceMode === 'MANUAL' ? p.sellingPriceMmk : null,
        discountPercent: Number(p.discountPercent || 0),
        active: p.active !== false,
        sortOrder: p.sortOrder || 0,
        note: p.note || '',
        image: p.image || ''
    };
}
const object = (value)=>value !== null && typeof value === 'object' && !Array.isArray(value);
const positiveId = (value)=>typeof value === 'number' && Number.isSafeInteger(value) && value > 0;
function readShopProduct(raw, expectedId) {
    const invalid = ()=>new Error('Invalid product data from Main Backend. Update Main Backend to v1.5.1, then refresh this product.');
    // Older Main releases returned a one-element array for this single-product route.
    const value = Array.isArray(raw) ? raw.length === 1 ? raw[0] : null : raw;
    if (!object(value) || !positiveId(value.id) || expectedId !== undefined && value.id !== expectedId || typeof value.name !== 'string' || !value.name.trim() || !Array.isArray(value.packages)) throw invalid();
    if (value.requiredFields !== undefined && value.requiredFields !== null && !Array.isArray(value.requiredFields)) throw invalid();
    for (const key of [
        'image',
        'note'
    ])if (value[key] != null && typeof value[key] !== 'string') throw invalid();
    const ids = new Set();
    for (const p of value.packages){
        if (!object(p) || !positiveId(p.id) || ids.has(p.id) || typeof p.name !== 'string' || typeof p.costUsd !== 'number' || !Number.isFinite(p.costUsd) || p.costUsd < 0 || p.currency !== 'MMK' || p.price !== null && (typeof p.price !== 'number' || !Number.isFinite(p.price) || p.price < 0)) throw invalid();
        ids.add(p.id);
    }
    return value;
}
function productDraft(raw, groupId = 0, expectedId) {
    const g = readShopProduct(raw, expectedId);
    return {
        name: g.name,
        note: g.note || '',
        image: g.image || '',
        active: g.active !== false,
        sortOrder: g.sortOrder || 0,
        groupId: groupId || g.groupId || g.packages.find((p)=>p.listed && p.groupId)?.groupId || 0,
        packages: g.packages.filter((p)=>p.listed).map(packageDraft)
    };
}
function productPayload(d) {
    if (!d.name.trim() || !d.packages.length) throw Error('Enter a product name and select at least one package.');
    if (new Set(d.packages.map((p)=>p.id)).size !== d.packages.length) throw Error('Select each Main package only once.');
    return {
        ...d,
        groupId: null,
        name: d.name.trim(),
        packages: d.packages.map(packagePayload)
    };
}
function packagePayload(p) {
    if (!p.name.trim() || !Number.isFinite(p.discountPercent) || p.discountPercent < 0 || p.discountPercent > 99.99) throw Error('Check package names and discount percentages.');
    if (p.priceMode === 'MANUAL' && (!p.sellingPriceMmk || p.sellingPriceMmk <= 0)) throw Error('Enter a manual MMK price greater than zero.');
    return {
        ...p,
        name: p.name.trim(),
        sellingPriceMmk: p.priceMode === 'MANUAL' ? p.sellingPriceMmk : null
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/shop-features.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SHOP_FEATURES",
    ()=>SHOP_FEATURES,
    "SHOP_PLANS",
    ()=>SHOP_PLANS,
    "readPermissions",
    ()=>readPermissions
]);
const SHOP_PLANS = [
    {
        id: 'DEFAULT',
        label: 'Default'
    },
    {
        id: 'PRO',
        label: 'Pro'
    },
    {
        id: 'PRO_PLUS',
        label: 'Pro Plus'
    },
    {
        id: 'ULTRA',
        label: 'Ultra'
    }
];
const SHOP_FEATURES = [
    {
        id: 'homeBanner',
        label: 'Home Banner'
    },
    {
        id: 'shopCatalog',
        label: 'Shop Catalog Banner'
    },
    {
        id: 'profileBanner',
        label: 'Profile Banner'
    },
    {
        id: 'lightDark',
        label: 'Light / Dark'
    },
    {
        id: 'liveStockMode',
        label: 'Live Stock Mode'
    },
    {
        id: 'specialOffers',
        label: 'Special Offers'
    },
    {
        id: 'orderAnimation',
        label: 'Order Animation'
    },
    {
        id: 'resellerProgram',
        label: 'Reseller Program'
    }
];
const readPermissions = (form)=>Object.fromEntries(SHOP_FEATURES.map((f)=>[
            f.id,
            form.get('feature-' + f.id) === 'on'
        ]));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/telegram-otp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/users/components/EditUserModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditUserModal",
    ()=>EditUserModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/displayName.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customer$2d$security$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customer-security.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$hooks$2f$useModalBehavior$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/hooks/useModalBehavior.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const EditUserModal = ({ isOpen, onClose, user })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$hooks$2f$useModalBehavior$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBehavior"])(isOpen, onClose);
    if (!isOpen || !user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": "Close dialog",
                    className: "fixed inset-0 bg-black/70 backdrop-blur-sm",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.97,
                        y: 8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.97,
                        y: 8
                    },
                    className: "relative w-full max-w-2xl max-h-[90vh] bg-[#111111] rounded-2xl border border-white/10 shadow-2xl z-10 overflow-hidden flex flex-col",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "edit-user-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02] shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: "edit-user-title",
                                            className: "text-base font-bold text-white truncate",
                                            children: "User Info"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/40 truncate",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayName"])(user),
                                                " · ",
                                                user.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    "aria-label": "Close",
                                    className: "p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 space-y-5 overflow-y-auto custom-scrollbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-white/10 bg-black/25 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] uppercase tracking-wider text-white/35",
                                                    children: "Account"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm font-semibold text-white",
                                                    children: [
                                                        user.role || 'USER',
                                                        " · ",
                                                        user.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-white/10 bg-black/25 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] uppercase tracking-wider text-white/35",
                                                    children: "Balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm font-semibold text-white",
                                                    children: [
                                                        user.balance.toLocaleString(),
                                                        " Ks"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-wider text-white/35",
                                            children: "Linked Accounts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 rounded-lg border border-white/10 bg-black/25 p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-white/60 min-w-[100px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "w-4 h-4 text-white/80",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M0 0h24v24H0z",
                                                                            fill: "none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                            lineNumber: 67,
                                                                            columnNumber: 140
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fill: "currentColor",
                                                                            fillRule: "evenodd",
                                                                            d: "M19.777 4.93a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z",
                                                                            clipRule: "evenodd"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                            lineNumber: 67,
                                                                            columnNumber: 178
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                    lineNumber: 67,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-medium",
                                                                    children: "Telegram"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                    lineNumber: 68,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-white/90 break-all",
                                                            children: user.telegram ? `ID: ${user.telegram}` : 'Not linked'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 rounded-lg border border-white/10 bg-black/25 p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-white/60 min-w-[100px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "w-4 h-4 text-white/80",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M0 0h24v24H0z",
                                                                            fill: "none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                            lineNumber: 75,
                                                                            columnNumber: 140
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fill: "currentColor",
                                                                            d: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                            lineNumber: 75,
                                                                            columnNumber: 178
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-medium",
                                                                    children: "Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                    lineNumber: 76,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-white/90 truncate",
                                                            children: user.email || 'Not linked'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 rounded-lg border border-white/10 bg-black/25 p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-white/60 min-w-[100px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "w-4 h-4 text-white/80",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M0 0h24v24H0z",
                                                                            fill: "none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                            lineNumber: 83,
                                                                            columnNumber: 140
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "4",
                                                                            d: "M17.641 6.328A8 8 0 1 0 20 12h-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                            lineNumber: 83,
                                                                            columnNumber: 178
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-medium",
                                                                    children: "Google"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-white/90 truncate",
                                                            children: user.google || 'Not linked'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customer$2d$security$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomerSecurity"], {
                                    userId: user.id
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "grid grid-cols-2 gap-3 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-white/10 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-white/40",
                                                    children: "Customer ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 115
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "mt-1 text-white",
                                                    children: user.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 161
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 60
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-white/10 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-white/40",
                                                    children: "Total spent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 268
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "mt-1 text-white",
                                                    children: [
                                                        Number(user.totalSpent ?? 0).toLocaleString(),
                                                        " Ks"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 314
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 213
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/reference-ui/features/users/components/EditUserModal.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EditUserModal, "O5AyrhVdV92kCCgCqQg4+LotDUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$hooks$2f$useModalBehavior$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBehavior"]
    ];
});
_c = EditUserModal;
var _c;
__turbopack_context__.k.register(_c, "EditUserModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFilterDropdown",
    ()=>UserFilterDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/pageScrollLock.ts [app-client] (ecmascript)");
/* eslint-disable react-hooks/set-state-in-effect */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const PLAN_OPTIONS = [
    {
        label: 'All Plans',
        value: 'all'
    },
    {
        label: 'Basic',
        value: 'Basic'
    }
];
const SORT_OPTIONS = [
    {
        label: 'Newest',
        value: 'newest'
    },
    {
        label: 'Oldest',
        value: 'oldest'
    },
    {
        label: 'Balance: High to Low',
        value: 'balance-high'
    },
    {
        label: 'Balance: Low to High',
        value: 'balance-low'
    },
    {
        label: 'Username A–Z',
        value: 'name'
    }
];
const UserFilterDropdown = ({ isOpen, onClose, onApply, initialFilters, title = 'User Filters' })=>{
    _s();
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFilters.plan);
    const [showBanned, setShowBanned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFilters.showBanned);
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFilters.sort);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRefs = {
        plan: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null),
        sort: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null)
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserFilterDropdown.useEffect": ()=>{
            if (!isOpen) return;
            setPlan(initialFilters.plan);
            setShowBanned(initialFilters.showBanned);
            setSort(initialFilters.sort);
            setActiveDropdown(null);
        }
    }["UserFilterDropdown.useEffect"], [
        isOpen,
        initialFilters
    ]);
    // Lock background body scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserFilterDropdown.useEffect": ()=>{
            if (!isOpen) return;
            const unlockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lockPageScroll"])();
            const handleKeyDown = {
                "UserFilterDropdown.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["UserFilterDropdown.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "UserFilterDropdown.useEffect": ()=>{
                    unlockScroll();
                    window.removeEventListener('keydown', handleKeyDown);
                }
            })["UserFilterDropdown.useEffect"];
        }
    }["UserFilterDropdown.useEffect"], [
        isOpen,
        onClose
    ]);
    // Click outside to close inner selects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserFilterDropdown.useEffect": ()=>{
            const handleOutsideClick = {
                "UserFilterDropdown.useEffect.handleOutsideClick": (e)=>{
                    if (activeDropdown && dropdownRefs[activeDropdown].current && !dropdownRefs[activeDropdown].current?.contains(e.target)) {
                        setActiveDropdown(null);
                    }
                }
            }["UserFilterDropdown.useEffect.handleOutsideClick"];
            if (isOpen && activeDropdown) {
                document.addEventListener('mousedown', handleOutsideClick);
            }
            return ({
                "UserFilterDropdown.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleOutsideClick);
                }
            })["UserFilterDropdown.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["UserFilterDropdown.useEffect"], [
        isOpen,
        activeDropdown
    ]);
    const handleApply = ()=>{
        onApply({
            plan,
            showBanned,
            sort
        });
        onClose();
    };
    const handleReset = ()=>{
        setPlan('all');
        setShowBanned(false);
        setSort('newest');
        setActiveDropdown(null);
    };
    const renderDropdown = (key, label, value, options, setValue)=>{
        const isOpen = activeDropdown === key;
        const currentLabel = options.find((o)=>o.value === value)?.label || value;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `space-y-1 relative ${isOpen ? 'z-50' : 'z-10'}`,
            ref: dropdownRefs[key],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "block text-xs sm:text-sm font-medium text-white/70",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setActiveDropdown(isOpen ? null : key),
                            className: "w-full bg-black/50 border border-white/10 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white flex items-center justify-between shadow-inner hover:border-white/20 focus:border-white/30 transition-colors cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: currentLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: `w-4 h-4 text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
                                className: "absolute top-full left-0 right-0 mt-1.5 bg-[#181818] border border-white/15 rounded-lg shadow-[0_16px_40px_rgba(0,0,0,0.95)] flex flex-col max-h-52 overflow-y-auto z-50 p-1.5 space-y-0.5",
                                children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setValue(opt.value);
                                            setActiveDropdown(null);
                                        },
                                        className: `w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm transition-all cursor-pointer ${value === opt.value ? 'bg-white/15 text-white font-semibold shadow-sm' : 'text-white/70 hover:bg-white/10 hover:text-white'}`,
                                        children: opt.label
                                    }, opt.value, false, {
                                        fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-6 sm:pt-10 bg-black/75 backdrop-blur-md transition-all select-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": "Close user filters",
                    className: "absolute inset-0 cursor-default",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                    lineNumber: 158,
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
                    className: "relative z-10 w-full max-w-[400px] sm:max-w-[480px] bg-[#121212] text-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-white/15 select-text",
                    role: "dialog",
                    "aria-modal": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-white/10 bg-white/[0.02] rounded-t-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-base sm:text-lg font-bold text-white tracking-tight",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    "aria-label": "Close dialog",
                                    className: "p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 space-y-3 sm:space-y-3.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4",
                                children: [
                                    renderDropdown('plan', 'Plan', plan, PLAN_OPTIONS, (value)=>setPlan(value)),
                                    renderDropdown('sort', 'Sort', sort, SORT_OPTIONS, (value)=>setSort(value)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between col-span-1 sm:col-span-2 bg-black/50 border border-white/10 rounded-lg px-3.5 py-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs sm:text-sm font-medium text-white/70",
                                                children: "Ban Users"
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                role: "switch",
                                                "aria-checked": showBanned,
                                                onClick: ()=>setShowBanned(!showBanned),
                                                className: `relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${showBanned ? 'bg-amber-500' : 'bg-white/20'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${showBanned ? 'translate-x-4.5' : 'translate-x-1'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 sm:px-5 py-3 sm:py-3.5 bg-black/40 border-t border-white/10 flex items-center justify-end gap-2.5 rounded-b-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleReset,
                                    className: "mr-auto rounded-lg px-3 py-1.5 text-xs font-medium text-white/55 hover:bg-white/5 hover:text-white cursor-pointer",
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleApply,
                                    className: "ultimate-3d-btn text-xs sm:text-sm px-5 py-1.5 font-bold cursor-pointer",
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "glass-effect-btn text-xs sm:text-sm px-4 py-1.5 text-white/80 hover:text-white border border-white/10 hover:border-white/20 cursor-pointer",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
            lineNumber: 157,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/reference-ui/features/users/components/UserFilterDropdown.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserFilterDropdown, "vpNhYY28nAfmXv+t1kKCSsfc/0k=");
_c = UserFilterDropdown;
var _c;
__turbopack_context__.k.register(_c, "UserFilterDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserStatusConfirmModal",
    ()=>UserStatusConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/pageScrollLock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/displayName.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const UserStatusConfirmModal = ({ isOpen, onClose, onConfirm, user, action })=>{
    _s();
    const targetName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$displayName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayName"])(user);
    const isBan = action === 'Ban';
    const closeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(onClose);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserStatusConfirmModal.useEffect": ()=>{
            closeRef.current = onClose;
        }
    }["UserStatusConfirmModal.useEffect"], [
        onClose
    ]);
    const [isSubmitting, setIsSubmitting] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const submitInFlightRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const [submitError, setSubmitError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserStatusConfirmModal.useEffect": ()=>{
            if (isOpen) return;
            let active = true;
            submitInFlightRef.current = false;
            queueMicrotask({
                "UserStatusConfirmModal.useEffect": ()=>{
                    if (!active) return;
                    setIsSubmitting(false);
                    setSubmitError('');
                }
            }["UserStatusConfirmModal.useEffect"]);
            return ({
                "UserStatusConfirmModal.useEffect": ()=>{
                    active = false;
                }
            })["UserStatusConfirmModal.useEffect"];
        }
    }["UserStatusConfirmModal.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserStatusConfirmModal.useEffect": ()=>{
            if (!isOpen) return;
            const unlockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lockPageScroll"])();
            return ({
                "UserStatusConfirmModal.useEffect": ()=>{
                    unlockScroll();
                }
            })["UserStatusConfirmModal.useEffect"];
        }
    }["UserStatusConfirmModal.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserStatusConfirmModal.useEffect": ()=>{
            const handleKeyDown = {
                "UserStatusConfirmModal.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape' && isOpen && !submitInFlightRef.current) {
                        closeRef.current();
                    }
                }
            }["UserStatusConfirmModal.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "UserStatusConfirmModal.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["UserStatusConfirmModal.useEffect"];
        }
    }["UserStatusConfirmModal.useEffect"], [
        isOpen
    ]);
    const handleConfirm = async ()=>{
        if (!user || submitInFlightRef.current) return;
        submitInFlightRef.current = true;
        setIsSubmitting(true);
        setSubmitError('');
        try {
            await onConfirm(user);
            onClose();
        } catch  {
            setSubmitError(`Unable to ${action.toLowerCase()} this user. Please try again.`);
        } finally{
            submitInFlightRef.current = false;
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "user-status-overlay fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-all select-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": "Close confirmation dialog",
                    className: "absolute inset-0 cursor-default",
                    onClick: ()=>{
                        if (!submitInFlightRef.current) onClose();
                    },
                    disabled: isSubmitting
                }, void 0, false, {
                    fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 8
                    },
                    transition: {
                        duration: 0.15,
                        ease: 'easeOut'
                    },
                    className: "user-status-dialog relative z-10 w-full max-w-[360px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden text-white select-text",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "ban-dialog-title",
                    "aria-busy": isSubmitting,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/10 bg-white/[0.02]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: "ban-dialog-title",
                                    className: "text-xs sm:text-sm font-bold text-white tracking-tight",
                                    children: "အတည်ပြုရန်"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        if (!submitInFlightRef.current) onClose();
                                    },
                                    disabled: isSubmitting,
                                    className: "text-white/40 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
                                    "aria-label": "Close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm font-semibold text-white/90",
                                    children: isBan ? 'Ban မှာသေချာလား?' : 'Unban မှာသေချာလား?'
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                targetName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] sm:text-xs text-white/50 mt-1",
                                    children: [
                                        "User: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/80 font-medium",
                                            children: targetName
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    role: "alert",
                                    className: "text-[11px] sm:text-xs text-rose-300 mt-2",
                                    children: submitError
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 31
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-2.5 px-4 sm:px-5 py-3 border-t border-white/10 bg-white/[0.01]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        if (!submitInFlightRef.current) onClose();
                                    },
                                    disabled: isSubmitting,
                                    className: "w-20 sm:w-[88px] h-8 sm:h-[34px] bg-white/5 hover:bg-white/10 text-white/70 border border-white/10 active:scale-[0.99] font-semibold text-xs sm:text-sm rounded-lg transition-all cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        void handleConfirm();
                                    },
                                    disabled: isSubmitting,
                                    className: "min-w-20 sm:min-w-[88px] h-8 sm:h-[34px] ultimate-3d-btn !py-0 font-bold text-xs sm:text-sm rounded-lg active:scale-[0.99] cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed",
                                    children: [
                                        isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-3.5 h-3.5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isSubmitting ? 'Saving...' : 'OK'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
            lineNumber: 81,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/reference-ui/features/users/components/UserStatusConfirmModal.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserStatusConfirmModal, "ZBo/g57UAXLvrhnX1puf23fzmMs=");
_c = UserStatusConfirmModal;
var _c;
__turbopack_context__.k.register(_c, "UserStatusConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/shared/hooks/useModalBehavior.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModalBehavior",
    ()=>useModalBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/reference-ui/shared/utils/pageScrollLock.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useModalBehavior = (isOpen, onClose)=>{
    _s();
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useModalBehavior.useEffect": ()=>{
            onCloseRef.current = onClose;
        }
    }["useModalBehavior.useEffect"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useModalBehavior.useEffect": ()=>{
            if (!isOpen) return;
            const unlockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$reference$2d$ui$2f$shared$2f$utils$2f$pageScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lockPageScroll"])();
            const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            const closeOnEscape = {
                "useModalBehavior.useEffect.closeOnEscape": (event)=>{
                    if (event.key === 'Escape') onCloseRef.current();
                }
            }["useModalBehavior.useEffect.closeOnEscape"];
            window.addEventListener('keydown', closeOnEscape);
            return ({
                "useModalBehavior.useEffect": ()=>{
                    unlockScroll();
                    window.removeEventListener('keydown', closeOnEscape);
                    if (previouslyFocused?.isConnected && document.visibilityState === 'visible') {
                        previouslyFocused.focus({
                            preventScroll: true
                        });
                    }
                }
            })["useModalBehavior.useEffect"];
        }
    }["useModalBehavior.useEffect"], [
        isOpen
    ]);
};
_s(useModalBehavior, "8TVmRo+xhWVhVscE3xY3oIrc6nM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/shared/services/usersApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usersApi",
    ()=>usersApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client.ts [app-client] (ecmascript)");
;
const usersApi = {
    security: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`users/${id}/security`),
    ipBans: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])('users/ip-bans'),
    banIp: (draft)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])('users/ip-bans', draft),
    unbanIp: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])(`users/ip-bans/${id}`, undefined, 'DELETE'),
    detail: (id)=>{
        if (!/^[1-9]\d{0,15}$/.test(id)) throw Error('Invalid user.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`users/${id}`);
    },
    async list () {
        const users = [];
        for(let page = 0; page < 1000; page++){
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`users?page=${page}&size=100`);
            if (!Array.isArray(result.content)) throw Error('Unable to read shop users.');
            users.push(...result.content);
            if (result.last || page + 1 >= result.totalPages) return users;
        }
        throw Error('Too many users to load. Contact Main Admin.');
    },
    setBanned: (id, banned)=>{
        if (!/^[1-9]\d*$/.test(id)) throw Error('Invalid user.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"])(`users/${id}/status`, {
            banned
        }, 'PUT');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/shared/utils/displayName.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "displayName",
    ()=>displayName
]);
const displayName = (user)=>user?.displayName?.trim() || user?.username?.trim() || user?.userName?.trim() || 'Unknown';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/reference-ui/shared/utils/pageScrollLock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lockPageScroll",
    ()=>lockPageScroll
]);
let activeLocks = 0;
let lockedRoot = null;
let previousBodyOverflow = '';
let previousRootOverflow = '';
const lockPageScroll = ()=>{
    if (typeof document === 'undefined') return ()=>undefined;
    if (activeLocks === 0) {
        previousBodyOverflow = document.body.style.overflow;
        lockedRoot = document.querySelector('[data-admin-scroll-root="true"]');
        previousRootOverflow = lockedRoot?.style.overflow ?? '';
        document.body.style.overflow = 'hidden';
        if (lockedRoot) lockedRoot.style.overflow = 'hidden';
    }
    activeLocks += 1;
    let released = false;
    return ()=>{
        if (released) return;
        released = true;
        activeLocks = Math.max(0, activeLocks - 1);
        if (activeLocks !== 0) return;
        document.body.style.overflow = previousBodyOverflow;
        if (lockedRoot) lockedRoot.style.overflow = previousRootOverflow;
        lockedRoot = null;
        previousBodyOverflow = '';
        previousRootOverflow = '';
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_0pfn0mtjk91in._.js.map