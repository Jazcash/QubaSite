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
$(function(){
	$('.hp-our-work').height($('.overlay').outerHeight() + $('.underlay').height(), 500);
});

$(window).load(function(){
	$(window).on('scroll touchmove', function(event){
		var currentScroll = $(this).scrollTop();

		if ($('.hp-our-work').length) {
		    $('.hp-our-work').height($('.overlay').outerHeight() + $('.underlay').height(), 500);

		    if (($('.overlay').offset().top <= (currentScroll + $(".block--hp-dexterity").outerHeight())) &&
		        !($('.block--hp-our-partners').offset().top <= (currentScroll))) {
		        $('.underlay').addClass('show');
		    } else {
		        $('.underlay').removeClass('show');
		    };

		    var _overlay = $('.overlay');

		    if (!(($('.overlay').offset().top + _overlay.find('img').outerHeight()) >= (currentScroll))) {
		        $('.underlay').addClass('return-scroll');
		        $('.underlay').addClass('show');
		    } else {
		        $('.underlay').removeClass('return-scroll');
		    };
		}
	});
});
/*
	OUR WORK OVERLAY/UNDERLAY - END
*/
