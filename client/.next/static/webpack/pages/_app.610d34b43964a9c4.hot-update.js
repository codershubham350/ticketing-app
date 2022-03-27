"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Header = function(param1) {\n    var currentUser = param1.currentUser;\n    var _this1 = _this;\n    var links = [\n        !currentUser && {\n            label: 'Sign Up',\n            href: '/auth/signup'\n        },\n        !currentUser && {\n            label: 'Sign In',\n            href: '/auth/signin'\n        },\n        currentUser && {\n            label: 'Sign Out',\n            href: '/auth/signout'\n        }, \n    ].filter(function(linkConfig) {\n        return linkConfig;\n    }).map(function(param) {\n        var label = param.label, href = param.href;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: href,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"nav-link\",\n                    children: label\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shubh\\\\OneDrive\\\\Desktop\\\\Microservices with React and Node\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shubh\\\\OneDrive\\\\Desktop\\\\Microservices with React and Node\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, _this1)\n        }, href, false, {\n            fileName: \"C:\\\\Users\\\\shubh\\\\OneDrive\\\\Desktop\\\\Microservices with React and Node\\\\ticketing\\\\client\\\\components\\\\header.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, _this1);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"navbar-brand\",\n                    children: \"TickeTR\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shubh\\\\OneDrive\\\\Desktop\\\\Microservices with React and Node\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shubh\\\\OneDrive\\\\Desktop\\\\Microservices with React and Node\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shubh\\\\OneDrive\\\\Desktop\\\\Microservices with React and Node\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shubh\\\\OneDrive\\\\Desktop\\\\Microservices with React and Node\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shubh\\\\OneDrive\\\\Desktop\\\\Microservices with React and Node\\\\ticketing\\\\client\\\\components\\\\header.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRCO0FBRTVCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQVEsU0FBYSxDQUFDO1FBQW5CQyxXQUFXLFVBQVhBLFdBQVc7O0lBQzNCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQUM7U0FDWkQsV0FBVyxJQUFJLENBQUM7WUFBQ0UsS0FBSyxFQUFFLENBQVM7WUFBRUMsSUFBSSxFQUFFLENBQWM7UUFBQyxDQUFDO1NBQ3pESCxXQUFXLElBQUksQ0FBQztZQUFDRSxLQUFLLEVBQUUsQ0FBUztZQUFFQyxJQUFJLEVBQUUsQ0FBYztRQUFDLENBQUM7UUFDMURILFdBQVcsSUFBSSxDQUFDO1lBQUNFLEtBQUssRUFBRSxDQUFVO1lBQUVDLElBQUksRUFBRSxDQUFlO1FBQUMsQ0FBQztJQUM3RCxDQUFDLENBQ0VDLE1BQU0sQ0FBQyxRQUFRLENBQVBDLFVBQVU7ZUFBS0EsVUFBVTtPQUNqQ0MsR0FBRyxDQUFDLFFBQVEsUUFBYSxDQUFDO1lBQW5CSixLQUFLLFNBQUxBLEtBQUssRUFBRUMsSUFBSSxTQUFKQSxJQUFJO1FBQ2pCLE1BQU0sNkVBQ0hJLENBQUU7WUFBWUMsU0FBUyxFQUFDLENBQVU7a0dBQ2hDVixrREFBSTtnQkFBQ0ssSUFBSSxFQUFFQSxJQUFJO3NHQUNiTSxDQUFDO29CQUFDRCxTQUFTLEVBQUMsQ0FBVTs4QkFBRU4sS0FBSzs7Ozs7Ozs7Ozs7V0FGekJDLElBQUk7Ozs7O0lBTWpCLENBQUM7SUFFSCxNQUFNLDZFQUNITyxDQUFHO1FBQUNGLFNBQVMsRUFBQyxDQUE4Qjs7d0ZBQzFDVixrREFBSTtnQkFBQ0ssSUFBSSxFQUFDLENBQUc7c0dBQ1hNLENBQUM7b0JBQUNELFNBQVMsRUFBQyxDQUFjOzhCQUFDLENBQU87Ozs7Ozs7Ozs7O3dGQUdwQ0csQ0FBRztnQkFBQ0gsU0FBUyxFQUFDLENBQTRCO3NHQUN4Q0ksQ0FBRTtvQkFBQ0osU0FBUyxFQUFDLENBQStCOzhCQUFFUCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RCxDQUFDO0tBNUJLRixNQUFNO0FBOEJaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanM/YzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IGxpbmtzID0gW1xyXG4gICAgIWN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIFVwJywgaHJlZjogJy9hdXRoL3NpZ251cCcgfSxcclxuICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBJbicsIGhyZWY6ICcvYXV0aC9zaWduaW4nIH0sXHJcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBPdXQnLCBocmVmOiAnL2F1dGgvc2lnbm91dCcgfSxcclxuICBdXHJcbiAgICAuZmlsdGVyKChsaW5rQ29uZmlnKSA9PiBsaW5rQ29uZmlnKVxyXG4gICAgLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGtleT17aHJlZn0gY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSduYXYtbGluayc+e2xhYmVsfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1saWdodCBiZy1saWdodCc+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJz5UaWNrZVRSPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQnPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J25hdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz57bGlua3N9PC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsIkhlYWRlciIsImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rQ29uZmlnIiwibWFwIiwibGkiLCJjbGFzc05hbWUiLCJhIiwibmF2IiwiZGl2IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

});