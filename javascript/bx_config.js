$(document).ready(function(){

	var settings = function() {
		var settings1 = {
			mode: 'horizontal',
			pager: false
		};
		var settings2 = {
			mode: 'horizontal',
			pager: true,
			auto: true,
			pause: 5000,
			preloadImages: 'visible',
			pagerCustom: '#bx-pager'
		};
		return ($(window).width()<768) ? settings1 : settings2;
	}


	var mySlider;
	mySlider = $('.bxslider').bxSlider(settings());


	// Commented out:
	// if(slider.pagerEl) slider.pagerEl.remove();  (in jquery.bxslider.js) (after r.1320) CSS
	// Else pagerCustom disapears after resizing
	
	function detourFunction() {
		mySlider.reloadSlider(settings());
	}

	$(window).resize(detourFunction);

});
