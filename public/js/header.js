// slim header when scroll down
$(window).on('scroll touchmove', function(event) {
	var currentScroll = $(window).scrollTop();
	(currentScroll > 50) ? $("header").addClass("slim") : $("header").removeClass("slim");
});

// make content take header height into account
$(".block").eq(0).css("padding-top", $("header").outerHeight());
$(window).resize(function(){
	$(".block").eq(0).css("padding-top", $("header").outerHeight());
});

// highlight current page in nav
var pageName = window.location.pathname;
$("header li a").each(function(element){
	if ($(this).attr("href") == pageName)
		$(this).addClass("active");
});

/* fade content in on scroll */
$(window).on('scroll touchmove', function(event) {
	$(".hideUntilScroll").each(function(i){
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
            $(this).addClass("fadeInLeft");
        }
	});
});

// burger menu
$(".burger").click(function(){
	$(".menu").addClass("open");
	$(".menu li").each(function(i, element){
		setTimeout(function(){
			$(element).addClass("fadeInLeft");
		}, i * 100);
	});
	$(".burger").fadeOut(30);
});

$(".fa-times").click(function(){
	$(".menu").removeClass("open");
	$(".menu li").each(function(i, element){
		$(element).removeClass("fadeInLeft");
	});
	$(".burger").fadeIn(30);
});
