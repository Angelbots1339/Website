var animating = false;
$(function () {
	'use strict';
    $('.item').first().addClass('active-accordion');
    $('.info').first().show().animate({width: '800px'});
    $('.item').click(function () {
    	if(!$(this).hasClass("active-accordion") && !animating){
	        $(this).addClass("active-accordion").siblings('.item').removeClass('active-accordion');
	        animating = true;
	        $(this).next().show().animate({width: '800px'}).siblings('.info').animate({width: 0}, function () {
	            $(this).hide();
	            animating = false;
	        });
	    }
    });
});