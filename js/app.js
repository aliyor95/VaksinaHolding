// Init AOS
(function ($) {
  "use strict";

  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });
})(jQuery);

// Number function
$(document).ready(function() {
  $('.number').counterUp({
    delay: 10,
    time: 3000
  });
});

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
})

$(function () {
	let nav = $('#nav, #nav_toggle'),
		introH = $('#about').innerHeight(),
		scrollOffset = $(window).scrollTop();

	// ! Fixed header
	checkScroll(scrollOffset);
	$(window).on('scroll', function () {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			nav.addClass('fixed');
		} else(
			nav.removeClass('fixed')
		);
	}
});

//  Menu nav toggle
$('#nav_toggle').on('click', function (event) {
	event.preventDefault();
	$(this).toggleClass('active');
	$('#nav').toggleClass('active');
});
