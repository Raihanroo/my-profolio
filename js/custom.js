// aos
AOS.init();

// type js start

var typed = new Typed('.type', {
    strings: ['Photographer', 'Designer', 'freelancer',],
    
    typeSpeed:60,
    backSpeed:60,
    loop:true

  });


  $('document').ready(function() {
      'use strict';
      
    $('.countdown').final_countdown({
          'start': 1362139200,
          'end': 1388461320,
          'now': 1387461319        
      });
  });
// wow
new WOW().init();
// 
// counter

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// 991px navbar
$('.menu_btn').click(function () {
	$('.navbar .menu_bar').toggleClass('active')
});
$('.menu_btn').click(function () {
	$('.menu_btn i').toggleClass("xxxx");
})

// @media 991px menu bar









