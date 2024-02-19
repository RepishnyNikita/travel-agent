import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function swiperFunc() {
  const swiper = new Swiper("#swiper-popular", {
    slidesPerView: 1,
    spaceBetween: 32,

    navigation: {
      nextEl: "#sliderNext",
      prevEl: "#sliderPrev",
    },

    breakpoints: {
      425: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

export default swiperFunc;
