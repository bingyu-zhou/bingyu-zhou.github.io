$( document ).ready(function() {
    console.log( "im ready!" );

    $('.btn-home').click(function() {
        $('.right').removeClass('active');
        $('.panel-homepage').addClass('active');
    });    

    $('.btn-hwc').click(function() {
    	$('.right').removeClass('active');
    	$('.panel-hwc').addClass('active');
    });

    $('.btn-mmxix').click(function() {
    	$('.right').removeClass('active');
    	$('.panel-mmxix').addClass('active');
    });

    $('.btn-freeform').click(function() {
        $('.right').removeClass('active');
        $('.panel-freeform').addClass('active');
    });

    $('.btn-mada').click(function() {
    	$('.right').removeClass('active');
    	$('.panel-mada').addClass('active');
    });

    $('.btn-msdx').click(function() {
    	$('.right').removeClass('active');
    	$('.panel-msdx').addClass('active');
    });

    $('.btn-gradx').click(function() {
    	$('.right').removeClass('active');
    	$('.panel-gradx').addClass('active');
    });                

    $('.btn-gradshow').click(function() {
    	$('.right').removeClass('active');
    	$('.panel-gradshow').addClass('active');
    }); 

});