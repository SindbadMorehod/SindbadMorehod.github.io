$(function() {
	
	$(".hamburger").click(function(){
		$(".hamburger").toggleClass("is-active");
		$(".mnu").fadeToggle();
	})
	$(window).resize(function(){
		$(".hamburger").removeClass("is-active");
		if ($(window).width() > 992){
			$(".mnu").css("display", "inline-block")
		}
		else
		{
			$(".mnu").css("display", "none")
		}
	})

		$(window).scroll(function(){ //плавающее меню
		var scroll_top = $(document).scrollTop();
		var need_top = 65
		if (scroll_top > need_top){
			$("header .wrap").css({
				position: "fixed",
				top: -30,
				right: 0,
				"background-color": "rgba(0,0,0,.4)",
				"z-index": "10",
				width: "100%",
				overflow: "visible"
			});
			if ($(window).width() > 992){
				$("header .mnu li").css("padding-bottom", "0")
			}
		}
		else{
			$("header .wrap").css({
				position: "relative",
				"background-color": "transparent",
				top: 0
			});
			if ($(window).width() > 992){
				$("header .mnu li").css("padding-bottom", "24px")
			}
			else{
				$("header .mnu li").css("padding-bottom", "0")
			}
		}
	});

	})


function initMap() {
	var uluru = {lat: 60.014071, lng: 30.347838};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: uluru,
		zoomControl: false,
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});

	(function($){
		$(window).on("load",function(){
			$("a[rel='m_PageScroll2id']").mPageScroll2id();
		});
	})(jQuery);

}