var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));

/*
	LOAD VIDEOS ON DESKTOP ONLY - START
*/
$(function(){
	if (isMobile){
		$(".block--hp-first").css("background-image", "url('/img/agility-frame.jpg')")
		$(".block--hp-commercial-ability").css("background-image", "url('/img/commercial-frame.jpg')")
	} else {
		$("#agility-video source").eq(0).attr("src", "/video/agility.mp4");
		$("#agility-video").eq(0).load();

		$("#commercial-video source").eq(0).attr("src", "/video/commercial.mp4");
		$("#commercial-video").eq(0).load();
	}
});
/*
	LOAD VIDEOS ON DESKTOP ONLY - END
*/

/*
	DEXTERITY FRAMES - START
*/
$(document).ready(function(){
	for (var i=1; i<72; i++){
		$("#frames").append("<li class='frame' style='display: none; background-image: url(\"/img/frames/"+i+".jpg\");''/>")
	}

	$(".frame").hide();
});

$(window).load(function(){
	var dexterityHeight = $(".block--hp-dexterity").outerHeight();
	var dexTop = $(".block--hp-dexterity").offset().top;
	var dexBottom = dexTop + dexterityHeight;
	var increment = ($(".block--hp-dexterity").outerHeight() * 2) / 72;

	function switchFrame(frame) {
		$('.frame').hide();
		$('.frame').eq(frame).show();
	}

	function updateFrame(){
		var scrollPosTop = $(window).scrollTop();
		var scrollPosBottom = $(window).scrollTop() + dexterityHeight;

		if (scrollPosBottom > dexTop && scrollPosTop < dexBottom){
			var relativePos = Math.floor(scrollPosBottom - dexTop);
			var frame = Math.floor(relativePos / increment);
			switchFrame(frame);
		}
	}

    $(window).on('scroll touchmove', function(event) {
    	updateFrame();
    });

    updateFrame();
});
/*
	DEXTERITY FRAMES - END
*/

/*
	OUR WORK OVERLAY/UNDERLAY - START
*/
var $content = $(".block--hp-our-work");
var $contentAbove = $(".block--hp-dexterity");
var $overlay = $(".overlay");
var $underlay = $(".underlay");

function updateParallax(currentScroll){
	if ($content.length) {
	    $content.height($overlay.outerHeight() + $underlay.height(), 500);

	    if (($overlay.offset().top <= (currentScroll + $contentAbove.outerHeight())) &&
	        !($underlay.offset().top + $underlay.outerHeight() <= (currentScroll))) {
	        $underlay.addClass('show');
	    } else {
	        $underlay.removeClass('show');
	    };

	    if (!(($overlay.offset().top + $overlay.find('img').outerHeight()) >= (currentScroll))) {
	        $underlay.addClass('return-scroll');
	        $underlay.addClass('show');
	    } else {
	        $underlay.removeClass('return-scroll');
	    };
	}
}

$(window).load(function(){
	updateParallax($(this).scrollTop());
	$(".block--hp-our-partners").css("display", "flex");

	$(window).on('scroll touchmove', function(event){
		updateParallax($(this).scrollTop());
	});
});
/*
	OUR WORK OVERLAY/UNDERLAY - END
*/
