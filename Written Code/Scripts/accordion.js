var animating = false;
var wait = 200;
$(function () {
    'use strict';
    $('.item').first().addClass('active-accordion');
    $('.info').first().show().animate({width: '800px'});
    $('.item').click(function () {
        if(!$(this).hasClass("active-accordion") && !animating){
            $(this).addClass("active-accordion").siblings('.item').removeClass('active-accordion');
            animating = true;
            // setTimeout(function() {
            //setTimeout wasn't fucking working, so it is commented out, adding the delay function.
            delay(wait);
            $(this).next().show().animate({width: '800px'}).siblings('.info').animate({width: 0}, function () {
                $(this).hide();
                animating = false;
            });
        // }, 10);
        }
    });
});


// hackey way to put in a delay(since setTimeout wasn't working)
function delay(delayTime) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > delayTime){
        break;
      }
    }
  }