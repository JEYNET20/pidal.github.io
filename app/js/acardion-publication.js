// Акардион для публикаций
(function(){
	const btn = document.querySelectorAll('.acardion .title');

	function onBtnOpenClick(e){
		e.preventDefault();

		let arrow = this.querySelector('.icon-arrow-down');
		arrow.classList.add('icon-arrow-down--active');

		let body = this.nextElementSibling;

		body.classList.add('body--active');

		this.removeEventListener('click', onBtnOpenClick);
		this.addEventListener('click', onBtnCloseClick);
	};

	function onBtnCloseClick(e){
		e.preventDefault();

		let arrow = this.querySelector('.icon-arrow-down');
		arrow.classList.remove('icon-arrow-down--active');

		let body = this.nextElementSibling;

		body.classList.remove('body--active');

		this.addEventListener('click', onBtnOpenClick);
		this.removeEventListener('click', onBtnCloseClick);
	};

	if(!btn) return false;
	btn.forEach(function(v){
		v.addEventListener('click', onBtnOpenClick);
	});
})();

// считаем сколько чекбоксов или инпутов выбрано в акардион title
(function(){

	const checkbox = document.querySelectorAll('.checkbox-wrapper input');

	function onCheckBoxAddClick(e){
		let x = this.parentNode.parentNode.parentNode.parentNode;
		let y = x.querySelector('.option-counter');
		y.textContent = +y.textContent + 1;
	
		this.removeEventListener('click', onCheckBoxAddClick);
		this.addEventListener('click', onCheckBoxRemoveClick);
	};

	function onCheckBoxRemoveClick(e){
		let x = this.parentNode.parentNode.parentNode.parentNode;
		let y = x.querySelector('.option-counter');
		y.textContent = +y.textContent - 1;
	
		this.addEventListener('click', onCheckBoxAddClick);
		this.removeEventListener('click', onCheckBoxRemoveClick);
	}



	checkbox.forEach(function(v){
		v.addEventListener('click', onCheckBoxAddClick);
	});
})();

// Дополнительные параметры кнопка роскрыть/закрыть все
(function(){
	const btn = document.querySelector('.other-parameters .title button')

	function onBtnOpenClick(e){
		e.preventDefault();

		let arrow = this.querySelector('.icon-white-arrow');
		arrow.classList.add('icon--active');

		let arrows = this.parentNode.parentNode.querySelectorAll('.icon-arrow-down');
		arrows.forEach(function(v){
			v.classList.add('icon-arrow-down--active');		
		});

		let parent = this.parentNode.parentNode;
		let items = parent.querySelectorAll('.acardion .body');

		items.forEach(function(v){
			v.classList.add('body--active');
		});

		this.removeEventListener('click', onBtnOpenClick);
		this.addEventListener('click', onBtnCloseClick);
	};

	function onBtnCloseClick(e){
		e.preventDefault();

		let arrow = this.querySelector('.icon-white-arrow');
		arrow.classList.remove('icon--active');

		let arrows = this.parentNode.parentNode.querySelectorAll('.icon-arrow-down');
		arrows.forEach(function(v){
			v.classList.remove('icon-arrow-down--active');		
		});

		let parent = this.parentNode.parentNode;
		let items = parent.querySelectorAll('.acardion .body');

		items.forEach(function(v){
			v.classList.remove('body--active');
		});

		this.addEventListener('click', onBtnOpenClick);
		this.removeEventListener('click', onBtnCloseClick);		
	}

	btn.addEventListener('click', onBtnOpenClick);
})();

// коунтер ( проценты для блока Основные параметры авто inputs )
(function(){

	const basicParamCounter = 
		document.querySelector('.main-parameters__block .counter-completed span'),
				items = document.querySelectorAll('.main-parameters__block .items');

	function onItemsAddClick() {
		let x = this.querySelectorAll('.list__item');

		x.forEach(function(v) {
			v.addEventListener('click', plus);
		})

		this.removeEventListener('click', onItemsAddClick);
	};

	function plus() {
		basicParamCounter.textContent = +basicParamCounter.textContent + 8;
		
		let x = this.parentNode;
		let y = x.querySelectorAll('.list__item');

		y.forEach(function(v){
			v.removeEventListener('click', plus);
		})
	};

	items.forEach(function(v) {
		v.addEventListener('click', onItemsAddClick);
	})

})();

// коунтер ( проценты для блока Основные параметры авто chexbox )
(function(){
	const amount = document.querySelector('.main-parameters .acardion .title .end span'),
				basicParamCounter = document.querySelector('.main-parameters__block .counter-completed span'),
				btn = document.querySelectorAll('.main-parameters .checkbox-wrapper');

	let b = false;
	
	function onBtnClick() {

		if(+amount.textContent >= 1 && !b) {
			basicParamCounter.textContent = +basicParamCounter.textContent + 12;
			b = true;
		} else if (+amount.textContent == 0 && b){
			basicParamCounter.textContent = +basicParamCounter.textContent - 12;
			b = false;
		}

	};

	btn.forEach(function(v) {
		v.addEventListener('click', onBtnClick);
	});
})();

// коунтер ( проценты для блока Дополнительные параметры chexbox )
(function(){
	const amounts = document.querySelectorAll('.other-parameters .option-counter'),
				basicParamCounter = document.querySelector('.other-parameters .counter-completed span'),
				btn = document.querySelectorAll('.other-parameters .checkbox-wrapper');

	let b = false;

	// console.log(amounts);

	function onBtnClick() {
		let x = 0;
		for(let i = 0; i < amounts.length; i++){
			// x = amounts.reduce
		}
	};

	btn.forEach(function(v) {
		v.addEventListener('click', onBtnClick);
	});
})();