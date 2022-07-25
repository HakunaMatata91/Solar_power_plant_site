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
/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }

/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили

// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.text-content__slider')) {
		new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.text-content__slider', {
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
				el: '.controll-swiper-block',
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
					const allSlides = document.querySelector('.fraction-controll__all');
					const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
					allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
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
	//initSlidersScroll();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a60561655e31176ce846")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NDRlNmU2MTMyZDI5MmNkZDE3YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDK0Q7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4Q0FBTTtBQUNaO0FBQ0E7QUFDQSxhQUFhLDhDQUFVLEVBQUUsOENBQVUsRUFBRSw0Q0FBUSxFQUFFLDRDQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxzQkFBc0I7QUFDbEYsS0FBSztBQUNMO0FBQ0E7QUFDQSw4REFBOEQscUJBQXFCO0FBQ25GO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtDQUFrQztBQUN4RDtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDN0hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NsaWRlcnMuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6IFxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQsDogaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbtCh0L3QuNC/0L/QtdGCKEhUTUwpOiBzd2lwZXJcclxuKi9cclxuXHJcbi8vINCf0L7QtNC60LvRjtGH0LDQtdC8INGB0LvQsNC50LTQtdGAIFN3aXBlciDQuNC3IG5vZGVfbW9kdWxlc1xyXG4vLyDQn9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0L/QvtC00LrQu9GO0YfQsNC10Lwg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsCwg0YPQutCw0LfRi9Cy0LDRjyDQuNGFINCyIHt9INGH0LXRgNC10Lcg0LfQsNC/0Y/RgtGD0Y5cclxuLy8g0J/RgNC40LzQtdGAOiB7IE5hdmlnYXRpb24sIEF1dG9wbGF5IH1cclxuaW1wb3J0IFN3aXBlciwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBQYXJhbGxheCwgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXInO1xyXG4vKlxyXG7QntGB0L3QvtCy0L3QuNGL0LUg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LA6XHJcbk5hdmlnYXRpb24sIFBhZ2luYXRpb24sIEF1dG9wbGF5LCBcclxuRWZmZWN0RmFkZSwgTGF6eSwgTWFuaXB1bGF0aW9uXHJcbtCf0L7QtNGA0L7QsdC90LXQtSDRgdC80L7RgtGA0LggaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbiovXHJcblxyXG4vLyDQodGC0LjQu9C4IFN3aXBlclxyXG4vLyDQkdCw0LfQvtCy0YvQtSDRgdGC0LjQu9C4XHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvYmFzZS9zd2lwZXIuc2Nzc1wiO1xyXG4vLyDQn9C+0LvQvdGL0Lkg0L3QsNCx0L7RgCDRgdGC0LjQu9C10Lkg0LjQtyBzY3NzL2xpYnMvc3dpcGVyLnNjc3NcclxuLy8gaW1wb3J0IFwiLi4vLi4vc2Nzcy9saWJzL3N3aXBlci5zY3NzXCI7XHJcbi8vINCf0L7Qu9C90YvQuSDQvdCw0LHQvtGAINGB0YLQuNC70LXQuSDQuNC3IG5vZGVfbW9kdWxlc1xyXG4vLyBpbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5cclxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQvtCyXHJcbmZ1bmN0aW9uIGluaXRTbGlkZXJzKCkge1xyXG5cdC8vINCf0LXRgNC10YfQtdC90Ywg0YHQu9Cw0LnQtNC10YDQvtCyXHJcblx0Ly8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDQtdGB0YLRjCDQu9C4INGB0LvQsNC50LTQtdGAINC90LAg0YHRgtGA0L7QvdC40YbQtVxyXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1jb250ZW50X19zbGlkZXInKSkge1xyXG5cdFx0bmV3IFN3aXBlcignLnRleHQtY29udGVudF9fc2xpZGVyJywge1xyXG5cdFx0XHQvLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0XHQvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDRgdC70YPRh9Cw0Y9cclxuXHRcdFx0bW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb24sIFBhcmFsbGF4LCBBdXRvcGxheV0sXHJcblx0XHRcdC8vZWZmZWN0OiAnZmFkZScsXHJcblx0XHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdFx0ZGVsYXk6IDMwMDAsXHJcblx0XHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvYnNlcnZlcjogdHJ1ZSxcclxuXHRcdFx0b2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogNTAsXHJcblx0XHRcdHBhcmFsbGF4OiB0cnVlLFxyXG5cdFx0XHQvL2F1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdHNwZWVkOiA4MDAsXHJcblx0XHRcdC8vdG91Y2hSYXRpbzogMCxcclxuXHRcdFx0Ly9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0Ly9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuXHRcdFx0Ly9sYXp5OiB0cnVlLFxyXG5cdFx0XHQvLyBEb3R0c1xyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICcuY29udHJvbGwtc3dpcGVyLWJsb2NrJyxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdC8qXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cdFx0XHRcdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ5OTI6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTI2ODoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ki9cclxuXHRcdFx0b246IHtcclxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoc3dpcGVyKSB7XHJcblx0XHRcdFx0XHRjb25zdCBhbGxTbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJhY3Rpb24tY29udHJvbGxfX2FsbCcpO1xyXG5cdFx0XHRcdFx0Y29uc3QgYWxsU2xpZGVzSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUtbWFpbi1ibG9jazpub3QoLnN3aXBlci1zbGlkZS1kdXBsaWNhdGUpJyk7XHJcblx0XHRcdFx0XHRhbGxTbGlkZXMuaW5uZXJIVE1MID0gYWxsU2xpZGVzSXRlbXMubGVuZ3RoIDwgMTAgPyBgMCR7YWxsU2xpZGVzSXRlbXMubGVuZ3RofWAgOiBhbGxTbGlkZXNJdGVtcy5sZW5ndGg7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzbGlkZUNoYW5nZTogZnVuY3Rpb24gKHN3aXBlcikge1xyXG5cdFx0XHRcdFx0Y29uc3QgY3VycmVudFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyYWN0aW9uLWNvbnRyb2xsX19jdXJyZW50Jyk7XHJcblx0XHRcdFx0XHRjdXJyZW50U2xpZGUuaW5uZXJIVE1MID0gc3dpcGVyLnJlYWxJbmRleCArIDEgPCAxMCA/IGAwJHtzd2lwZXIucmVhbEluZGV4ICsgMX1gIDogc3dpcGVyLnJlYWxJbmRleCArIDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuLy8g0KHQutGA0L7Qu9C7INC90LAg0LHQsNC30LUg0YHQu9Cw0LnQtNC10YDQsCAo0L/QviDQutC70LDRgdGB0YMgc3dpcGVyX3Njcm9sbCDQtNC70Y8g0L7QsdC+0LvQvtGH0LrQuCDRgdC70LDQudC00LXRgNCwKVxyXG5mdW5jdGlvbiBpbml0U2xpZGVyc1Njcm9sbCgpIHtcclxuXHRsZXQgc2xpZGVyU2Nyb2xsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyX3Njcm9sbCcpO1xyXG5cdGlmIChzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGggPiAwKSB7XHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2xpZGVyU2Nyb2xsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbEl0ZW0gPSBzbGlkZXJTY3JvbGxJdGVtc1tpbmRleF07XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbEJhciA9IHNsaWRlclNjcm9sbEl0ZW0ucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKTtcclxuXHRcdFx0Y29uc3Qgc2xpZGVyU2Nyb2xsID0gbmV3IFN3aXBlcihzbGlkZXJTY3JvbGxJdGVtLCB7XHJcblx0XHRcdFx0b2JzZXJ2ZXI6IHRydWUsXHJcblx0XHRcdFx0b2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcblx0XHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRmcmVlTW9kZToge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdFx0ZWw6IHNsaWRlclNjcm9sbEJhcixcclxuXHRcdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdHNuYXBPblJlbGVhc2U6IGZhbHNlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtb3VzZXdoZWVsOiB7XHJcblx0XHRcdFx0XHRyZWxlYXNlT25FZGdlczogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2xpZGVyU2Nyb2xsLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHQvLyDQl9Cw0L/Rg9GB0Log0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0YHQu9Cw0LnQtNC10YDQvtCyXHJcblx0aW5pdFNsaWRlcnMoKTtcclxuXHQvLyDQl9Cw0L/Rg9GB0Log0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0YHQutGA0L7Qu9C70LAg0L3QsCDQsdCw0LfQtSDRgdC70LDQudC00LXRgNCwICjQv9C+INC60LvQsNGB0YHRgyBzd2lwZXJfc2Nyb2xsKVxyXG5cdC8vaW5pdFNsaWRlcnNTY3JvbGwoKTtcclxufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTYwNTYxNjU1ZTMxMTc2Y2U4NDZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=