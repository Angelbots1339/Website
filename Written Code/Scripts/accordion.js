var animating = false;
var wait = 10;
$(function () {
    'use strict';
    $('.item').first().addClass('active-accordion');
    $('.info').first().show().animate({ width: '800px' });
    $('.item').click(function () {
        if(!$(this).hasClass("active-accordion") && !animating){
          $(this).addClass("active-accordion").siblings('.item').removeClass('active-accordion');
          animating = true;
          $(this).next().siblings('.info').animate({width: 0}, 500, function() { $(this).hide();});
          setTimeout(function() {
            $(".active-accordion").next().show();
            $(".active-accordion").next().animate({width:'800px'}, 500, function() { animating = false; });
          }, wait);
        }
    });
});
