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
/* harmony import */ var _files_sliders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/sliders.js */ "./src/js/files/sliders.js");
/* harmony import */ var _libs_watcher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/watcher.js */ "./src/js/libs/watcher.js");
/* harmony import */ var _files_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files/scroll/scroll.js */ "./src/js/files/scroll/scroll.js");
/* harmony import */ var _libs_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./libs/parallax.js */ "./src/js/libs/parallax.js");
/* harmony import */ var _libs_dynamic_adapt_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./libs/dynamic_adapt.js */ "./src/js/libs/dynamic_adapt.js");
/* harmony import */ var _files_script_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./files/script.js */ "./src/js/files/script.js");
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

_files_forms_forms_js__WEBPACK_IMPORTED_MODULE_3__.formFieldsInit({
	viewPass: false,
	autoHeight: false
});


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
/******/ 	__webpack_require__.h = () => ("f2650d39dd0e2d1025ce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNGQzODMzMzA1Nzk2Y2MxZDg0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQSx1REFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUF1QjtBQUN2QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Oi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvbGlicy9wb3B1cC5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbihpKSDQmtC+0LQg0L/QvtC/0LDQtNCw0LXRgiDQsiDQuNGC0L7Qs9C+0LLRi9C5INGE0LDQudC7LFxyXG7RgtC+0LvRjNC60L4g0LrQvtCz0LTQsCDQstGL0LfQstCw0L3QsCDRhNGD0L3QutGG0LjRjyxcclxu0L3QsNC/0YDQuNC80LXRgCBmbHNGdW5jdGlvbnMuc3BvbGxlcnMoKTtcclxu0JjQu9C4INC60L7Qs9C00LAg0LjQvNC/0L7RgNGC0LjRgNC+0LLQsNC9INCy0LXRgdGMINGE0LDQudC7LFxyXG7QvdCw0L/RgNC40LzQtdGAIGltcG9ydCBcImZpbGVzL3NjcmlwdC5qc1wiO1xyXG7QndC10LjRgdC/0L7Qu9GM0LfRg9C10LzRi9C5ICjQvdC1INCy0YvQt9Cy0LDQvdC90YvQuSlcclxu0LrQvtC0INCyINC40YLQvtCz0L7QstGL0Lkg0YTQsNC50Lsg0L3QtSDQv9C+0L/QsNC00LDQtdGCLlxyXG5cclxu0JXRgdC70Lgg0LzRiyDRhdC+0YLQuNC8INC00L7QsdCw0LLQuNGC0Ywg0LzQvtC00YPQu9GMXHJcbtGB0LvQtdC00YPQtdGCINC10LPQviDRgNCw0YHRgdC60L7QvNC10L3RgtC40YDQvtCy0LDRgtGMXHJcbiovXHJcblxyXG4vLyDQktC60LvRjtGH0LjRgtGML9Cy0YvQutC70Y7Rh9C40YLRjCBGTFMgKEZ1bGwgTG9nZ2luZyBTeXN0ZW0pICjQsiDRgNCw0LHQvtGC0LUpXHJcbndpbmRvd1snRkxTJ10gPSB0cnVlO1xyXG5cclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQvtGB0L3QvtCy0L3QvtCz0L4g0YTQsNC50LvQsCDRgdGC0LjQu9C10LlcclxuaW1wb3J0IFwiLi4vc2Nzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQpNGD0L3QutGG0LjQvtC90LDQuyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgKiBhcyBmbHNGdW5jdGlvbnMgZnJvbSBcIi4vZmlsZXMvZnVuY3Rpb25zLmpzXCI7XHJcblxyXG4vKiDQn9GA0L7QstC10YDQutCwINC/0L7QtNC00LXRgNC20LrQuCB3ZWJwLCDQtNC+0LHQsNCy0LvQtdC90LjQtSDQutC70LDRgdGB0LAgd2VicCDQuNC70Lggbm8td2VicCDQtNC70Y8gSFRNTCAqL1xyXG4vKiAoaSkg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQu9GPINC60L7RgNGA0LXQutGC0L3QvtCz0L4g0L7RgtC+0LHRgNCw0LbQtdC90LjRjyB3ZWJwINC40LcgY3NzICAqL1xyXG5mbHNGdW5jdGlvbnMuaXNXZWJwKCk7XHJcbi8qINCU0L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQsCB0b3VjaCDQtNC70Y8gSFRNTCDQtdGB0LvQuCDQsdGA0LDRg9C30LXRgCDQvNC+0LHQuNC70YzQvdGL0LkgKi9cclxuLy8gZmxzRnVuY3Rpb25zLmFkZFRvdWNoQ2xhc3MoKTtcclxuLyog0JTQvtCx0LDQstC70LXQvdC40LUgbG9hZGVkINC00LvRjyBIVE1MINC/0L7RgdC70LUg0L/QvtC70L3QvtC5INC30LDQs9GA0YPQt9C60Lgg0YHRgtGA0LDQvdC40YbRiyAqL1xyXG4vLyBmbHNGdW5jdGlvbnMuYWRkTG9hZGVkQ2xhc3MoKTtcclxuLyog0JzQvtC00YPQu9GMINC00LvRjyDRgNCw0LHQvtGC0Ysg0YEg0LzQtdC90Y4gKNCR0YPRgNCz0LXRgCkgKi9cclxuLy8gZmxzRnVuY3Rpb25zLm1lbnVJbml0KCk7XHJcbi8qINCj0YfQtdGCINC/0LvQsNCy0LDRjtGJ0LXQuSDQv9Cw0L3QtdC70Lgg0L3QsCDQvNC+0LHQuNC70YzQvdGL0YUg0YPRgdGC0YDQvtC50YHRgtCy0LDRhSDQv9GA0LggMTAwdmggKi9cclxuLy8gZmxzRnVuY3Rpb25zLmZ1bGxWSGZpeCgpO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMINGA0LDQsdC+0YLRiyDRgdC+INGB0L/QvtC50LvQtdGA0LDQvNC4XHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLXNwb2psZXJ5Lmh0bWxcclxu0KHQvdC40L/Qv9C10YIgKEhUTUwpOiBzcG9sbGVyc1xyXG4qL1xyXG4vLyBmbHNGdW5jdGlvbnMuc3BvbGxlcnMoKTtcclxuXHJcbi8qXHJcbtCc0L7QtNGD0LvRjCDRgNCw0LHQvtGC0Ysg0YEg0YLQsNCx0LDQvNC4XHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLXRhYnkuaHRtbFxyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6IHRhYnNcclxuKi9cclxuLy8gZmxzRnVuY3Rpb25zLnRhYnMoKTtcclxuXHJcbi8qXHJcbtCc0L7QtNGD0LvRjCBcItC/0L7QutCw0LfQsNGC0Ywg0LXRidC1XCJcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtcG9rYXphdC1lc2hoam8uaHRtbFxyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6IHNob3dtb3JlXHJcbiovXHJcbi8vIGZsc0Z1bmN0aW9ucy5zaG93TW9yZSgpO1xyXG5cclxuLypcclxu0J/QvtC/0LDQv9GLXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL2Z1bmtjaW9uYWwtcG9wdXAuaHRtbFxyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6IHBsXHJcbiovXHJcbmltcG9ydCAnLi9saWJzL3BvcHVwLmpzJ1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMINC/0LDRgNCw0LvQu9Cw0LrRgdCwINC80YvRiNGM0Y5cclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtYW5pbWFjaWktcGFyYWxsYWtzLW9iZWt0b3YtcHJpLWR2aXpoZW5paS1teXNoaS5odG1sXHJcbiovXHJcbi8vIGltcG9ydCAnLi9saWJzL3BhcmFsbGF4LW1vdXNlLmpzJ1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0KDQsNCx0L7RgtCwINGBINGE0L7RgNC80LDQvNC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCAqIGFzIGZsc0Zvcm1zIGZyb20gXCIuL2ZpbGVzL2Zvcm1zL2Zvcm1zLmpzXCI7XHJcblxyXG4vKiDQoNCw0LHQvtGC0LAg0YEg0L/QvtC70Y/QvNC4INGE0L7RgNC80YsgKi9cclxuLyog0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvcmFib3RhLXMtZm9ybWFtaS5odG1sICovXHJcblxyXG5mbHNGb3Jtcy5mb3JtRmllbGRzSW5pdCh7XHJcblx0dmlld1Bhc3M6IGZhbHNlLFxyXG5cdGF1dG9IZWlnaHQ6IGZhbHNlXHJcbn0pO1xyXG5cclxuXHJcbi8qIE/RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLICovXHJcbi8qINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL3JhYm90YS1zLWZvcm1hbWkuaHRtbCAqL1xyXG4vLyBmbHNGb3Jtcy5mb3JtU3VibWl0KCk7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YTQvtGA0LzRiyBcItC60L7Qu9C70LjRh9C10YHRgtCy0L5cIiAqL1xyXG4vLyBmbHNGb3Jtcy5mb3JtUXVhbnRpdHkoKTtcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDQt9Cy0LXQt9C00L3QvtCz0L4g0YDQtdC50YLQuNC90LPQsCAqL1xyXG4vLyBmbHNGb3Jtcy5mb3JtUmF0aW5nKCk7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGBIHNlbGVjdC4gKi9cclxuLy8gaW1wb3J0ICcuL2xpYnMvc2VsZWN0LmpzJ1xyXG5cclxuLyog0JzQvtC00YPQu9GMINGA0LDQsdC+0YLRiyDRgSDQutCw0LvQtdC90LTQsNGA0LXQvCAqL1xyXG4vLyBpbXBvcnQgJy4vZmlsZXMvZm9ybXMvZGF0ZXBpY2tlci5qcydcclxuXHJcbi8qICjQkiDRgNCw0LHQvtGC0LUpINCc0L7QtNGD0LvRjCDRgNCw0LHQvtGC0Ysg0YEg0LzQsNGB0LrQsNC80LguKi9cclxuLypcclxu0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQuCDQvdCw0YHRgtGA0L7QudC60LAg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQsiDRhNCw0LnQu9C1IGpzL2ZpbGVzL2Zvcm1zL2lucHV0bWFzay5qc1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6XHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C70LDQs9C40L3QsDogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9pbnB1dG1hc2tcclxu0KHQvdC40L/Qv9C10YIoSFRNTCk6XHJcbiovXHJcbi8vIGltcG9ydCBcIi4vZmlsZXMvZm9ybXMvaW5wdXRtYXNrLmpzXCI7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGBINC/0L7Qu9C30YPQvdC60L7QvCAqL1xyXG4vKlxyXG7Qn9C+0LTQutC70Y7Rh9C10L3QuNC1INC4INC90LDRgdGC0YDQvtC50LrQsCDQstGL0L/QvtC70L3Rj9C10YLRgdGPINCyINGE0LDQudC70LUganMvZmlsZXMvZm9ybXMvcmFuZ2UuanNcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0L4g0YDQsNCx0L7RgtC1INCyINGI0LDQsdC70L7QvdC1OlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/Qu9Cw0LPQuNC90LA6IGh0dHBzOi8vcmVmcmVzaGxlc3MuY29tL25vdWlzbGlkZXIvXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogcmFuZ2VcclxuKi9cclxuLy8gaW1wb3J0IFwiLi9maWxlcy9mb3Jtcy9yYW5nZS5qc1wiO1xyXG5cclxuLyog0JzQvtC00YPQu9GMINGA0LDQsdC+0YLRiyDRgSDQv9C+0LTRgdC60LDQt9C60LDQvNC4ICh0aXBweSkgKi9cclxuLypcclxu0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQv9C70LDQs9C40L3QsCBUaXBweS5qcyDQuCDQvdCw0YHRgtGA0L7QudC60LAg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQsiDRhNCw0LnQu9C1IGpzL2ZpbGVzL3RpcHB5LmpzXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTpcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0LvQsNCz0LjQvdCwOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogdGlwICjQtNC+0LHQsNCy0LvRj9C10YIg0LDRgtGA0LjQsdGD0YIg0YEg0L/QvtC00YHQutCw0LfQutC+0Lkg0LTQu9GPIGh0bWwg0YLQtdCz0LApXHJcbiovXHJcbi8vIGltcG9ydCBcIi4vZmlsZXMvdGlwcHkuanNcIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCg0LDQsdC+0YLQsCDRgdC+INGB0LvQsNC50LTQtdGA0L7QvCAoU3dpcGVyKSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vKlxyXG7QndCw0YHRgtGA0L7QudC60LAg0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQv9C70LDQs9C40L3QsCDRgdC70LDQudC00LXRgNCwIFN3aXBlciDQuCDQvdC+0LLRi9GFINGB0LvQsNC50LTQtdGA0L7QsiDQstGL0L/QvtC70L3Rj9C10YLRgdGPINCyINGE0LDQudC70LUganMvZmlsZXMvc2xpZGVycy5qc1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9yYWJvdGEtc28tc2xhamRlcm9tLXN3aXBlci5odG1sXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C70LDQs9C40L3QsDogaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbtCh0L3QuNC/0L/QtdGCKEhUTUwpOiBzd2lwZXJcclxuKi9cclxuaW1wb3J0IFwiLi9maWxlcy9zbGlkZXJzLmpzXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQnNC+0LTRg9C70Lgg0YDQsNCx0L7RgtGLINGBINC/0YDQvtC60YDRg9GC0LrQvtC5INGB0YLRgNCw0L3QuNGG0YsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qXHJcbtCY0LfQvNC10L3QtdC90LjQtSDQtNC40LfQsNC50L3QsCDRgdC60YDQvtC70LvQsdCw0YDQsFxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6INCSIEhUTUwg0LTQvtCx0LDQstC70Y/QtdC8INC6INCx0LvQvtC60YMg0LDRgtGA0LjQsdGD0YIgZGF0YS1zaW1wbGViYXJcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0LvQsNCz0LjQvdCwOiBodHRwczovL2dpdGh1Yi5jb20vR3JzbXRvL3NpbXBsZWJhci90cmVlL21hc3Rlci9wYWNrYWdlcy9zaW1wbGViYXJcclxu0KHQvdC40L/Qv9C10YIoSFRNTCk6IFxyXG4qL1xyXG4vLyBpbXBvcnQgJy4vZmlsZXMvc2Nyb2xsL3NpbXBsZWJhci5qcyc7XHJcblxyXG4vLyDQm9C10L3QuNCy0LDRjyAo0L7RgtC70L7QttC10L3QvdCw0Y8pINC30LDQs9GA0YPQt9C60LAg0LrQsNGA0YLQuNC90L7QulxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1sZW5pdmF5YS1wb2RncnV6a2EtbGF6eS1sb2FkaW5nLmh0bWxcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0LvQsNCz0LjQvdCwOiBodHRwczovL2dpdGh1Yi5jb20vdmVybG9rL3ZhbmlsbGEtbGF6eWxvYWRcclxuLy8g0KHQvdC40L/Qv9C10YIoSFRNTCk6XHJcbi8vIGltcG9ydCAnLi9maWxlcy9zY3JvbGwvbGF6eWxvYWQuanMnO1xyXG5cclxuLy8g0J3QsNCx0LvRjtC00LDRgtC10LvRjCDQt9CwINC+0LHRitC10LrRgtCw0LzQuCBjINCw0YLRgNC40LHRg9GC0L7QvCBkYXRhLXdhdGNoXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLW5hYmxqdWRhdGVsLXphLXBveWF2bGVuaWVtLWVsZW1lbnRhLXByaS1za3JvbGxlLmh0bWxcclxuLy8g0KHQvdC40L/Qv9C10YIoSFRNTCk6XHJcbmltcG9ydCAnLi9saWJzL3dhdGNoZXIuanMnXHJcblxyXG4vLyDQpNGD0L3QutGG0LjQuCDRgNCw0LHQvtGC0Ysg0YHQutGA0L7Qu9C70L7QvFxyXG5pbXBvcnQgKiBhcyBmbHNTY3JvbGwgZnJvbSBcIi4vZmlsZXMvc2Nyb2xsL3Njcm9sbC5qc1wiO1xyXG5cclxuLy8g0J/Qu9Cw0LLQvdCw0Y8g0L3QsNCy0LjQs9Cw0YbQuNGPINC/0L4g0YHRgtGA0LDQvdC40YbQtVxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1wbGF2bm9qLW5hdmlnYWNpaS1wby1zdHJhbmljZS5odG1sXHJcbi8vIGZsc1Njcm9sbC5wYWdlTmF2aWdhdGlvbigpO1xyXG5cclxuLy8g0KTRg9C90LrRhtC40L7QvdCw0Lsg0LTQvtCx0LDQstC70LXQvdC40Y8g0LrQu9Cw0YHRgdC+0LIg0Log0YXQtdC00LXRgNGDINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LVcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtZG9iYXZsZW5peWEta2xhc3Nvdi1rLXNoYXBrZS1wcmktcHJva3J1dGtlLXN0cmFuaWN5Lmh0bWxcclxuLy8gZmxzU2Nyb2xsLmhlYWRlclNjcm9sbCgpO1xyXG5cclxuLy8g0KTRg9C90LrRhtC40L7QvdCw0Lsg0LvQuNC/0LrQvtCz0L4g0LHQu9C+0LrQsFxyXG4vLyBmbHNTY3JvbGwuc3RpY2t5QmxvY2soKTtcclxuXHJcbi8vINCc0L7QtNGD0LvRjCDQv9C+0LXQutGA0LDQvdC90L7RlyDQv9GA0L7QutGA0YPRgtC60LhcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtcG9la3Jhbm5vai1wcm9rcnV0a2ktc3RyYW5pY3ktZnVsbHBhZ2UuaHRtbFxyXG4vLyDQodC90LjQv9C/0LXRgihIVE1MKTpcclxuLy8gaW1wb3J0ICcuL2xpYnMvZnVsbHBhZ2UuanMnXHJcblxyXG4vLyDQnNC+0LTRg9C70Ywg0L/QsNGA0LDQu9Cw0LrRgdGDXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzpcclxuLy8g0KHQvdC40L/Qv9C10YIoSFRNTCk6XHJcbmltcG9ydCAnLi9saWJzL3BhcmFsbGF4LmpzJ1xyXG5cclxuLy8g0JzQvtC00YPQu9GMINCw0L3RltC80LDRhtGW0Y8g0YbQuNGE0YDQvtCy0L7Qs9C+INC70ZbRh9C40LvRjNC90LjQutCwXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzpcclxuLy8g0KHQvdC40L/Qv9C10YIoSFRNTCk6XHJcbi8vIGZsc1Njcm9sbC5kaWdpdHNDb3VudGVyKCk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQk9Cw0LvQtdGA0LXRjyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6IFxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/Qu9Cw0LPQuNC90LA6IGh0dHBzOi8vd3d3LmxpZ2h0Z2FsbGVyeWpzLmNvbS9kb2NzL1xyXG7QodC90LjQv9C/0LXRgihIVE1MKTpcclxuKi9cclxuLy8gaW1wb3J0IFwiLi9maWxlcy9nYWxsZXJ5LmpzXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQn9GA0L7Rh9C40LUg0L/Qu9Cw0LPQuNC90YsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKiDQlNC40L3QsNC80LjRh9C10YHQutC40Lkg0LDQtNCw0L/RgtC40LIgKi9cclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvZGluYW1pY2hlc2tpai1hZGFwdGl2Lmh0bWxcclxuaW1wb3J0IFwiLi9saWJzL2R5bmFtaWNfYWRhcHQuanNcIjtcclxuXHJcbi8qINCk0L7RgNC80LDRgtC40YDQvtCy0LDQvdC40LUg0YfQuNGB0LXQuyAqL1xyXG4vLyBpbXBvcnQgJy4vbGlicy93TnVtYi5taW4uanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0J/RgNC+0YfQtdC1ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8qINCf0L7QtNC60LvRjtGH0LDQtdC8INGE0LDQudC70Ysg0YHQviDRgdCy0L7QuNC8INC60L7QtNC+0LwgKi9cclxuaW1wb3J0IFwiLi9maWxlcy9zY3JpcHQuanNcIjtcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSIsIi8vINCc0L7QtNGD0LvRjCDQv9C+0L/QsNC/0L7QslxyXG4vLyAoYykg0KTRgNC40LvQsNC90YHQtdGAINC/0L4g0LbQuNC30L3QuCwg0KXQvNGD0YDRi9C5INCa0L7RglxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9mdW5rY2lvbmFsLXBvcHVwLmh0bWxcclxuLy8g0KHQvdC40L/Qv9C10YIgKEhUTUwpOiBwbFxyXG5cclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRhNGD0L3QutGG0LjQvtC90LDQu9CwIFwi0KfQtdGA0YLQvtCz0L7QsiDQpNGA0LjQu9Cw0L3RgdC10YDQsFwiXHJcbmltcG9ydCB7IGlzTW9iaWxlLCBib2R5TG9ja1N0YXR1cywgYm9keUxvY2ssIGJvZHlVbmxvY2ssIGJvZHlMb2NrVG9nZ2xlLCBGTFMgfSBmcm9tIFwiLi4vZmlsZXMvZnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB7IGZsc01vZHVsZXMgfSBmcm9tIFwiLi4vZmlsZXMvbW9kdWxlcy5qc1wiO1xyXG5cclxuLy8g0JrQu9Cw0YHRgSBQb3B1cFxyXG5jbGFzcyBQb3B1cCB7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xyXG5cdFx0bGV0IGNvbmZpZyA9IHtcclxuXHRcdFx0bG9nZ2luZzogdHJ1ZSxcclxuXHRcdFx0aW5pdDogdHJ1ZSxcclxuXHRcdFx0Ly8g0JTQu9GPINC60L3QvtC/0L7QuiBcclxuXHRcdFx0YXR0cmlidXRlT3BlbkJ1dHRvbjogJ2RhdGEtcG9wdXAnLCAvLyDQkNGC0YDQuNCx0YPRgiDQtNC70Y8g0LrQvdC+0L/QutC4LCDQutC+0YLQvtGA0LDRjyDQstGL0LfRi9Cy0LDQtdGCINC/0L7Qv9Cw0L9cclxuXHRcdFx0YXR0cmlidXRlQ2xvc2VCdXR0b246ICdkYXRhLWNsb3NlJywgLy8g0JDRgtGA0LjQsdGD0YIg0LTQu9GPINC60L3QvtC/0LrQuCwg0LrQvtGC0L7RgNCw0Y8g0LfQsNC60YDRi9Cy0LDQtdGCINC/0L7Qv9Cw0L9cclxuXHRcdFx0Ly8g0JTQu9GPINGB0YLQvtGA0L7QvdC90LjRhSDQvtCx0YrQtdC60YLQvtCyXHJcblx0XHRcdGZpeEVsZW1lbnRTZWxlY3RvcjogJ1tkYXRhLWxwXScsIC8vINCQ0YLRgNC40LHRg9GCINC00LvRjyDRjdC70LXQvNC10L3RgtC+0LIg0YEg0LvQtdCy0YvQvCDQv9Cw0LTQtNC40L3Qs9C+0LwgKNC60L7RgtC+0YDRi9C1IGZpeGVkKVxyXG5cdFx0XHQvLyDQlNC70Y8g0L7QsdGK0LXQutGC0LAg0L/QvtC/0LDQv9CwXHJcblx0XHRcdHlvdXR1YmVBdHRyaWJ1dGU6ICdkYXRhLXBvcHVwLXlvdXR1YmUnLCAvLyDQkNGC0YDQuNCx0YPRgiDQtNC70Y8g0LrQvtC00LAgeW91dHViZVxyXG5cdFx0XHR5b3V0dWJlUGxhY2VBdHRyaWJ1dGU6ICdkYXRhLXBvcHVwLXlvdXR1YmUtcGxhY2UnLCAvLyDQkNGC0YDQuNCx0YPRgiDQtNC70Y8g0LLRgdGC0LDQstC60Lgg0YDQvtC70LjQutCwIHlvdXR1YmVcclxuXHRcdFx0c2V0QXV0b3BsYXlZb3V0dWJlOiB0cnVlLFxyXG5cdFx0XHQvLyDQmNC30LzQtdC90LXQvdC40LUg0LrQu9Cw0YHRgdC+0LJcclxuXHRcdFx0Y2xhc3Nlczoge1xyXG5cdFx0XHRcdHBvcHVwOiAncG9wdXAnLFxyXG5cdFx0XHRcdC8vIHBvcHVwV3JhcHBlcjogJ3BvcHVwX193cmFwcGVyJyxcclxuXHRcdFx0XHRwb3B1cENvbnRlbnQ6ICdwb3B1cF9fY29udGVudCcsXHJcblx0XHRcdFx0cG9wdXBBY3RpdmU6ICdwb3B1cF9zaG93JywgLy8g0JTQvtCx0LDQstC70Y/QtdGC0YHRjyDQtNC70Y8g0L/QvtC/0LDQv9CwLCDQutC+0LPQtNCwINC+0L0g0L7RgtC60YDRi9Cy0LDQtdGC0YHRj1xyXG5cdFx0XHRcdGJvZHlBY3RpdmU6ICdwb3B1cC1zaG93JywgLy8g0JTQvtCx0LDQstC70Y/QtdGC0YHRjyDQtNC70Y8g0LHQvtC00LgsINC60L7Qs9C00LAg0L/QvtC/0LDQvyDQvtGC0LrRgNGL0YJcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9jdXNDYXRjaDogdHJ1ZSwgLy8g0KTQvtC60YPRgSDQstC90YPRgtGA0Lgg0L/QvtC/0LDQv9CwINC30LDRhtC40LrQu9C10L1cclxuXHRcdFx0Y2xvc2VFc2M6IHRydWUsIC8vINCX0LDQutGA0YvRgtC40LUg0L/QviBFU0NcclxuXHRcdFx0Ym9keUxvY2s6IHRydWUsIC8vINCR0LvQvtC60LjRgNC+0LLQutCwINGB0LrRgNC+0LvQu9CwXHJcblx0XHRcdGhhc2hTZXR0aW5nczoge1xyXG5cdFx0XHRcdGxvY2F0aW9uOiB0cnVlLCAvLyDQpdGN0Ygg0LIg0LDQtNGA0LXRgdC90L7QuSDRgdGC0YDQvtC60LVcclxuXHRcdFx0XHRnb0hhc2g6IHRydWUsIC8vINCf0LXRgNC10YXQvtC0INC/0L4g0L3QsNC70LjRh9C40Y4g0LIg0LDQtNGA0LXRgdC90L7QuSDRgdGC0YDQvtC60LVcclxuXHRcdFx0fSxcclxuXHRcdFx0b246IHsgLy8g0KHQvtCx0YvRgtC40Y9cclxuXHRcdFx0XHRiZWZvcmVPcGVuOiBmdW5jdGlvbiAoKSB7IH0sXHJcblx0XHRcdFx0YWZ0ZXJPcGVuOiBmdW5jdGlvbiAoKSB7IH0sXHJcblx0XHRcdFx0YmVmb3JlQ2xvc2U6IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdFx0XHRhZnRlckNsb3NlOiBmdW5jdGlvbiAoKSB7IH0sXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0XHR0aGlzLnlvdVR1YmVDb2RlO1xyXG5cdFx0dGhpcy5pc09wZW4gPSBmYWxzZTtcclxuXHRcdC8vINCi0LXQutGD0YnQtdC1INC+0LrQvdC+XHJcblx0XHR0aGlzLnRhcmdldE9wZW4gPSB7XHJcblx0XHRcdHNlbGVjdG9yOiBmYWxzZSxcclxuXHRcdFx0ZWxlbWVudDogZmFsc2UsXHJcblx0XHR9XHJcblx0XHQvLyDQn9GA0LXQtNGL0LTRg9GJ0LXQtSDQvtGC0LrRgNGL0YLQvtC1XHJcblx0XHR0aGlzLnByZXZpb3VzT3BlbiA9IHtcclxuXHRcdFx0c2VsZWN0b3I6IGZhbHNlLFxyXG5cdFx0XHRlbGVtZW50OiBmYWxzZSxcclxuXHRcdH1cclxuXHRcdC8vINCf0L7RgdC70LXQtNC90LXQtSDQt9Cw0LrRgNGL0YLQvtC1XHJcblx0XHR0aGlzLmxhc3RDbG9zZWQgPSB7XHJcblx0XHRcdHNlbGVjdG9yOiBmYWxzZSxcclxuXHRcdFx0ZWxlbWVudDogZmFsc2UsXHJcblx0XHR9XHJcblx0XHR0aGlzLl9kYXRhVmFsdWUgPSBmYWxzZTtcclxuXHRcdHRoaXMuaGFzaCA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuX3Jlb3BlbiA9IGZhbHNlO1xyXG5cdFx0dGhpcy5fc2VsZWN0b3JPcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5sYXN0Rm9jdXNFbCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5fZm9jdXNFbCA9IFtcclxuXHRcdFx0J2FbaHJlZl0nLFxyXG5cdFx0XHQnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJyxcclxuXHRcdFx0J2J1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJyxcclxuXHRcdFx0J3NlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJyxcclxuXHRcdFx0J3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG5cdFx0XHQnYXJlYVtocmVmXScsXHJcblx0XHRcdCdpZnJhbWUnLFxyXG5cdFx0XHQnb2JqZWN0JyxcclxuXHRcdFx0J2VtYmVkJyxcclxuXHRcdFx0J1tjb250ZW50ZWRpdGFibGVdJyxcclxuXHRcdFx0J1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKSdcclxuXHRcdF07XHJcblx0XHQvL3RoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oY29uZmlnLCBvcHRpb25zKTtcclxuXHRcdHRoaXMub3B0aW9ucyA9IHtcclxuXHRcdFx0Li4uY29uZmlnLFxyXG5cdFx0XHQuLi5vcHRpb25zLFxyXG5cdFx0XHRjbGFzc2VzOiB7XHJcblx0XHRcdFx0Li4uY29uZmlnLmNsYXNzZXMsXHJcblx0XHRcdFx0Li4ub3B0aW9ucz8uY2xhc3NlcyxcclxuXHRcdFx0fSxcclxuXHRcdFx0aGFzaFNldHRpbmdzOiB7XHJcblx0XHRcdFx0Li4uY29uZmlnLmhhc2hTZXR0aW5ncyxcclxuXHRcdFx0XHQuLi5vcHRpb25zPy5oYXNoU2V0dGluZ3MsXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0Li4uY29uZmlnLm9uLFxyXG5cdFx0XHRcdC4uLm9wdGlvbnM/Lm9uLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLmJvZHlMb2NrID0gZmFsc2U7XHJcblx0XHR0aGlzLm9wdGlvbnMuaW5pdCA/IHRoaXMuaW5pdFBvcHVwcygpIDogbnVsbFxyXG5cdH1cclxuXHRpbml0UG9wdXBzKCkge1xyXG5cdFx0dGhpcy5wb3B1cExvZ2dpbmcoYNCf0YDQvtGB0L3Rg9C70YHRj2ApO1xyXG5cdFx0dGhpcy5ldmVudHNQb3B1cCgpO1xyXG5cdH1cclxuXHRldmVudHNQb3B1cCgpIHtcclxuXHRcdC8vINCa0LvQuNC6INC90LAg0LLRgdC10Lwg0LTQvtC60YPQvNC10L3RgtC1XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0Ly8g0JrQu9C40Log0L/QviDQutC90L7Qv9C60LUgXCLQvtGC0LrRgNGL0YLRjFwiXHJcblx0XHRcdGNvbnN0IGJ1dHRvbk9wZW4gPSBlLnRhcmdldC5jbG9zZXN0KGBbJHt0aGlzLm9wdGlvbnMuYXR0cmlidXRlT3BlbkJ1dHRvbn1dYCk7XHJcblx0XHRcdGlmIChidXR0b25PcGVuKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMuX2RhdGFWYWx1ZSA9IGJ1dHRvbk9wZW4uZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9uKSA/XHJcblx0XHRcdFx0XHRidXR0b25PcGVuLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMuYXR0cmlidXRlT3BlbkJ1dHRvbikgOlxyXG5cdFx0XHRcdFx0J2Vycm9yJztcclxuXHRcdFx0XHR0aGlzLnlvdVR1YmVDb2RlID0gYnV0dG9uT3Blbi5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnlvdXR1YmVBdHRyaWJ1dGUpID9cclxuXHRcdFx0XHRcdGJ1dHRvbk9wZW4uZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy55b3V0dWJlQXR0cmlidXRlKSA6XHJcblx0XHRcdFx0XHRudWxsO1xyXG5cdFx0XHRcdGlmICh0aGlzLl9kYXRhVmFsdWUgIT09ICdlcnJvcicpIHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5pc09wZW4pIHRoaXMubGFzdEZvY3VzRWwgPSBidXR0b25PcGVuO1xyXG5cdFx0XHRcdFx0dGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yID0gYCR7dGhpcy5fZGF0YVZhbHVlfWA7XHJcblx0XHRcdFx0XHR0aGlzLl9zZWxlY3Rvck9wZW4gPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5vcGVuKCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB0aGlzLnBvcHVwTG9nZ2luZyhg0J7QuSDQvtC5LCDQvdC1INC30LDQv9C+0LvQvdC10L0g0LDRgtGA0LjQsdGD0YIg0YMgJHtidXR0b25PcGVuLmNsYXNzTGlzdH1gKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vINCX0LDQutGA0YvRgtC40LUg0L3QsCDQv9GD0YHRgtC+0Lwg0LzQtdGB0YLQtSAocG9wdXBfX3dyYXBwZXIpINC4INC60L3QvtC/0LrQuCDQt9Cw0LrRgNGL0YLQuNGPIChwb3B1cF9fY2xvc2UpINC00LvRjyDQt9Cw0LrRgNGL0YLQuNGPXHJcblx0XHRcdGNvbnN0IGJ1dHRvbkNsb3NlID0gZS50YXJnZXQuY2xvc2VzdChgWyR7dGhpcy5vcHRpb25zLmF0dHJpYnV0ZUNsb3NlQnV0dG9ufV1gKTtcclxuXHRcdFx0aWYgKGJ1dHRvbkNsb3NlIHx8ICFlLnRhcmdldC5jbG9zZXN0KGAuJHt0aGlzLm9wdGlvbnMuY2xhc3Nlcy5wb3B1cENvbnRlbnR9YCkgJiYgdGhpcy5pc09wZW4pIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHRcdC8vINCX0LDQutGA0YvRgtC40LUg0L/QviBFU0NcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuY2xvc2VFc2MgJiYgZS53aGljaCA9PSAyNyAmJiBlLmNvZGUgPT09ICdFc2NhcGUnICYmIHRoaXMuaXNPcGVuKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5mb2N1c0NhdGNoICYmIGUud2hpY2ggPT0gOSAmJiB0aGlzLmlzT3Blbikge1xyXG5cdFx0XHRcdHRoaXMuX2ZvY3VzQ2F0Y2goZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9LmJpbmQodGhpcykpXHJcblxyXG5cdFx0Ly8g0J7RgtC60YDRi9GC0LjQtSDQv9C+INGF0LXRiNGDXHJcblx0XHRpZiAodGhpcy5vcHRpb25zLmhhc2hTZXR0aW5ncy5nb0hhc2gpIHtcclxuXHRcdFx0Ly8g0J/RgNC+0LLQtdGA0LrQsCDQuNC30LzQtdC90LXQvdC40Y8g0LDQtNGA0LXRgdC90L7QuSDRgdGC0YDQvtC60LhcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9vcGVuVG9IYXNoKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuY2xvc2UodGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0uYmluZCh0aGlzKSlcclxuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xyXG5cdFx0XHRcdFx0dGhpcy5fb3BlblRvSGFzaCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fS5iaW5kKHRoaXMpKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRvcGVuKHNlbGVjdG9yVmFsdWUpIHtcclxuXHRcdGlmIChib2R5TG9ja1N0YXR1cykge1xyXG5cdFx0XHQvLyDQldGB0LvQuCDQv9C10YDQtdC0INC+0YLQutGA0YvRgtC40LXQvCDQv9C+0L/QsNC/0LAg0LHRi9C7INGA0LXQttC40LwgbG9ja1xyXG5cdFx0XHR0aGlzLmJvZHlMb2NrID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbG9jaycpICYmICF0aGlzLmlzT3BlbiA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHRcdC8vINCV0YHQu9C4INCy0LLQtdGB0YLQuCDQt9C90LDRh9C10L3QuNC1INGB0LXQu9C10LrRgtC+0YDQsCAo0YHQtdC70LXQutGC0L7RgCDQvdCw0YHRgtGA0LDQuNCy0LDQtdGC0YHRjyDQsiBvcHRpb25zKVxyXG5cdFx0XHRpZiAoc2VsZWN0b3JWYWx1ZSAmJiB0eXBlb2YgKHNlbGVjdG9yVmFsdWUpID09PSBcInN0cmluZ1wiICYmIHNlbGVjdG9yVmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XHJcblx0XHRcdFx0dGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yID0gc2VsZWN0b3JWYWx1ZTtcclxuXHRcdFx0XHR0aGlzLl9zZWxlY3Rvck9wZW4gPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLmlzT3Blbikge1xyXG5cdFx0XHRcdHRoaXMuX3Jlb3BlbiA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghdGhpcy5fc2VsZWN0b3JPcGVuKSB0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IgPSB0aGlzLmxhc3RDbG9zZWQuc2VsZWN0b3I7XHJcblx0XHRcdGlmICghdGhpcy5fcmVvcGVuKSB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcblxyXG5cdFx0XHR0aGlzLnRhcmdldE9wZW4uZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnRhcmdldE9wZW4uZWxlbWVudCkge1xyXG5cdFx0XHRcdC8vIFlvdVR1YmVcclxuXHRcdFx0XHRpZiAodGhpcy55b3VUdWJlQ29kZSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgY29kZVZpZGVvID0gdGhpcy55b3VUdWJlQ29kZTtcclxuXHRcdFx0XHRcdGNvbnN0IHVybFZpZGVvID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7Y29kZVZpZGVvfT9yZWw9MCZzaG93aW5mbz0wJmF1dG9wbGF5PTFgXHJcblx0XHRcdFx0XHRjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuXHRcdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93ZnVsbHNjcmVlbicsICcnKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBhdXRvcGxheSA9IHRoaXMub3B0aW9ucy5zZXRBdXRvcGxheVlvdXR1YmUgPyAnYXV0b3BsYXk7JyA6ICcnO1xyXG5cdFx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3cnLCBgJHthdXRvcGxheX07IGVuY3J5cHRlZC1tZWRpYWApO1xyXG5cclxuXHRcdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybFZpZGVvKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIXRoaXMudGFyZ2V0T3Blbi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy55b3V0dWJlUGxhY2VBdHRyaWJ1dGV9XWApKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHlvdXR1YmVQbGFjZSA9IHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGV4dCcpLnNldEF0dHJpYnV0ZShgJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfWAsICcnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy55b3V0dWJlUGxhY2VBdHRyaWJ1dGV9XWApLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuaGFzaFNldHRpbmdzLmxvY2F0aW9uKSB7XHJcblx0XHRcdFx0XHQvLyDQn9C+0LvRg9GH0LXQvdC40LUg0YXRjdGI0LAg0Lgg0LXQs9C+INCy0YvRgdGC0LDQstC70LXQvdC40LUgXHJcblx0XHRcdFx0XHR0aGlzLl9nZXRIYXNoKCk7XHJcblx0XHRcdFx0XHR0aGlzLl9zZXRIYXNoKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyDQlNC+INC+0YLQutGA0YvRgtC40Y9cclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMub24uYmVmb3JlT3Blbih0aGlzKTtcclxuXHRcdFx0XHQvLyDQodC+0LfQtNCw0LXQvCDRgdCy0L7QtSDRgdC+0LHRi9GC0LjQtSDQv9C+0YHQu9C1INC+0YLQutGA0YvRgtC40Y8g0L/QvtC/0LDQv9CwXHJcblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJiZWZvcmVQb3B1cE9wZW5cIiwge1xyXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdHBvcHVwOiB0aGlzXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSkpO1xyXG5cclxuXHRcdFx0XHR0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5jbGFzc2VzLnBvcHVwQWN0aXZlKTtcclxuXHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMuY2xhc3Nlcy5ib2R5QWN0aXZlKTtcclxuXHJcblx0XHRcdFx0aWYgKCF0aGlzLl9yZW9wZW4pIHtcclxuXHRcdFx0XHRcdCF0aGlzLmJvZHlMb2NrID8gYm9keUxvY2soKSA6IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgdGhpcy5fcmVvcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcblx0XHRcdFx0Ly8g0JfQsNC/0L7QvNC40L3QsNGOINGN0YLQviDQvtGC0LrRgNGL0YLQvtC1INC+0LrQvdC+LiDQntC90L4g0LHRg9C00LXRgiDQv9C+0YHQu9C10LTQvdC40Lwg0L7RgtC60YDRi9GC0YvQvFxyXG5cdFx0XHRcdHRoaXMucHJldmlvdXNPcGVuLnNlbGVjdG9yID0gdGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yO1xyXG5cdFx0XHRcdHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQgPSB0aGlzLnRhcmdldE9wZW4uZWxlbWVudDtcclxuXHJcblx0XHRcdFx0dGhpcy5fc2VsZWN0b3JPcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLl9mb2N1c1RyYXAoKTtcclxuXHRcdFx0XHR9LCA1MCk7XHJcblxyXG5cdFx0XHRcdC8vINCf0L7RgdC70LUg0L7RgtC60YDRi9GC0LjRj1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5vbi5hZnRlck9wZW4odGhpcyk7XHJcblx0XHRcdFx0Ly8g0KHQvtC30LTQsNC10Lwg0YHQstC+0LUg0YHQvtCx0YvRgtC40LUg0L/QvtGB0LvQtSDQvtGC0LrRgNGL0YLQuNGPINC/0L7Qv9Cw0L/QsFxyXG5cdFx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYWZ0ZXJQb3B1cE9wZW5cIiwge1xyXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdHBvcHVwOiB0aGlzXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdHRoaXMucG9wdXBMb2dnaW5nKGDQntGC0LrRgNGL0Lsg0L/QvtC/0LDQv2ApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHRoaXMucG9wdXBMb2dnaW5nKGDQntC5INC+0LksINGC0LDQutC+0LPQviDQv9C+0L/QsNC/0LAg0L3QtdGCLtCf0YDQvtCy0LXRgNGM0YLQtSDQutC+0YDRgNC10LrRgtC90L7RgdGC0Ywg0LLQstC+0LTQsC4gYCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGNsb3NlKHNlbGVjdG9yVmFsdWUpIHtcclxuXHRcdGlmIChzZWxlY3RvclZhbHVlICYmIHR5cGVvZiAoc2VsZWN0b3JWYWx1ZSkgPT09IFwic3RyaW5nXCIgJiYgc2VsZWN0b3JWYWx1ZS50cmltKCkgIT09IFwiXCIpIHtcclxuXHRcdFx0dGhpcy5wcmV2aW91c09wZW4uc2VsZWN0b3IgPSBzZWxlY3RvclZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLmlzT3BlbiB8fCAhYm9keUxvY2tTdGF0dXMpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Ly8g0JTQviDQt9Cw0LrRgNGL0YLQuNGPXHJcblx0XHR0aGlzLm9wdGlvbnMub24uYmVmb3JlQ2xvc2UodGhpcyk7XHJcblx0XHQvLyDQodC+0LfQtNCw0LXQvCDRgdCy0L7QtSDRgdC+0LHRi9GC0LjQtSDQv9C10YDQtdC0INC30LDQutGA0YvRgtC40LXQvCDQv9C+0L/QsNC/0LBcclxuXHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYmVmb3JlUG9wdXBDbG9zZVwiLCB7XHJcblx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdHBvcHVwOiB0aGlzXHJcblx0XHRcdH1cclxuXHRcdH0pKTtcclxuXHJcblx0XHQvLyBZb3VUdWJlXHJcblx0XHRpZiAodGhpcy55b3VUdWJlQ29kZSkge1xyXG5cdFx0XHRpZiAodGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5vcHRpb25zLnlvdXR1YmVQbGFjZUF0dHJpYnV0ZX1dYCkpXHJcblx0XHRcdFx0dGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5vcHRpb25zLnlvdXR1YmVQbGFjZUF0dHJpYnV0ZX1dYCkuaW5uZXJIVE1MID0gJyc7XHJcblx0XHR9XHJcblx0XHR0aGlzLnByZXZpb3VzT3Blbi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLmNsYXNzZXMucG9wdXBBY3RpdmUpO1xyXG5cdFx0Ly8gYXJpYS1oaWRkZW5cclxuXHRcdHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblx0XHRpZiAoIXRoaXMuX3Jlb3Blbikge1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMuY2xhc3Nlcy5ib2R5QWN0aXZlKTtcclxuXHRcdFx0IXRoaXMuYm9keUxvY2sgPyBib2R5VW5sb2NrKCkgOiBudWxsO1xyXG5cdFx0XHR0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0Ly8g0J7Rh9C40YnQtdC90LjQtSDQsNC00YDQtdGB0L3QvtC5INGB0YLRgNC+0LrQuFxyXG5cdFx0dGhpcy5fcmVtb3ZlSGFzaCgpO1xyXG5cdFx0aWYgKHRoaXMuX3NlbGVjdG9yT3Blbikge1xyXG5cdFx0XHR0aGlzLmxhc3RDbG9zZWQuc2VsZWN0b3IgPSB0aGlzLnByZXZpb3VzT3Blbi5zZWxlY3RvcjtcclxuXHRcdFx0dGhpcy5sYXN0Q2xvc2VkLmVsZW1lbnQgPSB0aGlzLnByZXZpb3VzT3Blbi5lbGVtZW50O1xyXG5cclxuXHRcdH1cclxuXHRcdC8vINCf0L7RgdC70LUg0LfQsNC60YDRi9GC0LjRj1xyXG5cdFx0dGhpcy5vcHRpb25zLm9uLmFmdGVyQ2xvc2UodGhpcyk7XHJcblx0XHQvLyDQodC+0LfQtNCw0LXQvCDRgdCy0L7QtSDRgdC+0LHRi9GC0LjQtSDQv9C+0YHQu9C1INC30LDQutGA0YvRgtC40Y8g0L/QvtC/0LDQv9CwXHJcblx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImFmdGVyUG9wdXBDbG9zZVwiLCB7XHJcblx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdHBvcHVwOiB0aGlzXHJcblx0XHRcdH1cclxuXHRcdH0pKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5fZm9jdXNUcmFwKCk7XHJcblx0XHR9LCA1MCk7XHJcblxyXG5cdFx0dGhpcy5wb3B1cExvZ2dpbmcoYNCX0LDQutGA0YvQuyDQv9C+0L/QsNC/YCk7XHJcblx0fVxyXG5cdC8vINCf0L7Qu9GD0YfQtdC90LjQtSDRhdGN0YjQsCBcclxuXHRfZ2V0SGFzaCgpIHtcclxuXHRcdGlmICh0aGlzLm9wdGlvbnMuaGFzaFNldHRpbmdzLmxvY2F0aW9uKSB7XHJcblx0XHRcdHRoaXMuaGFzaCA9IHRoaXMudGFyZ2V0T3Blbi5zZWxlY3Rvci5pbmNsdWRlcygnIycpID9cclxuXHRcdFx0XHR0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IgOiB0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IucmVwbGFjZSgnLicsICcjJylcclxuXHRcdH1cclxuXHR9XHJcblx0X29wZW5Ub0hhc2goKSB7XHJcblx0XHRsZXQgY2xhc3NJbkhhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpfWApID8gYC4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyl9YCA6XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7d2luZG93LmxvY2F0aW9uLmhhc2h9YCkgPyBgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gIDpcclxuXHRcdFx0XHRudWxsO1xyXG5cclxuXHRcdGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMuYXR0cmlidXRlT3BlbkJ1dHRvbn0gPSBcIiR7Y2xhc3NJbkhhc2h9XCJdYCkgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMuYXR0cmlidXRlT3BlbkJ1dHRvbn0gPSBcIiR7Y2xhc3NJbkhhc2h9XCJdYCkgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMuYXR0cmlidXRlT3BlbkJ1dHRvbn0gPSBcIiR7Y2xhc3NJbkhhc2gucmVwbGFjZSgnLicsIFwiI1wiKX1cIl1gKTtcclxuXHRcdGlmIChidXR0b25zICYmIGNsYXNzSW5IYXNoKSB0aGlzLm9wZW4oY2xhc3NJbkhhc2gpO1xyXG5cdH1cclxuXHQvLyDQo9GC0YHQsNC90L7QstC60LAg0YXRjdGI0LBcclxuXHRfc2V0SGFzaCgpIHtcclxuXHRcdGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgdGhpcy5oYXNoKTtcclxuXHR9XHJcblx0X3JlbW92ZUhhc2goKSB7XHJcblx0XHRoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF0pXHJcblx0fVxyXG5cdF9mb2N1c0NhdGNoKGUpIHtcclxuXHRcdGNvbnN0IGZvY3VzYWJsZSA9IHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZm9jdXNFbCk7XHJcblx0XHRjb25zdCBmb2N1c0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZm9jdXNhYmxlKTtcclxuXHRcdGNvbnN0IGZvY3VzZWRJbmRleCA9IGZvY3VzQXJyYXkuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcblx0XHRpZiAoZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IDApIHtcclxuXHRcdFx0Zm9jdXNBcnJheVtmb2N1c0FycmF5Lmxlbmd0aCAtIDFdLmZvY3VzKCk7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHRcdGlmICghZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IGZvY3VzQXJyYXkubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRmb2N1c0FycmF5WzBdLmZvY3VzKCk7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0X2ZvY3VzVHJhcCgpIHtcclxuXHRcdGNvbnN0IGZvY3VzYWJsZSA9IHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9mb2N1c0VsKTtcclxuXHRcdGlmICghdGhpcy5pc09wZW4gJiYgdGhpcy5sYXN0Rm9jdXNFbCkge1xyXG5cdFx0XHR0aGlzLmxhc3RGb2N1c0VsLmZvY3VzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb2N1c2FibGVbMF0uZm9jdXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly8g0KTRg9C90LrRhtC40Y8g0LLRi9Cy0L7QtNCwINCyINC60L7QvdGB0L7Qu9GMXHJcblx0cG9wdXBMb2dnaW5nKG1lc3NhZ2UpIHtcclxuXHRcdHRoaXMub3B0aW9ucy5sb2dnaW5nID8gRkxTKGBb0J/QvtC/0LDQv9C+0YFdOiAke21lc3NhZ2V9YCkgOiBudWxsO1xyXG5cdH1cclxufVxyXG4vLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INCyINC+0LHRitC10LrRgiDQvNC+0LTRg9C70LXQuVxyXG5mbHNNb2R1bGVzLnBvcHVwID0gbmV3IFBvcHVwKHt9KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMjY1MGQzOWRkMGUyZDEwMjVjZVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==