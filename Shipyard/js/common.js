$(document).ready(function() {

	function wResize(){ //делает header во весь экран при любом разрешении
		$("header").css("min-height", $(window).height());
		$("header .overlay").css("min-height", $(window).height());
	};

	function mnuPos(){//определяет значение top для меню, руководствуясь высотой предшествующих элементов.
		var	nav_top = ($(".logo_top").outerHeight(true)+$(".top_title").outerHeight(true)+$(".top_descr").height()+80);
		$(".mnu").css("top", nav_top);
	};
	mnuPos();
	wResize();
	$(window).resize(function(){
		wResize();
		mnuPos();
		var win_w = $(window).width(); //ширина экрана, необходима для выбора расстояния между элементами меню и выбора ширины содержимого меню
	});


// Раскрывающееся горизонтальное меню. 
	$(".link").click(function(){//При клике на элемент меню
		var win_w = $(window).width();
		var cl = $(this); //создаем переменную, т.к. при прохождении функции ниже this изменяется
		$(".link").animate({
			"margin-left": "5px" //все элементы размещаем на расстоянии 10 пикселей
		}, 300);
		if($(this).parent().children(".average").is(":visible")){ //если клик был по уже открытому элементу
			if (win_w<=480){
				$(".item").css("display", "block");
			}
			$(this).parent().children(".average").animate({width: "0", "padding-left": 0, "padding-right": 0}, 
				"slow", 
				function(){
					$(this).parent().children(".average").css("display", "none"); //скрываем содержимое этого элемента
					$(".link").removeClass("active");
					
					if (win_w > 768){
						$(".link").animate({   //возвращаем  расстояние в 100 px при ширине дисплея более 500px
							"margin-left": "100px" //
						}, 300);
					}
					else if (win_w > 480){
						$(".link").animate({   //возвращаем расстояние в 50 px при ширине дисплея менее 500px
							"margin-left": "40px" 
						}, 300);
					}
					else {
						$(".link").animate({   //возвращаем расстояние в 20 px при ширине дисплея менее 500px
							"margin-left": "20px" 
						}, 300, function(){
							$(".item").css("display", "inline-block");
						});
					}
				});
			return; //выход из функции
		};
		 //если предыдущая функция не прошла, то при клике либо все элементы закрыты, либо открыт не тот, на который кликают
		 if (win_w<=480){
		 	$(".item").css("display", "block");
		 }
		$(".average").animate({width: "0", "padding-left": 0, "padding-right": 0}, "slow"); 
			setTimeout(function(){
				$(".link").removeClass("active"); //удаляем класс active с раскрытого элемента
				cl.addClass("active");
				$(".average").css("display", "none"); // скрываем все раскрытые элементы
				cl.parent().children(".average").css("display", "inline-block"); // открываем текущий элемент
				if (win_w > 768){
					cl.parent().children(".average").animate({width: "420px", "padding-left": 20, "padding-right": 0},
						"slow")
				}
				else if (win_w > 480){
					cl.parent().children(".average").animate({width: "372px", "padding-left": 10, "padding-right": 0},
						"slow")
				}
				else{
					cl.parent().children(".average").animate({width: "300px", "padding-left": 5, "padding-right": 0},
						"slow", function(){
							$(".item").css("display", "inline-block");
						})
				}
			},500);
	})

// автоскрытие при resizer. Приходится дублировать функцию, поскольку не получается вернуть return родителю
$(window).resize(function(){
	var win_w = $(window).width();
		 		$(".average").css("display", "none"); //скрываем содержимое этого элемента
					$(".link").removeClass("active");
					
					if (win_w > 768){
						$(".link").animate({   //возвращаем  расстояние в 100 px при ширине дисплея более 500px
							"margin-left": "100px" //
						}, 300);
					}
					else if (win_w > 480){
						$(".link").animate({   //возвращаем расстояние в 50 px при ширине дисплея менее 500px
							"margin-left": "40px" 
						}, 300);
					}
					else {
						$(".link").animate({   //возвращаем расстояние в 20 px при ширине дисплея менее 500px
							"margin-left": "20px" 
						}, 300);
					}
})

//функция, создающая плавающее меню при скролле ниже его изначального top
	$(window).scroll(function(){
		var scroll_top = $(document).scrollTop();
		if (scroll_top > $(".logo_top").outerHeight(true)+$(".top_title").outerHeight(true)+$(".top_descr").height()+80){
			$(".mnu").css({
				position: "fixed",
				top: 5,
			});
		}
		else{
			$(".mnu").css({
				position: "absolute",
			});
			mnuPos(); //позиционируем элемент по дефолту
		}
	});


	// Секция цен, вкладки
	$(".wrapper .tab").click(function(){
		$(".wrapper .tab").removeClass("active");
		$(this).addClass("active");
		$(".tab_item").hide().eq($(this).parent().index()).fadeIn();
	}).eq(0).addClass("active");

	// Карусель
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items:1,
		autoplay:false,
		rewind:false,
		loop:false,
		center:true,
		touchDrag: true,
		mouseDrag: true,
		margin:10,
		URLhashListener:true,
		startPosition: 'URLHash',
		nav: false,
		smartSpeed: 700,
		onDragged: function changeDescr(){
			$(".s_portfolio .overlay").animate({left: "0"},500,function(){
			$(".s_portfolio .descr").removeClass("active").hide();
			$(".s_portfolio .descr").eq($(".s_portfolio .owl-item.active").index()).fadeIn();
		}).delay(400).animate({left: "-100px"});
		}
	});
