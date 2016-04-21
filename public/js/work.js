if (isWork){
	// work page grid
	$(window).load(function(){
		$('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		});
		$('.grid').masonry("layout");
	});
}
