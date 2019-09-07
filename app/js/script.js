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
	if(!btnBar) return false;
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
		if(mapBlockLvl1) mapBlockLvl1.classList.remove('d-none');
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

		if(mapBlockLvl1) mapBlockLvl1.classList.remove('d-none');
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


		this.style.backgroundColor = '#fff';
		registrBtn.style.backgroundColor = "#dddddd";
	};

	let onRegistrBtnClick = function(e){
		e.preventDefault();

		formLogIn.classList.add('d-none');
		formRegistr.classList.remove('d-none');

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

		formBody.classList.add('form--active');

		this.removeEventListener('click', onBtnShowFormClick);
		this.addEventListener('click', onBtnHiddenFormClick);
	};

	let onBtnHiddenFormClick = function(e){
		e.preventDefault();

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

	if(exit) exit.onclick = function(){
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


	if(btn) btn.addEventListener('click', onBtnShowMessage);

})();


// Отзывы форма оставления отзывов
(function(){
	const btnTitle = document.querySelectorAll('.form-section .title');

	let onBtnTitleShowClick = function(e){
		e.preventDefault();
		const body = this.nextSibling.nextSibling;

		this.classList.add('title--active');
		body.classList.add('body--active');

		this.removeEventListener('click', onBtnTitleShowClick);
		this.addEventListener('click', onBtnTitleHiddenClick);
	};

	let onBtnTitleHiddenClick = function(e){
		e.preventDefault();
		const body = this.nextSibling.nextSibling;
		this.classList.remove('title--active');
		body.classList.remove('body--active');

		this.removeEventListener('click', onBtnTitleHiddenClick);
		this.addEventListener('click', onBtnTitleShowClick);
	};

	btnTitle.forEach(function(value){
		if(value){
			if(value.classList.contains('title--active')){
				value.addEventListener('click', onBtnTitleHiddenClick);
			}
			value.addEventListener('click', onBtnTitleShowClick);
		}
	});

	// ----------------------- //

	const allTtems = document.querySelectorAll('.form-section .item label');
	const inputAgeForm = document.querySelectorAll('.form-section-input-form');
	let onAllTitlesClick = function(e){
		let mThis = this.parentNode;
		let item = mThis.childNodes[3];
		let title = mThis.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[3];
		let body = mThis.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[5];
		title.textContent = item.textContent;

		let nextBody = mThis.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling;
		
		if(nextBody){
			let nextBodyTitle = nextBody.childNodes[3];
			let nextBodyBody = nextBody.childNodes[5];
			nextBody.classList.remove('d-none');
			if(nextBodyTitle) nextBodyTitle.classList.add('title--active');
			if(nextBodyBody) nextBodyBody.classList.add('body--active');
		}
		
		let thisBody = mThis.parentNode.parentNode.parentNode;
		let thisTitle = thisBody.previousElementSibling;
		thisTitle.classList.remove('title--active');
		thisBody.classList.remove('body--active');

		thisTitle.addEventListener('click', onBtnTitleShowClick);

		// if(true);
		const BODY = thisBody.parentNode;
		if(BODY.classList.contains('form-section--property-on')){
			document.querySelector('.form-property').classList.remove('d-none');
		}
	};

	let onInputAgeFormClick = function(e){
		let nextBody = this.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling;
		if(nextBody){
			let nextBodyTitle = nextBody.childNodes[3];
			let nextBodyBody = nextBody.childNodes[5];
			nextBody.classList.remove('d-none');
			if(nextBodyTitle) nextBodyTitle.classList.add('title--active');
			if(nextBodyBody) nextBodyBody.classList.add('body--active');
		}
		let title = this.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[3];

		let myValue = this.value;
		title.textContent = myValue;

		// thisTitle.addEventListener('click', onBtnTitleShowClick);		
	};

	allTtems.forEach(function(value){
		if(value) value.addEventListener('click', onAllTitlesClick);
	});
	inputAgeForm.forEach(function(value){
		if(value) value.addEventListener('change', onInputAgeFormClick);
	});

	// ----------------------- //

	const btnEasyAuto = document.querySelector('.navigation-btn-wrapper .easy-auto');
	const btnMoto = document.querySelector('.navigation-btn-wrapper .moto');
	const btnHeavyAuto = document.querySelector('.navigation-btn-wrapper .heavy-auto');

	const bodyEasyAuto = document.querySelector('.reviews-form-str .easy-auto-wrapper');
	const bodyMoto = document.querySelector('.reviews-form-str .moto-wrapper');
	const bodyHeavyAuto = document.querySelector('.reviews-form-str .heavy-auto-wrapper');

	const btnCategory = document.querySelectorAll('.navigation-btn-wrapper .category');

	let onBtnCategoryClick = function(e){
		btnCategory.forEach( function(value){
			if(value.classList.contains('category--active')){
				value.classList.remove('category--active');
			}
		});
		this.classList.add('category--active');

		if(btnEasyAuto.classList.contains('category--active')){
			bodyEasyAuto.classList.remove('d-none');
			bodyMoto.classList.add('d-none');
			bodyHeavyAuto.classList.add('d-none');
		}else if(btnMoto.classList.contains('category--active')){
			bodyEasyAuto.classList.add('d-none');
			bodyMoto.classList.remove('d-none');
			bodyHeavyAuto.classList.add('d-none');
		}else{
			bodyEasyAuto.classList.add('d-none');
			bodyMoto.classList.add('d-none');
			bodyHeavyAuto.classList.remove('d-none');
		}

		document.querySelector('.form-property').classList.add('d-none');		
	};

	btnCategory.forEach(function(value){
		if(value) value.addEventListener('click', onBtnCategoryClick);
	});

	// ----------------------- //

	const textAtributeBtn = document.querySelector('.add-atribute .text');
	const textAtributeExitBtn = document.querySelector('.text-input-wrapper .exit');
	const textInput = document.querySelector('.strange-form  .text-input-wrapper');

	if(textAtributeBtn) textAtributeBtn.onclick = function(e){
		textInput.classList.remove('d-none');
	};
	if(textAtributeExitBtn)  textAtributeExitBtn.onclick = function(e){
		textInput.classList.add('d-none');
	};

	const titleAtributeBtn = document.querySelector('.add-atribute .title');
	const titleAtributeExitBtn = document.querySelector('.title-input-wrapper .exit');
	const titleInput = document.querySelector('.strange-form .title-input-wrapper');

	if(titleAtributeBtn) titleAtributeBtn.onclick = function(e){
		titleInput.classList.remove('d-none');
	};
	if(titleAtributeExitBtn) titleAtributeExitBtn.onclick = function(e){
		titleInput.classList.add('d-none');
	};

	const fileAtributeBtn = document.querySelector('.add-atribute .img input');
	const fileInput = document.querySelector('.strange-form .file-input-wrapper')

	if(fileAtributeBtn) fileAtributeBtn.onchange = function(e){
		fileInput.classList.remove('d-none');
	}

	const videoAtributeBtn = document.querySelector('.add-atribute .video');
	const videoInput = document.querySelector('.strange-form .video-input-wrapper');

	if(videoAtributeBtn) videoAtributeBtn.onclick = function(e){
		videoInput.classList.remove('d-none');
	};

	const videoAtributeExitBtn = document.querySelector('.video-wrapper .exit');
	
	const videoInputAddBtn = document.querySelector('.video-input-wrapper .add');
	const videoWrapper = document.querySelector('.video-input-wrapper .video-wrapper')
	const videoInputWrapper = document.querySelector('.video-input-wrapper .input-wrapper');

	if(videoInputAddBtn) videoInputAddBtn.onclick = function(e){
		videoWrapper.classList.remove('d-none');
		videoInputWrapper.classList.add('d-none');
	};

	if(videoAtributeExitBtn) videoAtributeExitBtn.onclick = function(){
		videoWrapper.classList.add('d-none');
	};

	// проверка колово символов в инпуте

	const formInputTitle = document.querySelector('.form-property .title-input');
	const formTextInput = document.querySelector('.form-property .text-input');
	
	let onInputTitleChange = function(e){
		// console.log(this.value.length);
		if(this.classList.contains('title-input')){
			let curentItem = this.nextSibling.nextSibling.childNodes[3];
			curentItem.textContent = 9999;
			curentItem.textContent -= this.value.length;
		}else{
			return false;
		}
	};

	let onInputFormChange = function(e){
		if(this.classList.contains('text-input')){
			let curentItem = this.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[3];
			curentItem.textContent = 9999;
			curentItem.textContent -= this.value.length;
		}
	};

	if(formInputTitle) formInputTitle.addEventListener('keydown', onInputTitleChange);
	if(formTextInput) formTextInput.addEventListener('keydown', onInputFormChange);
})();


