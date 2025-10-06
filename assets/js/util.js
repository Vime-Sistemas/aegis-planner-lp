/*
	Utility Functions
	Aegis Planner Landing Page
*/

(function() {

	"use strict";

	/**
	 * Generate unique ID.
	 * @return {string} Unique ID.
	 */
	window.util = {
		
		// Generate unique ID
		uid: (function() {
			var id = 0;
			return function() {
				return 'util-' + (++id);
			};
		})(),

		// Debounce function
		debounce: function(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		},

		// Throttle function
		throttle: function(func, limit) {
			var inThrottle;
			return function() {
				var args = arguments;
				var context = this;
				if (!inThrottle) {
					func.apply(context, args);
					inThrottle = true;
					setTimeout(() => inThrottle = false, limit);
				}
			};
		},

		// Check if element is in viewport
		inViewport: function(element) {
			var rect = element.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		},

		// Smooth scroll to element
		scrollTo: function(element, duration, offset) {
			duration = duration || 600;
			offset = offset || 0;

			var targetPosition = element.offsetTop - offset;
			var startPosition = window.pageYOffset;
			var distance = targetPosition - startPosition;
			var startTime = null;

			function animation(currentTime) {
				if (startTime === null) startTime = currentTime;
				var timeElapsed = currentTime - startTime;
				var run = ease(timeElapsed, startPosition, distance, duration);
				window.scrollTo(0, run);
				if (timeElapsed < duration) requestAnimationFrame(animation);
			}

			function ease(t, b, c, d) {
				t /= d / 2;
				if (t < 1) return c / 2 * t * t + b;
				t--;
				return -c / 2 * (t * (t - 2) - 1) + b;
			}

			requestAnimationFrame(animation);
		},

		// Format phone number
		formatPhone: function(phone) {
			var cleaned = ('' + phone).replace(/\D/g, '');
			var match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
			if (match) {
				return '(' + match[1] + ') ' + match[2] + '-' + match[3];
			}
			return phone;
		},

		// Validate email
		validateEmail: function(email) {
			var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return re.test(email);
		},

		// Get query parameter
		getQueryParam: function(param) {
			var urlParams = new URLSearchParams(window.location.search);
			return urlParams.get(param);
		},

		// Local storage with fallback
		storage: {
			set: function(key, value) {
				try {
					localStorage.setItem(key, JSON.stringify(value));
					return true;
				} catch (e) {
					console.warn('LocalStorage not available');
					return false;
				}
			},
			get: function(key) {
				try {
					var item = localStorage.getItem(key);
					return item ? JSON.parse(item) : null;
				} catch (e) {
					console.warn('LocalStorage not available');
					return null;
				}
			},
			remove: function(key) {
				try {
					localStorage.removeItem(key);
					return true;
				} catch (e) {
					console.warn('LocalStorage not available');
					return false;
				}
			}
		}
	};

})();