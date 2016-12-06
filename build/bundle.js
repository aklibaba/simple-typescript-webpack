/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var store_1 = __webpack_require__(1);
	var myStore = new store_1.default();
	console.log(myStore);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by Aleksander on 2016-12-05.
	 */
	var Store = (function () {
	    function Store(items) {
	        if (items === void 0) { items = ['apples', 'mango', 'strawberry']; }
	        this.items = items;
	    }
	    Store.prototype.addItemToStore = function (item) {
	        this.items.push(item);
	        console.log("The " + item + " has been added to the store");
	    };
	    Store.prototype.removeItem = function (item) {
	        var index = this.items.indexOf(item);
	        if (index > -1)
	            this.items.splice(index, 1);
	        console.log("The " + item + " has been removed from the store");
	    };
	    return Store;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Store;


/***/ }
/******/ ]);