/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Erica+One&family=Roboto:wght@400;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary-color: #482f2f;\\n  --secondary-color: #c42c2c;\\n  --background-color: #fff9f0;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  color: var(--primary-color);\\n}\\n\\nbody {\\n  background-color: var(--background-color);\\n  width: 100vw;\\n  height: 100vh;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\nheader {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 1rem 8rem;\\n}\\n\\nheader .logo {\\n  font-family: \\\"Comfortaa\\\", cursive;\\n  font-size: 1.5rem;\\n}\\n\\nheader nav {\\n  display: flex;\\n  gap: 2.75rem;\\n}\\n\\nheader nav a {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-size: 1rem;\\n}\\nheader nav a:hover {\\n  cursor: pointer;\\n}\\n\\n.clicked-link {\\n  color: var(--secondary-color);\\n}\\n\\nheader > img {\\n  width: 3.2rem;\\n  height: 3.2rem;\\n}\\n\\n.hero {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 7.25rem;\\n  margin-top: 8.5rem;\\n}\\n\\n.hero .pitch {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  gap: 6rem;\\n}\\n\\n.hero .pitch p {\\n  font-family: \\\"Erica One\\\", cursive;\\n  font-size: 4rem;\\n  white-space: pre;\\n}\\n\\n.hero .pitch .hero-btn {\\n  color: white;\\n  background-color: var(--secondary-color);\\n  padding: 1.25rem 2.5rem;\\n  border: none;\\n  border-radius: 3rem;\\n  font-weight: bold;\\n  font-size: 1.25rem;\\n}\\n\\n.hero .pitch .hero-btn:hover {\\n  cursor: pointer;\\n}\\n\\n.hero img {\\n  width: 35.5rem;\\n  height: 35.5rem;\\n}\\n\\n/*////////////////////////////\\n///////////Menu//////////////\\n////////////////////////////*/\\n\\n.menu {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));\\n  gap: 8rem;\\n  padding: 6rem 14rem;\\n  justify-content: center;\\n}\\n\\n.menu .menuItem,\\n.info {\\n  position: relative;\\n  padding: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: start;\\n  gap: 0.8rem;\\n  transition: all ease 1s;\\n}\\n.info {\\n  background-color: white;\\n  z-index: -1;\\n  border: none;\\n  border-radius: 15px;\\n}\\n.menuItem img {\\n  width: 7.125rem;\\n  filter: drop-shadow(0px 20px 20px rgba(103, 102, 102, 0.748));\\n}\\n\\n.menuItem .price {\\n  padding: 0.25rem 0.5rem;\\n  background-color: var(--secondary-color);\\n  color: white;\\n  border: none;\\n  border-radius: 45px;\\n  position: absolute;\\n  bottom: -20%;\\n}\\n\\n/*////////////////////////////\\n///////////About//////////////\\n////////////////////////////*/\\n\\n.about {\\n  padding: 8rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  justify-content: start;\\n  gap: 4rem;\\n}\\n\\n.aboutTitle {\\n  font-family: \\\"Erica One\\\", cursive;\\n  font-size: 4rem;\\n}\\n\\n.aboutText {\\n  width: 60vw;\\n  font-size: 1.2rem;\\n  font-weight: 500;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendAbout)\n/* harmony export */ });\nfunction appendAbout(content) {\n  const about = document.createElement(\"div\");\n  about.classList.add(\"about\");\n  const aboutTitle = document.createElement(\"p\");\n  aboutTitle.textContent = \"Your new favorite place!\";\n  aboutTitle.classList.add(\"aboutTitle\");\n  const aboutText = document.createElement(\"p\");\n  aboutText.textContent =\n    \"According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp.\";\n  aboutText.classList.add(\"aboutText\");\n\n  about.appendChild(aboutTitle);\n  about.appendChild(aboutText);\n\n  content.appendChild(about);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendHeader)\n/* harmony export */ });\n/* harmony import */ var _resources_i1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/i1.png */ \"./src/resources/i1.png\");\n\n\nfunction appendHeader(content) {\n  //header\n  const header = document.createElement(\"header\");\n\n  const logo = document.createElement(\"div\");\n  logo.textContent = \"Pizza Eleulma\";\n  logo.classList.add(\"logo\");\n\n  const nav = document.createElement(\"nav\");\n  const linkHome = document.createElement(\"a\");\n  linkHome.textContent = \"Home\";\n  linkHome.classList.add(\"clicked-link\");\n  const linkMenu = document.createElement(\"a\");\n  linkMenu.textContent = \"Menu\";\n  const linkAbout = document.createElement(\"a\");\n  linkAbout.textContent = \"About\";\n  nav.appendChild(linkHome);\n  nav.appendChild(linkMenu);\n  nav.appendChild(linkAbout);\n\n  const profile = document.createElement(\"img\");\n  profile.src = _resources_i1_png__WEBPACK_IMPORTED_MODULE_0__;\n  profile.setAttribute(\"alt\", \"placeholder\");\n\n  header.appendChild(logo);\n  header.appendChild(nav);\n  header.appendChild(profile);\n\n  content.appendChild(header);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendHome)\n/* harmony export */ });\n/* harmony import */ var _resources_hero_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/hero-image.png */ \"./src/resources/hero-image.png\");\n\n\nfunction appendHome(content) {\n  //hero section\n  const hero = document.createElement(\"div\");\n  hero.classList.add(\"hero\");\n\n  const pitch = document.createElement(\"div\");\n  pitch.classList.add(\"pitch\");\n  const heroText = document.createElement(\"p\");\n  heroText.textContent = \"Finest Setifian\\nStyle Pizza\\nStraight To\\nYour Door\";\n  const heroButton = document.createElement(\"button\");\n  heroButton.classList.add(\"hero-btn\");\n  heroButton.textContent = \"Browse Selection\";\n  pitch.appendChild(heroText);\n  pitch.appendChild(heroButton);\n\n  const heroImg = document.createElement(\"img\");\n  heroImg.src = _resources_hero_image_png__WEBPACK_IMPORTED_MODULE_0__;\n  heroImg.setAttribute(\"alt\", \"hero-image\");\n\n  hero.appendChild(pitch);\n  hero.appendChild(heroImg);\n\n  content.appendChild(hero);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\n\nconst header = document.querySelector(\"#header\");\nconst content = document.querySelector(\"#content\");\n(0,_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(header);\n(0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n\nlet hero_btn = document.querySelector(\".hero-btn\");\nconst links = document.querySelectorAll(\"a\");\n\nconst heroBtnOnClick = () => {\n  while (content.firstChild) {\n    content.removeChild(content.firstChild);\n  }\n  links.forEach((link) => {\n    link.classList.remove(\"clicked-link\");\n    if (link.textContent == \"Menu\") {\n      link.classList.add(\"clicked-link\");\n    }\n  });\n  (0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n};\n\nhero_btn.addEventListener(\"click\", heroBtnOnClick);\n\nlinks.forEach((link) => {\n  link.addEventListener(\"click\", (e) => {\n    links.forEach((a) => {\n      a.classList.remove(\"clicked-link\");\n    });\n    e.target.classList.add(\"clicked-link\");\n    while (content.firstChild) {\n      content.removeChild(content.firstChild);\n    }\n    switch (e.target.textContent) {\n      case \"Home\":\n        (0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n        hero_btn = document.querySelector(\".hero-btn\");\n        hero_btn.addEventListener(\"click\", heroBtnOnClick);\n        break;\n      case \"Menu\":\n        (0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n        break;\n      case \"About\":\n        (0,_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(content);\n        break;\n      default:\n    }\n  });\n});\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendMenu)\n/* harmony export */ });\n/* harmony import */ var _resources_i1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/i1.png */ \"./src/resources/i1.png\");\n/* harmony import */ var _resources_i2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/i2.png */ \"./src/resources/i2.png\");\n/* harmony import */ var _resources_i3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/i3.png */ \"./src/resources/i3.png\");\n/* harmony import */ var _resources_i4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/i4.png */ \"./src/resources/i4.png\");\n/* harmony import */ var _resources_i5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/i5.png */ \"./src/resources/i5.png\");\n/* harmony import */ var _resources_i6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/i6.png */ \"./src/resources/i6.png\");\n\n\n\n\n\n\n\nconst itemList = [\n  {\n    title: \"vegiterian\",\n    discription: \"delicious\",\n    price: \"5.99$\",\n    img: _resources_i1_png__WEBPACK_IMPORTED_MODULE_0__,\n  },\n  {\n    title: \"Neapolitan\",\n    discription: \"authentic\",\n    price: \"2.99$\",\n    img: _resources_i2_png__WEBPACK_IMPORTED_MODULE_1__,\n  },\n  {\n    title: \"Sicilian\",\n    discription: \"delicious\",\n    price: \"7.99$\",\n    img: _resources_i3_png__WEBPACK_IMPORTED_MODULE_2__,\n  },\n  {\n    title: \"Greek\",\n    discription: \"delicious\",\n    price: \"1.99$\",\n    img: _resources_i4_png__WEBPACK_IMPORTED_MODULE_3__,\n  },\n  {\n    title: \"Cheese\",\n    discription: \"delicious\",\n    price: \"8.99$\",\n    img: _resources_i5_png__WEBPACK_IMPORTED_MODULE_4__,\n  },\n  {\n    title: \"Leaf\",\n    discription: \"delicious\",\n    price: \"5.99$\",\n    img: _resources_i6_png__WEBPACK_IMPORTED_MODULE_5__,\n  },\n];\n\nfunction appendMenu(content) {\n  let menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n  for (let i = 0; i < itemList.length; i++) {\n    let item = document.createElement(\"div\");\n    let image = document.createElement(\"img\");\n    let info = document.createElement(\"div\");\n    let title = document.createElement(\"h3\");\n    let discription = document.createElement(\"p\");\n    let price = document.createElement(\"p\");\n\n    item.classList.add(\"menuItem\");\n    image.src = itemList[i].img;\n    info.classList.add(\"info\");\n    title.textContent = itemList[i].title;\n    discription.textContent = itemList[i].discription;\n    price.textContent = itemList[i].price;\n    price.classList.add(\"price\");\n\n    info.appendChild(title);\n    info.appendChild(discription);\n    info.appendChild(price);\n\n    item.appendChild(image);\n    item.appendChild(info);\n\n    menu.appendChild(item);\n  }\n  content.appendChild(menu);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/resources/hero-image.png":
/*!**************************************!*\
  !*** ./src/resources/hero-image.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13736023fba4ba010cc0.png\";\n\n//# sourceURL=webpack://restaurant/./src/resources/hero-image.png?");

/***/ }),

