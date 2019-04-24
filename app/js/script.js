// public (всяки мелочи)
(function(){
	// form
	let exitFormBtn = document.querySelectorAll('.icon-form-exit');
	let form = document.querySelectorAll('.popup-def');
	const BG = document.querySelector('.popup-bg');

	let onExitFormBtn = function(e){
		e.preventDefault();
		if(BG) BG.classList.add('d-none');
		for(let i = 0; i < form.length; i++)
			if(form[i]) form[i].classList.add('d-none');
	};

	exitFormBtn.forEach(function(value){
		if(value) value.addEventListener('click', onExitFormBtn);
	});
	
	// END_form
})();

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
	let logo = document.querySelector('.logo');
	let onBtnBarClick = function(e){
		let x = this;
		e.preventDefault();
		x.removeEventListener('click', onBtnBarClick);
		let navBar = document.querySelector('.nav--bar');
		navBar.classList.remove('d-none');
		this.style.opacity = '0';

		anime({
		  targets: logo,
		  left: '-29px' ,
		  easing: 'easeInQuad',
		  duration: 400
		});		

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
			  targets: logo,
			  left: '0' ,
			  easing: 'easeOutQuad',
			  duration: 400
			});				
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
	let signNavigationBtn = document.querySelector('.btn-sign-navigation');
	let onSignNavigationBtnClick = function(e){
		e.preventDefault();
		let x = this;
		// let list = this.childNodes[5];
		let list = this.nextSibling.nextSibling;
		console.log(list);
		// this.style.backgroundColor = '#343434';
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

	if(signNavigationBtn) signNavigationBtn.addEventListener('click', onSignNavigationBtnClick);
	// !! меню навигации
})();

