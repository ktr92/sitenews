function initFEcustom(){mainSliderInit()}function mainSliderInit(){$("[data-slider='mainslider']").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:"[data-navslider='mainslider']"}),$("[data-navslider='mainslider']").slick({slidesToShow:5,slidesToScroll:1,asNavFor:"[data-slider='mainslider']",dots:!1,arrows:!1,vertical:!0,focusOnSelect:!1,centerMode:!1,responsive:[{breakpoint:1023,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,vertical:!1}}]}),$("[data-navslider='mainslider'] .slick-slide").on("mouseenter",(function(e){$("[data-slider='mainslider']").slick("slickGoTo",$(this).data("slickIndex"))}))}function detailSliderInit(){var e=new Swiper(".mySwiper",{spaceBetween:15,slidesPerView:5,watchSlidesVisibility:!0,watchSlidesProgress:!0,centerInsufficientSlides:!0,slideToClickedSlide:!0,scrollbar:{el:".swiper-scrollbar",hide:!1,draggable:!0}});new Swiper(".mySwiper2",{spaceBetween:0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e}})}function fileUpload(){const e=document.getElementById("actual-btn"),s=document.getElementById("file-chosen");e.addEventListener("change",(function(){s.textContent=this.files[0].name}))}function showCallback(){$(document).scroll((function(){$(this).scrollTop()>500?$(".cbb").fadeIn():$(".cbb").fadeOut()}))}function animationCounter1(){$(".js-appear-count").each((function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:2e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}})}))}function reviewsSliderInit(){$(".reviewsblock__slider").slick({dots:!1,infinite:!0,arrows:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1484,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:1023,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:500,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:450,settings:{slidesToShow:2,slidesToScroll:1}}]})}function partnersSliderInit(){$(".parntersblock__slider").slick({dots:!1,infinite:!0,arrows:!1,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1484,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1}}]})}function worksSliderInit(){$(".sliderworks__slider").on("init",(function(e,s,i,l){console.log("init"),$(s.$slides.get(0)).addClass("currentslide"),$(s.$slides.get(1)).addClass("nextslide"),$(s.$slides.get(2)).addClass("nextnextslide")})),$(".sliderworks__slider").slick({dots:!1,infinite:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,variableWidth:!0,autoplay:!0,autoplaySpeed:2e3}),$(".sliderworks__slider").on("beforeChange",(function(e,s,i,l){let t;t=0===i&&l===s.$slides.length-1?"prev":l>i||i===s.$slides.length-1&&0===l?"next":"prev";let n=1,o=2,d=3;"next"===t?(n=$(s.$slides.get(l)),o=$(s.$slides.get(l)).next(),d=o.next()):(n=$(s.$slides.get(l)),o=n.next(),d=o.next()),$(s.$slides.removeClass("currentslide")),$(s.$slides.removeClass("nextslide")),$(s.$slides.removeClass("nextnextslide")),n.addClass("currentslide"),o.addClass("nextslide"),d.addClass("nextnextslide")}))}$(document).ready((function(){$("input[type=tel]").mask("+7 999 999 99 99"),(new WOW).init()})),window.addEventListener("load",(function(){initFEcustom()}));