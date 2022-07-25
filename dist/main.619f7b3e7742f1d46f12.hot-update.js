"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _files_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _libs_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/popup.js */ "./src/js/libs/popup.js");
/* harmony import */ var _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/forms/forms.js */ "./src/js/files/forms/forms.js");
/* harmony import */ var _libs_watcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/watcher.js */ "./src/js/libs/watcher.js");
/* harmony import */ var _files_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files/scroll/scroll.js */ "./src/js/files/scroll/scroll.js");
/* harmony import */ var _files_script_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files/script.js */ "./src/js/files/script.js");
/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей


// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
// flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();

/*
Модуль работы со спойлерами
Документация: https://template.fls.guru/template-docs/modul-spojlery.html
Сниппет (HTML): spollers
*/
// flsFunctions.spollers();

/*
Модуль работы с табами
Документация: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/
// flsFunctions.tabs();

/*
Модуль "показать еще"
Документация: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сниппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Попапы
Документация: https://template.fls.guru/template-docs/funkcional-popup.html
Сниппет (HTML): pl
*/


/*
Модуль параллакса мышью
Документация: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================


/* Работа с полями формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/

/* Oтправка формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль формы "колличество" */
// flsForms.formQuantity();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Модуль работы с select. */
// import './libs/select.js'

/* Модуль работы с календарем */
// import './files/forms/datepicker.js'

/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
// import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
// import './files/scroll/lazyload.js';

// Наблюдатель за объектами c атрибутом data-watch
// Документация: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сниппет(HTML):


// Функции работы скроллом


// Плавная навигация по странице
// Документация: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// Документация: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// Функционал липкого блока
// flsScroll.stickyBlock();

// Модуль поекранної прокрутки
// Документация: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сниппет(HTML):
// import './libs/fullpage.js'

// Модуль паралаксу
// Документация:
// Сниппет(HTML):
// import './libs/parallax.js'

// Модуль анімація цифрового лічильника
// Документация:
// Сниппет(HTML):
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: 
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
// Документация: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */

//============================================================================================================================================================================================================================================

/***/ }),

/***/ "./src/js/libs/popup.js":
/*!******************************!*\
  !*** ./src/js/libs/popup.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../files/functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _files_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files/modules.js */ "./src/js/files/modules.js");
// Модуль попапов
// (c) Фрилансер по жизни, Хмурый Кот
// Документация по работе в шаблоне: https://template.fls.guru/template-docs/funkcional-popup.html
// Сниппет (HTML): pl

// Подключение функционала "Чертогов Фрилансера"



