(function(){
	const sliderItem1 = document.querySelectorAll('.my-slider--1 .slider-pagination__item'),
				sliderBody1 = document.querySelectorAll('.my-slider--1 .slider-item');

	const sliderItem2 = document.querySelectorAll('.my-slider--2 .slider-pagination__item'),
				sliderBody2 = document.querySelectorAll('.my-slider--2 .slider-item');

	const sliderItem3 = document.querySelectorAll('.my-slider--3 .slider-pagination__item'),
				sliderBody3 = document.querySelectorAll('.my-slider--3 .slider-item');

	const sliderItem4 = document.querySelectorAll('.my-slider--4 .slider-pagination__item'),
				sliderBody4 = document.querySelectorAll('.my-slider--4 .slider-item');


	function onSliderItem1(e){
		// console.log(this);
		
		sliderItem1.forEach(function(v){
			v.classList.remove('slider-pagination__item--active');
		});

		this.classList.add('slider-pagination__item--active');

		sliderBody1.forEach(function(v){
			v.classList.add('d-none');
		});

		if(this.classList.contains('slider-pagination__item--1')){
			sliderBody1[0].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--2')){
			sliderBody1[1].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--3')){
			sliderBody1[2].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--4')){
			sliderBody1[3].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--5')){
			sliderBody1[4].classList.remove('d-none');
		}
	};

	function onSliderItem2(e){
		sliderItem2.forEach(function(v){
			v.classList.remove('slider-pagination__item--active');
		});

		this.classList.add('slider-pagination__item--active');

		sliderBody2.forEach(function(v){
			v.classList.add('d-none');
		});

		if(this.classList.contains('slider-pagination__item--1')){
			sliderBody2[0].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--2')){
			sliderBody2[1].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--3')){
			sliderBody2[2].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--4')){
			sliderBody2[3].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--5')){
			sliderBody2[4].classList.remove('d-none');
		}
	};

	function onSliderItem3(e){
		// console.log(this);
		
		sliderItem3.forEach(function(v){
			v.classList.remove('slider-pagination__item--active');
		});

		this.classList.add('slider-pagination__item--active');

		sliderBody3.forEach(function(v){
			v.classList.add('d-none');
		});

		if(this.classList.contains('slider-pagination__item--1')){
			sliderBody3[0].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--2')){
			sliderBody3[1].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--3')){
			sliderBody3[2].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--4')){
			sliderBody3[3].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--5')){
			sliderBody3[4].classList.remove('d-none');
		}
	};

	function onSliderItem4(e){
		// console.log(this);
		
		sliderItem4.forEach(function(v){
			v.classList.remove('slider-pagination__item--active');
		});

		this.classList.add('slider-pagination__item--active');

		sliderBody4.forEach(function(v){
			v.classList.add('d-none');
		});

		if(this.classList.contains('slider-pagination__item--1')){
			sliderBody4[0].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--2')){
			sliderBody4[1].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--3')){
			sliderBody4[2].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--4')){
			sliderBody4[3].classList.remove('d-none');
		} else if(this.classList.contains('slider-pagination__item--5')){
			sliderBody4[4].classList.remove('d-none');
		}
	};

	sliderItem1.forEach(function(v){
		v.addEventListener('mouseover', onSliderItem1);
	});
	sliderItem2.forEach(function(v){
		v.addEventListener('mouseover', onSliderItem2);
	});
	sliderItem3.forEach(function(v){
		v.addEventListener('mouseover', onSliderItem3);
	});
	sliderItem4.forEach(function(v){
		v.addEventListener('mouseover', onSliderItem4);
	});

})();