import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const mobileNavButton = document.getElementById("mobileNavButton");
const mobileNav = document.getElementById("mobileNav");
const navContainer = document.querySelector(".navContainer");
const headerSwiper = ".headerSwiper";
const blog = "#blog";


//! loading
window.addEventListener("load", (() => {
  setTimeout(() => {
    document.querySelector(".loadingContainer").classList.add("hidden");
  }, 2000);
}))
//! open navbar
mobileNavButton.addEventListener("click", openMobileNav)
function openMobileNav() {
  mobileNav.classList.toggle("active")
  navContainer.classList.toggle("active")
}

//! blog siwper
const categoriesSwiper = new Swiper(blog, {
  grabCursor: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    680: {
      slidesPerView: 2
    },
    // when window width is >= 640px
    840: {
      slidesPerView: 3
    }
  },
});

//! header swiper
var menu = ['01', '02', '03']
var header = new Swiper(headerSwiper, {
  grabCursor: true,
  slidesPerView: 1,
  effect: 'fade',
  speed: 700,
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
    },
  },
  autoplay: {
    delay: 5000,
  }MOHA,

})

const contactLink = document.getElementById("contactLink"); 

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('mobileNavButton');
  const menu = button.parentElement.nextElementSibling;

  button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Optional: close menu when a link is clicked
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      menu.classList.toggle('hidden');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const links = [
    { selector: 'a[href="#home"]', targetId: 'home' },
    { selector: 'a[href="#about"]', targetId: 'about' },
    { selector: 'a[href="#team"]', targetId: 'team' },
    { selector: 'a[href="#contact"]', targetId: 'contact' },
    { selector: 'a[href="#services"]', targetId: 'services' }
  ];

  links.forEach(link => {
    const linkElement = document.querySelector(link.selector);
    const targetSection = document.getElementById(link.targetId);

    if (linkElement && targetSection) {
      linkElement.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
      });
    }
  });
});