// Отзывы форма "form-selected"
(function(){

	const mainBtn = document.querySelectorAll('.castom-select-wrapper');
				// list = document.querySelectorAll('.castom-select-wrapper .list');

	function onMainBtnShowClick(e){
		e.preventDefault();
		
		const arrow = this.querySelector('.more');
		arrow.classList.add('more--active');

		const list = this.querySelector('.list');
		list.classList.remove('d-none');

		this.removeEventListener('click', onMainBtnShowClick);
		this.addEventListener('click', onMainBtnHiddenClick);

		this.style.borderRadius = '6px 6px 0 0';
		let x = this.querySelector('.list');
		x.style.borderRadius = '0 0 6px 6px';

	};

	function onMainBtnHiddenClick(e){
		e.preventDefault();
		
		const arrow = this.querySelector('.more');
		arrow.classList.remove('more--active');

		const list = this.querySelector('.list');
		list.classList.add('d-none');

		this.style.borderRadius = '6px';
		let x = this.querySelector('.list');
		x.style.borderRadius = '0 0 6px 6px';

		this.removeEventListener('click', onMainBtnHiddenClick);
		this.addEventListener('click', onMainBtnShowClick);
	};

	mainBtn.forEach(function(element){
		element.addEventListener('click', onMainBtnShowClick);
		element.addEventListener('mouseleave', onMainBtnHiddenClick);
	});

	const itemBtn = document.querySelectorAll('.castom-select-wrapper .list__item');

	function onItemBtnClick(e){
		e.preventDefault();
		
		let text = this.textContent;
		let input = this.parentNode.parentNode.childNodes[3];

		if(this.lastElementChild != null){
			text = text.replace(/[\d]/g, '');
		}

		input.textContent = text;

		let icon = this.childNodes[1];
		let iconBody = this.parentNode.parentNode.childNodes[1];


		if(!icon) return false;
		if(!iconBody) return false;

		if(iconBody.classList.contains('found-icon-auto')){
			iconBody.classList.remove('found-icon-auto');
		} else if(iconBody.classList.contains('found-icon-fourth-cube')){
			iconBody.classList.remove('found-icon-fourth-cube');
		} else if(iconBody.classList.contains('found-icon-moto')){
			iconBody.classList.remove('found-icon-moto');
		} else if(iconBody.classList.contains('found-icon-heavy-auto')){
			iconBody.classList.remove('found-icon-heavy-auto');
		} else if(iconBody.classList.contains('found-icon-settings')){
			iconBody.classList.remove('found-icon-settings');
		} else if(iconBody.classList.contains('found-icon-service')){
			iconBody.classList.remove('found-icon-service');
		}

		iconBody.classList.add(icon.classList.value);

		// console.log(icon.classList.value);
	
	};

	itemBtn.forEach(function(element){
		element.addEventListener('click', onItemBtnClick);
	});
})();

// Отзывы форма "form-sliders"
(function(){
	const input = document.querySelectorAll('input[type=range]');
	let b = false;

	function onInputMouseDown(e){ b = true };

	function onInputMouseOver(e){ b = false };

	function onInputMouseMove(e){
		
		if(!b) return false;

		let place = this.parentNode.parentNode.lastElementChild.childNodes[1];
		let itemWrapper = this.parentNode.parentNode.lastElementChild.childNodes[3];

		let itemTopLeft = itemWrapper.childNodes[1];
		let itemTopRight = itemWrapper.childNodes[3];
		let itemBottomLeft = itemWrapper.childNodes[5];
		let itemBottomRight = itemWrapper.childNodes[7];


		if(e.offsetX >= 0 && e.offsetX <= 33){
			place.textContent = '0';
			itemTopLeft.classList.add('number-count--hidden');
			itemTopRight.classList.add('number-count--hidden');
			itemBottomLeft.classList.add('number-count--hidden');
			itemBottomRight.classList.add('number-count--hidden');
		}else if(e.offsetX >= 33 && e.offsetX <= 66){
			place.textContent = '1';
			itemTopLeft.classList.add('number-count--active');
			itemTopLeft.classList.remove('number-count--hidden');

			itemTopRight.classList.add('number-count--hidden');
			itemBottomLeft.classList.add('number-count--hidden');
			itemBottomRight.classList.add('number-count--hidden');
		}else if(e.offsetX >= 66 && e.offsetX <= 99){
			place.textContent = '2';
			itemTopLeft.classList.add('number-count--active');
			itemTopLeft.classList.remove('number-count--hidden');
			itemTopRight.classList.add('number-count--active');
			itemTopRight.classList.remove('number-count--hidden');

			itemBottomLeft.classList.remove('number-count--active');
			itemBottomLeft.classList.add('number-count--hidden');
			itemBottomRight.classList.add('number-count--hidden');
			itemBottomRight.classList.remove('number-count--active');
		}else if(e.offsetX >= 99 && e.offsetX <= 132){
			place.textContent = '3';
		}else if(e.offsetX >= 132 && e.offsetX <= 165){
			place.textContent = '4';
			itemTopLeft.classList.add('number-count--active');
			itemTopLeft.classList.remove('number-count--hidden');
			itemTopRight.classList.add('number-count--active');
			itemTopRight.classList.remove('number-count--hidden');
			itemBottomLeft.classList.remove('number-count--hidden');
			itemBottomLeft.classList.add('number-count--active');
				
			itemBottomRight.classList.add('number-count--hidden');
			itemBottomRight.classList.remove('number-count--active');			
		}
		else if(e.offsetX >= 165 && e.offsetX <= 200){
			place.textContent = '5';
			itemTopLeft.classList.add('number-count--active');
			itemTopLeft.classList.remove('number-count--hidden');
			itemTopRight.classList.add('number-count--active');
			itemTopRight.classList.remove('number-count--hidden');
			itemBottomLeft.classList.remove('number-count--hidden');
			itemBottomLeft.classList.add('number-count--active');			
			itemBottomRight.classList.remove('number-count--hidden');
			itemBottomRight.classList.add('number-count--active');			
		}

	
	};

	input.forEach(function(element){
		element.addEventListener('mousedown', onInputMouseDown);
		element.addEventListener('mouseover', onInputMouseOver);
		element.addEventListener('mousemove', onInputMouseMove);
	});

})();

// показать скрыть телефон
(function(){
	const btn = document.querySelector('.right-block-user-information .telephone button');

	function onShowBtnClick(){

		let body = this.previousElementSibling.childNodes[1];
		let text = this.previousElementSibling.childNodes[3];
		console.log(text);
		body.textContent = text.textContent;

	};

	if(btn) btn.addEventListener('click', onShowBtnClick);

})();

