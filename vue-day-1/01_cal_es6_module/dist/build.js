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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cal = __webpack_require__(1);

var obj = _interopRequireWildcard(_cal);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(obj); //引入cal对象
//var cal = require('./cal.js');

//es6的模块引入
//import cal from './cal.js';

//获取按钮
/*
document.getElementById('btn').onclick = function (){
	var n1 = document.getElementById('n1').value - 0;
	var n2 = document.getElementById('n2').value - 0;
	var sum = cal.add(n1, n2);
	document.getElementById('result').value = sum;
};
*/

/*
import defaultObj from './cal.js';
console.log(defaultObj);
*/

/**

function test() {	//不能包含在函数背部，只能在最外层作用域 import 和 export
	import {obj1, obj2, obj4} from './cal.js';

	console.log(obj1, obj2, obj4);
}

test();
*/

//全体导入

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var cal = {
	add: function add(n1, n2) {
		return n1 + n2;
	}
};

//commonjs导出
//module.exports = cal;

//es6导出
//export default  cal;


// 默认导出
var obj = '默认导出结果';
exports.default = obj;
// 导入方式 import xxx from './cal.js';

//**
// 声明式导除出

var obj1 = exports.obj1 = '声明式导出1';
var obj2 = exports.obj2 = '声明式导出2';
var obj3 = exports.obj3 = '声明式导出3';

// 导入方式
// import {obj1, obj2} from './cal.js';

// 另一种方式声明导出
var obj4 = '声明式导出4';
exports.obj4 = obj4;
// 导入方式
// import {obj1, obj2, obj4} from './cal.js';

//*/

/***/ })
/******/ ]);