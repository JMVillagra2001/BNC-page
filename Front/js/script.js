
var root = document.querySelector(':root');

setTheme(localStorage.getItem('theme') === undefined || localStorage.getItem('theme') === null ? 'day' : localStorage.getItem('theme'));

function changeDayNight() {
  const theme = localStorage.getItem('theme') === undefined || localStorage.getItem('theme') === null ? 'day' : localStorage.getItem('theme');
  const newTheme = theme === 'day' ? 'dark' : 'day';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

function setTheme(theme) {
  if (theme === 'day') {
    root.style.setProperty('--nav-background', '#ffffff');
    root.style.setProperty('--nav-color', '#132938');
    root.style.setProperty('--nav-hover-color', '#fff');
    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--primary-color', '#132938');
    root.style.setProperty('--secondary-color', '#80CCDD');
    root.style.setProperty('--light-color', '#018C9A');
    root.style.setProperty('--marketplace-color', '#132938');
    root.style.setProperty('--marketplace-text', '#ffffff');
    root.style.setProperty('--marketplace-hover', '#80CCDD');
    root.style.setProperty('--image-background', '#132938');
    root.style.setProperty('--asks-background', '#132938');
    root.style.setProperty('--title-color', '#132938');
    root.style.setProperty('--description-color', '#ffffff');
  } else if (theme === 'dark') {
    root.style.setProperty('--nav-background', '#2a2f32');
    root.style.setProperty('--nav-color', '#80CCDD');
    root.style.setProperty('--nav-hover-color', '#132938');
    root.style.setProperty('--background', '#2a2f32');
    root.style.setProperty('--primary-color', '#ffffff');
    root.style.setProperty('--secondary-color', '#80CCDD');
    root.style.setProperty('--light-color', '#018C9A');
    root.style.setProperty('--marketplace-color', '#80CCDD');
    root.style.setProperty('--marketplace-text', '#132938');
    root.style.setProperty('--marketplace-hover', '#132938');
    root.style.setProperty('--image-background', '#80CCDD');
    root.style.setProperty('--asks-background', '#80CCDD');
    root.style.setProperty('--title-color', '#ffffff');
    root.style.setProperty('--description-color', '#132938');
  }
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".ubication-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


function redirectToDevelopment() {
  window.location.href = '../Front/house-list.html';
}

function redirectToDetail() {
  window.location.href = '../Front/house-detail.html';
}