// карточка товара функционал картинок
(function(){
	const itemBtn = document.querySelectorAll('.gallery-wrapper__item-wrapper');
	const galleryBody = document.querySelector('.gallery-wrapper .main-img');
	
	function onItemBtnClick(e){
		e.preventDefault();
		let elem = this.lastElementChild;
		// console.log(elem.src);
		galleryBody.src = elem.src;
		// console.log(elem);

	};

	if(itemBtn) itemBtn.forEach(function(elm){
		elm.addEventListener('click', onItemBtnClick);
	});

})();


// found  add to favor
(function(){
	const btn = document.querySelectorAll('.found  .add-to-favotite');

	function onBtnAddClick(e){
		
		let text = this.childNodes[1];
		let star = this.childNodes[3];

		text.textContent = 'Удалить из избранных';
		star.classList.remove('icon-star--red');
		star.classList.add('icon-star--red-full');

		if(this.classList.contains('featured__add-to-favotite')){
			this.removeEventListener('click', onBtnAddClick);
			return false;
		}

		this.removeEventListener('click', onBtnAddClick);
		this.addEventListener('click', onBtnRemoveClick);
	}

	function onBtnRemoveClick(e){
		let text = this.childNodes[1];
		let star = this.childNodes[3];

		text.textContent = 'Добавить в избранное';
		star.classList.remove('icon-star--red-full');
		star.classList.add('icon-star--red');

		this.removeEventListener('click', onBtnRemoveClick);
		this.addEventListener('click', onBtnAddClick);

	}

	if(btn) btn.forEach(function(value){
		value.addEventListener('click', onBtnAddClick);
	})

})();

// found изменения типа просмотра список / галерея
(function(){
	const list = document.querySelector('.chance-views__list');
	const gallery = document.querySelector('.chance-views__gallery');

	const listBody = document.querySelector('.found .list-wrapper');
	const galleryBody = document.querySelector('.found .gallery-wrapper');

	function onListClick(e){
		this.classList.add('active');
		gallery.classList.remove('active');

		galleryBody.classList.add('d-none');
		listBody.classList.remove('d-none');

	};

	function onGalleryClick(e){
		this.classList.add('active');
		list.classList.remove('active');

		listBody.classList.add('d-none');
		galleryBody.classList.remove('d-none');
	};

	if(list) list.addEventListener('click', onListClick);
	if(gallery) gallery.addEventListener('click', onGalleryClick);

})();

// found показать скрыть дополнительные фильтры
(function(){
	const rollUp = document.querySelector('.found .roll-up');
	const dopFilters = document.querySelector('.found .block-3');

	
	if(!rollUp) return false;
	function onRollUpShowClick(e){
		console.log(this);
		this.childNodes[1].textContent = 'Свернуть';
		this.childNodes[3].classList.add('icon-active');

		dopFilters.classList.remove('d-none');

		anime({
      targets: dopFilters,
      opacity: '1' ,
      easing: 'easeInQuad',
      duration: 400
		});

		let x = document.querySelector('.open-close-other-filters .found-filter__btn');

		x.classList.add('d-none');

		this.removeEventListener('click', onRollUpShowClick);
		this.addEventListener('click', onRollUpHiddenClick);
	};

	function onRollUpHiddenClick(e){
		this.childNodes[1].textContent = 'Дополнительные фильтры';
		this.childNodes[3].classList.remove('icon-active');


		anime({
      targets: dopFilters,
      opacity: '0' ,
      easing: 'easeOutQuad',
      duration: 400
		});
		
		// setTimeout(function(){
			dopFilters.classList.add('d-none');	
		// }, 400);

		let x = document.querySelector('.open-close-other-filters .found-filter__btn');

		x.classList.remove('d-none');

		this.addEventListener('click', onRollUpShowClick);
		this.removeEventListener('click', onRollUpHiddenClick);
	}

	rollUp.addEventListener('click', onRollUpShowClick);

})();

// found очистка фильтров костыль с перезагрузкою
(function(){
	const reset = document.querySelector('.found .reset');

	if(!reset) return false;
	function onResetClick(e){
		location.reload();
	};

	reset.addEventListener('click', onResetClick);

})();

// found user поиск по типу
(function(){

	const typeBtn = document.querySelectorAll('.sort-by-type .list__item'),
				typeItem = document.querySelectorAll('.found-type-item');

	if(!typeBtn) return false;

	function onTypeBtnClick(e){

		if(this.classList.contains('list__item--mark')){

			typeItem.forEach( function(element) {
				element.classList.add('d-none');
				if(element.classList.contains('found-type-item--marka')){
					element.classList.remove('d-none');
				}
			});

		} else if(this.classList.contains('list__item--model')){

			typeItem.forEach( function(element) {
				element.classList.add('d-none');
				if(element.classList.contains('found-type-item--model')){
					element.classList.remove('d-none');
				}
			});

		} else if(this.classList.contains('list__item--general')){

			typeItem.forEach( function(element) {
				element.classList.add('d-none');
				if(element.classList.contains('found-type-item--general')){
					element.classList.remove('d-none');
				}
			});

		} else if(this.classList.contains('list__item--age')){

			typeItem.forEach( function(element) {
				element.classList.add('d-none');
				if(element.classList.contains('found-type-item--age')){
					element.classList.remove('d-none');
				}
			});

		} else if(this.classList.contains('list__item--probeg')){

			typeItem.forEach( function(element) {
				element.classList.add('d-none');
				if(element.classList.contains('found-type-igem--probeg')){
					element.classList.remove('d-none');
				}
			});

		} else if(this.classList.contains('list__item--obem')){

			typeItem.forEach( function(element) {
				element.classList.add('d-none');
				if(element.classList.contains('found-type-item--obem')){
					element.classList.remove('d-none');
				}
			});

		} else if(this.classList.contains('list__item--price')){

			typeItem.forEach( function(element) {
				element.classList.add('d-none');
				if(element.classList.contains('found-type-item--price')){
					element.classList.remove('d-none');
				}
			});

		}

	};

	typeBtn.forEach(function(elm){
		elm.addEventListener('click',  onTypeBtnClick);
	})

})();

// found user businesses переключатель текста и фильтра / включить филтр
(function(){

	const openFilter = document.querySelector('.open-filter'),
				bodyFilter = document.querySelector('.body-filter');

	if(!openFilter || !bodyFilter) return false;
	function onOpenFilterShowClick(e){
		e.preventDefault();
		console.log(this);

		bodyFilter.classList.remove('d-none');
		this.classList.add('open-filter--active');

		anime({
      targets: bodyFilter,
      opacity: '1' ,
      height: '225px',
      easing: 'easeInQuad',
      duration: 400
		});

		this.removeEventListener('click', onOpenFilterShowClick);
		this.addEventListener('click', onOpenFilterHiddenClick);
	};

	function onOpenFilterHiddenClick(e){
		e.preventDefault();

		setTimeout(function(){
			bodyFilter.classList.add('d-none');
		}, 400);

		this.classList.remove('open-filter--active');

		anime({
      targets: bodyFilter,
      opacity: '0' ,
      height: '0px',
      easing: 'easeOutQuad',
      duration: 400
		});

		this.addEventListener('click', onOpenFilterShowClick);
		this.removeEventListener('click', onOpenFilterHiddenClick);
	}

	openFilter.addEventListener('click', onOpenFilterShowClick);
	// -------------------------------------------------------------------- //
	
	const btnAboutUs = document.querySelector('.menu-btn--about-us'),
				bodyText = document.querySelector('.body-text'),
				everyOfers = document.querySelector('.menu-btn--everything-offers');

	function onBtnAboutUs(e) {
		e.preventDefault();

		bodyText.classList.remove('d-none');
		everyOfers.classList.remove('menu-btn--active');

		this.classList.add('menu-btn--active');

		anime({
      targets: bodyText,
      opacity: '1' ,
      height: '256px',
      easing: 'easeInQuad',
      duration: 300
		});

	};

	function onBtnEveryOfersClick(e) {
		e.preventDefault();
		btnAboutUs.classList.remove('menu-btn--active');
		this.classList.add('menu-btn--active');

		setTimeout(function(){
			bodyText.classList.add('d-none');
		},400);

		anime({
      targets: bodyText,
      opacity: '0' ,
      height: '0px',
      easing: 'easeOutQuad',
      duration: 300
		});

	} 

	btnAboutUs.addEventListener('click', onBtnAboutUs);
	everyOfers.addEventListener('click', onBtnEveryOfersClick);

})();

