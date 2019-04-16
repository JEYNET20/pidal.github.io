// Меню
(function(){
	// меню категорий
	let mainMenuItem = document.querySelectorAll('.nav--main .main-menu__item');
	let onMainMenuItemClick = function(e){
		e.preventDefault();
		this.removeEventListener('click', onMainMenuItemClick);
		let x = this;
		let menu = this.childNodes[3];

		anime({
		  targets: menu,
		  opacity: '1' ,
		  easing: 'easeInQuad',
		  duration: 400
		  // direction: 'alternate',
		  // loop: true
		});

		menu.classList.remove('d-none');

		this.onmouseleave = function(){
			setTimeout(function(){
				menu.classList.add('d-none');
				x.addEventListener('click', onMainMenuItemClick);				
			},800);
			anime({
			  targets: menu,
			  opacity: '0' ,
			  easing: 'easeOutQuad',
			  duration: 400
			  // direction: 'alternate',
			  // loop: true
			});			
		}
	};

	for(var i = 0; i < mainMenuItem.length; i++){
		mainMenuItem[i].addEventListener('click', onMainMenuItemClick);
	}
	// !! меню категорий

	// меню бургер
	let btnBar = document.querySelector('.btn-bar');
	let onBtnBarClick = function(e){
		let x = this;
		e.preventDefault();
		x.removeEventListener('click', onBtnBarClick);
		let navBar = document.querySelector('.nav--bar');
		navBar.classList.remove('d-none');
		this.style.opacity = '0';

		anime({
		  targets: navBar,
		  opacity: '1' ,
		  easing: 'easeInQuad',
		  duration: 400
		  // direction: 'alternate',
		  // loop: true
		});

		navBar.onmouseleave = function(){
			setTimeout(function(){
				navBar.classList.add('d-none');
				x.addEventListener('click', onBtnBarClick);
			},800);
			x.style.opacity = '1';
			anime({
			  targets: navBar,
			  opacity: '0' ,
			  easing: 'easeOutQuad',
			  duration: 400
			  // direction: 'alternate',
			  // loop: true
			});			
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
		anime({
		  targets: list,
		  opacity: '1' ,
		  easing: 'easeInQuad',
		  duration: 400
		});

		list.onmouseleave = function(){
			x.style.backgroundColor = '#2c2c2c';
			setTimeout(function(){
				list.classList.add('d-none');
			},800);
			anime({
			  targets: list,
			  opacity: '0' ,
			  easing: 'easeOutQuad',
			  duration: 400
			});			
		}
	};

	signNavigationBtn.addEventListener('click', onSignNavigationBtnClick);
	// !! меню навигации


})();