import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const blog = "#blog";

//! loading — hide after 2s
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.querySelector(".loadingContainer");
    if (loader) loader.classList.add("hidden");
  }, 2000);
});

//! blog swiper
const categoriesSwiper = new Swiper(blog, {
  grabCursor: true,
  spaceBetween: 30,
  autoplay: { delay: 2500 },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    680: { slidesPerView: 2 },
    840: { slidesPerView: 3 }
  },
});

//! smooth scroll for nav links
document.addEventListener('DOMContentLoaded', () => {
  const links = [
    { selector: 'a[href="#home"]',        targetId: 'home' },
    { selector: 'a[href="#ceo-section"]', targetId: 'ceo-section' },
    { selector: 'a[href="#team"]',        targetId: 'team' },
    { selector: 'a[href="#services"]',    targetId: 'services' },
  ];
  links.forEach(({ selector, targetId }) => {
    document.querySelectorAll(selector).forEach(link => {
      const target = document.getElementById(targetId);
      if (link && target) {
        link.addEventListener('click', e => {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        });
      }
    });
  });
});
