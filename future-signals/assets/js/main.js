$(document).ready(function(){
    console.log("The page is ready!");

    // Toggle large class on research item

    $('.research-item').click(function(){
        $(this).toggleClass('large');
    });

    // Toggle active class on nav item

    $('.nav-item').click(function(){
    	$('.nav-item').removeClass('active');
    	$(this).addClass('active');
    });

    var hideAll = function() {
    	$('.research-item').addClass('hide');
    }

    // Button filters

    $('.btn-car').click(function(){
    	hideAll();
    	$('.car').removeClass('hide');
    });


    $('.btn-kinect').click(function(){
    	hideAll();
    	$('.kinect').removeClass('hide');
    });


    $('.btn-Tracking').click(function(){
    	hideAll();
    	$('.Tracking').removeClass('hide');
    });

    // Button all

    $(".btn-all").click(function(){
    	$('.research-item').removeClass('hide');
    });

});