/***/ "./src/resources/i1.png":
/*!******************************!*\
  !*** ./src/resources/i1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5340eb9529c0dfcfeea3.png\";\n\n//# sourceURL=webpack://restaurant/./src/resources/i1.png?");

/***/ }),

/***/ "./src/resources/i2.png":
/*!******************************!*\
  !*** ./src/resources/i2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6378cc09a2d0601af685.png\";\n\n//# sourceURL=webpack://restaurant/./src/resources/i2.png?");

/***/ }),

/***/ "./src/resources/i3.png":
/*!******************************!*\
  !*** ./src/resources/i3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c857d374f584e235c70.png\";\n\n//# sourceURL=webpack://restaurant/./src/resources/i3.png?");

/***/ }),

/***/ "./src/resources/i4.png":
/*!******************************!*\
  !*** ./src/resources/i4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"edd73eb9c6b78144489c.png\";\n\n//# sourceURL=webpack://restaurant/./src/resources/i4.png?");

/***/ }),

/***/ "./src/resources/i5.png":
/*!******************************!*\
  !*** ./src/resources/i5.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d53215fca9677da7908.png\";\n\n//# sourceURL=webpack://restaurant/./src/resources/i5.png?");

/***/ }),

/***/ "./src/resources/i6.png":
/*!******************************!*\
  !*** ./src/resources/i6.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb48e4dc704419821a2b.png\";\n\n//# sourceURL=webpack://restaurant/./src/resources/i6.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;