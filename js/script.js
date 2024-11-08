$(function(){
	const mySwiper = new Swiper(".mySwiper", {
		navigation: {
			nextEl: ".mySwiper .swiper-button-next",
			prevEl: ".mySwiper .swiper-button-prev"
		},
      	pagination: {
        	el: ".my .swiper-pagination"
      	}
	});
	$("nav > ul > li").hover(
		function(){
			$("nav > ul").addClass("active");
		},
		function(){
			$("nav > ul").removeClass("active");
		}
	);
	$("nav > ul > li > a").focusin(function(){
		if($(this).parent().index() == 0){
			$("nav > ul").addClass("active");
		}
		$(this).parent().addClass("active");
	});

	let total=$("nav > ul > li").length;
	$("nav li li:last-child a").focusout(function(){
		if($(this).parent().parent().parent().index() == total -1){
			$("nav > ul").removeClass("active");
		}
		$(this).parent().parent().parent().removeClass("active");
	});
});