// осталось ввести букв счетчик
(function(){
	const input = document.querySelectorAll('.title-input');

	function onTitleInputChage(e){
		
		let body = this.nextElementSibling.childNodes[3];

		let str = this.value.length;

		// let bodyText = body.textContent;
		body.textContent = 10000;
		body.textContent -= str;

		// if(str)

		// if(e.which == 8){
		// 	if(body.textContent == 10000) return false;
		// 	body.textContent++;
		// } else {
		// 	if(body.textContent == 0) return false;
		// 	body.textContent--;
		// }


		// console.log(this.value.length);

	};

	input.forEach(function(value){
		value.addEventListener('change', onTitleInputChage);
	});

})();


// кабинет начало

// кабинет баланс менюшка переключатель
(function(){
	const balansBtn = document.querySelector('.balance-history-btn'),
				witdhwalBtn = document.querySelector('.form-selected .withdrawal'),
				balansBody = document.querySelector('.cabinet .balance-history'),
				witdhwalBody = document.querySelector('.cabinet .withdrawal-funds');


	function test(e) {
		let balansParent = this.parentNode;
		balansParent.classList.add('active');

		let witdhwalParent = witdhwalBtn.parentNode;
		witdhwalParent.classList.remove('active');

		balansBody.classList.remove('d-none');
		witdhwalBody.classList.add('d-none');

	};

	function test2(e){
		let witdhwalParent = this.parentNode;
		witdhwalParent.classList.add('active');

		let balansParent = balansBtn.parentNode;
		balansParent.classList.remove('active');

		balansBody.classList.add('d-none');
		witdhwalBody.classList.remove('d-none');
	};

	if(balansBtn) balansBtn.addEventListener('click', test);
	if(witdhwalBtn) witdhwalBtn.addEventListener('click', test2);

})();

// кабинет настройки акардион для меню
(function(){
	const item = document.querySelectorAll('.str-settings .title');

	function onItemShowClick(e) {
		let x = this.nextElementSibling;
		this.classList.add('title--active');
		x.classList.add('body--active');
		this.style.boxShadow = '0 4px 30px rgba(44, 44, 44, 0.2)';

		if(this.classList.contains('title--large')){
			x.classList.add('body--active--large');
		}

		this.removeEventListener('click', onItemShowClick);
		this.addEventListener('click', onItemHiddenClick);
	};

	function onItemHiddenClick(e) {
		let x = this.nextElementSibling;
		x.classList.remove('body--active');
		this.classList.remove('title--active');

		if(this.classList.contains('title--large')){
			x.classList.remove('body--active--large');
		}

		this.style.boxShadow = '0 0 5px rgba(44,44,44,.3)';

		this.addEventListener('click', onItemShowClick);
		this.removeEventListener('click', onItemHiddenClick);
	};

	item.forEach(function(element) {
		element.addEventListener('click', onItemShowClick);
	});
})();

// кабинет настройки изменения контактных данных кнопка добавить еще / скрыть
(function(){
	const btn = document.querySelector('.str-settings .change-soc .btn-wrapper button'),
				body = document.querySelector('.str-settings .change-soc__body');

	function onBtnShowClick(e){
		e.preventDefault();

		this.firstElementChild.textContent = 'Свернуть';
		this.querySelector('.icon-red-arrow').classList.add('icon-active');

		body.classList.remove('d-none');

		this.removeEventListener('click', onBtnShowClick);
		this.addEventListener('click', onBtnHiddenClick);
	};

	function onBtnHiddenClick(e){
		e.preventDefault();

		this.firstElementChild.textContent = 'Добавить ещё';
		this.querySelector('.icon-red-arrow').classList.remove('icon-active');

		body.classList.add('d-none');

		this.addEventListener('click', onBtnShowClick);
		this.removeEventListener('click', onBtnHiddenClick);		
	}

	if(btn) btn.addEventListener('click', onBtnShowClick);
})();

// кабинет избраные кнопка убрать из избраных 
(function(){
	const btn = document.querySelectorAll('.featured__add-to-favotite'),
				btnGallery = document.querySelectorAll('.featured__add-to-favotite--gallery'),
				titles = document.querySelectorAll('.count-remove-items span');

	function onBtnClick(e) {
		e.preventDefault();
		let x = this;

		this.parentNode.parentNode.classList.add('item--remove');

		setTimeout(function(){
			x.parentNode.parentNode.classList.add('d-none');

			for(let i = 0; i < titles.length; i++){
				titles[i].textContent = +titles[i].textContent + 1;
			}

		}, 320);
	};

	function onBtnGalleryClick(e) {
		e.preventDefault();
		let x = this;
		
		this.parentNode.parentNode.classList.add('item--remove');

		setTimeout(function(){
			x.parentNode.parentNode.classList.add('d-none');

			for(let i = 0; i < titles.length; i++){
				titles[i].textContent = +titles[i].textContent + 1;
			}

		}, 320);
	};

	btn.forEach(function(element) {
		element.addEventListener('click', onBtnClick);
	});

	btnGallery.forEach(function(element) {
		element.addEventListener('click', onBtnGalleryClick);
	});

// featured__add-to-favotite--gallery
})();

// кабинет уведомления удалить сообщение
(function(){
	const btnTrash = document.querySelector('.cabinet .btn-trash'),
				popupTrash = document.querySelector('.cab-popup-delete-message'),
				popupBg = document.querySelector('.popup-bg');


	function onBtnTrashClick(e){
		e.preventDefault();
		console.log(this);
		popupTrash.classList.remove('d-none');
		popupBg.classList.remove('d-none');
	};

	if(btnTrash) btnTrash.addEventListener('click', onBtnTrashClick);
})();

// переключатель в меню кабинет сообщения
(function(){
	const btn1 = document.querySelector('.str-messages .form-selected li:nth-child(1)');
	const btn2 = document.querySelector('.str-messages .form-selected li:nth-child(2)');
	const btn3 = document.querySelector('.str-messages .form-selected li:nth-child(3)');
	const btn4 = document.querySelector('.str-messages .form-selected li:nth-child(4)');
	
	const body = document.querySelectorAll('.str-messages .message-list');

	const body1 = document.querySelector('.str-messages .received');
	const body2 = document.querySelector('.str-messages .sent');
	const body3 = document.querySelector('.str-messages .archive');
	const body4 = document.querySelector('.str-messages .message-list__waiting');

	if(btn1) btn1.onclick = function(){
		let x = this.parentNode.querySelectorAll('li');
		
		x.forEach(function(element) {
			element.classList.remove('active');
		});
		this.classList.add('active');

		body.forEach(function(element) {
			element.classList.add('d-none');
		});

		body1.classList.remove('d-none');
	};

	if(btn2) btn2.onclick = function(){
		let x = this.parentNode.querySelectorAll('li');
		x.forEach(function(element) {
			element.classList.remove('active');
		});
		this.classList.add('active');

		body.forEach(function(element) {
			element.classList.add('d-none');
		});

		body2.classList.remove('d-none');
	};
	
	if(btn3) btn3.onclick = function(){
		let x = this.parentNode.querySelectorAll('li');
		x.forEach(function(element) {
			element.classList.remove('active');
		});
		this.classList.add('active');

		body.forEach(function(element) {
			element.classList.add('d-none');
		});

		body3.classList.remove('d-none');
	};

	if(btn4) btn4.onclick = function(){
		let x = this.parentNode.querySelectorAll('li');
		x.forEach(function(element) {
			element.classList.remove('active');
		});
		this.classList.add('active');

		body.forEach(function(element) {
			element.classList.add('d-none');
		});

		body4.classList.remove('d-none');
	};


})();


