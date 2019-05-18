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

// коунтер ( проценты для заполненого блока )
(function(){

	// Для другиг параметров
	// Нихрена не получылось доробы обезательно
	const body = document.querySelector('.other-parameters .counter-completed span');
	
	const item = document.querySelectorAll('.acardion input');

	function test(){
		body.textContent = +body.textContent + 10;

		this.removeEventListener('click', test);
		this.addEventListener('click', test2);
	};

	function test2(){

	};

	item.forEach(function(v){
		v.addEventListener('change', test);
	});

})();