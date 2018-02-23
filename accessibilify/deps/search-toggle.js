$( document ).ready(function(){

	$( '#searchToggle' ).click(function() {        
		$(this).toggleClass('pressed');
        $('#topSearchCont').toggleClass('slide-down');      
        $('#searchSiteTxtBox').focus();        
        $('main').on('click', collapseSearch);
    }); 

    if ( device.platform == 'desktop' ) collapseSearch();
});

function collapseSearch(){      
    $('#topSearchCont').removeClass('slide-down'); 
    $('#searchToggle').removeClass('pressed');        
    $('main').focus();
    $('main').off('click', collapseSearch);        
}