// кабинет показать скрыть номер телефона в сообщения
(function(){
	const btn = document.querySelector('.message-container-wrapper .left .body--clear .wrapper button'),
				number = document.querySelector('.message-container-wrapper .left .body--clear .wrapper .number');

	if(btn) {
		btn.onclick = function() {
			this.classList.add('d-none');
			number.classList.remove('d-none');
		};
	}
	
})();

// кабинет сообщения показать скрыть менюшку в тайтле
(function(){
	const btn = document.querySelectorAll('.message-container-wrapper .left .title .menu-btn-wrapper .wrapperr'),
				body = document.querySelectorAll('.message-container-wrapper .left .title .menu-btn-wrapper .body'),
				menuWrapper = document.querySelectorAll('.menu-btn-wrapper-BG');

	function test() {
		body.forEach(function(element) {
			element.classList.remove('d-none');
		});

		this.nextElementSibling.classList.remove('d-none');
	};

	btn.forEach(function(element){
		element.addEventListener('click', test);
	});

	function test2() {
		this.classList.add('d-none');
		body.forEach(function(element) {
			element.classList.add('d-none');
		});
	};

	menuWrapper.forEach(function(element){
		element.addEventListener('click', test2);
	});
})();




// скрипт для выделения всех выбраных чекбоксов кабинет
(function(){
	const deletedStrChecbox = document.querySelector('.archive .title input'),
				noActiveStrChecbox = document.querySelector('.sent .title input'),
				waitingStrChecbox = document.querySelector('.message-list__waiting .title input'),
				receivedStrChecbox = document.querySelector('.received .title input');


	if(deletedStrChecbox) deletedStrChecbox.addEventListener('click', onAllInput);
	if(noActiveStrChecbox) noActiveStrChecbox.addEventListener('click', onAllInput);
	if(waitingStrChecbox) waitingStrChecbox.addEventListener('click', onAllInput);
	if(receivedStrChecbox) receivedStrChecbox.addEventListener('click', onAllInput);


	function onAllInput() {
		let parent = this.parentNode.parentNode.parentNode.parentNode;

		let inputs =  parent.querySelectorAll('input');

		inputs.forEach( function(element, index) {
			element.checked = 'checked';
		});

		let x = parent.querySelector('.title__active'),
				y = parent.querySelector('.title__no-active');


		x.classList.add('d-none');
		y.classList.remove('d-none');


		this.removeEventListener('click', onAllInput);
		this.addEventListener('click', offAllInput);
	};

	function offAllInput() {
		let parent = this.parentNode.parentNode.parentNode.parentNode;
		
		let inputs =  parent.querySelectorAll('input');

		inputs.forEach( function(element, index) {
			element.checked = '';
		});

		let x = parent.querySelector('.title__active'),
				y = parent.querySelector('.title__no-active');


		x.classList.remove('d-none');
		y.classList.add('d-none');

		this.addEventListener('click', onAllInput);
		this.removeEventListener('click', offAllInput);
	}

	let x = document.querySelector('#main-2');
	if(x) x.removeEventListener('click', onAllInput);

	let y = document.querySelector('#main-3');
	if(y) y.removeEventListener('click', onAllInput);

	let z = document.querySelector('#main-4');
	if(z) z.removeEventListener('click', onAllInput);

})();




// кабинет попап большой
(function(){
	const activeBtn = document.querySelector('.cabinet .popup-block .menu .active-btn'),
				archiveBtn = document.querySelector('.cabinet .popup-block .menu .archive-btn'),

				activeBody = document.querySelector('.cabinet .dd-1'),
				archiveBody = document.querySelector('.cabinet .dd-2');

	const exitBtn = document.querySelector('.cabinet .popup-block .top i');

	if(exitBtn) exitBtn.onclick = function() {
		document.querySelector('.cabinet .popup-block').classList.add('d-none');
		document.querySelector('.popup-bg').classList.add('d-none');
	}


	function test1() {
		console.log(this);
		activeBtn.classList.add('active-btn');
		archiveBtn.classList.remove('active-btn');
		activeBody.classList.remove('d-none');
		archiveBody.classList.add('d-none');
	};

	function test2() {
		console.log(this);
		activeBtn.classList.remove('active-btn');
		archiveBtn.classList.add('active-btn');
		activeBody.classList.add('d-none');
		archiveBody.classList.remove('d-none');
	};


	if(activeBtn) activeBtn.addEventListener('click', test1);
	if(archiveBtn) archiveBtn.addEventListener('click', test2);

})();


// кабинет оплата активация вебмани
(function(){
	const btn = document.querySelectorAll('main.str-busines-4 .wrapper .container .element');

	function active() {
		btn.forEach(function(element) {
			element.classList.remove('element--active');
		});
		this.classList.add('element--active');
	}

	btn.forEach(function(element) {
		element.addEventListener('click', active);
	});


})();

// кабинет закрыть попапы пакетов блок 1 / блок 2
(function(){
	const btn = document.querySelector('.popup-str-busines-package--prem .arrow-left'),
				block1 = document.querySelector('.popup-str-busines-package--prem .block-1'),
				block2 = document.querySelector('.popup-str-busines-package--prem .block-2');

	const exit = document.querySelector('.popup-str-busines-package--prem .exit');
	const exitStar = document.querySelector('.popup-str-busines-package--start .exit');
	const exitNew = document.querySelector('.popup-str-busines-package--prem-2 .exit');

	if(exit) exit.onclick = function() {
		document.querySelector('.popup-str-busines-package--prem').classList.add('d-none');
		document.querySelector('.popup-bg').classList.add('d-none');
	}

	if(exitStar) exitStar.onclick = function() {
		document.querySelector('.popup-str-busines-package--start').classList.add('d-none');
		document.querySelector('.popup-bg').classList.add('d-none');
	}

	if(exitNew) exitNew.onclick = function() {
		document.querySelector('.popup-str-busines-package--prem-2').classList.add('d-none');
		document.querySelector('.popup-bg').classList.add('d-none');
	}


	function func() {
		console.log(this);
		setTimeout(function(){
			block1.classList.add('d-none');
			block2.classList.remove('d-none');
		}, 400);
		

		block1.classList.add('ONULL');
		block2.classList.remove('ONULL');

		this.removeEventListener('click', func);
		this.addEventListener('click', func2);
	}

	function func2() {
		setTimeout(function(){
			block2.classList.add('d-none');
			block1.classList.remove('d-none');
		}, 400);

		block2.classList.add('ONULL');
		block1.classList.remove('ONULL');
		
		this.addEventListener('click', func);
		this.removeEventListener('click', func2);
	}

	if(btn) btn.addEventListener('click', func);
})();


// кабинет cab-ads закрыть граф
(function(){
	const btn = document.querySelector('.cabinet .popup-graph .top i');

	if(btn) btn.onclick = function() {
		document.querySelector('.str-ads-graph').classList.add('d-none');
		document.querySelector('.popup-bg').classList.add('d-none');
	};

})();

