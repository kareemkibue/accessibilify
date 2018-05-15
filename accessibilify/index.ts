declare var $: any;

/* interface IOptions {
    roles: any
} */

class Accessibilify {
    button: string;
    header: string;
    footer: string;
    html5RoleSet: any;
    myRoleSet: any;
    skipNav: any;

    constructor() {
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

    init(roleSet: any) {
        $(window).on('load', () => {
            this.assignRoles(this.html5RoleSet);
            this.assignRoles(this.myRoleSet);
            this.srTextReplace();
            this.html4Fallback();
            this.skipNavConfig();
        });
    }

    assignRoles(roleSet: any): void {
        for (let role in roleSet) {
            let elements: string = roleSet[role].join(',');
            $(elements).attr('role', role);
        }
    }

    srTextReplace(): void {
        $('[data-sr-text] ').each(function () {
            let srText = $(this).data('sr-text');

            $(this).find('span').attr({
                'aria-hidden': 'true',
            });

            $(this).prepend('<span class="sr-only" aria-hidden="false">' + srText + '</span>');
            $(this).removeAttr('data-sr-text');
        });
    }

    html4Fallback(): void {
        $('*[aria-hidden="true"], .ico').each(function () {
            $(this).attr('tabindex', -1);
        });
    }

    skipNavConfig(): void {
        this.skipNav.find('a').click(() => {
            this.skipNav.removeClass('slide-down');
            $('#content').focus();
        });

        this.skipNav.find('a').focus((event: any) => {
            this.skipNav.addClass('slide-down');
        });

        this.skipNav.find('a').blur(() => {
            this.skipNav.removeClass('slide-down');
        });
    }

}

export default new Accessibilify();