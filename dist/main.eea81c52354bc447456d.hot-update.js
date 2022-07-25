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
			modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Parallax, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay],
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
				slideChange: function (swiper) {
					const currentSlide = document.querySelector('.fraction-controll__current');
					currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
				}
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
/******/ 	__webpack_require__.h = () => ("7301143f114a16b262b2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lZWE4MWM1MjM1NGJjNDQ3NDU2ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDNEU7QUFDNUU7QUFDQTtBQUNxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFNO0FBQ1o7QUFDQTtBQUNBLGFBQWEsOENBQVUsRUFBRSw4Q0FBVSxFQUFFLDRDQUFRLEVBQUUsNENBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsOERBQThELHFCQUFxQjtBQUNuRjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0NBQWtDO0FBQ3hEO0FBQ0E7QUFDQSw0QkFBNEIsOENBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUMvSEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvc2xpZGVycy5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDRgdC70LDQudC00LXRgCBTd2lwZXIgXHJcbmltcG9ydCBTd2lwZXIsIHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgUGFyYWxsYXgsIEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcclxuXHJcbi8vINCR0LDQt9C+0LLRi9C1INGB0YLQuNC70LhcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9iYXNlL3N3aXBlci5zY3NzXCI7XHJcbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQvtCyINGB0LvQsNC50LTQtdGA0LDQvFxyXG4vLyBzd2lwZXIg0LPQu9Cw0LLQvdC+0LzRgyDQsdC70L7QutGDLCBzd2lwZXItd3JhcHBlciDQvtCx0L7Qu9C+0YfQutC1LCBzd2lwZXItc2xpZGUg0LTQu9GPINGB0LvQsNC50LTQvtCyXHJcbmZ1bmN0aW9uIGJpbGRTbGlkZXJzKCkge1xyXG5cdC8vQmlsZFNsaWRlclxyXG5cdGxldCBzbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cIl9fc3dpcGVyXCJdOm5vdCguc3dpcGVyLXdyYXBwZXIpJyk7XHJcblx0aWYgKHNsaWRlcnMpIHtcclxuXHRcdHNsaWRlcnMuZm9yRWFjaChzbGlkZXIgPT4ge1xyXG5cdFx0XHRzbGlkZXIucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzd2lwZXInKTtcclxuXHRcdFx0c2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci13cmFwcGVyJyk7XHJcblx0XHRcdGZvciAoY29uc3Qgc2xpZGUgb2Ygc2xpZGVyLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0c2xpZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLXNsaWRlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC70LDQudC00LXRgNC+0LJcclxuZnVuY3Rpb24gaW5pdFNsaWRlcnMoKSB7XHJcblx0Ly8g0JTQvtCx0LDQstC70LXQvdC40LUg0LrQu9Cw0YHRgdC+0LIg0YHQu9Cw0LnQtNC10YDQsFxyXG5cdC8vINC/0YDQuCDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCDQvtGC0LrQu9GO0YfQuNGC0YxcclxuXHRiaWxkU2xpZGVycygpO1xyXG5cclxuXHQvLyDQn9C10YDQtdGH0LXQvdGMINGB0LvQsNC50LTQtdGA0L7QslxyXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWluZm9fX3NsaWRlJykpIHtcclxuXHRcdG5ldyBTd2lwZXIoJy5zbGlkZXItaW5mb19fc2xpZGUnLCB7XHJcblx0XHRcdC8vINCf0L7QtNC60LvRjtGH0LDQtdC8INC80L7QtNGD0LvQuCDRgdC70LDQudC00LXRgNCwXHJcblx0XHRcdC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INGB0LvRg9GH0LDRj1xyXG5cdFx0XHRtb2R1bGVzOiBbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgUGFyYWxsYXgsIEF1dG9wbGF5XSxcclxuXHRcdFx0Ly9lZmZlY3Q6ICdmYWRlJyxcclxuXHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRkZWxheTogMzAwMCxcclxuXHRcdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHRcdG9ic2VydmVyOiB0cnVlLFxyXG5cdFx0XHRvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiA1MCxcclxuXHRcdFx0cGFyYWxsYXg6IHRydWUsXHJcblx0XHRcdC8vYXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0c3BlZWQ6IDgwMCxcclxuXHRcdFx0Ly90b3VjaFJhdGlvOiAwLFxyXG5cdFx0XHQvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHQvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG5cdFx0XHQvL2xhenk6IHRydWUsXHJcblx0XHRcdC8vIERvdHRzXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJy5jb250cm9sbC1tYWluLWJsb2NrX19kb3R0cycsXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKlxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdFx0XHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTkyOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEyNjg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdCovXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKHN3aXBlcikge1xyXG5cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiAoc3dpcGVyKSB7XHJcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJhY3Rpb24tY29udHJvbGxfX2N1cnJlbnQnKTtcclxuXHRcdFx0XHRcdGN1cnJlbnRTbGlkZS5pbm5lckhUTUwgPSBzd2lwZXIucmVhbEluZGV4ICsgMSA8IDEwID8gYDAke3N3aXBlci5yZWFsSW5kZXggKyAxfWAgOiBzd2lwZXIucmVhbEluZGV4ICsgMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn1cclxuLy8g0KHQutGA0L7Qu9C7INC90LAg0LHQsNC30LUg0YHQu9Cw0LnQtNC10YDQsCAo0L/QviDQutC70LDRgdGB0YMgc3dpcGVyX3Njcm9sbCDQtNC70Y8g0L7QsdC+0LvQvtGH0LrQuCDRgdC70LDQudC00LXRgNCwKVxyXG5mdW5jdGlvbiBpbml0U2xpZGVyc1Njcm9sbCgpIHtcclxuXHQvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQutC70LDRgdGB0L7QsiDRgdC70LDQudC00LXRgNCwXHJcblx0Ly8g0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INC+0YLQutC70Y7Rh9C40YLRjFxyXG5cdGJpbGRTbGlkZXJzKCk7XHJcblxyXG5cdGxldCBzbGlkZXJTY3JvbGxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXJfc2Nyb2xsJyk7XHJcblx0aWYgKHNsaWRlclNjcm9sbEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3Qgc2xpZGVyU2Nyb2xsSXRlbSA9IHNsaWRlclNjcm9sbEl0ZW1zW2luZGV4XTtcclxuXHRcdFx0Y29uc3Qgc2xpZGVyU2Nyb2xsQmFyID0gc2xpZGVyU2Nyb2xsSXRlbS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNjcm9sbGJhcicpO1xyXG5cdFx0XHRjb25zdCBzbGlkZXJTY3JvbGwgPSBuZXcgU3dpcGVyKHNsaWRlclNjcm9sbEl0ZW0sIHtcclxuXHRcdFx0XHRvYnNlcnZlcjogdHJ1ZSxcclxuXHRcdFx0XHRvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuXHRcdFx0XHRkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdGZyZWVNb2RlOiB7XHJcblx0XHRcdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2Nyb2xsYmFyOiB7XHJcblx0XHRcdFx0XHRlbDogc2xpZGVyU2Nyb2xsQmFyLFxyXG5cdFx0XHRcdFx0ZHJhZ2dhYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0c25hcE9uUmVsZWFzZTogZmFsc2VcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1vdXNld2hlZWw6IHtcclxuXHRcdFx0XHRcdHJlbGVhc2VPbkVkZ2VzOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzbGlkZXJTY3JvbGwuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdC8vINCX0LDQv9GD0YHQuiDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDRgdC70LDQudC00LXRgNC+0LJcclxuXHRpbml0U2xpZGVycygpO1xyXG5cdC8vINCX0LDQv9GD0YHQuiDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDRgdC60YDQvtC70LvQsCDQvdCwINCx0LDQt9C1INGB0LvQsNC50LTQtdGA0LAgKNC/0L4g0LrQu9Cw0YHRgdGDIHN3aXBlcl9zY3JvbGwpXHJcblx0Ly8gaW5pdFNsaWRlcnNTY3JvbGwoKTtcclxufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzMwMTE0M2YxMTRhMTZiMjYyYjJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=