// кабинет управление пакетами включить отключить пакет
(function(){
	const btn = document.querySelectorAll('.str-busines__control .slider-on-off .container');
	const body = document.querySelectorAll('.str-busines__control .str-busines-package');

	function disabled() {
		this.parentNode.classList.add('slider-on-off--off');
		this.parentNode.parentNode.classList.add('str-busines-package--disable');
		this.previousElementSibling.textContent = 'Включить';

		this.removeEventListener('click', disabled);
		this.addEventListener('click', active);
	};

	function active() {
		this.parentNode.classList.remove('slider-on-off--off');
		this.parentNode.parentNode.classList.remove('str-busines-package--disable');
		this.previousElementSibling.textContent = 'Отключить';

		this.addEventListener('click', disabled);
		this.removeEventListener('click', active);
	}

	if(btn) btn.forEach(function(element){
		element.addEventListener('click', disabled);
	});
})();

// переключатель пакетив в кабинети статистика
(function(){
	const btnLeft = document.querySelector('.str-busines__stat .left .btn-wrapper button:nth-child(1)');
	const btnRight = document.querySelector('.str-busines__stat .left .btn-wrapper button:nth-child(2)');

	const navigationNumber = document.querySelector('.str-busines__stat .left .num span:first-child');

	const block1 = document.querySelector('.str-busines__stat .str-busines-package--1'),
				block2 = document.querySelector('.str-busines__stat .str-busines-package--2');

	if(btnRight) btnRight.onclick = function() { 
		navigationNumber.textContent = '2';


		setTimeout(function(){
			block1.classList.add('d-none');
			block2.classList.remove('d-none');
			block2.classList.add('ONULL');
			anime({
	      targets: block2,
	      opacity: '1' ,
	      easing: 'easeInCirc',
	      duration: 200
			});
		}, 300);

		anime({
      targets: block1,
      opacity: '0' ,
      easing: 'easeOutCirc',
      duration: 200
		});
	}

	if(btnLeft) btnLeft.onclick = function() { 
		navigationNumber.textContent = '1';

		setTimeout(function(){
			block2.classList.add('d-none');
			block1.classList.remove('d-none');
			block1.classList.add('ONULL');
			anime({
	      targets: block1,
	      opacity: '1' ,
	      easing: 'easeInCirc',
	      duration: 200
			});
		}, 300);

		anime({
      targets: block2,
      opacity: '0' ,
      easing: 'easeOutCirc',
      duration: 200
		});
	}
})();

(function(){
	const btn = document.querySelectorAll('.radio-wrapper__item-wrapper');

	function active() {
		btn.forEach(function(element){
			element.childNodes[1].childNodes[1].classList.remove('active');
		});
		this.childNodes[1].childNodes[1].classList.add('active');
	}

	btn.forEach(function(element){
		element.addEventListener('click', active);
	})

})();


// счетчики для бизнес настройки кабинет
(function(){
	const otherCounter = document.querySelector('.other-property .counter-completed'),
				mainCounter = document.querySelector('.main-property .counter-completed');

	const otherInput = document.querySelectorAll('.other-property .item-input__in'),
				mainInput = document.querySelectorAll('.main-property .item-input__in');

	// let num = parseInt(otherCounter.childNodes[1].textContent);
	
	function add50() {
		let num = parseInt(otherCounter.childNodes[1].textContent);
		otherCounter.childNodes[1].textContent = num + 50;
		this.removeEventListener('input', add50);
	}

	function checkInput50() {
		let num = parseInt(otherCounter.childNodes[1].textContent);
		if(this.value == ''){
			// console.log('hello');
			otherCounter.childNodes[1].textContent = num - 50;
			this.addEventListener('input', add50);
		}
	}

	function add10() {
		let num = parseInt(mainCounter.childNodes[1].textContent);
		mainCounter.childNodes[1].textContent = num + 10;
		this.removeEventListener('input', add10);
	}

	function checkInput10() {
		let num = parseInt(mainCounter.childNodes[1].textContent);
		if(this.value == ''){
			// console.log('hello');
			mainCounter.childNodes[1].textContent = num - 10;
			this.addEventListener('input', add10);
		}
	}

	otherInput.forEach(function(element){
		element.addEventListener('input', add50);
		element.addEventListener('input', checkInput50);
	})

	mainInput.forEach(function(element){
		element.addEventListener('input', add10);
		element.addEventListener('input', checkInput10);
	})

})();



// публикация оплата выбрать пакет
(function(){
	const btn = document.querySelectorAll('.publication-pay__category li .btn'),
				body = document.querySelectorAll('.publication-pay__category li'),
				title = document.querySelectorAll('.publication-pay__category .h2--mode');

	function active() {
		let parent = this.parentNode;

		body.forEach(function(element) {
			element.classList.remove('publication-pay__category--active');
		});
		parent.classList.add('publication-pay__category--active');


		btn.forEach(function(element) {
			element.classList.remove('btn--active');
			element.textContent = 'Выбрать пакет';
		});

		title.forEach(function(element) {
			element.classList.remove('h2--active');
			element.childNodes[1].childNodes[1].classList.remove('icon-warning-white');
			element.childNodes[1].childNodes[1].classList.add('icon-warning-grey');
		});
		let titleLocal = this.parentNode.childNodes[1];
		let iconLocal = titleLocal.childNodes[1].childNodes[1];
		titleLocal.classList.add('h2--active');
		iconLocal.classList.remove("icon-warning-grey");
		iconLocal.classList.add("icon-warning-white");

		this.classList.add('btn--active');
		this.innerHTML = 'Выбрано<i class="icon-pack-okey"></i>';


	};

	if(btn) btn.forEach(function(element) {
		element.addEventListener('click', active);
	});

})();


// Отзывы поиск
(function(){
	const moreItemsList = document.querySelector('.reviews-found .list-wrapper .more-offers'),
				itemsBodyList = document.querySelectorAll('.reviews-found .list-wrapper .item--more');

	if(moreItemsList) moreItemsList.onclick = function() {
		itemsBodyList.forEach(function(element) {
			element.classList.remove('d-none');
		});
		document.querySelector('.item--more--first').style.marginBottom = '12px';
	};

	const moreItemGallery = document.querySelector('.reviews-found .gallery-wrapper .more-offers'),
				itemsBodyGallery = document.querySelectorAll('.reviews-found .gallery-wrapper .item--more');

	if(moreItemGallery) moreItemGallery.onclick = function() {
		itemsBodyGallery.forEach(function(element) {
			element.classList.remove('d-none');
		});
		// document.querySelector('.item--more--first').style.marginBottom = '12px';
	};

})();

