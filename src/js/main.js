import "./swiper";
import "../style/style.scss";

// MENU ICON
const menuIcon = document.getElementById("menu");
menuIcon.addEventListener("click", () => {
   const header = document.querySelector(".header");
   header.classList.toggle("active");
});

