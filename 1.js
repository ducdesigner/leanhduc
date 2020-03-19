 $(function(){
 	
 	$hieuung = $('.noidung').isotope({
	  	// options
	  	itemSelector: '.khoianh',
	  	layoutMode: 'masonry'
	});

	$hieuung.imagesLoaded().progress( function() {
  		$hieuung.isotope('layout');
  	});
})  
 