$(function() {

function resizeNav(){
	var w = $(window).width();
	if (w>1280){
		$("header nav").css("width", w);
		$(".overlay").css("width", w);
		$("footer").css("width", w);
		var delta = (w - $("body").css("width").replace("px",""))/2;
		var pdl = delta+180
		$("header nav").css("left", -delta).css("padding-left",pdl);
		$("footer").css("left", -delta).css("padding-left",pdl).css("padding-right",pdl);
		$(".overlay").css("left", -delta).css("padding-left",pdl);
	}
	else{
		$("header nav").css("left", 0).css("padding-left", 164).css("width", 1280);
		$("footer").css("left", 0).css("padding-left", 164).css("width", 1280);
		$(".overlay").css("left", 0).css("padding-left", 164).css("width", 1280);
	}
}
$(window).resize(function(){
	resizeNav()
})
resizeNav()

$('.slider_top').slick({
	dots: true
});

$(".slider_bottom").slick({
  slidesToShow: 4,
  infinite: false,
  nextArrow: '<img src="img/index/arr.png" class="arr_next"/>',
  prevArrow: '<img src="img/index/arr.png" class="arr_prev"/>'
})

	//E-mail Ajax Send
	$(".call").click(function(){
		$(".callback").fadeIn();
		$(".overlay").fadeIn();
	})
	$(".overlay").click(function(){
		$(".callback").fadeOut();
		$(".overlay").fadeOut();
	})
	$("#callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				$(".callback").fadeOut();
				$(".overlay").fadeOut();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});