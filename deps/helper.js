$(document).ready(function(){
	runHelperFunctions();    
});

function runHelperFunctions(){
	// Prevent Empty Hyperlinks from jumping to top
    $('a[href="#"], a[href=""]').click(function(event){
        event.preventDefault();
    }); 

    // Hide empty tags with padding and margins
    $('.content').find('ul, ol, li, p, div.clear').html(function(index, content){
        if ( content == '&nbsp;' || content == '' ) $(this).hide();                
    });	
}