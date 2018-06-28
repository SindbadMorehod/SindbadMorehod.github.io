$(function() {
// Расположение хедера и футера на всю ширину окна
function resizeNav(){
	var w = $(window).width();
	if (w>1280){
		$("header .top_line").css("width", w);
		$(".overlay").css("width", w);
		$("footer").css("width", w);
		$("header nav").css("width", w);
		var delta = (w - $("body").css("width").replace("px",""))/2;
		var pdl = delta+180
		$("header .top_line").css("left", -delta).css("padding-left",pdl-10).css("padding-right",pdl-10);
		$("header nav").css("left", -delta).css("padding-left",pdl-12);
		$("footer").css("left", -delta).css("padding-left",pdl).css("padding-right",pdl);
		$(".overlay").css("left", -delta).css("padding-left",pdl);
	}
	else{
		$("header .top_line").css("left", 0).css("padding-left", 164).css("width", 1280);
		$("header nav").css("left", 0).css("padding-left", 164).css("width", 1280);
		$("footer").css("left", 0).css("padding-left", 164).css("width", 1280);
		$(".overlay").css("left", 0).css("padding-left", 164).css("width", 1280);
	}
}
$(window).resize(function(){
	resizeNav()
})
resizeNav()

//Слайдеры
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

	//Скрипт, изменяющий цвет элементов бокового меню
	$(".aside ul li").each(function(){
		var that = $(this);

		function changeColor(word,color){
			var str = that.children("a").html();
			var correct = str.replace(new RegExp(word, 'g'), '<span class="'+word+'">'+word+'</span>')
			that.children("a").html(correct);
			that.children("a").children('.'+word).css("color", color);
		}

		changeColor('MINIA','#ff6600');
		changeColor('MODEON','#c20000');
		changeColor('ARION','#939697');
		changeColor('VARIUS','#a2de00');
		changeColor('CONTEO','#0094ec');
	})

});