$(document).ready(function(){   
    setJumbotronImage();

    //*************** ANIMATE JUMBOTRON ***************//    
    if ( $('section.jumbotron').length > 0 ){ 
        $('section.jumbotron li').addClass('animate');
        var count = 1;
        
        function animateJumbotron(){
            if ( count%38 == 0 ){
                $('section.jumbotron li:last').addClass('show');
                $('section.jumbotron li').removeClass('animate');                                
            }
            else if ( count>38 && count%38 == 2 ){
                $('section.jumbotron li').addClass('animate').removeClass('show');                                
                count = 0;
            }
            
            count++;    
            setTimeout(animateJumbotron, 1000);  
        }        
        animateJumbotron();
    }    
    
    $(window).resize(function(){
        setJumbotronImage();
    });

});

// Set Responsive Image on Slider
function setJumbotronImage(){
    if ( $('section.jumbotron').length > 0 ){               
        if ( device.platform == 'mobile' )
            $('section.jumbotron img').attr('src', function(){
                return $(this).data('src-xs');
            });
        else
            $('section.jumbotron img').attr('src', function(){
                return $(this).data('src-lg');              
            });
    }
}