function SlowScrol(id, slowing = 2000){
	let offset = 50;
  $('html, body').animate ({
    scrollTop: $(id).offset().top
  }, slowing);
  return  false;
};

(function(){
	// страница "Услуги"
	$('.btn-arrow-up').on('click', function(){
		SlowScrol('.header');
	});
	$('.arrow-down-red-while-wrapper').on('click', function(){
		SlowScrol('.scroll', 1000);
	});	
	// END страница "Услуги"

})();