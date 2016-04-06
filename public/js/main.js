$(document).ready(function(){
	// Dexterity frames
	for (var i=1; i<72; i++){
		$("#frames").append("<li class='frame' style='display: none; background-image: url(\"/img/frames/"+i+".jpg\");''/>")
	}

	$(".frame").hide();
});

$(window).load(function(){
	// Dexterity frames
	function switchFrame(frame) {
	    $('.frame').hide();
	    $('.frame').eq(frame).show();
	}

	function updateFrame(){
		var scrollPosTop = $(this).scrollTop();
		var scrollPosBottom = $(this).scrollTop() + $(window).outerHeight();

		if (scrollPosBottom > dexTop && scrollPosTop < dexBottom){
			var relativePos = Math.floor(scrollPosBottom - dexTop);
			var frame = Math.floor(relativePos / increment);
			switchFrame(frame);
		}
	}

	var dexterityHeight = $(".block--hp-dexterity").outerHeight();
    var dexTop = $(".block--hp-dexterity").offset().top;
    var dexBottom = dexTop + dexterityHeight;
    var increment = ($(".block--hp-dexterity").outerHeight() * 2) / 72;

    $(window).on('scroll touchmove',function  (event) {
    	updateFrame();
    });

    updateFrame();
});