//Активная категория карусели
	$(".category_btns a").click(function(){
		$(".category_btns a").removeClass("active");
		$(this). addClass("active");
	})
//Описания итемов
	$(".s_portfolio .owl-dot, .p_btn").click(function(){
		$(".s_portfolio .overlay").animate({left: "0"},500,function(){
			$(".s_portfolio .descr").removeClass("active").hide();
			$(".s_portfolio .descr").eq($(".s_portfolio .owl-item.active").index()).fadeIn();
		}).delay(400).animate({left: "-100px"});
	})




	$(".logo_top").animated("fadeIn");
	$("h1, h4").animated("fadeInUp");
	$(".mnu .item:nth-child(1)").animated("fadeInLeftBig");
	$(".mnu .item:nth-child(2)").animated("fadeInUp");
	$(".mnu .item:nth-child(3)").animated("fadeInRightBig");
	$(".s_costs h2").animated("fadeInUp");
	$(".s_costs .tab").animated("fadeIn");
	$(".s_costs .tab_content").animated("fadeIn");
	$(".s_about h2").animated("fadeIn");
	$(".s_about .about_item .col-sm-2").animated("slideInLeft");
	$(".s_about .about_item .col-sm-6").animated("slideInRight");
	$(".s_portfolio h2").animated("fadeInUp");
	$(".s_portfolio .container-fluid").animated("fadeInUp");


    (function($){
        $(window).on("load",function(){
            $("a[rel='m_PageScroll2id']").mPageScroll2id();
        });
    })(jQuery);

    $('.popup-with-move-anim').magnificPopup({
    	type: 'inline',

    	fixedContentPos: false,
    	fixedBgPos: true,

    	overflowY: 'auto',

    	closeBtnInside: true,
    	preloader: false,

    	midClick: true,
    	removalDelay: 300,
    	mainClass: 'my-mfp-slide-bottom'
    });

  // Проверка заполнения формы
  $(".callback .button").click(function(){
  	if ($(".callback .email").val() == ''){
  		$(".callback .answer").text("Введите e-mail");
  	}
  	else{
  		$(".callback .answer").text("Заявка успешно отправлена, благодарю Вас! Ответ поступит на Вашу почту либо телефон").css("font-weight", "bold").css("color", "#27e49a");
  	}
  })
  $(".question .button").click(function(){
  	if ($(".question .email").val() == ''){
  		$(".question .answer").text("Введите e-mail")
  	}
  	else{
  		$(".question .answer").text("Ваш вопрос успешно отправлен, ответ придет на указанный e-mail").css("font-weight", "bold").css("color", "#27e49a");
  	}
  })
  $(".call .button").click(function(){
  	if ($(".call .email").val() == ''){
  		$(".call .answer").text("Введите номер")
  	}
  	else{
  		$(".call .answer").text("Спасибо, я свяжусь с Вами в ближайшее время.").css("font-weight", "bold").css("color", "#27e49a");
  	}
  })

  $(".popup-with-move-anim").click(function(){
  	$(".zoom-anim-dialog input").each(function(){
  		if($("this").attr("type")!="button"){
  			$("this").val("");
  		}
  	})
  	$(".zoom-anim-dialog textarea").val("");
  	$(".answer").text("").css("font-weight", "normal").css("color", "red")
  })

	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
})