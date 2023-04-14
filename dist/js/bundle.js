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
  new WOW().init()
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
  /*  $("[data-navslider='mainslider'] .slick-slide").on(
    "mouseover",
    function (event) {
      $("[data-slider='mainslider']").slick(
        "slickGoTo",
        $(this).data("slickIndex")
      )
    }
  ) */
  /* var slideTimer
  $('[data-navslider="mainslider"]')
    .on("mouseenter", ".slick-slide", function (e) {
      var $currTarget = $(e.currentTarget)
      $('[data-navslider="mainslider"] .slick-slide').removeClass(
        "slick-current"
      )
      $currTarget.addClass("slick-current")

      slideTimer = setTimeout(function () {
        var index = $('[data-navslider="mainslider"]')
          .find(".slick-current")
          .data("slick-index")
        var slickObj = $('[data-slider="mainslider"]').slick("getSlick")
        slickObj.slickGoTo(index)
      }, 500)
    })
    .on("mouseleave", ".slick-slide", function (e) {
      clearTimeout(slideTimer)
    }) */
}

function detailSliderInit() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 15,
    slidesPerView: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,
    slideToClickedSlide: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
  })
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },

    /* on: {
			slideChange: function () {
				let activeIndex = this.activeIndex + 1;

				let activeSlide = document.querySelector(`.mySwiper2 .swiper-slide:nth-child(${activeIndex})`);
				let nextSlide = document.querySelector(`.mySwiper2 .swiper-slide:nth-child(${activeIndex + 1})`);
				let prevSlide = document.querySelector(`.mySwiper2 .swiper-slide:nth-child(${activeIndex - 1})`);

				if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
					this.thumbs.swiper.slideNext()
				} else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
					this.thumbs.swiper.slidePrev()
				}
			}
		} */
  })
}

function fileUpload() {
  const actualBtn = document.getElementById("actual-btn")

  const fileChosen = document.getElementById("file-chosen")

  actualBtn.addEventListener("change", function () {
    fileChosen.textContent = this.files[0].name
  })
}

function showCallback() {
  $(document).scroll(function () {
    var y = $(this).scrollTop()
    if (y > 500) {
      $(".cbb").fadeIn()
    } else {
      $(".cbb").fadeOut()
    }
  })
}

function animationCounter1() {
  $(".js-appear-count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now))
          },
        }
      )
  })
}

function reviewsSliderInit() {
  $(".reviewsblock__slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1484,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  })
}

function partnersSliderInit() {
  $(".parntersblock__slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1484,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  })
}

function worksSliderInit() {
  $(".sliderworks__slider").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {
      console.log("init")
      $(slick.$slides.get(0)).addClass("currentslide")
      $(slick.$slides.get(1)).addClass("nextslide")
      $(slick.$slides.get(2)).addClass("nextnextslide")
    }
  )

  $(".sliderworks__slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  })

  $(".sliderworks__slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      let direction
      if (currentSlide === 0 && nextSlide === slick.$slides.length - 1) {
        // its going from the first slide to the last slide (backwards)
        direction = "prev"
      } else if (
        nextSlide > currentSlide ||
        (currentSlide === slick.$slides.length - 1 && nextSlide === 0)
      ) {
        // its either going normally forwards or going from the last slide to the first
        direction = "next"
      } else {
        direction = "prev"
      }

      let CurrentSlideDom = 1
      let NextSlideDom = 2
      let NextNExtSlideDom = 3

      if (direction === "next") {
        CurrentSlideDom = $(slick.$slides.get(nextSlide))
        NextSlideDom = $(slick.$slides.get(nextSlide)).next()
        NextNExtSlideDom = NextSlideDom.next()
      } else {
        CurrentSlideDom = $(slick.$slides.get(nextSlide))
        NextSlideDom = CurrentSlideDom.next()
        NextNExtSlideDom = NextSlideDom.next()
      }

      $(slick.$slides.removeClass("currentslide"))
      $(slick.$slides.removeClass("nextslide"))
      $(slick.$slides.removeClass("nextnextslide"))

      CurrentSlideDom.addClass("currentslide")
      NextSlideDom.addClass("nextslide")
      NextNExtSlideDom.addClass("nextnextslide")
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