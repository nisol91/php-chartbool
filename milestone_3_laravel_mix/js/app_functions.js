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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// var $ = require('jquery');
$(document).ready(function () {
  //####stampo grafico a linea
  function printLineChart(ascissa, ordinata, titolo, posizione, tipo) {
    var chart = new Chart(posizione, {
      // The type of chart we want to create
      type: tipo,
      // The data for our dataset
      data: {
        labels: ascissa,
        datasets: [{
          label: titolo,
          backgroundColor: 'rgb(82, 39, 46, .3)',
          borderColor: 'rgb(82, 39, 46)',
          data: ordinata
        }]
      },
      // Configuration options go here
      options: {}
    });
  }

  ; //#####stampo grafico a torta

  function printPieChart(ascissa, ordinata, posizione, tipo) {
    var chart_pie = new Chart(posizione, {
      // The type of chart we want to create
      type: tipo,
      // The data for our dataset
      data: {
        labels: ascissa,
        datasets: [{
          backgroundColor: ['lightblue', 'rgb(38, 109, 111)', 'rgb(93, 115, 164)', 'rgb(136, 154, 185)'],
          borderColor: ['grey', 'grey', 'grey', 'grey'],
          data: ordinata
        }]
      },
      // Configuration options go here
      options: {}
    });
  }

  ; //####stampo grafico multi linea (efficienza)

  function printMultiLineChart(ascissa, ordinata1, ordinata2, ordinata3, titolo1, titolo2, titolo3, posizione, tipo) {
    var chart_ii = new Chart(posizione, {
      // The type of chart we want to create
      type: tipo,
      // The data for our dataset
      data: {
        labels: ascissa,
        datasets: [{
          label: titolo1,
          backgroundColor: 'rgb(82, 39, 46, .3)',
          borderColor: 'rgb(82, 39, 46)',
          data: ordinata1
        }, {
          label: titolo2,
          backgroundColor: 'rgb(93, 115, 164, .3)',
          borderColor: 'rgb(93, 115, 164)',
          data: ordinata2
        }, {
          label: titolo3,
          backgroundColor: 'rgb(176, 110, 82, .3)',
          borderColor: 'rgb(176, 110, 82)',
          data: ordinata3
        }]
      },
      // Configuration options go here
      options: {}
    });
  } //#### query string


  function queryString() {
    //****controllo per la visualizzazione dei GRAFICI
    //NB: non posso usare una chiamata ajax perche poi sarebbe lei stessa a governare le query, ma noi vogliamo prendere i valori in GET con php
    var my_query = window.location.search.substring(7);
    console.log(my_query);

    if (my_query === 'guest') {
      $('.vis_2').addClass('nascosto');
      $('.vis_3').addClass('nascosto');
    } else if (my_query === 'employee') {
      $('.vis_3').addClass('nascosto');
    }
  } //#### ordinare i dati


  function dataSort(data) {
    var array_venditeAgenti = [];
    var array_Agenti = [];

    for (var variable in data) {
      array_venditeAgenti.push(data[variable]);
      array_Agenti.push(variable);
    }

    return {
      agentsValues: array_venditeAgenti,
      agents: array_Agenti
    };
  }
});

/***/ }),

/***/ 1:
/*!***********************************!*\
  !*** multi ./src/js/functions.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nicola/nicola_sites/advanced_charts/milestone_3_laravel_mix/src/js/functions.js */"./src/js/functions.js");


/***/ })

/******/ });