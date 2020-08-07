$(function(){
	let header =  $("#header");
	let intro = $("#intro");
	let introH=intro.innerHeight();
	let scrollPos;

	$(window).on("scroll  resize", function(){
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		if(scrollPos > introH){
				header.addClass("fixed");
		}
		else {
			header.removeClass("fixed");
		}
	}); 

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset= $(elementId).offset().top; 
		
		$("html, body").animate({
			scrollTop: elementOffset-60
		}, 700);

		nav.removeClass("show");
	});

	let button = $('#button');
	let nav = $('#nav');
	button.on("click",function(event){
		event.preventDefault();

		nav.toggleClass("show");

	});

	let slider = $('#testimonials__slider');

	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true, 
	  arrows:false,
	  dots:true
	});
});