// блок выбора города "главная 1 блок"
(function(){
	let changeCountBtn = document.querySelector('.change-count');
	let exhitBtn = document.querySelectorAll('.map-block__other-city .icon-exit-chrest');
	let mapBlockLvl2 = document.querySelectorAll('.map-block__other-city--level-1 a');
	let prevBtn = document.querySelector('.change-conut--prev');

	let onChangeCountBtnClick = function(e){
		e.preventDefault();
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
		let mapBlock = this.parentNode.parentNode.parentNode;

		setTimeout(function(){
			mapBlock.classList.add('d-none');
		},400);
		anime({
		  targets: mapBlock,
		  opacity: '0',
		  easing: 'easeOutQuad',
		  duration: 400
		});		
	};

	let onMapBlockLvl2 = function(e){
		e.preventDefault();
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

	let onPrevBtnClick = function(e){
		e.preventDefault();
		let mapBlock2 = this.parentNode.parentNode.parentNode;

		let mapBlockLvl1 = mapBlock2.previousSibling.previousSibling;

		setTimeout(function(){
			mapBlock2.classList.add('d-none');
		},400);
		anime({
		  targets: mapBlock2,
		  opacity: '0',
		  easing: 'easeOutQuad',
		  duration: 400
		});

		mapBlockLvl1.classList.remove('d-none');
		anime({
		  targets: mapBlockLvl1,
		  opacity: '1',
		  easing: 'easeInQuad',
		  duration: 400
		});
	};

	if(changeCountBtn) changeCountBtn.addEventListener('click', onChangeCountBtnClick);
	if(prevBtn) prevBtn.addEventListener('click', onPrevBtnClick);

	exhitBtn.forEach(function(value){
		if(value) value.addEventListener('click', onExitBtnClick);
	});

	mapBlockLvl2.forEach(function(value){
		if(value) value.addEventListener('click', onMapBlockLvl2);
	});
})();

// Добавить в избранные / удалить "главная"
(function(){
	let btn = document.querySelectorAll('.icon-star--red');

	let onBtnClick = function(e){
		e.preventDefault();
		if(this.classList.contains('icon-star--red-full')){
			this.classList.remove('icon-star--red-full');
		}else{
			this.classList.add('icon-star--red-full');
		}

	};

	btn.forEach(function(value){
		value.addEventListener('click', onBtnClick);
	});
})();

// Добавить удалить марку новые авто
(function(){
	let btnNew = document.querySelector('.new-mark a');
	let mark = document.querySelectorAll('.new-auto');
	let markFixed = document.querySelectorAll('.new-auto--fixed');
	let otherMark = document.querySelectorAll('.other-mark a');

	if(btnNew) btnNew.onclick = function(e){
		e.preventDefault();

		mark.forEach(function(value){
			value.classList.remove('d-none');
			anime({
			  targets: value,
			  opacity: '1' ,
			  easing: 'easeInQuad',
			  duration: 400
			});

		})
		setTimeout(function(){
			mark.forEach(function(value){
				anime({
				  targets: value,
				  opacity: '0' ,
				  easing: 'easeOutQuad',
				  duration: 400
				});				
				setTimeout(function(){
					value.classList.add('d-none');
				},400)
			})
		},1000);

		markFixed.forEach(function(value){
			value.classList.remove('d-none');
	
		})
		setTimeout(function(){
			markFixed.forEach(function(value){
				value.classList.add('d-none');
			})
		},1000);

		let span = this.childNodes[1];
		span.style.opacity = '1';
		otherMark.forEach(function(value){
			value.childNodes[1].style.opacity = '0';
		});
	};

	let onOtherMarkClick = function(e){
		e.preventDefault();
		let span = this.childNodes[1];
		otherMark.forEach(function(value){
			value.childNodes[1].style.opacity = '0';
		});		
		span.style.opacity = '1';

		markFixed.forEach(function(value){
			value.classList.remove('d-none');
		})

		if(btnNew) btnNew.childNodes[1].style.opacity = '0';
	}

	otherMark.forEach(function(value){
		if(value) value.addEventListener('click', onOtherMarkClick);
	});
})();

// регистрация / авторизация функционал 
(function(){
	let sigInBtn = document.querySelector('.sign-str__log-ing');
	let registrBtn = document.querySelector('.sign-str__register');
	let formRegistr = document.querySelector('.form-register');
	let formLogIn = document.querySelector('.form-log-in');
	let restPassword = document.querySelector('.popup-rest-password');
	let restPasswordBtn = document.querySelector('.rest-password');
	const BG = document.querySelector('.popup-bg');
	let showPassword = document.querySelectorAll('.password-icon');

	showPassword.forEach(function(value){
		b = false;
		if(value) value.onclick = function(e){
			e.preventDefault();
			console.log(this);
			let x = document.querySelectorAll('.password-input');
			x.forEach(function(value){
				if(value && !b){
					value.type = 'text';
					b = true;
				}else{
					value.type = 'password';
					b = false;
				}
			});
		};
	})

	let onSigInBtnClick = function(e){
		e.preventDefault();

		formRegistr.classList.add('d-none');
		formLogIn.classList.remove('d-none');


		console.log(this);
		this.style.backgroundColor = '#fff';
		registrBtn.style.backgroundColor = "#dddddd";
	};

	let onRegistrBtnClick = function(e){
		e.preventDefault();

		formLogIn.classList.add('d-none');
		formRegistr.classList.remove('d-none');

		console.log(this);
		this.style.backgroundColor = '#fff';
		sigInBtn.style.backgroundColor = "#dddddd";
	};

	if(sigInBtn) sigInBtn.addEventListener('click',onSigInBtnClick);
	if(registrBtn) registrBtn.addEventListener('click',onRegistrBtnClick);
	if(restPasswordBtn) restPasswordBtn.addEventListener('click', function(e){
		e.preventDefault();
		restPassword.classList.remove('d-none');
		BG.classList.remove('d-none');
	});
})();

// открыть скрыть дополнительные листы
(function(){

	let btn = document.querySelector('.list--other');
	let list = document.querySelector('.popular-mark__list-wrapper--other');

	let onBtnShowClick =  function(e){
		e.preventDefault();
		list.classList.remove('d-none');
		let x = document.querySelector('.popular-mark__item--hidden');
		x.classList.remove('d-none');
		anime({
		  targets: x,
		  opacity: '1' ,
		  easing: 'easeInQuad',
		  duration: 400
		});
		this.parentNode.classList.add('d-none');
		anime({
		  targets: list,
		  opacity: '1' ,
		  easing: 'easeInQuad',
		  duration: 400
		});
	};

	if(btn) btn.addEventListener('click', onBtnShowClick);

	let lastListBtn = document.querySelectorAll('.last-list .list--other');

	let onLastListBtnClick = function(e){
		e.preventDefault();
		this.parentNode.classList.add('d-none');
		let list = this.parentNode.nextSibling.nextSibling;

		list.classList.remove('d-none');
		anime({
		  targets: list,
		  opacity: '1' ,
		  easing: 'easeInQuad',
		  duration: 400
		});
	};

	if(lastListBtn) lastListBtn.forEach(function(v){
		v.addEventListener('click', onLastListBtnClick);
	});
})();

// акардион "центр помощи"
(function(){
	// лвл 1
	let b = false;
	let acBtn = document.querySelectorAll('.ac-title');
	let onAcBtnShowClick = function(e){
		e.preventDefault();	
		let body = this.nextSibling.nextSibling;

		this.classList.add('ac-title--active');
		body.classList.add('ac-item--active');

		this.removeEventListener('click', onAcBtnShowClick);
		this.addEventListener('click', onAcBtnHiddenClick);
	};

	let onAcBtnHiddenClick = function(e){
		e.preventDefault();	
		let body = this.nextSibling.nextSibling;

		this.classList.remove('ac-title--active');
		body.classList.remove('ac-item--active');

		this.removeEventListener('click', onAcBtnHiddenClick);
		this.addEventListener('click', onAcBtnShowClick);
	};

	acBtn.forEach(function(v){
		v.addEventListener('click', onAcBtnShowClick);
	});
	// END лвл 1


	// лвл 2
	let acBtnLvl2 = document.querySelectorAll('.ac-item h3'); 

	let onAcBtnLvl2ShowClick = function(e){
		e.preventDefault();
		let body = this.nextSibling.nextSibling;
		let parent = this.parentNode;

		body.classList.add('ac-item__list--active');

		this.removeEventListener('click', onAcBtnLvl2ShowClick);
		this.addEventListener('click', onAcBtnLvl2HiddenClick);
	};

	let onAcBtnLvl2HiddenClick = function(e){
		e.preventDefault();
		let body = this.nextSibling.nextSibling;
		let parent = this.parentNode;
		body.classList.remove('ac-item__list--active');

		this.removeEventListener('click', onAcBtnLvl2HiddenClick);
		this.addEventListener('click', onAcBtnLvl2ShowClick);
	};	

	acBtnLvl2.forEach(function(v){
		v.addEventListener('click', onAcBtnLvl2ShowClick);
	});	
	// END лвл 2

	// форма на внутрений странице "help-include"
	let btn = document.querySelector('.btn-and-form-wrapper .btn');
	let formBody = document.querySelector('.btn-and-form-wrapper form');

	let onBtnShowFormClick = function(e){
		e.preventDefault();
		console.log(this);
		formBody.classList.add('form--active');

		this.removeEventListener('click', onBtnShowFormClick);
		this.addEventListener('click', onBtnHiddenFormClick);
	};

	let onBtnHiddenFormClick = function(e){
		e.preventDefault();
		console.log(this);
		formBody.classList.remove('form--active');

		this.addEventListener('click', onBtnShowFormClick);
		this.removeEventListener('click', onBtnHiddenFormClick);
	};

	if(btn) btn.addEventListener('click', onBtnShowFormClick);

	// END форма на внутрений странице "help-include"
})();

// форма отправки сообщения "Отзывы профиль"
(function(){
	let btn = document.querySelector('.user-profile .btn');
	const BG = document.querySelector('.popup-bg');
	let body = document.querySelector('.popup-message-form');
	let exit = document.querySelector('.popup-message-form .icon-exit-chrest');

	exit.onclick = function(){
		if(!body) return;
		setTimeout(function(){
			body.classList.add('d-none');
		},400);
		setTimeout(function(){
			if(BG) BG.classList.add('d-none');	
		},400);
		anime({
		  targets: body,
		  opacity: '0' ,
		  easing: 'easeOutQuad',
		  duration: 400
		});
		anime({
		  targets: BG,
		  opacity: '0' ,
		  easing: 'easeOutQuad',
		  duration: 400
		});
	};

	let onBtnShowMessage = function(e){
		e.preventDefault();
		console.log(this);
		if(BG) BG.classList.remove('d-none');
		if(!body) return;
		body.classList.remove('d-none');
		anime({
		  targets: body,
		  opacity: '1' ,
		  easing: 'easeInQuad',
		  duration: 400
		});
		anime({
		  targets: BG,
		  opacity: '.8' ,
		  easing: 'easeInQuad',
		  duration: 400
		});
	};


	btn.addEventListener('click', onBtnShowMessage);

})();
