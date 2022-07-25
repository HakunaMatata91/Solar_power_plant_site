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
			// pagination: {
			// 	el: '.controll-main-block__dotts',
			// 	clickable: true,
			// },
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
/******/ 	__webpack_require__.h = () => ("a9af536a4ec78cb60308")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kYTE3ZjhkZDVhZmJhNTc0YTE0Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDNEU7QUFDNUU7QUFDQTtBQUNxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFNO0FBQ1o7QUFDQTtBQUNBLGFBQWEsOENBQVUsRUFBRSw4Q0FBVSxFQUFFLDRDQUFRLEVBQUUsNENBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELHNCQUFzQjtBQUNsRixLQUFLO0FBQ0w7QUFDQTtBQUNBLDhEQUE4RCxxQkFBcUI7QUFDbkY7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtDQUFrQztBQUN4RDtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDaklEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NsaWRlcnMuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0YHQu9Cw0LnQtNC10YAgU3dpcGVyIFxyXG5pbXBvcnQgU3dpcGVyLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24sIFBhcmFsbGF4LCBBdXRvcGxheSB9IGZyb20gJ3N3aXBlcic7XHJcblxyXG4vLyDQkdCw0LfQvtCy0YvQtSDRgdGC0LjQu9C4XHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvYmFzZS9zd2lwZXIuc2Nzc1wiO1xyXG4vLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQutC70LDRgdGB0L7QsiDRgdC70LDQudC00LXRgNCw0LxcclxuLy8gc3dpcGVyINCz0LvQsNCy0L3QvtC80YMg0LHQu9C+0LrRgywgc3dpcGVyLXdyYXBwZXIg0L7QsdC+0LvQvtGH0LrQtSwgc3dpcGVyLXNsaWRlINC00LvRjyDRgdC70LDQudC00L7QslxyXG5mdW5jdGlvbiBiaWxkU2xpZGVycygpIHtcclxuXHQvL0JpbGRTbGlkZXJcclxuXHRsZXQgc2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJfX3N3aXBlclwiXTpub3QoLnN3aXBlci13cmFwcGVyKScpO1xyXG5cdGlmIChzbGlkZXJzKSB7XHJcblx0XHRzbGlkZXJzLmZvckVhY2goc2xpZGVyID0+IHtcclxuXHRcdFx0c2xpZGVyLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3dpcGVyJyk7XHJcblx0XHRcdHNsaWRlci5jbGFzc0xpc3QuYWRkKCdzd2lwZXItd3JhcHBlcicpO1xyXG5cdFx0XHRmb3IgKGNvbnN0IHNsaWRlIG9mIHNsaWRlci5jaGlsZHJlbikge1xyXG5cdFx0XHRcdHNsaWRlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1zbGlkZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQvtCyXHJcbmZ1bmN0aW9uIGluaXRTbGlkZXJzKCkge1xyXG5cdC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQvtCyINGB0LvQsNC50LTQtdGA0LBcclxuXHQvLyDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0L7RgtC60LvRjtGH0LjRgtGMXHJcblx0YmlsZFNsaWRlcnMoKTtcclxuXHJcblx0Ly8g0J/QtdGA0LXRh9C10L3RjCDRgdC70LDQudC00LXRgNC+0LJcclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1pbmZvX19zbGlkZScpKSB7XHJcblx0XHRuZXcgU3dpcGVyKCcuc2xpZGVyLWluZm9fX3NsaWRlJywge1xyXG5cdFx0XHQvLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0XHQvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDRgdC70YPRh9Cw0Y9cclxuXHRcdFx0bW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb24sIFBhcmFsbGF4LCBBdXRvcGxheV0sXHJcblx0XHRcdC8vZWZmZWN0OiAnZmFkZScsXHJcblx0XHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdFx0ZGVsYXk6IDMwMDAsXHJcblx0XHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvYnNlcnZlcjogdHJ1ZSxcclxuXHRcdFx0b2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogNTAsXHJcblx0XHRcdHBhcmFsbGF4OiB0cnVlLFxyXG5cdFx0XHQvL2F1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdHNwZWVkOiA4MDAsXHJcblx0XHRcdC8vdG91Y2hSYXRpbzogMCxcclxuXHRcdFx0Ly9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0Ly9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuXHRcdFx0Ly9sYXp5OiB0cnVlLFxyXG5cdFx0XHQvLyBEb3R0c1xyXG5cdFx0XHQvLyBwYWdpbmF0aW9uOiB7XHJcblx0XHRcdC8vIFx0ZWw6ICcuY29udHJvbGwtbWFpbi1ibG9ja19fZG90dHMnLFxyXG5cdFx0XHQvLyBcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0Ly8gfSxcclxuXHRcdFx0LypcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRcdFx0XHRhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDk5Mjoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMjY4OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQqL1xyXG5cdFx0XHRvbjoge1xyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uIChzd2lwZXIpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGFsbFNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmFjdGlvbi1jb250cm9sbF9fYWxsJyk7XHJcblx0XHRcdFx0XHRjb25zdCBhbGxTbGlkZXNJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZS1tYWluLWJsb2NrOm5vdCguc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZSknKTtcclxuXHRcdFx0XHRcdGFsbFNsaWRlcy5pbm5lckhUTUwgPSBhbGxTbGlkZXNJdGVtcy5sZW5ndGggPCAxMCA/IGAwJHthbGxTbGlkZXNJdGVtcy5sZW5ndGh9YCA6IGFsbFNsaWRlc0l0ZW1zLmxlbmd0aDtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiAoc3dpcGVyKSB7XHJcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJhY3Rpb24tY29udHJvbGxfX2N1cnJlbnQnKTtcclxuXHRcdFx0XHRcdGN1cnJlbnRTbGlkZS5pbm5lckhUTUwgPSBzd2lwZXIucmVhbEluZGV4ICsgMSA8IDEwID8gYDAke3N3aXBlci5yZWFsSW5kZXggKyAxfWAgOiBzd2lwZXIucmVhbEluZGV4ICsgMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn1cclxuLy8g0KHQutGA0L7Qu9C7INC90LAg0LHQsNC30LUg0YHQu9Cw0LnQtNC10YDQsCAo0L/QviDQutC70LDRgdGB0YMgc3dpcGVyX3Njcm9sbCDQtNC70Y8g0L7QsdC+0LvQvtGH0LrQuCDRgdC70LDQudC00LXRgNCwKVxyXG5mdW5jdGlvbiBpbml0U2xpZGVyc1Njcm9sbCgpIHtcclxuXHQvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQutC70LDRgdGB0L7QsiDRgdC70LDQudC00LXRgNCwXHJcblx0Ly8g0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INC+0YLQutC70Y7Rh9C40YLRjFxyXG5cdGJpbGRTbGlkZXJzKCk7XHJcblxyXG5cdGxldCBzbGlkZXJTY3JvbGxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXJfc2Nyb2xsJyk7XHJcblx0aWYgKHNsaWRlclNjcm9sbEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3Qgc2xpZGVyU2Nyb2xsSXRlbSA9IHNsaWRlclNjcm9sbEl0ZW1zW2luZGV4XTtcclxuXHRcdFx0Y29uc3Qgc2xpZGVyU2Nyb2xsQmFyID0gc2xpZGVyU2Nyb2xsSXRlbS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNjcm9sbGJhcicpO1xyXG5cdFx0XHRjb25zdCBzbGlkZXJTY3JvbGwgPSBuZXcgU3dpcGVyKHNsaWRlclNjcm9sbEl0ZW0sIHtcclxuXHRcdFx0XHRvYnNlcnZlcjogdHJ1ZSxcclxuXHRcdFx0XHRvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuXHRcdFx0XHRkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdGZyZWVNb2RlOiB7XHJcblx0XHRcdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2Nyb2xsYmFyOiB7XHJcblx0XHRcdFx0XHRlbDogc2xpZGVyU2Nyb2xsQmFyLFxyXG5cdFx0XHRcdFx0ZHJhZ2dhYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0c25hcE9uUmVsZWFzZTogZmFsc2VcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1vdXNld2hlZWw6IHtcclxuXHRcdFx0XHRcdHJlbGVhc2VPbkVkZ2VzOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzbGlkZXJTY3JvbGwuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdC8vINCX0LDQv9GD0YHQuiDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDRgdC70LDQudC00LXRgNC+0LJcclxuXHRpbml0U2xpZGVycygpO1xyXG5cdC8vINCX0LDQv9GD0YHQuiDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDRgdC60YDQvtC70LvQsCDQvdCwINCx0LDQt9C1INGB0LvQsNC50LTQtdGA0LAgKNC/0L4g0LrQu9Cw0YHRgdGDIHN3aXBlcl9zY3JvbGwpXHJcblx0Ly8gaW5pdFNsaWRlcnNTY3JvbGwoKTtcclxufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTlhZjUzNmE0ZWM3OGNiNjAzMDhcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=