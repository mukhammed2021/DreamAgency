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

if (document.querySelector(".recent-work__slider")) {
   new Swiper(".recent-work__slider", {
      modules: [Navigation],
      navigation: {
         prevEl: ".recent-work__button--prev",
         nextEl: ".recent-work__button--next",
      },
      spaceBetween: 43,
      slidesPerView: 2.6,
      speed: 800,
      observer: true,
      observeParents: true,
      // centeredSlides: true,
      breakpoints: {
         320: {
            spaceBetween: 20,
            slidesPerView: 1,
         },
         500: {
            spaceBetween: 28,
            slidesPerView: 1.2,
         },
         720: {
            spaceBetween: 30,
            slidesPerView: 1.5,
         },
         992: {
            spaceBetween: 40,
            slidesPerView: 2,
         },
         1024: {
            spaceBetween: 40,
            slidesPerView: 2.3,
         },
         1300: {
            spaceBetween: 43,
            slidesPerView: 2.6,
         },
      },
   });
}