// Отзывы поиск слайдера
(function(){
	const nextVip = document.querySelector('.pagination--wrapper .next--vip'),
				preVip = document.querySelector('.pagination--wrapper .pre--vip'),
				bodyVip = document.querySelector('.pagination--wrapper .offers-content--vip');

	const nextTwo = document.querySelector('.pagination--wrapper .next--two'),
				preTwo = document.querySelector('.pagination--wrapper .pre--two'),
				bodyTwo = document.querySelector('.pagination--wrapper .offers-content--two');

	if(nextVip) nextVip.onclick = function() {
		let start = parseInt(bodyVip.style.left);
		let point = -100;

		if(bodyVip.style.left === '-300%'){
			return false;
		}

		bodyVip.style.left = (start + point) + '%';
	};

	if(preVip) preVip.onclick = function() {
		let start = parseInt(bodyVip.style.left);
		let point = 100;

		if(bodyVip.style.left === '0%'){
			return false;
		}

		bodyVip.style.left = (start + point) + '%';
	};

	if(preTwo) nextTwo.onclick = function() {
		let start = parseInt(bodyTwo.style.left);
		let point = -100;

		if(bodyTwo.style.left === '-300%'){
			return false;
		}

		bodyTwo.style.left = (start + point) + '%';
	};

	if(preTwo) preTwo.onclick = function() {
		let start = parseInt(bodyTwo.style.left);
		let point = 100;

		if(bodyTwo.style.left === '0%'){
			return false;
		}

		bodyTwo.style.left = (start + point) + '%';
	};

	const nextVip2 = document.querySelector('.pagination--wrapper .offers--last .next--vip'),
				preVip2 = document.querySelector('.pagination--wrapper .offers--last .pre--vip'),
				bodyVip2 = document.querySelector('.pagination--wrapper .offers--last .offers-content--vip');

	const nextTwo2 = document.querySelector('.pagination--wrapper .offers--last .next--two'),
				preTwo2 = document.querySelector('.pagination--wrapper .offers--last .pre--two'),
				bodyTwo2 = document.querySelector('.pagination--wrapper .offers--last .offers-content--two');

	if(nextVip2) nextVip2.onclick = function() {
		let start = parseInt(bodyVip2.style.left);
		let point = -100;

		if(bodyVip2.style.left === '-300%'){
			return false;
		}

		bodyVip2.style.left = (start + point) + '%';
	};

	if(preVip2) preVip2.onclick = function() {
		let start = parseInt(bodyVip2.style.left);
		let point = 100;

		if(bodyVip2.style.left === '0%'){
			return false;
		}

		bodyVip2.style.left = (start + point) + '%';
	};

	if(preTwo2) nextTwo2.onclick = function() {
		let start = parseInt(bodyTwo2.style.left);
		let point = -100;

		if(bodyTwo2.style.left === '-300%'){
			return false;
		}

		bodyTwo2.style.left = (start + point) + '%';
	};

	if(preTwo2) preTwo2.onclick = function() {
		let start = parseInt(bodyTwo2.style.left);
		let point = 100;

		if(bodyTwo2.style.left === '0%'){
			return false;
		}

		bodyTwo2.style.left = (start + point) + '%';
	};

})();

// поставить оценку на странице card-auto-fixed
(function(){
	const btn = document.querySelector('.fix-d__block-coments .btn'),
				body = document.querySelector('.my-assessment');

	if(btn) btn.onclick = function() {
		if(btn.classList.contains('btn-pot')){
			return false;
		}
		let mthis = this;
		anime({
      targets: this,
      opacity: '0' ,
      easing: 'easeOutQuad',
      duration: 300
		});

		setTimeout(function(){
			mthis.classList.add('d-none');
			anime({
	      targets: body,
	      opacity: '1' ,
	      easing: 'easeInQuad',
	      duration: 300
			});

			body.classList.remove('d-none');
			body.classList.remove('ONULL');
		}, 300);

	};
})();


// поставить оценку на странице (попап) card-auto-fixed
(function(){
	const exitBtn = document.querySelector('.my-assesment-popup i');

	if(exitBtn) exitBtn.onclick = function() {
		document.querySelector('.popup-bg').classList.add('d-none');
		document.querySelector('.my-assesment-popup').classList.add('d-none');
	};
})();

// ответить на комент card-auto-fixed
(function(){
	const btn = document.querySelectorAll('.reply-coments'),
				body = document.querySelectorAll('.fix-d__block-coments .coment--two');


	function openComents(e) {
		e.preventDefault();
		let localBody = this.parentNode.nextElementSibling;
		body.forEach(function(element) {
			if(element.classList.contains('coment--two-no-hidden')){
				console.log('hi');
				return false;
			}
			element.classList.add('d-none');

		});
		localBody.classList.remove('d-none');

	}

	if(btn) btn.forEach(function(element) {
		element.addEventListener('click', openComents);
	});

})();

// scroll-block отзывы карточка
(function(){
	// like
	const btnLike = document.querySelector('.scroll-block .like'),
				btnDizLike = document.querySelector('.scroll-block .diz-like');
	
	let xbool = false;
	let xbool2 = false;
				
	function likeActive() {
		if(xbool) {
			this.classList.remove('like--active');
			xbool = false;
			// xbool2 = true;
		} else{
			this.classList.add('like--active');
			btnDizLike.classList.remove('diz-like--active');
			xbool = true;
			xbool2 = false;
		}

	};

	function dizLikeActive() {
		if(xbool2) {
			this.classList.remove('diz-like--active');
			xbool2 = false;
			// xbool = true;
		} else{
			this.classList.add('diz-like--active');
			btnLike.classList.remove('like--active');	
			xbool2 = true;
			xbool = false;
		}

	}

	if(btnLike) btnLike.addEventListener('click', likeActive);
	if(btnDizLike) btnDizLike.addEventListener('click', dizLikeActive);


	// soc more
	const socMoreBtn = document.querySelector('.reviews-card .scroll-block .more');

	function socShow() {
		let x = this.nextElementSibling;
		x.classList.remove('d-none');
		let y = this.parentElement;
		y.style.borderRadius = '0 0 0 6px';

		this.removeEventListener('click', socShow);
		this.addEventListener('click', socHidden);
	};

	function socHidden() {
		let x = this.nextElementSibling;
		x.classList.add('d-none');
		let y = this.parentElement;
		y.style.borderRadius = '0 0 6px 6px';

		this.addEventListener('click', socShow);
		this.removeEventListener('click', socHidden);
	};

	if(socMoreBtn) socMoreBtn.addEventListener('click', socShow);


	// hiden / show
	const scrollBlock = document.querySelector('.scroll-block');
	if(scrollBlock) $(window.document).scroll(function(){
	  var mScroll = $(window.document).scrollTop();
	  if(mScroll <= 1000){
	  	scrollBlock.classList.add('scroll-block--hidden');
	  }else if(mScroll >= 1000){
	  	scrollBlock.classList.remove('scroll-block--hidden');
	  }else{
      return false;
	  };
	});

})();

// like block 
(function() {
	const like = document.querySelector
					('.reviews-card .content__author .center .like-block .like'),
				dizLike = document.querySelector
					('.reviews-card .content__author .center .like-block .diz-like');

	let xbool = false;
	let xbool2 = false;

	if(like) like.onclick = function() {
		if(xbool){
			this.classList.remove('like--active');
			xbool = false;
		} else{
			this.classList.add('like--active');
			this.classList.add('mod-like-active');
			dizLike.classList.remove('like--active');
			dizLike.classList.remove('mod-diz-like-active');
			xbool = true;
			xbool2 = false;
		}
	};

	if(dizLike) dizLike.onclick = function() {
		if(xbool2){
			this.classList.remove('like--active');
			xbool2 = false;
		} else{
			this.classList.add('like--active');
			this.classList.add('mod-diz-like-active');
			like.classList.remove('like--active');
			like.classList.remove('mod-like-active');
			xbool2 = true;
			xbool = false;
		}
	};

})();


// публикация textarea
(function(){
	const area = document.querySelector('.publication-str .items textarea');
	if(area) area.oninput = function() {
		let x = this.value;
		console.log(x.length);
		if(x.length >= 1000){
			this.style.height = '750px';
		} else{
			this.style.height = '189px';
		}
	};

})();

