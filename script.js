let lastScrollTop = 0;
const header = document.getElementById("main-header");
const body = document.querySelector("body");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (body.classList.contains("open")) {
    return;
  }

  if (scrollTop > lastScrollTop) {
    // user is scrolling down
    header.classList.add("hidden");
  } else {
    // user is scrolling up
    header.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const h1 = document.getElementById("h1"),
  banner = document.getElementById("banner"),
  button = document.getElementById("button");

// SCROLLING EFFEKT PÅ TOP BANNER
const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;

  if (scrollPosition > 130) {
    banner.style.backgroundSize = "150%";
  } else {
    banner.style.backgroundSize = "100%";
  }
};
window.onload = () => {
  const progressBar = document.querySelector(".read-progress");

  if (progressBar && typeof progressBar === "object") {
    let h = document.documentElement.scrollHeight,
      footer = 0,
      vh = window.innerHeight;

    const updateProgress = () => {
      let pos = window.scrollY;
      progressBar.style.width = (pos / (h - vh - footer)) * 100 + "%";
    };
    window.addEventListener("scroll", updateProgress);
    updateProgress();
  }
};

// Toggle function for the menu/burger button
const toggleMenu = () => {
  const body = document.body;
  const menuButton = document.querySelector("[data-menu-button]");
  const swiper = document.querySelector(".swiper");

  body.classList.toggle("open");
  menuButton.classList.toggle("is-active");
  swiper.style.zIndex = body.classList.contains("open") ? 0 : "";
};

const buttons = document.querySelectorAll("[data-carousel-button]");

// Controls the image gallery.
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    console.log("new image");
  });
});

// Controls the card swiper
let swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

// SCROLLER TIL ABOUT ME VED KLIK PÅ KNAP
function scrollToSection(event) {
  event.preventDefault(); // prevent default behavior of clicking on a link

  const targetId = event.target.getAttribute("href"); // get the href value of the clicked link
  const targetElement = document.querySelector(targetId); // get the target element to scroll to

  targetElement.scrollIntoView({ behavior: "smooth" }); // scroll smoothly to the target element
  body.classList.toggle("open");
}

document.addEventListener("scroll", onScroll);
