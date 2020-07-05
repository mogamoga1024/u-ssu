$(function() {
	
	$('body').append('<div></div>');
	$('div:last').load('doutai.html');
	
	var scrollPosition = $(window).scrollTop() + $(window).height();
	
	$(window).scroll(
		function() {
			scrollPosition = $(window).scrollTop() + $(window).height();
			
			if (scrollPosition >= $(document).height() - 100) {
				$('body').append('<div></div>');
				$('div:last').load('doutai.html');
			}
		}
	);
	
});


