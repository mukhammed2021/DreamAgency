// базовая версия + модули навигации и пагинации
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";

if (document.querySelector(".business__slider")) {
   new Swiper(".business__slider", {
      modules: [Navigation],
      navigation: {
         nextEl: ".business__button--prev",
         prevEl: ".business__button--next",
      },
      spaceBetween: 41,
      slidesPerView: 3.3,
      speed: 800,
      observer: true,
      observeParents: true,
      breakpoints: {
         320: {
            slidesPerView: 1.2,
            spaceBetween: 15,
         },
         620: {
            slidesPerView: 1.9,
            spaceBetween: 30,
         },
         768: {
            slidesPerView: 2.8,
            spaceBetween: 30,
         },
         992: {
            slidesPerView: 3.3,
            spaceBetween: 41,
         },
      },
   });
}
