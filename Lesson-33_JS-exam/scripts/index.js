import Swiper from '../node_modules/swiper/swiper-bundle.min.mjs';

let headerSwiper = new Swiper(".header__swiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
