$(function() {
function wResize(){ //делает header во весь экран при любом разрешении
	$("header").css("min-height", $(window).height());
	$("header .overlay").css("min-height", $(window).height());
};
wResize();
$(window).resize(function(){
	wResize();
})

});
