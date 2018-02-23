$( document ).ready(function(){    

    $('#textNormal').click(function(){        
        setNormalFont();
        storeFontSize('normal');
    });
    $('#textMedium').click(function(){                
        setMediumFont();
        storeFontSize('medium');
    });    
    $('#textLarge').click(function(){
        setLargeFont();
        storeFontSize('large');
    });    

    $(window).resize(function(){
        initFontSize();

        if ( device.platform != 'desktop' ) setNormalFont();
    });
});


// Font Resizer
function initFontSize(){
    // var fontSize = localStorage.getItem('font-size');            
    var fontSize = retrieveFontSize();       
    if ( device.platform!='desktop' ) setNormalFont();
    else if (fontSize=='medium') setMediumFont();
    else if (fontSize=='large') setLargeFont();
    else setNormalFont();                        
};

function storeFontSize($fontSize){        
    // if (Modernizr.cookies) $.cookie('font-size', $fontSize, { expires: 14, path: '/' });   
    if (Modernizr.localstorage) localStorage.setItem('font-size', $fontSize);
    else $.cookie('font-size', $fontSize, { expires: 14, path: '/' });   
}
function retrieveFontSize(){
    // if ( Modernizr.cookies && $.cookie('font-size') ) return $.cookie('font-size');
    if (Modernizr.localstorage) return localStorage.getItem('font-size');
    else return $.cookie('font-size');
}

function setNormalFont(){
    $('#textNormal').addClass('current').siblings().removeClass('current');        
    $('body').removeClass('medium-font large-font');
}
function setMediumFont(){
    $('#textMedium').addClass('current').siblings().removeClass('current');        
    $('body').removeClass('large-font').addClass('medium-font');
}    
function setLargeFont(){
    $('#textLarge').addClass('current').siblings().removeClass('current');        
    $('body').removeClass('medium-font').addClass('large-font');
}



/*$.fn.fontResizer = function(){
    console.log( this.find('button').attr('id') );

    return this;
};

$('.font-resizer').fontResizer();*/