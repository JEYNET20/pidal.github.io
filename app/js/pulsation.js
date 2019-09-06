(function(){
	const	item1 = document.querySelectorAll('.about-us__mapa-item');
	
	function startPuls(elem) {

		var items = this.querySelectorAll('i');
		let item1 = items[0];
		let item2 = items[1];

		anime({
      targets: item1,
      borderColor: 'rgba(255, 69, 69, 1)',
      scale: 1.3,
 			duration: 700,
 			easing: 'easeInOutQuad',
      direction: 'alternate',
      // loop: true,
		});

		anime({
      targets: item2,
      borderColor: 'rgba(255, 69, 69, 1)',
      scale: 1.1,
 			duration: 700,
 			easing: 'easeInOutQuad',
      direction: 'alternate',
      // loop: true,
		});

	}; 

	item1.forEach(function(v){
		v.addEventListener('mouseenter', startPuls);
	});

})();