// Класс Popup
class Popup {
	constructor(options) {
		let config = {
			logging: true,
			init: true,
			// Для кнопок 
			attributeOpenButton: 'data-popup', // Атрибут для кнопки, которая вызывает попап
			attributeCloseButton: 'data-close', // Атрибут для кнопки, которая закрывает попап
			// Для сторонних объектов
			fixElementSelector: '[data-lp]', // Атрибут для элементов с левым паддингом (которые fixed)
			// Для объекта попапа
			youtubeAttribute: 'data-popup-youtube', // Атрибут для кода youtube
			youtubePlaceAttribute: 'data-popup-youtube-place', // Атрибут для вставки ролика youtube
			setAutoplayYoutube: true,
			// Изменение классов
			classes: {
				popup: 'popup',
				// popupWrapper: 'popup__wrapper',
				popupContent: 'popup__content',
				popupActive: 'popup_show', // Добавляется для попапа, когда он открывается
				bodyActive: 'popup-show', // Добавляется для боди, когда попап открыт
			},
			focusCatch: true, // Фокус внутри попапа зациклен
			closeEsc: true, // Закрытие по ESC
			bodyLock: true, // Блокировка скролла
			hashSettings: {
				location: true, // Хэш в адресной строке
				goHash: true, // Переход по наличию в адресной строке
			},
			on: { // События
				beforeOpen: function () { },
				afterOpen: function () { },
				beforeClose: function () { },
				afterClose: function () { },
			},
		}
		this.youTubeCode;
		this.isOpen = false;
		// Текущее окно
		this.targetOpen = {
			selector: false,
			element: false,
		}
		// Предыдущее открытое
		this.previousOpen = {
			selector: false,
			element: false,
		}
		// Последнее закрытое
		this.lastClosed = {
			selector: false,
			element: false,
		}
		this._dataValue = false;
		this.hash = false;

		this._reopen = false;
		this._selectorOpen = false;

		this.lastFocusEl = false;
		this._focusEl = [
			'a[href]',
			'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
			'button:not([disabled]):not([aria-hidden])',
			'select:not([disabled]):not([aria-hidden])',
			'textarea:not([disabled]):not([aria-hidden])',
			'area[href]',
			'iframe',
			'object',
			'embed',
			'[contenteditable]',
			'[tabindex]:not([tabindex^="-"])'
		];
		//this.options = Object.assign(config, options);
		this.options = {
			...config,
			...options,
			classes: {
				...config.classes,
				...options?.classes,
			},
			hashSettings: {
				...config.hashSettings,
				...options?.hashSettings,
			},
			on: {
				...config.on,
				...options?.on,
			}
		}
		this.bodyLock = false;
		this.options.init ? this.initPopups() : null
	}
	initPopups() {
		this.popupLogging(`Проснулся`);
		this.eventsPopup();
	}
	eventsPopup() {
		// Клик на всем документе
		document.addEventListener("click", function (e) {
			// Клик по кнопке "открыть"
			const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
			if (buttonOpen) {
				e.preventDefault();
				this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ?
					buttonOpen.getAttribute(this.options.attributeOpenButton) :
					'error';
				this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ?
					buttonOpen.getAttribute(this.options.youtubeAttribute) :
					null;
				if (this._dataValue !== 'error') {
					if (!this.isOpen) this.lastFocusEl = buttonOpen;
					this.targetOpen.selector = `${this._dataValue}`;
					this._selectorOpen = true;
					this.open();
					return;

				} else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);

				return;
			}
			// Закрытие на пустом месте (popup__wrapper) и кнопки закрытия (popup__close) для закрытия
			const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
			if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
				e.preventDefault();
				this.close();
				return;
			}
		}.bind(this));
		// Закрытие по ESC
		document.addEventListener("keydown", function (e) {
			if (this.options.closeEsc && e.which == 27 && e.code === 'Escape' && this.isOpen) {
				e.preventDefault();
				this.close();
				return;
			}
			if (this.options.focusCatch && e.which == 9 && this.isOpen) {
				this._focusCatch(e);
				return;
			}
		}.bind(this))

		// Открытие по хешу
		if (this.options.hashSettings.goHash) {
			// Проверка изменения адресной строки
			window.addEventListener('hashchange', function () {
				if (window.location.hash) {
					this._openToHash();
				} else {
					this.close(this.targetOpen.selector);
				}
			}.bind(this))

			window.addEventListener('load', function () {
				if (window.location.hash) {
					this._openToHash();
				}
			}.bind(this))
		}
	}
	open(selectorValue) {
		if (_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyLockStatus) {
			// Если перед открытием попапа был режим lock
			this.bodyLock = document.documentElement.classList.contains('lock') && !this.isOpen ? true : false;

			// Если ввести значение селектора (селектор настраивается в options)
			if (selectorValue && typeof (selectorValue) === "string" && selectorValue.trim() !== "") {
				this.targetOpen.selector = selectorValue;
				this._selectorOpen = true;
			}
			if (this.isOpen) {
				this._reopen = true;
				this.close();
			}
			if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
			if (!this._reopen) this.previousActiveElement = document.activeElement;

			this.targetOpen.element = document.querySelector(this.targetOpen.selector);

			if (this.targetOpen.element) {
				// YouTube
				if (this.youTubeCode) {
					const codeVideo = this.youTubeCode;
					const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`
					const iframe = document.createElement('iframe');
					iframe.setAttribute('allowfullscreen', '');

					const autoplay = this.options.setAutoplayYoutube ? 'autoplay;' : '';
					iframe.setAttribute('allow', `${autoplay}; encrypted-media`);

					iframe.setAttribute('src', urlVideo);

					if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
						const youtubePlace = this.targetOpen.element.querySelector('.popup__text').setAttribute(`${this.options.youtubePlaceAttribute}`, '');
					}
					this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
				}
				if (this.options.hashSettings.location) {
					// Получение хэша и его выставление 
					this._getHash();
					this._setHash();
				}

				// До открытия
				this.options.on.beforeOpen(this);
				// Создаем свое событие после открытия попапа
				document.dispatchEvent(new CustomEvent("beforePopupOpen", {
					detail: {
						popup: this
					}
				}));

				this.targetOpen.element.classList.add(this.options.classes.popupActive);
				document.documentElement.classList.add(this.options.classes.bodyActive);

				if (!this._reopen) {
					!this.bodyLock ? (0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyLock)() : null;
				}
				else this._reopen = false;

				this.targetOpen.element.setAttribute('aria-hidden', 'false');

				// Запоминаю это открытое окно. Оно будет последним открытым
				this.previousOpen.selector = this.targetOpen.selector;
				this.previousOpen.element = this.targetOpen.element;

				this._selectorOpen = false;

				this.isOpen = true;

				setTimeout(() => {
					this._focusTrap();
				}, 50);

				// После открытия
				this.options.on.afterOpen(this);
				// Создаем свое событие после открытия попапа
				document.dispatchEvent(new CustomEvent("afterPopupOpen", {
					detail: {
						popup: this
					}
				}));
				this.popupLogging(`Открыл попап`);

			} else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
		}
	}
	close(selectorValue) {
		if (selectorValue && typeof (selectorValue) === "string" && selectorValue.trim() !== "") {
			this.previousOpen.selector = selectorValue;
		}
		if (!this.isOpen || !_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyLockStatus) {
			return;
		}
		// До закрытия
		this.options.on.beforeClose(this);
		// Создаем свое событие перед закрытием попапа
		document.dispatchEvent(new CustomEvent("beforePopupClose", {
			detail: {
				popup: this
			}
		}));

		// YouTube
		if (this.youTubeCode) {
			if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`))
				this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = '';
		}
		this.previousOpen.element.classList.remove(this.options.classes.popupActive);
		// aria-hidden
		this.previousOpen.element.setAttribute('aria-hidden', 'true');
		if (!this._reopen) {
			document.documentElement.classList.remove(this.options.classes.bodyActive);
			!this.bodyLock ? (0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyUnlock)() : null;
			this.isOpen = false;
		}
		// Очищение адресной строки
		this._removeHash();
		if (this._selectorOpen) {
			this.lastClosed.selector = this.previousOpen.selector;
			this.lastClosed.element = this.previousOpen.element;

		}
		// После закрытия
		this.options.on.afterClose(this);
		// Создаем свое событие после закрытия попапа
		document.dispatchEvent(new CustomEvent("afterPopupClose", {
			detail: {
				popup: this
			}
		}));

		setTimeout(() => {
			this._focusTrap();
		}, 50);

		this.popupLogging(`Закрыл попап`);
	}
	// Получение хэша 
	_getHash() {
		if (this.options.hashSettings.location) {
			this.hash = this.targetOpen.selector.includes('#') ?
				this.targetOpen.selector : this.targetOpen.selector.replace('.', '#')
		}
	}
	_openToHash() {
		let classInHash = document.querySelector(`.${window.location.hash.replace('#', '')}`) ? `.${window.location.hash.replace('#', '')}` :
			document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` :
				null;

		const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace('.', "#")}"]`);
		if (buttons && classInHash) this.open(classInHash);
	}
	// Утсановка хэша
	_setHash() {
		history.pushState('', '', this.hash);
	}
	_removeHash() {
		history.pushState('', '', window.location.href.split('#')[0])
	}
	_focusCatch(e) {
		const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
		const focusArray = Array.prototype.slice.call(focusable);
		const focusedIndex = focusArray.indexOf(document.activeElement);

		if (e.shiftKey && focusedIndex === 0) {
			focusArray[focusArray.length - 1].focus();
			e.preventDefault();
		}
		if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
			focusArray[0].focus();
			e.preventDefault();
		}
	}
	_focusTrap() {
		const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
		if (!this.isOpen && this.lastFocusEl) {
			this.lastFocusEl.focus();
		} else {
			focusable[0].focus();
		}
	}
	// Функция вывода в консоль
	popupLogging(message) {
		this.options.logging ? (0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.FLS)(`[Попапос]: ${message}`) : null;
	}
}
// Запускаем и добавляем в объект модулей
_files_modules_js__WEBPACK_IMPORTED_MODULE_1__.flsModules.popup = new Popup({});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("df4de40ae74e7060df5b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MTlmN2IzZTc3NDJmMWQ0NmYxMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQSx1REFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzFCO0FBQ0E7QUFDc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7QUFDM0I7Ozs7Ozs7Ozs7Ozs7QUN4TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRHO0FBQzNEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFNBQVM7QUFDVCwrQkFBK0I7QUFDL0IsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQywrQkFBK0I7QUFDL0IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaUNBQWlDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQXVELHFCQUFxQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxrQ0FBa0M7QUFDOUUsNENBQTRDLGtDQUFrQztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxVQUFVO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRSxxQ0FBcUMsV0FBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsbUNBQW1DO0FBQ3ZGLGlHQUFpRyxtQ0FBbUM7QUFDcEk7QUFDQSwrQ0FBK0MsbUNBQW1DO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrREFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG1DQUFtQztBQUNwRiw4Q0FBOEMsbUNBQW1DO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxzQ0FBc0MsU0FBUyxzQ0FBc0M7QUFDcEksNkJBQTZCLHFCQUFxQixRQUFRLHFCQUFxQjtBQUMvRTtBQUNBO0FBQ0EsNkNBQTZDLGtDQUFrQyxLQUFLLFlBQVksa0NBQWtDLGtDQUFrQyxLQUFLLFlBQVksa0NBQWtDLGtDQUFrQyxLQUFLLDhCQUE4QjtBQUM1UjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3REFBRyxlQUFlLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsK0RBQWdCLGVBQWU7Ozs7Ozs7O1VDdFcvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2xpYnMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4oaSkg0JrQvtC0INC/0L7Qv9Cw0LTQsNC10YIg0LIg0LjRgtC+0LPQvtCy0YvQuSDRhNCw0LnQuyxcclxu0YLQvtC70YzQutC+INC60L7Qs9C00LAg0LLRi9C30LLQsNC90LAg0YTRg9C90LrRhtC40Y8sXHJcbtC90LDQv9GA0LjQvNC10YAgZmxzRnVuY3Rpb25zLnNwb2xsZXJzKCk7XHJcbtCY0LvQuCDQutC+0LPQtNCwINC40LzQv9C+0YDRgtC40YDQvtCy0LDQvSDQstC10YHRjCDRhNCw0LnQuyxcclxu0L3QsNC/0YDQuNC80LXRgCBpbXBvcnQgXCJmaWxlcy9zY3JpcHQuanNcIjtcclxu0J3QtdC40YHQv9C+0LvRjNC30YPQtdC80YvQuSAo0L3QtSDQstGL0LfQstCw0L3QvdGL0LkpXHJcbtC60L7QtCDQsiDQuNGC0L7Qs9C+0LLRi9C5INGE0LDQudC7INC90LUg0L/QvtC/0LDQtNCw0LXRgi5cclxuXHJcbtCV0YHQu9C4INC80Ysg0YXQvtGC0LjQvCDQtNC+0LHQsNCy0LjRgtGMINC80L7QtNGD0LvRjFxyXG7RgdC70LXQtNGD0LXRgiDQtdCz0L4g0YDQsNGB0YHQutC+0LzQtdC90YLQuNGA0L7QstCw0YLRjFxyXG4qL1xyXG5cclxuLy8g0JLQutC70Y7Rh9C40YLRjC/QstGL0LrQu9GO0YfQuNGC0YwgRkxTIChGdWxsIExvZ2dpbmcgU3lzdGVtKSAo0LIg0YDQsNCx0L7RgtC1KVxyXG53aW5kb3dbJ0ZMUyddID0gdHJ1ZTtcclxuXHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0L7RgdC90L7QstC90L7Qs9C+INGE0LDQudC70LAg0YHRgtC40LvQtdC5XHJcbmltcG9ydCBcIi4uL3Njc3Mvc3R5bGUuc2Nzc1wiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0KTRg9C90LrRhtC40L7QvdCw0LsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0ICogYXMgZmxzRnVuY3Rpb25zIGZyb20gXCIuL2ZpbGVzL2Z1bmN0aW9ucy5qc1wiO1xyXG5cclxuLyog0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LTQtNC10YDQttC60Lggd2VicCwg0LTQvtCx0LDQstC70LXQvdC40LUg0LrQu9Cw0YHRgdCwIHdlYnAg0LjQu9C4IG5vLXdlYnAg0LTQu9GPIEhUTUwgKi9cclxuLyogKGkpINC90LXQvtCx0YXQvtC00LjQvNC+INC00LvRjyDQutC+0YDRgNC10LrRgtC90L7Qs9C+INC+0YLQvtCx0YDQsNC20LXQvdC40Y8gd2VicCDQuNC3IGNzcyAgKi9cclxuZmxzRnVuY3Rpb25zLmlzV2VicCgpO1xyXG4vKiDQlNC+0LHQsNCy0LvQtdC90LjQtSDQutC70LDRgdGB0LAgdG91Y2gg0LTQu9GPIEhUTUwg0LXRgdC70Lgg0LHRgNCw0YPQt9C10YAg0LzQvtCx0LjQu9GM0L3Ri9C5ICovXHJcbi8vIGZsc0Z1bmN0aW9ucy5hZGRUb3VjaENsYXNzKCk7XHJcbi8qINCU0L7QsdCw0LLQu9C10L3QuNC1IGxvYWRlZCDQtNC70Y8gSFRNTCDQv9C+0YHQu9C1INC/0L7Qu9C90L7QuSDQt9Cw0LPRgNGD0LfQutC4INGB0YLRgNCw0L3QuNGG0YsgKi9cclxuLy8gZmxzRnVuY3Rpb25zLmFkZExvYWRlZENsYXNzKCk7XHJcbi8qINCc0L7QtNGD0LvRjCDQtNC70Y8g0YDQsNCx0L7RgtGLINGBINC80LXQvdGOICjQkdGD0YDQs9C10YApICovXHJcbi8vIGZsc0Z1bmN0aW9ucy5tZW51SW5pdCgpO1xyXG4vKiDQo9GH0LXRgiDQv9C70LDQstCw0Y7RidC10Lkg0L/QsNC90LXQu9C4INC90LAg0LzQvtCx0LjQu9GM0L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQstCw0YUg0L/RgNC4IDEwMHZoICovXHJcbi8vIGZsc0Z1bmN0aW9ucy5mdWxsVkhmaXgoKTtcclxuXHJcbi8qXHJcbtCc0L7QtNGD0LvRjCDRgNCw0LHQvtGC0Ysg0YHQviDRgdC/0L7QudC70LXRgNCw0LzQuFxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1zcG9qbGVyeS5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogc3BvbGxlcnNcclxuKi9cclxuLy8gZmxzRnVuY3Rpb25zLnNwb2xsZXJzKCk7XHJcblxyXG4vKlxyXG7QnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGBINGC0LDQsdCw0LzQuFxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC10YWJ5Lmh0bWxcclxu0KHQvdC40L/Qv9C10YIgKEhUTUwpOiB0YWJzXHJcbiovXHJcbi8vIGZsc0Z1bmN0aW9ucy50YWJzKCk7XHJcblxyXG4vKlxyXG7QnNC+0LTRg9C70YwgXCLQv9C+0LrQsNC30LDRgtGMINC10YnQtVwiXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLXBva2F6YXQtZXNoaGpvLmh0bWxcclxu0KHQvdC40L/Qv9C10YIgKEhUTUwpOiBzaG93bW9yZVxyXG4qL1xyXG4vLyBmbHNGdW5jdGlvbnMuc2hvd01vcmUoKTtcclxuXHJcbi8qXHJcbtCf0L7Qv9Cw0L/Ri1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9mdW5rY2lvbmFsLXBvcHVwLmh0bWxcclxu0KHQvdC40L/Qv9C10YIgKEhUTUwpOiBwbFxyXG4qL1xyXG5pbXBvcnQgJy4vbGlicy9wb3B1cC5qcydcclxuXHJcbi8qXHJcbtCc0L7QtNGD0LvRjCDQv9Cw0YDQsNC70LvQsNC60YHQsCDQvNGL0YjRjNGOXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLWFuaW1hY2lpLXBhcmFsbGFrcy1vYmVrdG92LXByaS1kdml6aGVuaWktbXlzaGkuaHRtbFxyXG4qL1xyXG4vLyBpbXBvcnQgJy4vbGlicy9wYXJhbGxheC1tb3VzZS5qcydcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCg0LDQsdC+0YLQsCDRgSDRhNC+0YDQvNCw0LzQuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgKiBhcyBmbHNGb3JtcyBmcm9tIFwiLi9maWxlcy9mb3Jtcy9mb3Jtcy5qc1wiO1xyXG5cclxuLyog0KDQsNCx0L7RgtCwINGBINC/0L7Qu9GP0LzQuCDRhNC+0YDQvNGLICovXHJcbi8qINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL3JhYm90YS1zLWZvcm1hbWkuaHRtbCAqL1xyXG4vKlxyXG5mbHNGb3Jtcy5mb3JtRmllbGRzSW5pdCh7XHJcblx0dmlld1Bhc3M6IGZhbHNlLFxyXG5cdGF1dG9IZWlnaHQ6IGZhbHNlXHJcbn0pO1xyXG4qL1xyXG5cclxuLyogT9GC0L/RgNCw0LLQutCwINGE0L7RgNC80YsgKi9cclxuLyog0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvcmFib3RhLXMtZm9ybWFtaS5odG1sICovXHJcbi8vIGZsc0Zvcm1zLmZvcm1TdWJtaXQoKTtcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDRhNC+0YDQvNGLIFwi0LrQvtC70LvQuNGH0LXRgdGC0LLQvlwiICovXHJcbi8vIGZsc0Zvcm1zLmZvcm1RdWFudGl0eSgpO1xyXG5cclxuLyog0JzQvtC00YPQu9GMINC30LLQtdC30LTQvdC+0LPQviDRgNC10LnRgtC40L3Qs9CwICovXHJcbi8vIGZsc0Zvcm1zLmZvcm1SYXRpbmcoKTtcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDRgNCw0LHQvtGC0Ysg0YEgc2VsZWN0LiAqL1xyXG4vLyBpbXBvcnQgJy4vbGlicy9zZWxlY3QuanMnXHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGBINC60LDQu9C10L3QtNCw0YDQtdC8ICovXHJcbi8vIGltcG9ydCAnLi9maWxlcy9mb3Jtcy9kYXRlcGlja2VyLmpzJ1xyXG5cclxuLyogKNCSINGA0LDQsdC+0YLQtSkg0JzQvtC00YPQu9GMINGA0LDQsdC+0YLRiyDRgSDQvNCw0YHQutCw0LzQuC4qL1xyXG4vKlxyXG7Qn9C+0LTQutC70Y7Rh9C10L3QuNC1INC4INC90LDRgdGC0YDQvtC50LrQsCDQstGL0L/QvtC70L3Rj9C10YLRgdGPINCyINGE0LDQudC70LUganMvZmlsZXMvZm9ybXMvaW5wdXRtYXNrLmpzXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTpcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0LvQsNCz0LjQvdCwOiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL2lucHV0bWFza1xyXG7QodC90LjQv9C/0LXRgihIVE1MKTpcclxuKi9cclxuLy8gaW1wb3J0IFwiLi9maWxlcy9mb3Jtcy9pbnB1dG1hc2suanNcIjtcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDRgNCw0LHQvtGC0Ysg0YEg0L/QvtC70LfRg9C90LrQvtC8ICovXHJcbi8qXHJcbtCf0L7QtNC60LvRjtGH0LXQvdC40LUg0Lgg0L3QsNGB0YLRgNC+0LnQutCwINCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0LIg0YTQsNC50LvQtSBqcy9maWxlcy9mb3Jtcy9yYW5nZS5qc1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6XHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C70LDQs9C40L3QsDogaHR0cHM6Ly9yZWZyZXNobGVzcy5jb20vbm91aXNsaWRlci9cclxu0KHQvdC40L/Qv9C10YIgKEhUTUwpOiByYW5nZVxyXG4qL1xyXG4vLyBpbXBvcnQgXCIuL2ZpbGVzL2Zvcm1zL3JhbmdlLmpzXCI7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGBINC/0L7QtNGB0LrQsNC30LrQsNC80LggKHRpcHB5KSAqL1xyXG4vKlxyXG7Qn9C+0LTQutC70Y7Rh9C10L3QuNC1INC/0LvQsNCz0LjQvdCwIFRpcHB5LmpzINC4INC90LDRgdGC0YDQvtC50LrQsCDQstGL0L/QvtC70L3Rj9C10YLRgdGPINCyINGE0LDQudC70LUganMvZmlsZXMvdGlwcHkuanNcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0L4g0YDQsNCx0L7RgtC1INCyINGI0LDQsdC70L7QvdC1OlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/Qu9Cw0LPQuNC90LA6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy9cclxu0KHQvdC40L/Qv9C10YIgKEhUTUwpOiB0aXAgKNC00L7QsdCw0LLQu9GP0LXRgiDQsNGC0YDQuNCx0YPRgiDRgSDQv9C+0LTRgdC60LDQt9C60L7QuSDQtNC70Y8gaHRtbCDRgtC10LPQsClcclxuKi9cclxuLy8gaW1wb3J0IFwiLi9maWxlcy90aXBweS5qc1wiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0KDQsNCx0L7RgtCwINGB0L4g0YHQu9Cw0LnQtNC10YDQvtC8IChTd2lwZXIpID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8qXHJcbtCd0LDRgdGC0YDQvtC50LrQsCDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC/0LvQsNCz0LjQvdCwINGB0LvQsNC50LTQtdGA0LAgU3dpcGVyINC4INC90L7QstGL0YUg0YHQu9Cw0LnQtNC10YDQvtCyINCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0LIg0YTQsNC50LvQtSBqcy9maWxlcy9zbGlkZXJzLmpzXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL3JhYm90YS1zby1zbGFqZGVyb20tc3dpcGVyLmh0bWxcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0LvQsNCz0LjQvdCwOiBodHRwczovL3N3aXBlcmpzLmNvbS9cclxu0KHQvdC40L/Qv9C10YIoSFRNTCk6IHN3aXBlclxyXG4qL1xyXG4vLyBpbXBvcnQgXCIuL2ZpbGVzL3NsaWRlcnMuanNcIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCc0L7QtNGD0LvQuCDRgNCw0LHQvtGC0Ysg0YEg0L/RgNC+0LrRgNGD0YLQutC+0Lkg0YHRgtGA0LDQvdC40YbRiyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLypcclxu0JjQt9C80LXQvdC10L3QuNC1INC00LjQt9Cw0LnQvdCwINGB0LrRgNC+0LvQu9Cx0LDRgNCwXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTog0JIgSFRNTCDQtNC+0LHQsNCy0LvRj9C10Lwg0Log0LHQu9C+0LrRgyDQsNGC0YDQuNCx0YPRgiBkYXRhLXNpbXBsZWJhclxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/Qu9Cw0LPQuNC90LA6IGh0dHBzOi8vZ2l0aHViLmNvbS9HcnNtdG8vc2ltcGxlYmFyL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3NpbXBsZWJhclxyXG7QodC90LjQv9C/0LXRgihIVE1MKTogXHJcbiovXHJcbi8vIGltcG9ydCAnLi9maWxlcy9zY3JvbGwvc2ltcGxlYmFyLmpzJztcclxuXHJcbi8vINCb0LXQvdC40LLQsNGPICjQvtGC0LvQvtC20LXQvdC90LDRjykg0LfQsNCz0YDRg9C30LrQsCDQutCw0YDRgtC40L3QvtC6XHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLWxlbml2YXlhLXBvZGdydXprYS1sYXp5LWxvYWRpbmcuaHRtbFxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/Qu9Cw0LPQuNC90LA6IGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJsb2svdmFuaWxsYS1sYXp5bG9hZFxyXG4vLyDQodC90LjQv9C/0LXRgihIVE1MKTpcclxuLy8gaW1wb3J0ICcuL2ZpbGVzL3Njcm9sbC9sYXp5bG9hZC5qcyc7XHJcblxyXG4vLyDQndCw0LHQu9GO0LTQsNGC0LXQu9GMINC30LAg0L7QsdGK0LXQutGC0LDQvNC4IGMg0LDRgtGA0LjQsdGD0YLQvtC8IGRhdGEtd2F0Y2hcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtbmFibGp1ZGF0ZWwtemEtcG95YXZsZW5pZW0tZWxlbWVudGEtcHJpLXNrcm9sbGUuaHRtbFxyXG4vLyDQodC90LjQv9C/0LXRgihIVE1MKTpcclxuaW1wb3J0ICcuL2xpYnMvd2F0Y2hlci5qcydcclxuXHJcbi8vINCk0YPQvdC60YbQuNC4INGA0LDQsdC+0YLRiyDRgdC60YDQvtC70LvQvtC8XHJcbmltcG9ydCAqIGFzIGZsc1Njcm9sbCBmcm9tIFwiLi9maWxlcy9zY3JvbGwvc2Nyb2xsLmpzXCI7XHJcblxyXG4vLyDQn9C70LDQstC90LDRjyDQvdCw0LLQuNCz0LDRhtC40Y8g0L/QviDRgdGC0YDQsNC90LjRhtC1XHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLXBsYXZub2otbmF2aWdhY2lpLXBvLXN0cmFuaWNlLmh0bWxcclxuLy8gZmxzU2Nyb2xsLnBhZ2VOYXZpZ2F0aW9uKCk7XHJcblxyXG4vLyDQpNGD0L3QutGG0LjQvtC90LDQuyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQutC70LDRgdGB0L7QsiDQuiDRhdC10LTQtdGA0YMg0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtVxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1kb2Jhdmxlbml5YS1rbGFzc292LWstc2hhcGtlLXByaS1wcm9rcnV0a2Utc3RyYW5pY3kuaHRtbFxyXG4vLyBmbHNTY3JvbGwuaGVhZGVyU2Nyb2xsKCk7XHJcblxyXG4vLyDQpNGD0L3QutGG0LjQvtC90LDQuyDQu9C40L/QutC+0LPQviDQsdC70L7QutCwXHJcbi8vIGZsc1Njcm9sbC5zdGlja3lCbG9jaygpO1xyXG5cclxuLy8g0JzQvtC00YPQu9GMINC/0L7QtdC60YDQsNC90L3QvtGXINC/0YDQvtC60YDRg9GC0LrQuFxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1wb2VrcmFubm9qLXByb2tydXRraS1zdHJhbmljeS1mdWxscGFnZS5odG1sXHJcbi8vINCh0L3QuNC/0L/QtdGCKEhUTUwpOlxyXG4vLyBpbXBvcnQgJy4vbGlicy9mdWxscGFnZS5qcydcclxuXHJcbi8vINCc0L7QtNGD0LvRjCDQv9Cw0YDQsNC70LDQutGB0YNcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOlxyXG4vLyDQodC90LjQv9C/0LXRgihIVE1MKTpcclxuLy8gaW1wb3J0ICcuL2xpYnMvcGFyYWxsYXguanMnXHJcblxyXG4vLyDQnNC+0LTRg9C70Ywg0LDQvdGW0LzQsNGG0ZbRjyDRhtC40YTRgNC+0LLQvtCz0L4g0LvRltGH0LjQu9GM0L3QuNC60LBcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOlxyXG4vLyDQodC90LjQv9C/0LXRgihIVE1MKTpcclxuLy8gZmxzU2Nyb2xsLmRpZ2l0c0NvdW50ZXIoKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCT0LDQu9C10YDQtdGPID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8qXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTogXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C70LDQs9C40L3QsDogaHR0cHM6Ly93d3cubGlnaHRnYWxsZXJ5anMuY29tL2RvY3MvXHJcbtCh0L3QuNC/0L/QtdGCKEhUTUwpOlxyXG4qL1xyXG4vLyBpbXBvcnQgXCIuL2ZpbGVzL2dhbGxlcnkuanNcIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCf0YDQvtGH0LjQtSDQv9C70LDQs9C40L3RiyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qINCU0LjQvdCw0LzQuNGH0LXRgdC60LjQuSDQsNC00LDQv9GC0LjQsiAqL1xyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9kaW5hbWljaGVza2lqLWFkYXB0aXYuaHRtbFxyXG4vLyBpbXBvcnQgXCIuL2xpYnMvZHluYW1pY19hZGFwdC5qc1wiO1xyXG5cclxuLyog0KTQvtGA0LzQsNGC0LjRgNC+0LLQsNC90LjQtSDRh9C40YHQtdC7ICovXHJcbi8vIGltcG9ydCAnLi9saWJzL3dOdW1iLm1pbi5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQn9GA0L7Rh9C10LUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLyog0J/QvtC00LrQu9GO0YfQsNC10Lwg0YTQsNC50LvRiyDRgdC+INGB0LLQvtC40Lwg0LrQvtC00L7QvCAqL1xyXG5pbXBvcnQgXCIuL2ZpbGVzL3NjcmlwdC5qc1wiO1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IiwiLy8g0JzQvtC00YPQu9GMINC/0L7Qv9Cw0L/QvtCyXHJcbi8vIChjKSDQpNGA0LjQu9Cw0L3RgdC10YAg0L/QviDQttC40LfQvdC4LCDQpdC80YPRgNGL0Lkg0JrQvtGCXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL2Z1bmtjaW9uYWwtcG9wdXAuaHRtbFxyXG4vLyDQodC90LjQv9C/0LXRgiAoSFRNTCk6IHBsXHJcblxyXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGE0YPQvdC60YbQuNC+0L3QsNC70LAgXCLQp9C10YDRgtC+0LPQvtCyINCk0YDQuNC70LDQvdGB0LXRgNCwXCJcclxuaW1wb3J0IHsgaXNNb2JpbGUsIGJvZHlMb2NrU3RhdHVzLCBib2R5TG9jaywgYm9keVVubG9jaywgYm9keUxvY2tUb2dnbGUsIEZMUyB9IGZyb20gXCIuLi9maWxlcy9mdW5jdGlvbnMuanNcIjtcclxuaW1wb3J0IHsgZmxzTW9kdWxlcyB9IGZyb20gXCIuLi9maWxlcy9tb2R1bGVzLmpzXCI7XHJcblxyXG4vLyDQmtC70LDRgdGBIFBvcHVwXHJcbmNsYXNzIFBvcHVwIHtcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcblx0XHRsZXQgY29uZmlnID0ge1xyXG5cdFx0XHRsb2dnaW5nOiB0cnVlLFxyXG5cdFx0XHRpbml0OiB0cnVlLFxyXG5cdFx0XHQvLyDQlNC70Y8g0LrQvdC+0L/QvtC6IFxyXG5cdFx0XHRhdHRyaWJ1dGVPcGVuQnV0dG9uOiAnZGF0YS1wb3B1cCcsIC8vINCQ0YLRgNC40LHRg9GCINC00LvRjyDQutC90L7Qv9C60LgsINC60L7RgtC+0YDQsNGPINCy0YvQt9GL0LLQsNC10YIg0L/QvtC/0LDQv1xyXG5cdFx0XHRhdHRyaWJ1dGVDbG9zZUJ1dHRvbjogJ2RhdGEtY2xvc2UnLCAvLyDQkNGC0YDQuNCx0YPRgiDQtNC70Y8g0LrQvdC+0L/QutC4LCDQutC+0YLQvtGA0LDRjyDQt9Cw0LrRgNGL0LLQsNC10YIg0L/QvtC/0LDQv1xyXG5cdFx0XHQvLyDQlNC70Y8g0YHRgtC+0YDQvtC90L3QuNGFINC+0LHRitC10LrRgtC+0LJcclxuXHRcdFx0Zml4RWxlbWVudFNlbGVjdG9yOiAnW2RhdGEtbHBdJywgLy8g0JDRgtGA0LjQsdGD0YIg0LTQu9GPINGN0LvQtdC80LXQvdGC0L7QsiDRgSDQu9C10LLRi9C8INC/0LDQtNC00LjQvdCz0L7QvCAo0LrQvtGC0L7RgNGL0LUgZml4ZWQpXHJcblx0XHRcdC8vINCU0LvRjyDQvtCx0YrQtdC60YLQsCDQv9C+0L/QsNC/0LBcclxuXHRcdFx0eW91dHViZUF0dHJpYnV0ZTogJ2RhdGEtcG9wdXAteW91dHViZScsIC8vINCQ0YLRgNC40LHRg9GCINC00LvRjyDQutC+0LTQsCB5b3V0dWJlXHJcblx0XHRcdHlvdXR1YmVQbGFjZUF0dHJpYnV0ZTogJ2RhdGEtcG9wdXAteW91dHViZS1wbGFjZScsIC8vINCQ0YLRgNC40LHRg9GCINC00LvRjyDQstGB0YLQsNCy0LrQuCDRgNC+0LvQuNC60LAgeW91dHViZVxyXG5cdFx0XHRzZXRBdXRvcGxheVlvdXR1YmU6IHRydWUsXHJcblx0XHRcdC8vINCY0LfQvNC10L3QtdC90LjQtSDQutC70LDRgdGB0L7QslxyXG5cdFx0XHRjbGFzc2VzOiB7XHJcblx0XHRcdFx0cG9wdXA6ICdwb3B1cCcsXHJcblx0XHRcdFx0Ly8gcG9wdXBXcmFwcGVyOiAncG9wdXBfX3dyYXBwZXInLFxyXG5cdFx0XHRcdHBvcHVwQ29udGVudDogJ3BvcHVwX19jb250ZW50JyxcclxuXHRcdFx0XHRwb3B1cEFjdGl2ZTogJ3BvcHVwX3Nob3cnLCAvLyDQlNC+0LHQsNCy0LvRj9C10YLRgdGPINC00LvRjyDQv9C+0L/QsNC/0LAsINC60L7Qs9C00LAg0L7QvSDQvtGC0LrRgNGL0LLQsNC10YLRgdGPXHJcblx0XHRcdFx0Ym9keUFjdGl2ZTogJ3BvcHVwLXNob3cnLCAvLyDQlNC+0LHQsNCy0LvRj9C10YLRgdGPINC00LvRjyDQsdC+0LTQuCwg0LrQvtCz0LTQsCDQv9C+0L/QsNC/INC+0YLQutGA0YvRglxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb2N1c0NhdGNoOiB0cnVlLCAvLyDQpNC+0LrRg9GBINCy0L3Rg9GC0YDQuCDQv9C+0L/QsNC/0LAg0LfQsNGG0LjQutC70LXQvVxyXG5cdFx0XHRjbG9zZUVzYzogdHJ1ZSwgLy8g0JfQsNC60YDRi9GC0LjQtSDQv9C+IEVTQ1xyXG5cdFx0XHRib2R5TG9jazogdHJ1ZSwgLy8g0JHQu9C+0LrQuNGA0L7QstC60LAg0YHQutGA0L7Qu9C70LBcclxuXHRcdFx0aGFzaFNldHRpbmdzOiB7XHJcblx0XHRcdFx0bG9jYXRpb246IHRydWUsIC8vINCl0Y3RiCDQsiDQsNC00YDQtdGB0L3QvtC5INGB0YLRgNC+0LrQtVxyXG5cdFx0XHRcdGdvSGFzaDogdHJ1ZSwgLy8g0J/QtdGA0LXRhdC+0LQg0L/QviDQvdCw0LvQuNGH0LjRjiDQsiDQsNC00YDQtdGB0L3QvtC5INGB0YLRgNC+0LrQtVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbjogeyAvLyDQodC+0LHRi9GC0LjRj1xyXG5cdFx0XHRcdGJlZm9yZU9wZW46IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdFx0XHRhZnRlck9wZW46IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdFx0XHRiZWZvcmVDbG9zZTogZnVuY3Rpb24gKCkgeyB9LFxyXG5cdFx0XHRcdGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHRcdHRoaXMueW91VHViZUNvZGU7XHJcblx0XHR0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG5cdFx0Ly8g0KLQtdC60YPRidC10LUg0L7QutC90L5cclxuXHRcdHRoaXMudGFyZ2V0T3BlbiA9IHtcclxuXHRcdFx0c2VsZWN0b3I6IGZhbHNlLFxyXG5cdFx0XHRlbGVtZW50OiBmYWxzZSxcclxuXHRcdH1cclxuXHRcdC8vINCf0YDQtdC00YvQtNGD0YnQtdC1INC+0YLQutGA0YvRgtC+0LVcclxuXHRcdHRoaXMucHJldmlvdXNPcGVuID0ge1xyXG5cdFx0XHRzZWxlY3RvcjogZmFsc2UsXHJcblx0XHRcdGVsZW1lbnQ6IGZhbHNlLFxyXG5cdFx0fVxyXG5cdFx0Ly8g0J/QvtGB0LvQtdC00L3QtdC1INC30LDQutGA0YvRgtC+0LVcclxuXHRcdHRoaXMubGFzdENsb3NlZCA9IHtcclxuXHRcdFx0c2VsZWN0b3I6IGZhbHNlLFxyXG5cdFx0XHRlbGVtZW50OiBmYWxzZSxcclxuXHRcdH1cclxuXHRcdHRoaXMuX2RhdGFWYWx1ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5oYXNoID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5fcmVvcGVuID0gZmFsc2U7XHJcblx0XHR0aGlzLl9zZWxlY3Rvck9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmxhc3RGb2N1c0VsID0gZmFsc2U7XHJcblx0XHR0aGlzLl9mb2N1c0VsID0gW1xyXG5cdFx0XHQnYVtocmVmXScsXHJcblx0XHRcdCdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG5cdFx0XHQnYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG5cdFx0XHQnc2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG5cdFx0XHQndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsXHJcblx0XHRcdCdhcmVhW2hyZWZdJyxcclxuXHRcdFx0J2lmcmFtZScsXHJcblx0XHRcdCdvYmplY3QnLFxyXG5cdFx0XHQnZW1iZWQnLFxyXG5cdFx0XHQnW2NvbnRlbnRlZGl0YWJsZV0nLFxyXG5cdFx0XHQnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ1xyXG5cdFx0XTtcclxuXHRcdC8vdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihjb25maWcsIG9wdGlvbnMpO1xyXG5cdFx0dGhpcy5vcHRpb25zID0ge1xyXG5cdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdC4uLm9wdGlvbnMsXHJcblx0XHRcdGNsYXNzZXM6IHtcclxuXHRcdFx0XHQuLi5jb25maWcuY2xhc3NlcyxcclxuXHRcdFx0XHQuLi5vcHRpb25zPy5jbGFzc2VzLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoYXNoU2V0dGluZ3M6IHtcclxuXHRcdFx0XHQuLi5jb25maWcuaGFzaFNldHRpbmdzLFxyXG5cdFx0XHRcdC4uLm9wdGlvbnM/Lmhhc2hTZXR0aW5ncyxcclxuXHRcdFx0fSxcclxuXHRcdFx0b246IHtcclxuXHRcdFx0XHQuLi5jb25maWcub24sXHJcblx0XHRcdFx0Li4ub3B0aW9ucz8ub24sXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuYm9keUxvY2sgPSBmYWxzZTtcclxuXHRcdHRoaXMub3B0aW9ucy5pbml0ID8gdGhpcy5pbml0UG9wdXBzKCkgOiBudWxsXHJcblx0fVxyXG5cdGluaXRQb3B1cHMoKSB7XHJcblx0XHR0aGlzLnBvcHVwTG9nZ2luZyhg0J/RgNC+0YHQvdGD0LvRgdGPYCk7XHJcblx0XHR0aGlzLmV2ZW50c1BvcHVwKCk7XHJcblx0fVxyXG5cdGV2ZW50c1BvcHVwKCkge1xyXG5cdFx0Ly8g0JrQu9C40Log0L3QsCDQstGB0LXQvCDQtNC+0LrRg9C80LXQvdGC0LVcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHQvLyDQmtC70LjQuiDQv9C+INC60L3QvtC/0LrQtSBcItC+0YLQutGA0YvRgtGMXCJcclxuXHRcdFx0Y29uc3QgYnV0dG9uT3BlbiA9IGUudGFyZ2V0LmNsb3Nlc3QoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufV1gKTtcclxuXHRcdFx0aWYgKGJ1dHRvbk9wZW4pIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5fZGF0YVZhbHVlID0gYnV0dG9uT3Blbi5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLmF0dHJpYnV0ZU9wZW5CdXR0b24pID9cclxuXHRcdFx0XHRcdGJ1dHRvbk9wZW4uZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9uKSA6XHJcblx0XHRcdFx0XHQnZXJyb3InO1xyXG5cdFx0XHRcdHRoaXMueW91VHViZUNvZGUgPSBidXR0b25PcGVuLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMueW91dHViZUF0dHJpYnV0ZSkgP1xyXG5cdFx0XHRcdFx0YnV0dG9uT3Blbi5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnlvdXR1YmVBdHRyaWJ1dGUpIDpcclxuXHRcdFx0XHRcdG51bGw7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2RhdGFWYWx1ZSAhPT0gJ2Vycm9yJykge1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmlzT3BlbikgdGhpcy5sYXN0Rm9jdXNFbCA9IGJ1dHRvbk9wZW47XHJcblx0XHRcdFx0XHR0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IgPSBgJHt0aGlzLl9kYXRhVmFsdWV9YDtcclxuXHRcdFx0XHRcdHRoaXMuX3NlbGVjdG9yT3BlbiA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLm9wZW4oKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHRoaXMucG9wdXBMb2dnaW5nKGDQntC5INC+0LksINC90LUg0LfQsNC/0L7Qu9C90LXQvSDQsNGC0YDQuNCx0YPRgiDRgyAke2J1dHRvbk9wZW4uY2xhc3NMaXN0fWApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g0JfQsNC60YDRi9GC0LjQtSDQvdCwINC/0YPRgdGC0L7QvCDQvNC10YHRgtC1IChwb3B1cF9fd3JhcHBlcikg0Lgg0LrQvdC+0L/QutC4INC30LDQutGA0YvRgtC40Y8gKHBvcHVwX19jbG9zZSkg0LTQu9GPINC30LDQutGA0YvRgtC40Y9cclxuXHRcdFx0Y29uc3QgYnV0dG9uQ2xvc2UgPSBlLnRhcmdldC5jbG9zZXN0KGBbJHt0aGlzLm9wdGlvbnMuYXR0cmlidXRlQ2xvc2VCdXR0b259XWApO1xyXG5cdFx0XHRpZiAoYnV0dG9uQ2xvc2UgfHwgIWUudGFyZ2V0LmNsb3Nlc3QoYC4ke3RoaXMub3B0aW9ucy5jbGFzc2VzLnBvcHVwQ29udGVudH1gKSAmJiB0aGlzLmlzT3Blbikge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9LmJpbmQodGhpcykpO1xyXG5cdFx0Ly8g0JfQsNC60YDRi9GC0LjQtSDQv9C+IEVTQ1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5jbG9zZUVzYyAmJiBlLndoaWNoID09IDI3ICYmIGUuY29kZSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5pc09wZW4pIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmZvY3VzQ2F0Y2ggJiYgZS53aGljaCA9PSA5ICYmIHRoaXMuaXNPcGVuKSB7XHJcblx0XHRcdFx0dGhpcy5fZm9jdXNDYXRjaChlKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH0uYmluZCh0aGlzKSlcclxuXHJcblx0XHQvLyDQntGC0LrRgNGL0YLQuNC1INC/0L4g0YXQtdGI0YNcclxuXHRcdGlmICh0aGlzLm9wdGlvbnMuaGFzaFNldHRpbmdzLmdvSGFzaCkge1xyXG5cdFx0XHQvLyDQn9GA0L7QstC10YDQutCwINC40LfQvNC10L3QtdC90LjRjyDQsNC00YDQtdGB0L3QvtC5INGB0YLRgNC+0LrQuFxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcclxuXHRcdFx0XHRcdHRoaXMuX29wZW5Ub0hhc2goKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5jbG9zZSh0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fS5iaW5kKHRoaXMpKVxyXG5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9vcGVuVG9IYXNoKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LmJpbmQodGhpcykpXHJcblx0XHR9XHJcblx0fVxyXG5cdG9wZW4oc2VsZWN0b3JWYWx1ZSkge1xyXG5cdFx0aWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcblx0XHRcdC8vINCV0YHQu9C4INC/0LXRgNC10LQg0L7RgtC60YDRi9GC0LjQtdC8INC/0L7Qv9Cw0L/QsCDQsdGL0Lsg0YDQtdC20LjQvCBsb2NrXHJcblx0XHRcdHRoaXMuYm9keUxvY2sgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrJykgJiYgIXRoaXMuaXNPcGVuID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuXHRcdFx0Ly8g0JXRgdC70Lgg0LLQstC10YHRgtC4INC30L3QsNGH0LXQvdC40LUg0YHQtdC70LXQutGC0L7RgNCwICjRgdC10LvQtdC60YLQvtGAINC90LDRgdGC0YDQsNC40LLQsNC10YLRgdGPINCyIG9wdGlvbnMpXHJcblx0XHRcdGlmIChzZWxlY3RvclZhbHVlICYmIHR5cGVvZiAoc2VsZWN0b3JWYWx1ZSkgPT09IFwic3RyaW5nXCIgJiYgc2VsZWN0b3JWYWx1ZS50cmltKCkgIT09IFwiXCIpIHtcclxuXHRcdFx0XHR0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IgPSBzZWxlY3RvclZhbHVlO1xyXG5cdFx0XHRcdHRoaXMuX3NlbGVjdG9yT3BlbiA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuaXNPcGVuKSB7XHJcblx0XHRcdFx0dGhpcy5fcmVvcGVuID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCF0aGlzLl9zZWxlY3Rvck9wZW4pIHRoaXMudGFyZ2V0T3Blbi5zZWxlY3RvciA9IHRoaXMubGFzdENsb3NlZC5zZWxlY3RvcjtcclxuXHRcdFx0aWYgKCF0aGlzLl9yZW9wZW4pIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuXHJcblx0XHRcdHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50KSB7XHJcblx0XHRcdFx0Ly8gWW91VHViZVxyXG5cdFx0XHRcdGlmICh0aGlzLnlvdVR1YmVDb2RlKSB7XHJcblx0XHRcdFx0XHRjb25zdCBjb2RlVmlkZW8gPSB0aGlzLnlvdVR1YmVDb2RlO1xyXG5cdFx0XHRcdFx0Y29uc3QgdXJsVmlkZW8gPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtjb2RlVmlkZW99P3JlbD0wJnNob3dpbmZvPTAmYXV0b3BsYXk9MWBcclxuXHRcdFx0XHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cdFx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgJycpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGF1dG9wbGF5ID0gdGhpcy5vcHRpb25zLnNldEF1dG9wbGF5WW91dHViZSA/ICdhdXRvcGxheTsnIDogJyc7XHJcblx0XHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvdycsIGAke2F1dG9wbGF5fTsgZW5jcnlwdGVkLW1lZGlhYCk7XHJcblxyXG5cdFx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsVmlkZW8pO1xyXG5cclxuXHRcdFx0XHRcdGlmICghdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5vcHRpb25zLnlvdXR1YmVQbGFjZUF0dHJpYnV0ZX1dYCkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgeW91dHViZVBsYWNlID0gdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX190ZXh0Jykuc2V0QXR0cmlidXRlKGAke3RoaXMub3B0aW9ucy55b3V0dWJlUGxhY2VBdHRyaWJ1dGV9YCwgJycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5vcHRpb25zLnlvdXR1YmVQbGFjZUF0dHJpYnV0ZX1dYCkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5oYXNoU2V0dGluZ3MubG9jYXRpb24pIHtcclxuXHRcdFx0XHRcdC8vINCf0L7Qu9GD0YfQtdC90LjQtSDRhdGN0YjQsCDQuCDQtdCz0L4g0LLRi9GB0YLQsNCy0LvQtdC90LjQtSBcclxuXHRcdFx0XHRcdHRoaXMuX2dldEhhc2goKTtcclxuXHRcdFx0XHRcdHRoaXMuX3NldEhhc2goKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vINCU0L4g0L7RgtC60YDRi9GC0LjRj1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5vbi5iZWZvcmVPcGVuKHRoaXMpO1xyXG5cdFx0XHRcdC8vINCh0L7Qt9C00LDQtdC8INGB0LLQvtC1INGB0L7QsdGL0YLQuNC1INC/0L7RgdC70LUg0L7RgtC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LBcclxuXHRcdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJlZm9yZVBvcHVwT3BlblwiLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0cG9wdXA6IHRoaXNcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSk7XHJcblxyXG5cdFx0XHRcdHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmNsYXNzZXMucG9wdXBBY3RpdmUpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5jbGFzc2VzLmJvZHlBY3RpdmUpO1xyXG5cclxuXHRcdFx0XHRpZiAoIXRoaXMuX3Jlb3Blbikge1xyXG5cdFx0XHRcdFx0IXRoaXMuYm9keUxvY2sgPyBib2R5TG9jaygpIDogbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB0aGlzLl9yZW9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0dGhpcy50YXJnZXRPcGVuLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuXHRcdFx0XHQvLyDQl9Cw0L/QvtC80LjQvdCw0Y4g0Y3RgtC+INC+0YLQutGA0YvRgtC+0LUg0L7QutC90L4uINCe0L3QviDQsdGD0LTQtdGCINC/0L7RgdC70LXQtNC90LjQvCDQvtGC0LrRgNGL0YLRi9C8XHJcblx0XHRcdFx0dGhpcy5wcmV2aW91c09wZW4uc2VsZWN0b3IgPSB0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3I7XHJcblx0XHRcdFx0dGhpcy5wcmV2aW91c09wZW4uZWxlbWVudCA9IHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50O1xyXG5cclxuXHRcdFx0XHR0aGlzLl9zZWxlY3Rvck9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0dGhpcy5pc09wZW4gPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX2ZvY3VzVHJhcCgpO1xyXG5cdFx0XHRcdH0sIDUwKTtcclxuXHJcblx0XHRcdFx0Ly8g0J/QvtGB0LvQtSDQvtGC0LrRgNGL0YLQuNGPXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLm9uLmFmdGVyT3Blbih0aGlzKTtcclxuXHRcdFx0XHQvLyDQodC+0LfQtNCw0LXQvCDRgdCy0L7QtSDRgdC+0LHRi9GC0LjQtSDQv9C+0YHQu9C1INC+0YLQutGA0YvRgtC40Y8g0L/QvtC/0LDQv9CwXHJcblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJhZnRlclBvcHVwT3BlblwiLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0cG9wdXA6IHRoaXNcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdFx0dGhpcy5wb3B1cExvZ2dpbmcoYNCe0YLQutGA0YvQuyDQv9C+0L/QsNC/YCk7XHJcblxyXG5cdFx0XHR9IGVsc2UgdGhpcy5wb3B1cExvZ2dpbmcoYNCe0Lkg0L7QuSwg0YLQsNC60L7Qs9C+INC/0L7Qv9Cw0L/QsCDQvdC10YIu0J/RgNC+0LLQtdGA0YzRgtC1INC60L7RgNGA0LXQutGC0L3QvtGB0YLRjCDQstCy0L7QtNCwLiBgKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Y2xvc2Uoc2VsZWN0b3JWYWx1ZSkge1xyXG5cdFx0aWYgKHNlbGVjdG9yVmFsdWUgJiYgdHlwZW9mIChzZWxlY3RvclZhbHVlKSA9PT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvclZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG5cdFx0XHR0aGlzLnByZXZpb3VzT3Blbi5zZWxlY3RvciA9IHNlbGVjdG9yVmFsdWU7XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMuaXNPcGVuIHx8ICFib2R5TG9ja1N0YXR1cykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHQvLyDQlNC+INC30LDQutGA0YvRgtC40Y9cclxuXHRcdHRoaXMub3B0aW9ucy5vbi5iZWZvcmVDbG9zZSh0aGlzKTtcclxuXHRcdC8vINCh0L7Qt9C00LDQtdC8INGB0LLQvtC1INGB0L7QsdGL0YLQuNC1INC/0LXRgNC10LQg0LfQsNC60YDRi9GC0LjQtdC8INC/0L7Qv9Cw0L/QsFxyXG5cdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJiZWZvcmVQb3B1cENsb3NlXCIsIHtcclxuXHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0cG9wdXA6IHRoaXNcclxuXHRcdFx0fVxyXG5cdFx0fSkpO1xyXG5cclxuXHRcdC8vIFlvdVR1YmVcclxuXHRcdGlmICh0aGlzLnlvdVR1YmVDb2RlKSB7XHJcblx0XHRcdGlmICh0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfV1gKSlcclxuXHRcdFx0XHR0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfV1gKS5pbm5lckhUTUwgPSAnJztcclxuXHRcdH1cclxuXHRcdHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMuY2xhc3Nlcy5wb3B1cEFjdGl2ZSk7XHJcblx0XHQvLyBhcmlhLWhpZGRlblxyXG5cdFx0dGhpcy5wcmV2aW91c09wZW4uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHRcdGlmICghdGhpcy5fcmVvcGVuKSB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5jbGFzc2VzLmJvZHlBY3RpdmUpO1xyXG5cdFx0XHQhdGhpcy5ib2R5TG9jayA/IGJvZHlVbmxvY2soKSA6IG51bGw7XHJcblx0XHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHQvLyDQntGH0LjRidC10L3QuNC1INCw0LTRgNC10YHQvdC+0Lkg0YHRgtGA0L7QutC4XHJcblx0XHR0aGlzLl9yZW1vdmVIYXNoKCk7XHJcblx0XHRpZiAodGhpcy5fc2VsZWN0b3JPcGVuKSB7XHJcblx0XHRcdHRoaXMubGFzdENsb3NlZC5zZWxlY3RvciA9IHRoaXMucHJldmlvdXNPcGVuLnNlbGVjdG9yO1xyXG5cdFx0XHR0aGlzLmxhc3RDbG9zZWQuZWxlbWVudCA9IHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQ7XHJcblxyXG5cdFx0fVxyXG5cdFx0Ly8g0J/QvtGB0LvQtSDQt9Cw0LrRgNGL0YLQuNGPXHJcblx0XHR0aGlzLm9wdGlvbnMub24uYWZ0ZXJDbG9zZSh0aGlzKTtcclxuXHRcdC8vINCh0L7Qt9C00LDQtdC8INGB0LLQvtC1INGB0L7QsdGL0YLQuNC1INC/0L7RgdC70LUg0LfQsNC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LBcclxuXHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYWZ0ZXJQb3B1cENsb3NlXCIsIHtcclxuXHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0cG9wdXA6IHRoaXNcclxuXHRcdFx0fVxyXG5cdFx0fSkpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9mb2N1c1RyYXAoKTtcclxuXHRcdH0sIDUwKTtcclxuXHJcblx0XHR0aGlzLnBvcHVwTG9nZ2luZyhg0JfQsNC60YDRi9C7INC/0L7Qv9Cw0L9gKTtcclxuXHR9XHJcblx0Ly8g0J/QvtC70YPRh9C10L3QuNC1INGF0Y3RiNCwIFxyXG5cdF9nZXRIYXNoKCkge1xyXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5oYXNoU2V0dGluZ3MubG9jYXRpb24pIHtcclxuXHRcdFx0dGhpcy5oYXNoID0gdGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yLmluY2x1ZGVzKCcjJykgP1xyXG5cdFx0XHRcdHRoaXMudGFyZ2V0T3Blbi5zZWxlY3RvciA6IHRoaXMudGFyZ2V0T3Blbi5zZWxlY3Rvci5yZXBsYWNlKCcuJywgJyMnKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRfb3BlblRvSGFzaCgpIHtcclxuXHRcdGxldCBjbGFzc0luSGFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyl9YCkgPyBgLiR7d2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKX1gIDpcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gKSA/IGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofWAgOlxyXG5cdFx0XHRcdG51bGw7XHJcblxyXG5cdFx0Y29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufSA9IFwiJHtjbGFzc0luSGFzaH1cIl1gKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufSA9IFwiJHtjbGFzc0luSGFzaH1cIl1gKSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufSA9IFwiJHtjbGFzc0luSGFzaC5yZXBsYWNlKCcuJywgXCIjXCIpfVwiXWApO1xyXG5cdFx0aWYgKGJ1dHRvbnMgJiYgY2xhc3NJbkhhc2gpIHRoaXMub3BlbihjbGFzc0luSGFzaCk7XHJcblx0fVxyXG5cdC8vINCj0YLRgdCw0L3QvtCy0LrQsCDRhdGN0YjQsFxyXG5cdF9zZXRIYXNoKCkge1xyXG5cdFx0aGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCB0aGlzLmhhc2gpO1xyXG5cdH1cclxuXHRfcmVtb3ZlSGFzaCgpIHtcclxuXHRcdGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXSlcclxuXHR9XHJcblx0X2ZvY3VzQ2F0Y2goZSkge1xyXG5cdFx0Y29uc3QgZm9jdXNhYmxlID0gdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9mb2N1c0VsKTtcclxuXHRcdGNvbnN0IGZvY3VzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmb2N1c2FibGUpO1xyXG5cdFx0Y29uc3QgZm9jdXNlZEluZGV4ID0gZm9jdXNBcnJheS5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuXHRcdGlmIChlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gMCkge1xyXG5cdFx0XHRmb2N1c0FycmF5W2ZvY3VzQXJyYXkubGVuZ3RoIC0gMV0uZm9jdXMoKTtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gZm9jdXNBcnJheS5sZW5ndGggLSAxKSB7XHJcblx0XHRcdGZvY3VzQXJyYXlbMF0uZm9jdXMoKTtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRfZm9jdXNUcmFwKCkge1xyXG5cdFx0Y29uc3QgZm9jdXNhYmxlID0gdGhpcy5wcmV2aW91c09wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2ZvY3VzRWwpO1xyXG5cdFx0aWYgKCF0aGlzLmlzT3BlbiAmJiB0aGlzLmxhc3RGb2N1c0VsKSB7XHJcblx0XHRcdHRoaXMubGFzdEZvY3VzRWwuZm9jdXMoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvY3VzYWJsZVswXS5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyDQpNGD0L3QutGG0LjRjyDQstGL0LLQvtC00LAg0LIg0LrQvtC90YHQvtC70YxcclxuXHRwb3B1cExvZ2dpbmcobWVzc2FnZSkge1xyXG5cdFx0dGhpcy5vcHRpb25zLmxvZ2dpbmcgPyBGTFMoYFvQn9C+0L/QsNC/0L7RgV06ICR7bWVzc2FnZX1gKSA6IG51bGw7XHJcblx0fVxyXG59XHJcbi8vINCX0LDQv9GD0YHQutCw0LXQvCDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LIg0L7QsdGK0LXQutGCINC80L7QtNGD0LvQtdC5XHJcbmZsc01vZHVsZXMucG9wdXAgPSBuZXcgUG9wdXAoe30pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRmNGRlNDBhZTc0ZTcwNjBkZjViXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9