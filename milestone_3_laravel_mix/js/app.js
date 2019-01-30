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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script_3.js":
/*!****************************!*\
  !*** ./src/js/script_3.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// var $ = require('jquery');
$(document).ready(function () {
  $.ajax({
    url: 'http://localhost/advanced_charts/milestone_3_laravel_mix/php/server_3.php',
    method: 'GET',
    success: function success(data) {
      //rendo i dati leggibili da js
      var my_data = JSON.parse(data);
      console.log(my_data);
      console.log(my_data['fatturato']);
      console.log(my_data['fatturato']['data']);
      console.log(my_data['fatturato']['type']); //****preparo i dati (milestone 2) che arrivano dal DB per poter essere letti da chart.js
      //volendo questa parte si poteva fare in php, ma non cambia niente.

      var venditeAgenti = my_data['fatturato_by_agent']['data'];
      var agenti = dataSort(venditeAgenti).agents;
      var valoriVenditeAgenti = dataSort(venditeAgenti).agentsValues; //****controllo per la visualizzazione dei GRAFICI

      queryString(); //*******************************
      //*******STAMPA GRAFICI**********
      //*******************************

      var mesi = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var ctx_ii = $('.line-chart-iii');
      var ctx_iii = $('.pie-chart-iii');
      var ctx_iiii = $('.line-chart-iiii');
      var ord_1 = my_data['fatturato']['data'];
      var titolo_1 = "Vendite annuali, Milestone III";
      var tipo_1 = my_data['fatturato']['type'];
      var tipo_2 = my_data['fatturato_by_agent']['type'];
      var ord_3_a = my_data['team_efficiency']['data']['Team1'];
      var ord_3_b = my_data['team_efficiency']['data']['Team2'];
      var ord_3_c = my_data['team_efficiency']['data']['Team3'];
      var titolo_3_a = "Efficienza Team1, Milestone III";
      var titolo_3_b = "Efficienza Team2, Milestone III";
      var titolo_3_c = "Efficienza Team3, Milestone III";
      printLineChart(mesi, ord_1, titolo_1, ctx_ii, tipo_1);
      printPieChart(agenti, valoriVenditeAgenti, ctx_iii, tipo_2);
      printMultiLineChart(mesi, ord_3_a, ord_3_b, ord_3_c, titolo_3_a, titolo_3_b, titolo_3_c, ctx_iiii, tipo_1);
    }
  });
});

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi ./src/js/script_3.js ./src/sass/app.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/nicola/nicola_sites/advanced_charts/milestone_3_laravel_mix/src/js/script_3.js */"./src/js/script_3.js");
module.exports = __webpack_require__(/*! /home/nicola/nicola_sites/advanced_charts/milestone_3_laravel_mix/src/sass/app.scss */"./src/sass/app.scss");


/***/ })

/******/ });