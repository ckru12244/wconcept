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
});