/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
function initFEcustom() {
  mainSliderInit()
}

$(document).ready(function () {
  $("input[type=tel]").mask("+7 999 999 99 99")
})

function mainSliderInit() {
  $("[data-slider='mainslider']").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: "[data-navslider='mainslider']",
  })
  $("[data-navslider='mainslider']").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: "[data-slider='mainslider']",
    dots: false,
    arrows: false,
    vertical: true,
    focusOnSelect: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          vertical: false,
        },
      },
    ],
  })

  $("[data-navslider='mainslider'] .slick-slide").on(
    "mouseenter",
    function (event) {
      $("[data-slider='mainslider']").slick(
        "slickGoTo",
        $(this).data("slickIndex")
      )
    }
  )
}

window.addEventListener("load", function () {
  initFEcustom()
})

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map