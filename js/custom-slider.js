	$(document).ready(function(){
	  $(".tea-slider").owlCarousel({
		items: 3,
		loop: true,
		margin: 20,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  1000: {
			items: 3
		  }
		}
	  });
	});
