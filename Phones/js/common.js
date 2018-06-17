$(function() {
$("header .left .ico").click(function(){
	if ($(window).width()<768){
		$(".mnu").fadeToggle();
	}
	else{
		$(".mnu").css("display", "inline-block")
	}
	
})
$(window).resize(function(){
	if ($(window).width()>768){
		$(".mnu").css("display", "inline-block");
	}
	else{
		$(".mnu").fadeOut();
	}
})


$('.slick').slick({
  centerMode: true,
  initialSlide: 2,
  variableWidth: true,
  infinite: false,
  centerPadding: '60px',
  slidesToShow: 3,
  swipeToSlide: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.items').slick({
  centerMode: true,
  initialSlide: 1,
  variableWidth: true,
  infinite: false,
  centerPadding: '60px',
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.items').on('swipe', function(event, slick, direction){
	$(".s5 .tab").hide();
	var currentSlide = $('.items').slick('slickCurrentSlide');
	$(".s5 .tab").eq(currentSlide).fadeIn();
});

$(".wrapper .tab").click(function(){
	$(".wrapper .tab").removeClass("active");
	$(this).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn();
	$(".tab_item").eq($(this).index()+2).fadeIn();
}).eq(0).addClass("active");
(function($){
    $(window).on("load",function(){
      $("a[rel='m_PageScroll2id']").mPageScroll2id();
    });
  })(jQuery);
});
