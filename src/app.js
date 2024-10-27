'use strict';

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  }, 1000); 
});

const [navTogglers, navLinks, navbar, overlay] = [
  document.querySelectorAll("[data-nav-toggler]"),
  document.querySelectorAll("[data-nav-link]"),
  document.querySelector("[data-navbar]"),
  document.querySelector("[data-overlay]")
];

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navLinks, "click", closeNav);

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const headerTop = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {

  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = totalSlidableItems <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = 'none';
    sliderPrevBtn.style.display = 'none';
  }

  currentSlider.addEventListener("wheel", function (event) {
    if (event.shiftKey && event.deltaY > 0) slideNext();
    if (event.shiftKey && event.deltaY < 0) slidePrev();
  });


  window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
  });

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }

function animateOnScroll() {
  var elements = document.querySelectorAll('.fade-in'); 

  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return (
    rect.top <= windowHeight * 0.9
  );
}

window.addEventListener('scroll', animateOnScroll);

animateOnScroll();
 
  let videoOpen = false;

function toggleVideo(videoId) {
  const trailer = document.getElementById(videoId);
  const video = trailer.querySelector('video');
  trailer.classList.toggle('active');
  videoOpen = !videoOpen;

  if (videoOpen) {
    video.play();
  } else {
    video.pause();
  }
}
 
document.addEventListener('scroll', function () {
  if (videoOpen) {
    const trailer = document.querySelector('.trailer.active');
    if (trailer) {
      toggleVideo(trailer.id);
    }
  }
});

const themeBtn = document.querySelector(".theme-btn");
let isDarkTheme = true; 

const savedTheme = localStorage.getItem("isDarkTheme");
if (savedTheme !== null) {
    isDarkTheme = JSON.parse(savedTheme);
}

function updateTheme() {
    const body = document.body;
    body.style.backgroundColor = isDarkTheme ? "#121212" : "#fff";
    body.style.color = isDarkTheme ? "#fff" : "#000";
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(isDarkTheme ? "dark-theme" : "light-theme");

    const icon = themeBtn.querySelector("i");
    if (isDarkTheme) {
        icon.classList.add("fa-moon");
        icon.classList.remove("fa-sun");
    } else {
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon");
    }
}

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    updateTheme();
    
  
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
}

updateTheme();

setInterval(function() {
    document.getElementById("tooltip").style.display = "block";
    setTimeout(function() {
        document.getElementById("tooltip").style.display = "none";
    }, 3800);
}, 10000);

 // salvar scroll 

 function saveScrollPosition() {
  const scrollPosition = window.scrollY;
  localStorage.setItem('scrollPosition', scrollPosition);
}

function restoreScrollPosition() {
  const scrollPosition = localStorage.getItem('scrollPosition');
  if (scrollPosition !== null) {
      window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
      });
      localStorage.removeItem('scrollPosition');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const languageBtn = document.querySelector('.language-btn');
  if (languageBtn) {
      languageBtn.addEventListener('click', saveScrollPosition);
  }
  restoreScrollPosition();
});