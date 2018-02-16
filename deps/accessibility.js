$(window).load(function(){
	accessibilify();
});

// Accessibility Functions
function accessibilify(){
    // Accessibility JAWS tab through workaround
    /*$('*[aria-hidden="true"]').each(function(){
        $(this).attr('tabindex', -1);
    });

    // Disable Tab through on Bx-Slider components
    $('.bx-controls, .bx-controls a, sup').attr({
        'tabindex': '-1',
        'aria-hidden': 'true'
    });*/      

    $('a[data-sr-text], button[data-sr-text]').each(function(){
		var srText = $(this).data('sr-text');
		$(this).find('span').attr({
			'aria-hidden': 'true',			
		});
		$(this).prepend('<span class="sr-only" aria-hidden="false">' + srText + '</span>');		
	});

	$('*[aria-hidden="true"]').each(function(){
        $(this).attr('tabindex', -1);
    });

    // Main Navgation landmarks
    $('nav.main-nav').attr('role', 'navigation');
    $('nav.main-nav > ul').attr('role', 'menubar');
    $('nav.main-nav > ul > li > ul').attr('role', 'menu');
    $('nav.main-nav li').attr('role', 'presentation');
    $('nav.main-nav a').attr('role', 'menuitem');

    // ARIA attrs - properties
    $('nav.main-nav > ul > li > a').each(function(){
        if ( $(this).siblings('ul').length > 0 )
            $(this).attr('aria-haspopup', 'true');   
    });

    // ARIA attrs - statuses
    $('nav.main-nav li.active a').attr('aria-selected', 'true');

    // Add Form landmark to all forms
    $('form').attr('role', 'form');

    // Add Search landmark to Search Form(s) - overrides role-form
    $('#siteSearchForm').attr('role', 'search');

    // Add Main Content Section landmark    
    $('main').attr('role', 'main');

    // Add defining landmark to Main Content section
    $('main[role="main"]').attr('aria-labelledby', 'pageTitle').find('h1').attr('id', 'pageTitle');

    // Left Navigation landmarks and definition
    // $('.inner > .container > aside').attr('role', 'navigation').attr('aria-labelledby', 'leftNavHeading').find('.aside-menu-toggle > span').attr('id', 'leftNavHeading');
    $('.inner > .container > aside').attr('role', 'navigation').attr('aria-label', function(){
        return $(this).find('.aside-menu-toggle > span').text() + ' Menu';
    });    

    // Hyperlinks that serve the purpose of buttons
    $('a.btn').attr('role', 'button');

    // Add Main Document about information (for copyright and privacy)
    $('.footer-bottom ul.links').attr('role', 'contentinfo');
}