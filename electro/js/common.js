$(function() {

$('.slider_top').slick({
	dots: true
});

$(".slider_bottom").slick({
  slidesToShow: 4,
  infinite: false,
  nextArrow: '<i class="fas fa-angle-right"></i>',
  prevArrow: '<i class="fas fa-angle-left"></i>'
})
});
