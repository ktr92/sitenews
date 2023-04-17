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
