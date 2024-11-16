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

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://front-end-pro-1/./src/scss/main.scss?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n\nconst apiKey = '75e42ba9211fa4d0c5c4dbdeb0081979';\nconst city = 'Odesa';\nconst weatherWidget = document.getElementById('weather-widget');\nconst locationEl = document.getElementById('location');\nconst tempEl = document.getElementById('temperature');\nconst descEl = document.getElementById('description');\nconst feels = document.getElementById('feels');\nconst humidity = document.getElementById('humidity');\nconst pressure = document.getElementById('pressure');\nconst visibility = document.getElementById('visibility');\nconst refreshBtn = document.getElementById('refresh-btn');\nconst date = document.getElementById('date');\nconst fetchForecast = () => {\n  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(response => response.json()).then(data => {\n    if (data.cod === 200) {\n      locationEl.textContent = `${data.name}, ${data.sys.country}`;\n      tempEl.textContent = `${Math.round(data.main.temp)}°C`;\n      descEl.textContent = data.weather[0].description;\n      feels.textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;\n      humidity.textContent = `Humidity: ${data.main.humidity}%`;\n      pressure.textContent = `Pressure: ${data.main.pressure} hPa`;\n      visibility.textContent = `Visibility: ${data.visibility} m`;\n      date.textContent = new Date().toLocaleString();\n    } else {\n      locationEl.textContent = 'Error while loading the data';\n      tempEl.textContent = '-';\n      descEl.textContent = '-';\n      feels.textContent = '-';\n      humidity.textContent = '-';\n      pressure.textContent = '-';\n      country.textContent = '-';\n      visibility.textContent = '-';\n    }\n  }).catch(error => {\n    locationEl.textContent = 'Network connection error';\n    tempEl.textContent = '-';\n    descEl.textContent = '-';\n    feels.textContent = '-';\n    humidity.textContent = '-';\n    pressure.textContent = '-';\n    country.textContent = '-';\n    visibility.textContent = '-';\n  });\n};\nrefreshBtn.addEventListener('click', fetchForecast);\nfetchForecast();\n\n//# sourceURL=webpack://front-end-pro-1/./src/js/script.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;