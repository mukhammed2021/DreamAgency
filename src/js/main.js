import "./swiper";
import { bodyLock, isMobile } from "./functions";
import "../style/style.scss";

window.onload = function () {
   window.scrollTo(0, 0);
   // <MENU ICON>
   const menuIcon = document.getElementById("menu");
   menuIcon.addEventListener("click", () => {
      const header = document.querySelector(".header");
      header.classList.toggle("menu-open");
      bodyLock();
   });
   // </MENU ICON>

   // <HEADER>
   const header = document.querySelector("header");

   window.addEventListener("scroll", () => {
      if (Math.round(window.scrollY) === 0) {
         header.style.backgroundColor = "transparent";
      }

      if (Math.round(window.scrollY) >= header.offsetHeight) {
         header.classList.add("_header-scroll");
         header.style.backgroundColor = "#fff";
      } else if (Math.round(window.scrollY) < header.offsetHeight) {
         header.classList.remove("_header-scroll");
      }
   });
   // </HEADER>

   // Закрыть меню при клике на элемент в меню
   if (isMobile() && window.innerWidth < 768) {
      const menuLinks = document.querySelectorAll(".menu__link");

      menuLinks.forEach((menuLink) => {
         menuLink.addEventListener("click", () => {
            header.classList.remove("menu-open");
            bodyLock();
         });
      });
   }

   // Intersection Observer
   // <Hero>
   const sectionHero = document.querySelector(".hero");

   const optionsHero = {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px 0px 0px",
   };

   const observerHero = new IntersectionObserver((entries, observerHero) => {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) return;

         entry.target.classList.add("_watcher-view");
         observerHero.unobserve(entry.target);
      });
   }, optionsHero);

   observerHero.observe(sectionHero);
   // </Hero>

   // <Business>
   const sectionBusiness = document.querySelector(".business");

   const optionsBusiness = {
      root: null,
      threshold: 0.5,
      rootMargin: "0px 0px 0px 0px",
   };

   const observerBusiness = new IntersectionObserver((entries, observerBusiness) => {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) return;

         entry.target.classList.add("_watcher-view");
         observerBusiness.unobserve(entry.target);
      });
   }, optionsBusiness);

   observerBusiness.observe(sectionBusiness);
   // </Business>

   // <About Us>
   const sectionAboutUs = document.querySelector(".about-us");

   const optionsAboutUs = {
      root: null,
      threshold: 0.4,
      rootMargin: "0px 0px 0px 0px",
   };

   const observerAboutUs = new IntersectionObserver((entries, observerAboutUs) => {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) return;

         entry.target.classList.add("_watcher-view");
         observerAboutUs.unobserve(entry.target);
      });
   }, optionsAboutUs);

   observerAboutUs.observe(sectionAboutUs);
   // </About Us>

   // <Recent Work>
   const sectionRecentWork = document.querySelector(".recent-work");

   const optionsRecentWork = {
      root: null,
      threshold: 0.3,
      rootMargin: "0px 0px 0px 0px",
   };

   const observerRecentWork = new IntersectionObserver((entries, observerRecentWork) => {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) return;

         entry.target.classList.add("_watcher-view");
         observerRecentWork.unobserve(entry.target);
      });
   }, optionsRecentWork);

   observerRecentWork.observe(sectionRecentWork);
   // </Recent Work>

   // <Testimonials>
   const sectionTestimonials = document.querySelector(".testimonials");

   const optionsTestimonials = {
      root: null,
      threshold: 0.35,
      rootMargin: "0px 0px 0px 0px",
   };

   const observerTestimonials = new IntersectionObserver((entries, observerTestimonials) => {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) return;

         entry.target.classList.add("_watcher-view");
         observerTestimonials.unobserve(entry.target);
      });
   }, optionsTestimonials);

   observerTestimonials.observe(sectionTestimonials);
   // </Testimonials>

   // <Footer>
   const footer = document.querySelector(".footer");

   const optionsFooter = {
      root: null,
      threshold: 0.25,
      rootMargin: "0px 0px 0px 0px",
   };

   const observerFooter = new IntersectionObserver((entries, observerFooter) => {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) return;

         entry.target.classList.add("_watcher-view");
         observerFooter.unobserve(entry.target);
      });
   }, optionsFooter);

   observerFooter.observe(footer);
   // </Footer>
};
