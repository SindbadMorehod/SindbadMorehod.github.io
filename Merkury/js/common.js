$(function() {

	$(".hamburger").click(function(){
		$(".hamburger").toggleClass("is-active");
		$(".mnu").fadeToggle();
	})
	$(window).resize(function(){
		$(".hamburger").removeClass("is-active");
		if ($(window).width() > 768){
			$(".mnu").css("display", "inline-block")
		}
		else
		{
			$(".mnu").css("display", "none")
		}
	})



	$(window).scroll(function(){ //плавающее меню
		var scroll_top = $(document).scrollTop();
		var need_top = 41
		if (scroll_top > need_top){
			$("header .wrap").css({
				position: "fixed",
				"padding-right": "98px",
				"padding-top": "5px",
				"margin-top": 0,
				top: 0,
				width: "100%",
				right: 0,
				"background-color": "rgba(24,23,57,.6)",
				"z-index": "10",
				overflow: "visible"
			});
		}
		else{
			$("header .wrap").css({
				position: "relative",
				"background-color": "transparent",
				"padding-right": 0,
				"padding-top": 0,
				"margin-top": "5px",
				top: 0
			});
		}
	});

	function posBtn(){
		$(".s_1 .item").each(function(){
			var top = $(this).height()-$(this).children(".ico").height()-$(this).children(".title")
			.outerHeight(true)-$(this).children(".descr").outerHeight(true)-$(this).children(".btn").outerHeight(true);
			$(this).children(".btn").css("top", top);
		})
	}


	$("#items, #area").sortable({ connectWith: ".connectedSortable",
		items: "li:not(.place)",
		cursor: "move",
		revert: true,
		create: function(event, ui){
			var count_all = 0;
			$("#items").children("li").each(function(){
				var days = $(this).children(".text").children(".prop").text();
				$(this).children(".text").children(".prop").attr("data-days", days);
				count_all +=1;
			})
			$(".progress span").text("("+count_all+")");
			$(".completed span").text("(0)");
		},
		receive: function( event, ui ) {
			var element = ui.item;
			var count = 0;
			var count_all = 0;
			var count_items = 0;
			var count_area = 0;
			$("#items").children("li").each(function(){
				count_all +=1;
				var c = $(this).children(".text").children(".prop").attr("data-days");
				$(this).children(".text").children(".prop").text(c);
			})
			$("#area").children("li").each(function(){
				count_all +=1;
				$(this).children(".text").children(".prop").html('<i class="fas fa-check"></i>Complited');
			})
			count_all-=2;
			element.parent().children("li").each(function(){
				count +=1;
			})
			if (element.parent().attr("id") == "items"){
				count_items = count;
				count_area = count_all - count_items;
			}
			else{
				count_area = count-2;
				count_items = count_all - count_area;
			}
			$(".progress span").text("("+count_items+")");
			$(".completed span").text("("+count_area+")");
		},
	})

	$('.owl-carousel').owlCarousel({
		loop: false,
		responsiveClass:true,
		navText: ["<img src='img/caret-left.svg'>","<img src='img/caret-right.svg'>"],
		responsive:{
			0:{
				items:1,
				nav:true
			},
		}
	})
		//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".s_1 .item";
	equalheight(eqElement);
	posBtn();
	$(window).resize(function(){
		equalheight(eqElement);
		posBtn()
	})

$(".logo").animated("fadeIn");
$("header .wrap").animated("fadeIn");
$("header h1").animated("fadeInDown");
$("header .descr").animated("fadeInUp");
$("header .btn").animated("flipInY");
$("header img").animated("fadeIn");
$(".s_1 .i1").animated("slideInLeft");
$(".s_1 .i3").animated("slideInRight");
$(".s_1 .i2").animated("slideInUp");
$(".s_2").animated("slideInUp");
$(".s_4 .title_wrap").animated("fadeIn");
$(".s_4 .descr").animated("fadeIn");
$(".s_4 img").animated("fadeIn");
$(".s_4 .id1").animated("fadeIn");
$(".s_4 .id2").animated("fadeIn");
$(".s_4 .dot").animated("rubberBand");

$("a[href*='#']").mPageScroll2id();
});
