"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_shubh_OneDrive_Desktop_Microservices_with_React_and_Node_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_shubh_OneDrive_Desktop_Microservices_with_React_and_Node_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shubh_OneDrive_Desktop_Microservices_with_React_and_Node_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar LandingPage = function(param) {\n    var currentUser = param.currentUser;\n    // console.log(currentUser);\n    // axios.get('/api/users/currentuser').catch((err) => {\n    //   console.log(err.message);\n    // });\n    console.log(currentUser);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        children: \"Landing Page\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shubh\\\\OneDrive\\\\Desktop\\\\Microservices with React and Node\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 10\n    }, _this);\n};\n_c = LandingPage;\nLandingPage.getInitialProps = function() {\n    var _ref = _asyncToGenerator(C_Users_shubh_OneDrive_Desktop_Microservices_with_React_and_Node_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n        var client, data;\n        return C_Users_shubh_OneDrive_Desktop_Microservices_with_React_and_Node_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(context);\n                    _ctx.next = 3;\n                    return client.get('/api/users/currentuser');\n                case 3:\n                    data = _ctx.sent.data;\n                    return _ctx.abrupt(\"return\", data);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(context) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUU3QyxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLFFBQWEsQ0FBQztRQUFuQkMsV0FBVyxTQUFYQSxXQUFXO0lBQ2hDLEVBQTRCO0lBQzVCLEVBQXVEO0lBQ3ZELEVBQThCO0lBQzlCLEVBQU07SUFDTkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFdBQVcsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sNkVBQUVHLENBQUU7a0JBQUMsQ0FBWTs7Ozs7O0FBQ3pCLENBQUM7S0FQS0osV0FBVztBQVNqQkEsV0FBVyxDQUFDSyxlQUFlOzhOQUFHLFFBQVEsU0FBREMsT0FBTyxFQUFLLENBQUM7WUFDMUNDLE1BQU0sRUFDSkMsSUFBSTs7OztvQkFETkQsTUFBTSxHQUFHUiw2REFBVyxDQUFDTyxPQUFPLENBQUMsQ0FBQzs7MkJBQ2JDLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLENBQXdCOztvQkFBbERELElBQUksYUFBSkEsSUFBSSxDQUErQztpREFDcERBLElBQUk7Ozs7OztJQUNiLENBQUM7b0JBSm9DRixPQUFPOzs7R0FJM0MsQ0FBQztBQUVGLCtEQUFlTixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGRDbGllbnQgZnJvbSAnLi4vYXBpL2J1aWxkLWNsaWVudCc7XHJcblxyXG5jb25zdCBMYW5kaW5nUGFnZSA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcbiAgLy8gYXhpb3MuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJykuY2F0Y2goKGVycikgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gIC8vIH0pO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuICByZXR1cm4gPGgxPkxhbmRpbmcgUGFnZTwvaDE+O1xyXG59O1xyXG5cclxuTGFuZGluZ1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChjb250ZXh0KTtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xyXG4iXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJMYW5kaW5nUGFnZSIsImN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsImgxIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImNsaWVudCIsImRhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});