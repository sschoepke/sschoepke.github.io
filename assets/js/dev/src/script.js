(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();

    $(window).on('load', function() {

    	function rotateBgs() {
	    	var el = $('.background-imgs .parallax'),
				index = 0,
				inc = function() {
					el.removeClass('active');
					el.eq(index++).addClass('active');
					$('.main-nav').toggleClass('light-scheme dark-scheme');
					$('#intro').toggleClass('light-text dark-text');
				};

				setInterval( function() {
					$('.main-nav').removeClass('init-scheme');
					$('#intro').removeClass('init-text');
					if  (index < el.length) {
						inc();
					} else {
						index = 0;
						inc();
					}
				}, 5500);
	    }

	    rotateBgs();

		$('.my-name').typed({
	        strings: ['stephen^800'],
	        typeSpeed: 50,
	        startDelay: 1000,
	        preStringTyped: function() {
	        	$('.my-name + .typed-cursor').css({'display' : 'inline'});
	        },
	        callback: function() {
	        	$('.my-name + .typed-cursor').css({'visibility' : 'hidden'});
	        }
	    });

	    $('.subhead').typed({
	    	strings: ['web^300 ^500developer^800'],
	    	typeSpeed: 50,
	    	startDelay: 3000,
	    	preStringTyped: function() {
	        	$('.subhead + .typed-cursor').css({'display' : 'inline'});
	        },
	        callback: function() {
	        	$('.subhead + .typed-cursor').css({'visibility' : 'hidden'});
	        }
	    });

		$('.location').typed({
	    	strings: ['portsmouth, ^300new hampshire'],
	    	typeSpeed: 50,
	    	startDelay: 7000,
	    	preStringTyped: function() {
	        	$('.location + .typed-cursor').css({'display' : 'inline'});
	        },
	        callback: function() {
	        	$('.location + .typed-cursor').css({'visibility' : 'hidden'});
	        }
	    });

	});

  }); // end of document ready
})(jQuery); // end of jQuery name space