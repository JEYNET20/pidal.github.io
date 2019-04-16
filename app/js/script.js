// Меню
(function(){
	let mainMenuItem = document.querySelectorAll('.nav--main .main-menu__item');

	// меню категорий
	let onMainMenuItemClick = function(){
		let menu = this.childNodes[3];

		menu.classList.remove('d-none');
		menu.classList.add('fadeIn');
		menu.classList.remove('fadeOut');		

		this.onmouseleave = function(){
			setTimeout(function(){
				menu.classList.add('d-none');
			},800);

			menu.classList.remove('fadeIn');
			menu.classList.add('fadeOut');
		}

	};

	for(var i = 0; i < mainMenuItem.length; i++){
		mainMenuItem[i].addEventListener('click', onMainMenuItemClick);
	}
	// !! меню категорий

	// меню бургер
	let btnBar = document.querySelector('.btn-bar');

	let onBtnBarClick = function(e){
		e.preventDefault();
		let navBar = document.querySelector('.nav--bar');
		navBar.classList.remove('d-none');
		navBar.classList.add('fadeIn');
		navBar.classList.remove('fadeOut');		

		navBar.onmouseleave = function(){
			setTimeout(function(){
				navBar.classList.add('d-none');
			},800);

			this.classList.remove('fadeIn');
			this.classList.add('fadeOut');
		}
	};

	btnBar.addEventListener('click', onBtnBarClick);
	// !! меню бургер

	// меню навигации
	let signNavigationBtn = document.querySelector('.sign-navigation');

	let onSignNavigationBtnClick = function(e){
		e.preventDefault();
		let x = this;
		let list = this.childNodes[5];
		this.style.backgroundColor = '#343434';
		list.classList.remove('d-none');
		list.classList.add('fadeIn');
		list.classList.remove('fadeOut');

		list.onmouseleave = function(){
			x.style.backgroundColor = '#2c2c2c';
			setTimeout(function(){
				list.classList.add('d-none');
			},800);

			this.classList.remove('fadeIn');
			this.classList.add('fadeOut');
		}
	};

	signNavigationBtn.addEventListener('click', onSignNavigationBtnClick);
	// !! меню навигации


})();