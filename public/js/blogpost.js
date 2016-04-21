if (isBlogpost){
	// blog post meta sticky
	if ($(".block--blogpost-meta").length > 0){
		if ($(window).width() > 749){
			$(".block--blogpost-meta").sticky({
				topSpacing: 125,
				bottomSpacing: $(document).height() - $(".block--blogpost-content").children().last().offset().top - $(".block--blogpost-content").children().last().outerHeight()
			});
		}
	}

	// estimated time to read for blog articles
	var wordcount = $(".block--blogpost-content").text().split(" ").length;
	$(".wordcount").text(wordcount);
	$(".esttime").text(Math.round(wordcount / 200));
}
