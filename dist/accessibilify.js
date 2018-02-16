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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// declare var $: any;
var Accessibilify = /** @class */ (function () {
    function Accessibilify() {
        this.skipNav = $('#bannerSkipNav');
        this.html5RoleSet = {
            'header': ['banner'],
            'nav': ['nav'],
            'main': ['main'],
            'button': ['button'],
            'article': ['article'],
            'contentinfo': ['footer']
        };
    }
    Accessibilify.prototype.init = function (roleSet) {
        var _this = this;
        $(window).on('load', function () {
            _this.assignRoles(_this.html5RoleSet);
            _this.assignRoles(_this.myRoleSet);
            _this.srTextReplace();
            _this.html4Fallback();
            _this.skipNavConfig();
        });
    };
    Accessibilify.prototype.assignRoles = function (roleSet) {
        for (var role in roleSet) {
            var elements = roleSet[role].join(',');
            $(elements).attr('role', role);
        }
    };
    Accessibilify.prototype.srTextReplace = function () {
        $('[data-sr-text] ').each(function () {
            var srText = $(this).data('sr-text');
            $(this).find('span').attr({
                'aria-hidden': 'true',
            });
            $(this).prepend('<span class="sr-only" aria-hidden="false">' + srText + '</span>');
            $(this).removeAttr('data-sr-text');
        });
    };
    Accessibilify.prototype.html4Fallback = function () {
        $('*[aria-hidden="true"], .ico').each(function () {
            $(this).attr('tabindex', -1);
        });
    };
    Accessibilify.prototype.skipNavConfig = function () {
        var _this = this;
        this.skipNav.find('a').click(function () {
            _this.skipNav.removeClass('slide-down');
            $('#content').focus();
        });
        this.skipNav.find('a').focus(function (event) {
            _this.skipNav.addClass('slide-down');
        });
        this.skipNav.find('a').blur(function () {
            _this.skipNav.removeClass('slide-down');
        });
    };
    return Accessibilify;
}());
/* harmony default export */ __webpack_exports__["default"] = (new Accessibilify());


/***/ })
/******/ ]);