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
		});

		menu.classList.remove('d-none');

		this.onmouseleave = function(){
			setTimeout(function(){
				menu.classList.add('d-none');
				x.addEventListener('click', onMainMenuItemClick);				
			},400);
			anime({
			  targets: menu,
			  opacity: '0' ,
			  easing: 'easeOutQuad',
			  duration: 400
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
		});

		navBar.onmouseleave = function(){
			setTimeout(function(){
				navBar.classList.add('d-none');
				x.addEventListener('click', onBtnBarClick);
			},400);
			x.style.opacity = '1';
			anime({
			  targets: navBar,
			  opacity: '0' ,
			  easing: 'easeOutQuad',
			  duration: 400
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
			},400);
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

// блок выбора города "главная 1 блок"
(function(){
	let changeCountBtn = document.querySelector('.change-count');
	let exhitBtn = document.querySelectorAll('.map-block__other-city');
	let mapBlockLvl2 = document.querySelectorAll('.map-block__other-city--level-1 a');

	let onChangeCountBtnClick = function(e){
		e.preventDefault();
		console.log(this);
		let mapBlockLvl1 = document.querySelector('.map-block__other-city--level-1');
		mapBlockLvl1.classList.remove('d-none');
		anime({
		  targets: mapBlockLvl1,
		  opacity: '1',
		  easing: 'easeInQuad',
		  duration: 400
		});
	};

	let onExitBtnClick = function(){
		let mapBlockLvl1 = document.querySelector('.map-block__other-city--level-1');
		setTimeout(function(){
			mapBlockLvl1.classList.add('d-none');
		},400);
		anime({
		  targets: mapBlockLvl1,
		  opacity: '0',
		  easing: 'easeOutQuad',
		  duration: 400
		});

		// let mapBlockLvl2 = document.querySelector('.map-block__other-city--level-2');
		// setTimeout(function(){
		// 	mapBlockLvl2.classList.add('d-none');
		// },400);
		// anime({
		//   targets: mapBlockLvl2,
		//   opacity: '0',
		//   easing: 'easeOutQuad',
		//   duration: 400
		// });		
	};

	let onMapBlockLvl2 = function(e){
		e.preventDefault();
		console.log(this);
		let mapBlockLvl1 = document.querySelector('.map-block__other-city--level-1');
		setTimeout(function(){
			mapBlockLvl1.classList.add('d-none');
		},400);
		anime({
		  targets: mapBlockLvl1,
		  opacity: '0',
		  easing: 'easeOutQuad',
		  duration: 400
		});

		let mapBlockLvl2 = document.querySelector('.map-block__other-city--level-2');
		mapBlockLvl2.classList.remove('d-none');
		anime({
		  targets: mapBlockLvl2,
		  opacity: '1',
		  easing: 'easeInQuad',
		  duration: 400
		});
	};

	changeCountBtn.addEventListener('click', onChangeCountBtnClick);

	for(let i = 0; i < exhitBtn.length; i++){
	exhitBtn[i].addEventListener('click', onExitBtnClick);
	}

	for(let i = 0; i < mapBlockLvl2.length; i++){
		mapBlockLvl2[i].addEventListener('click', onMapBlockLvl2);
	}
})();