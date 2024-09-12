$(function(){
	let n=0;

	$(".slider li").eq(n).addClass("current");

	$(".arrow .left").click(function(e){
		e.preventDefault();

		if(n > 0){
			n--;
		}
		else{
			n=3;
		}
		$(".slider li").removeClass("current")
		$(".slider li").eq(n).addClass("current")
	});
	$(".arrow .right").click(function(e){
		e.preventDefault();

		if(n < 3){
			n++;
		}
		else{
			n=0;
		}
		$(".slider li").removeClass("current")
		$(".slider li").eq(n).addClass("current")
	});

	$("nav > ul > li > a").hover(
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