// открыть попапы cab-busines-3
(function(){
	const busines1Btn = document.querySelector('#busines-str-btn-popup-1'),
				busines2Btn = document.querySelector('#busines-str-btn-popup-2'),
				busines3Btn = document.querySelector('#busines-str-btn-popup-3'),
				popupBg = document.querySelector('.popup-bg');

	const popup1Body = document.querySelector('.popup-str-busines-package--start'),
				popup2Body = document.querySelector('.popup-str-busines-package--prem'),
				popup3Body = document.querySelector('.popup-str-busines-package--prem-2');

	if(busines1Btn) busines1Btn.onclick = function() {
		popup1Body.classList.remove('d-none');
		popupBg.classList.remove('d-none');
	};


	if(busines2Btn) busines2Btn.onclick = function() {
		popup2Body.classList.remove('d-none');
		popupBg.classList.remove('d-none');
	};

	if(busines3Btn) busines3Btn.onclick = function() {
		popup3Body.classList.remove('d-none');
		popupBg.classList.remove('d-none');
	};




})();


// кабинет cab-busines-pack открыть таблицу
(function(){
	const btn1 = document.querySelector('.str-busines__packages .str-busines-package:nth-child(1) .btn'),
				btn2 = document.querySelector('.str-busines__packages .str-busines-package:nth-child(2) .btn'),
				btn3 = document.querySelector('.str-busines__packages .str-busines-package:nth-child(3) .btn'),
				btn4 = document.querySelector('.str-busines__packages .str-busines-package:nth-child(4) .btn');

	const body = document.querySelector('.popup-block--mod'),
				popupBg = document.querySelector('.popup-bg');


	if(btn1) btn1.onclick = function() {
		console.log(this);
		body.classList.remove('d-none');
		popupBg.classList.remove('d-none');
	}

	if(btn2) btn2.onclick = function() {
		console.log(this);
		body.classList.remove('d-none');
		popupBg.classList.remove('d-none');
	}

	if(btn3) btn3.onclick = function() {
		console.log(this);
		body.classList.remove('d-none');
		popupBg.classList.remove('d-none');
	}

	if(btn4) btn4.onclick = function() {
		console.log(this);
		body.classList.remove('d-none');
		popupBg.classList.remove('d-none');
	}

})();

// стр. обявления cab-ads
(function() {
	const btn = document.querySelectorAll('.str-ads .btn-wrapper .btn__little'),
				body = document.querySelector('.cabinet .popup-block'),
				popupBg = document.querySelector('.popup-bg');
	
	function test() {
		body.classList.remove('d-none');
		popupBg.classList.remove('d-none');
	};

	btn.forEach(function(element) {
		element.addEventListener('click', test);
	});

})();

// reviews-card textarea
(function(){
	const area = document.querySelectorAll('.fix-d__block-coments .input');
	function test() {
		let x = this.value;
		if(x.length >= 100){
			this.style.height = '450px';
		} else{
			this.style.height = '45px;';
		}
	};

	if(area) area.forEach(function(element) {
		element.addEventListener('input', test);
	});

})();


// publication-pay открыть попапы
(function() {
	const btn = document.querySelectorAll('.publication-pay__category li .h2--mode i'),
				body = document.querySelector('.popup-str-busines-package--prem');
				popupBg = document.querySelector('.popup-bg');

	if(btn) btn.forEach(function(element) {
		element.onclick = function() {
			body.classList.remove('d-none');
			popupBg.classList.remove('d-none');
		};
	});


})();

// фикс удаление добавления
(function() {
	const btn = document.querySelectorAll('.found-filter__nav-wrapper .right .icon-star--red');

	function fOn() {
		console.log(this);
		this.previousElementSibling.textContent = 'Удалить результат поиска';

		this.removeEventListener('click', fOn);
		this.addEventListener('click', fOff);
	};

	function fOff() {
		console.log(this);
		this.previousElementSibling.textContent = 'Сохранить результат поиска';

		this.addEventListener('click', fOn);
		this.removeEventListener('click', fOff);
	};



	if(btn) btn.forEach(function(element) {
		element.addEventListener('click', fOn);
	});

})();


// фикс удаляение добавления стр publication-previews.html
(function() {
	const btn = document.querySelector('.card__wrapper .first .param-wrapper .icon-star--red');

	function fOn() {
		console.log(this);
		this.previousElementSibling.textContent = 'Удалить избранное';

		this.removeEventListener('click', fOn);
		this.addEventListener('click', fOff);
	};

	function fOff() {
		console.log(this);
		this.previousElementSibling.textContent = 'В избранное';

		this.addEventListener('click', fOn);
		this.removeEventListener('click', fOff);
	};

	if(btn) btn.addEventListener('click', fOn);

})();


// скрол для форм
(function() {
	const btn = document.querySelectorAll('.found-filter__body .castom-select-wrapper'),
				list = document.querySelectorAll('.found-filter__body .castom-select-wrapper .list');

	function updateScroll() {
		let localList = this.querySelector('.list');
		let countItems = localList.childElementCount;

		if(countItems > 8){
			$(localList).niceScroll();
			localList.style.height = '328px';
		}
	};

	if(btn) btn.forEach(function(element) {
		element.addEventListener('click', updateScroll);
	});

})();

// скрол для форм reviews-form.html
(function() {
	const btn = document.querySelectorAll('.form-selected .castom-select-wrapper'),
				list = document.querySelectorAll('.form-selected .castom-select-wrapper .list');

	function updateScroll() {
		let localList = this.querySelector('.list');
		let countItems = localList.childElementCount;

		if(countItems > 8){
			$(localList).niceScroll();
			localList.style.height = '328px';
		}
	};

	if(btn) btn.forEach(function(element) {
		element.addEventListener('click', updateScroll);
	});

})();

// фикс cab-notification выбрать все чекбоксы
(function() {
	const btn = document.querySelector('#main-n1');

	function addItems() {

		let itemsParent = this.parentNode.parentNode.parentNode.parentNode;
		let items = itemsParent.querySelectorAll('.body input');
		console.log(items);

		items.forEach(function(element) {
			element.checked = 'checked';
		});

		this.removeEventListener('click', addItems);
		this.addEventListener('click', removeItems);
	}

	function removeItems() {

		let itemsParent = this.parentNode.parentNode.parentNode.parentNode;
		let items = itemsParent.querySelectorAll('.body input');
		console.log(items);

		items.forEach(function(element) {
			element.checked = '';
		});

		this.addEventListener('click', addItems);
		this.removeEventListener('click', removeItems);
	}



	if(btn) btn.addEventListener('click', addItems);
})();

// сообщения cab-messages-received выбрать все чекбоксы блок
(function() {
	const btn = document.querySelectorAll('.message-list .checkbox-body .main-input');

	function inputOn() {
		let mainInput = this.parentNode.parentNode.parentNode.parentNode;
		let inputItems = mainInput.querySelectorAll('input');

		inputItems.forEach(function(element) {
			element.checked = 'checked';
		});

		let activeLink = mainInput.querySelectorAll('.title--active--fix-f a');
		activeLink.forEach(function(element) {
			element.classList.remove('d-none');
		});
		
		mainInput.querySelector('.title--no-active--fix-f').classList.add('d-none');
		
		let checboxWrapper = this.parentNode.parentNode;
		checboxWrapper.style.marginRight = '23px';

		this.removeEventListener('click', inputOn);
		this.addEventListener('click', inputOff);
	};

	function inputOff() {
		let mainInput = this.parentNode.parentNode.parentNode.parentNode;
		let inputItems = mainInput.querySelectorAll('input');

		inputItems.forEach(function(element) {
			element.checked = '';
		});

		let activeLink = mainInput.querySelectorAll('.title--active--fix-f a');
		activeLink.forEach(function(element) {
			element.classList.add('d-none');
		});

		mainInput.querySelector('.title--no-active--fix-f').classList.remove('d-none');

		let checboxWrapper = this.parentNode.parentNode;
		checboxWrapper.style.marginRight = '100px';

		this.addEventListener('click', inputOn);
		this.removeEventListener('click', inputOff);
	};

	if(btn) btn.forEach(function(element) {
		element.addEventListener('click', inputOn);
	});
})();
