"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/sliders.js":
/*!*********************************!*\
  !*** ./src/js/files/sliders.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _scss_base_swiper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/base/swiper.scss */ "./src/scss/base/swiper.scss");

// Подключаем слайдер Swiper 


// Базовые стили

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.slider-info__slide')) {
		new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-info__slide', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.controll-main-block__dotts',
				clickable: true,
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {
				init: function (swiper) {

				},

			}
		});
	}

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	// initSlidersScroll();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a602ef923b371cbfe4b9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZjMzNDc4ZTFmZjc0OTY4OTk5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDNEU7QUFDNUU7QUFDQTtBQUNxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFNO0FBQ1o7QUFDQTtBQUNBLGFBQWEsOENBQVUsRUFBRSw4Q0FBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQ0FBa0M7QUFDeEQ7QUFDQTtBQUNBLDRCQUE0Qiw4Q0FBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQzVIRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9zbGlkZXJzLmpzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vINCf0L7QtNC60LvRjtGH0LDQtdC8INGB0LvQsNC50LTQtdGAIFN3aXBlciBcclxuaW1wb3J0IFN3aXBlciwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBQYXJhbGxheCwgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXInO1xyXG5cclxuLy8g0JHQsNC30L7QstGL0LUg0YHRgtC40LvQuFxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2Jhc2Uvc3dpcGVyLnNjc3NcIjtcclxuLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LrQu9Cw0YHRgdC+0LIg0YHQu9Cw0LnQtNC10YDQsNC8XHJcbi8vIHN3aXBlciDQs9C70LDQstC90L7QvNGDINCx0LvQvtC60YMsIHN3aXBlci13cmFwcGVyINC+0LHQvtC70L7Rh9C60LUsIHN3aXBlci1zbGlkZSDQtNC70Y8g0YHQu9Cw0LnQtNC+0LJcclxuZnVuY3Rpb24gYmlsZFNsaWRlcnMoKSB7XHJcblx0Ly9CaWxkU2xpZGVyXHJcblx0bGV0IHNsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwiX19zd2lwZXJcIl06bm90KC5zd2lwZXItd3JhcHBlciknKTtcclxuXHRpZiAoc2xpZGVycykge1xyXG5cdFx0c2xpZGVycy5mb3JFYWNoKHNsaWRlciA9PiB7XHJcblx0XHRcdHNsaWRlci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N3aXBlcicpO1xyXG5cdFx0XHRzbGlkZXIuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLXdyYXBwZXInKTtcclxuXHRcdFx0Zm9yIChjb25zdCBzbGlkZSBvZiBzbGlkZXIuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRzbGlkZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItc2xpZGUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0LvQsNC50LTQtdGA0L7QslxyXG5mdW5jdGlvbiBpbml0U2xpZGVycygpIHtcclxuXHQvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQutC70LDRgdGB0L7QsiDRgdC70LDQudC00LXRgNCwXHJcblx0Ly8g0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INC+0YLQutC70Y7Rh9C40YLRjFxyXG5cdGJpbGRTbGlkZXJzKCk7XHJcblxyXG5cdC8vINCf0LXRgNC10YfQtdC90Ywg0YHQu9Cw0LnQtNC10YDQvtCyXHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItaW5mb19fc2xpZGUnKSkge1xyXG5cdFx0bmV3IFN3aXBlcignLnNsaWRlci1pbmZvX19zbGlkZScsIHtcclxuXHRcdFx0Ly8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LBcclxuXHRcdFx0Ly8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0YHQu9GD0YfQsNGPXHJcblx0XHRcdG1vZHVsZXM6IFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uXSxcclxuXHRcdFx0Ly9lZmZlY3Q6ICdmYWRlJyxcclxuXHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRkZWxheTogMzAwMCxcclxuXHRcdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHRcdG9ic2VydmVyOiB0cnVlLFxyXG5cdFx0XHRvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiA1MCxcclxuXHRcdFx0cGFyYWxsYXg6IHRydWUsXHJcblx0XHRcdC8vYXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0c3BlZWQ6IDgwMCxcclxuXHRcdFx0Ly90b3VjaFJhdGlvOiAwLFxyXG5cdFx0XHQvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHQvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG5cdFx0XHQvL2xhenk6IHRydWUsXHJcblx0XHRcdC8vIERvdHRzXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJy5jb250cm9sbC1tYWluLWJsb2NrX19kb3R0cycsXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKlxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdFx0XHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTkyOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEyNjg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdCovXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKHN3aXBlcikge1xyXG5cclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufVxyXG4vLyDQodC60YDQvtC70Lsg0L3QsCDQsdCw0LfQtSDRgdC70LDQudC00LXRgNCwICjQv9C+INC60LvQsNGB0YHRgyBzd2lwZXJfc2Nyb2xsINC00LvRjyDQvtCx0L7Qu9C+0YfQutC4INGB0LvQsNC50LTQtdGA0LApXHJcbmZ1bmN0aW9uIGluaXRTbGlkZXJzU2Nyb2xsKCkge1xyXG5cdC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQvtCyINGB0LvQsNC50LTQtdGA0LBcclxuXHQvLyDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0L7RgtC60LvRjtGH0LjRgtGMXHJcblx0YmlsZFNsaWRlcnMoKTtcclxuXHJcblx0bGV0IHNsaWRlclNjcm9sbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlcl9zY3JvbGwnKTtcclxuXHRpZiAoc2xpZGVyU2Nyb2xsSXRlbXMubGVuZ3RoID4gMCkge1xyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNsaWRlclNjcm9sbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0XHRjb25zdCBzbGlkZXJTY3JvbGxJdGVtID0gc2xpZGVyU2Nyb2xsSXRlbXNbaW5kZXhdO1xyXG5cdFx0XHRjb25zdCBzbGlkZXJTY3JvbGxCYXIgPSBzbGlkZXJTY3JvbGxJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2Nyb2xsYmFyJyk7XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbCA9IG5ldyBTd2lwZXIoc2xpZGVyU2Nyb2xsSXRlbSwge1xyXG5cdFx0XHRcdG9ic2VydmVyOiB0cnVlLFxyXG5cdFx0XHRcdG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG5cdFx0XHRcdGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdFx0ZnJlZU1vZGU6IHtcclxuXHRcdFx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzY3JvbGxiYXI6IHtcclxuXHRcdFx0XHRcdGVsOiBzbGlkZXJTY3JvbGxCYXIsXHJcblx0XHRcdFx0XHRkcmFnZ2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRzbmFwT25SZWxlYXNlOiBmYWxzZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bW91c2V3aGVlbDoge1xyXG5cdFx0XHRcdFx0cmVsZWFzZU9uRWRnZXM6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNsaWRlclNjcm9sbC5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0Ly8g0JfQsNC/0YPRgdC6INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INGB0LvQsNC50LTQtdGA0L7QslxyXG5cdGluaXRTbGlkZXJzKCk7XHJcblx0Ly8g0JfQsNC/0YPRgdC6INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INGB0LrRgNC+0LvQu9CwINC90LAg0LHQsNC30LUg0YHQu9Cw0LnQtNC10YDQsCAo0L/QviDQutC70LDRgdGB0YMgc3dpcGVyX3Njcm9sbClcclxuXHQvLyBpbml0U2xpZGVyc1Njcm9sbCgpO1xyXG59KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNjAyZWY5MjNiMzcxY2JmZTRiOVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==