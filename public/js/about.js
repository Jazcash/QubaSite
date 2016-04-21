if (isAbout){
	// Take a tour video
	$("#youtubePlayer").hide();

	if ($("#youtubePlayer").length > 0) {
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		// Replace the 'ytplayer' element with an <iframe> and
		// YouTube player after the API code downloads.
		var player;
		function onYouTubePlayerAPIReady() {
			player = new YT.Player('youtubePlayer', {
				videoId: 'Mpa6K6iR5Eo',
				playerVars: { "showinfo": 0, "controls": 0, "autoplay": 0, "modestbranding": 1, "playsinline": 0, "rel": 0 },
			});
		}
	}

	$("#take-a-tour").on("click", function () {
		$("#youtubePlayer").fadeIn();
		if (!(/iPad|iPhone|iPod/.test(navigator.platform))) {
			player.playVideo();
		}
		$("#closePlayer").show();
	});

	$("#closePlayer").on("click", function() {
		player.pauseVideo();
		$("#youtubePlayer").fadeOut();
		$(this).hide();
	});
}
