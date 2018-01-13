;(function($){
	"use strict"
	$(document).ready(function() {

		var teamSlider = $('.ba-slider');
		teamSlider.slick({
			slide: '.ba-slide',
			arrows: true,
			prevArrow: '.ba-slider-prev',
			nextArrow: '.ba-slider-next',
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 3,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
			]
		});

		var teamSlider2 = $('.ba-slider2');
		teamSlider2.slick({
			slide: '.ba-slide2',
			arrows: true,
			prevArrow: '.ba-slider-prev2',
			nextArrow: '.ba-slider-next2',
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 4,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
			]
		});

		var teamSlider3 = $('.ba-slider3');
		teamSlider3.slick({
			slide: '.ba-slide3',
			arrows: true,
			prevArrow: '.ba-slider-prev3',
			nextArrow: '.ba-slider-next3',
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 3,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
			]
		});

		var teamSlider4 = $('.ba-slider4');
		teamSlider4.slick({
			slide: '.ba-slide4',
			arrows: true,
			prevArrow: '.ba-slider-prev4',
			nextArrow: '.ba-slider-next4',
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 4,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
			]
		});

	});

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	    	&&
	    	location.hostname == this.hostname
	    	) {
	      // Figure out element to scroll to
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	        	scrollTop: target.offset().top
	        }, 800, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	          	return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	        };
	    });
	    }
	}
});

})(jQuery);
