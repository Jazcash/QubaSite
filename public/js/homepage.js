if (isHomepage){
	// chevron to animate to next panel
	$(".scroll").on("click", function() {
	    $("body").animate({
	        scrollTop: $(".block--hp-current-clients").offset().top
	    }, 2000);
	});

	/* load videos on desktop only */
	$(window).load(function(){
		if (isMobile){
			$(".block--hp-first").css("background-image", "url('/img/sections/agility-frame.jpg')")
			$(".block--hp-commercial-ability").css("background-image", "url('/img/sections/commercial-frame.jpg')")
		} else {
			$("#agility-video source").eq(0).attr("src", "/video/agility.mp4");
			$("#agility-video").eq(0).load();

			$("#commercial-video source").eq(0).attr("src", "/video/commercial.mp4");
			$("#commercial-video").eq(0).load();
		}
	});

	/* dexterity frames */
	for (var i=1; i<72; i++){
		$("#frames").append("<li class='frame' style='display: none; background-image: url(\"/img/frames/"+i+".jpg\");''/>")
	}

	$(".frame").hide();

	$(window).load(function(){
		var $dexterity = $(".block--hp-dexterity");
		var dexterityHeight = $dexterity.outerHeight();
		var dexTop = $dexterity.offset().top;
		var dexBottom = dexTop + dexterityHeight;
		var increment = ($dexterity.outerHeight() * 2) / 72;

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

	/* parallax */
	var $content = $(".block--hp-our-work");
	var $contentAbove = $(".block--hp-dexterity");
	var $ourClients = $(".block--hp-current-clients");
	var $overlay = $(".overlay");
	var $underlay = $(".underlay");
	var $work = $(".work");

	function updateParallax(currentScroll){
		if ($content.length) {
			$work.css("padding-top", $("header").outerHeight());
		    $content.height($overlay.outerHeight() + $underlay.height() + $("header").height(), 500);

		    if (($overlay.offset().top <= (currentScroll + $contentAbove.outerHeight())) &&
		        !($underlay.offset().top + $underlay.outerHeight() <= (currentScroll))) {
		        $underlay.addClass('show');
		    	$ourClients.css("z-index", "-10");
		    } else {
		        $underlay.removeClass('show');
		    };

		    if (!(($overlay.offset().top + $overlay.find('img').outerHeight()) >= (currentScroll))) {
		        $underlay.addClass('return-scroll');
		        $underlay.addClass('show');
		    } else {
		        $underlay.removeClass('return-scroll');
		        $ourClients.css("z-index", "0");
		    };
		}
	}

	$(window).load(function(){
		updateParallax($(this).scrollTop());

		$(window).on('scroll touchmove', function(event){
			updateParallax($(this).scrollTop());
		});
	});
}
