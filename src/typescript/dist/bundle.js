/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/typescript/dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/typescript/dist/complex.js":
/*!****************************************!*\
  !*** ./src/typescript/dist/complex.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n(() => {\n    const Simple = __webpack_require__(/*! ./simple */ \"./src/typescript/dist/simple.js\");\n    const template = document.createElement('template');\n    template.innerHTML = `\n  <div>\n    <my-simple-component id=\"confirm\">\n      <span slot=\"content\">Confirm</span>\n    </my-simple-component>\n    <my-simple-component id=\"deny\">\n      <span slot=\"content\">Deny</span>\n    </my-simple-component>\n  </div>\n`;\n    class Complex extends HTMLElement {\n        constructor() {\n            super();\n            this.root = this.attachShadow({ mode: 'open' });\n            this.root.appendChild(template.content.cloneNode(true));\n        }\n        connectedCallback() {\n            this.refs = this.refs || {};\n            this.refs.confirm = this.root.querySelector('#confirm');\n            this.refs.deny = this.root.querySelector('#deny');\n            this.refs.confirm.addEventListener('click', () => {\n                console.log('__ CONFIRMED');\n            });\n            this.refs.deny.addEventListener('click', () => {\n                console.log('__ DENIED');\n            });\n        }\n    }\n    module.exports = Complex;\n})();\n\n\n//# sourceURL=webpack:///./src/typescript/dist/complex.js?");

/***/ }),

/***/ "./src/typescript/dist/index.js":
/*!**************************************!*\
  !*** ./src/typescript/dist/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nwindow.__COMPONENTS__ = window.__COMPONENTS__ || {};\nwindow.__COMPONENTS__.SimpleComponent = __webpack_require__(/*! ./simple */ \"./src/typescript/dist/simple.js\");\nwindow.__COMPONENTS__.ComplexComponent = __webpack_require__(/*! ./complex */ \"./src/typescript/dist/complex.js\");\n\n\n//# sourceURL=webpack:///./src/typescript/dist/index.js?");

/***/ }),

/***/ "./src/typescript/dist/simple.js":
/*!***************************************!*\
  !*** ./src/typescript/dist/simple.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n(() => {\n    const template = document.createElement('template');\n    template.innerHTML = `\n  <button>\n    <slot name=\"content\">Default Content</slot>\n  </button>\n`;\n    class SimpleComponent extends HTMLElement {\n        constructor() {\n            super();\n            this.root = this.attachShadow({ mode: 'open' });\n            this.root.appendChild(template.content.cloneNode(true));\n        }\n    }\n    module.exports = SimpleComponent;\n})();\n\n\n//# sourceURL=webpack:///./src/typescript/dist/simple.js?");

/***/ })

/******/ });