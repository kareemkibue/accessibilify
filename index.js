"use strict";
// declare var $: any;
exports.__esModule = true;
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
        $('[data-sr-text]').each(function () {
            var srText = $(this).data('sr-text');
            $(this).find('span').attr({
                'aria-hidden': 'true'
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
exports["default"] = new Accessibilify();
