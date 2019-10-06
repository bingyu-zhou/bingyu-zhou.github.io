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

    $('.btn-Flashlights').click(function(){
    	hideAll();
    	$('.Flashlights').removeClass('hide');
    });

    $('.btn-Notebook').click(function(){
    	hideAll();
    	$('.Notebook').removeClass('hide');
    });

    $('.btn-Clock').click(function(){
    	hideAll();
    	$('.Clock').removeClass('hide');
    });

    // Button all

    $('.btn-all').click(function(){
    	$('.research-item').removeClass('hide');
    });


 });   
