/*
	Aegis Planner Landing Page
	Main JavaScript functionality
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$main = $('#main');

	// Breakpoints.
	breakpoints({
		xlarge:   [ '1281px',  '1680px' ],
		large:    [ '981px',   '1280px' ],
		medium:   [ '737px',   '980px'  ],
		small:    [ '481px',   '736px'  ],
		xsmall:   [ '361px',   '480px'  ],
		xxsmall:  [ null,      '360px'  ]
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Fix: Flexbox min-height bug on IE.
	if (browser.name == 'ie') {
		var flexboxFixTimeoutId;

		$window.on('resize.flexbox-fix', function() {
			clearTimeout(flexboxFixTimeoutId);
			flexboxFixTimeoutId = setTimeout(function() {
				if ($wrapper.prop('scrollHeight') > $window.height())
					$wrapper.css('height', 'auto');
				else
					$wrapper.css('height', '100vh');
			}, 250);
		}).triggerHandler('resize.flexbox-fix');
	}

	// Nav.
	var $nav = $header.children('nav'),
		$nav_li = $nav.find('li');

	// Add "middle" alignment classes if we're dealing with an even number of items.
	if ($nav_li.length % 2 == 0) {
		$nav.addClass('use-middle');
		$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');
	}

	// Main.
	var	delay = 325,
		locked = false;

	// Methods.
	$main._show = function(id, initial) {
		var $article = $main.children('#' + id);

		// No such article? Bail.
		if ($article.length == 0)
			return;

		// Handle lock.
		if (locked || (typeof initial != 'undefined' && initial === true)) {
			// Set delay.
			$body.addClass('is-switching');

			// Set locked.
			locked = true;

			// Activate article.
			$article.addClass('active');

			// Hide other articles.
			$main.children(':not(#' + id + ')').removeClass('active');

			// Unlock after a delay.
			setTimeout(function() {
				$body.removeClass('is-switching');
				locked = false;
			}, (initial ? 1000 : 0));

			return;
		}

		// Mark as switching.
		$body.addClass('is-switching');

		// Stop locked.
		locked = true;

		// Activate article.
		setTimeout(function() {
			// Hide header, nav.
			$header.hide();

			// Show main, article.
			$main.show();
			$article.addClass('active');

			// Unlock after a delay.
			setTimeout(function() {
				$body.removeClass('is-switching');
				locked = false;
			}, delay);

		}, delay);
	};

	$main._hide = function(addState) {
		var $article = $main.children('.active');

		// Article not visible? Bail.
		if (!$body.hasClass('is-article-visible'))
			return;

		// Add state?
		if (typeof addState != 'undefined' && addState === true)
			history.pushState(null, null, '#');

		// Handle lock.
		if (locked) {
			// Set delay.
			$body.addClass('is-switching');

			// Deactivate article.
			$article.removeClass('active');

			// Show header, nav.
			$header.show();

			// Hide main.
			$main.hide();

			// Unlock after a delay.
			setTimeout(function() {
				$body.removeClass('is-switching');
				locked = false;
			}, delay);

			return;
		}

		// Mark as switching.
		$body.addClass('is-switching');

		// Stop locked.
		locked = true;

		// Deactivate article.
		$article.removeClass('active');

		// Hide article.
		setTimeout(function() {
			// Show header, nav.
			$header.show();

			// Hide main.
			$main.hide();

			// Unlock after a delay.
			setTimeout(function() {
				$body.removeClass('is-switching');
				locked = false;
			}, delay);

		}, delay);
	};

	// Articles.
	$main.children('article').each(function() {
		var $this = $(this);

		// Remove close button functionality for this layout
		// Close.
		// $('<div class="close">✕</div>')
		// 	.appendTo($this)
		// 	.on('click', function() {
		// 		location.hash = '';
		// 	});

		// Prevent clicks from inside article from bubbling.
		$this.on('click', function(event) {
			event.stopPropagation();
		});
	});

	// Events.
	$body.on('click', function(event) {
		// Article visible? Hide.
		if ($body.hasClass('is-article-visible'))
			$main._hide(true);
	});

	$window.on('keyup', function(event) {
		switch (event.keyCode) {
			case 27:
				// Article visible? Hide.
				if ($body.hasClass('is-article-visible'))
					$main._hide(true);
				break;

			default:
				break;
		}
	});

	$window.on('hashchange', function(event) {
		// Empty hash?
		if (location.hash == '' || location.hash == '#') {
			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Hide.
			$main._hide();
		}
		// Otherwise, check for a matching article.
		else if ($main.children(location.hash).length > 0) {
			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Show article.
			$main._show(location.hash.substr(1));
		}
	});

	// Scroll to top functionality.
	$window.on('scroll', function() {
		if ($window.scrollTop() > 100) {
			if (!$('#scroll-to-top').length) {
				$('<div id="scroll-to-top"><i class="fas fa-chevron-up"></i></div>')
					.appendTo($body)
					.on('click', function() {
						$('html, body').animate({ scrollTop: 0 }, 600);
					});
			}
		} else {
			$('#scroll-to-top').remove();
		}
	});

	// Smooth scrolling for navigation links.
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			
			// Show the target article
			$main._show(this.getAttribute('href').substr(1));
			
			// Optional: smooth scroll to article
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 100
			}, 600);
		}
	});

	// Form submission handling.
	$('form').on('submit', function(event) {
		event.preventDefault();
		
		var $form = $(this);
		var $submitBtn = $form.find('input[type="submit"]');
		var originalText = $submitBtn.val();
		
		// Show loading state
		$submitBtn.val('Enviando...');
		$submitBtn.prop('disabled', true);
		
		// Simulate form submission (replace with actual form handling)
		setTimeout(function() {
			alert('Obrigado! Entraremos em contato em breve.');
			$form[0].reset();
			$submitBtn.val(originalText);
			$submitBtn.prop('disabled', false);
		}, 1500);
	});

	// Animation on scroll
	function animateOnScroll() {
		$('.func-item, .feature-card, .pricing-card').each(function() {
			var $this = $(this);
			var elementTop = $this.offset().top;
			var elementBottom = elementTop + $this.outerHeight();
			var viewportTop = $window.scrollTop();
			var viewportBottom = viewportTop + $window.height();

			if (elementBottom > viewportTop && elementTop < viewportBottom) {
				$this.addClass('animate-in');
			}
		});
	}

	$window.on('scroll', animateOnScroll);
	$window.on('load', animateOnScroll);

	// Parallax effect for header
	$window.on('scroll', function() {
		var scroll = $window.scrollTop();
		var rate = scroll * -0.5;
		$header.css('transform', 'translate3d(0, ' + rate + 'px, 0)');
	});

	// Initial load.
	$window.trigger('hashchange');

})(jQuery);