
var root = document.querySelector(':root');

setTheme(localStorage.getItem('theme') === undefined || localStorage.getItem('theme') === null ? 'day' : localStorage.getItem('theme'));

function changeDayNight() {
  const theme = localStorage.getItem('theme') === undefined || localStorage.getItem('theme') === null ? 'day' : localStorage.getItem('theme');
  const newTheme = theme === 'day' ? 'dark' : 'day';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

function setTheme(theme) {
  let monedas, ubicaciones, desarrollos

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
    root.style.setProperty('--filter', "none")
    root.style.setProperty('--other-filter', "none")

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
    root.style.setProperty('--filter', "invert(87%) sepia(86%) saturate(5292%) hue-rotate(161deg) brightness(89%) contrast(94%)")
    root.style.setProperty('--other-filter', "invert(11%) sepia(35%) saturate(1002%) hue-rotate(160deg) brightness(92%) contrast(91%)")
    
    
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
  window.location.href = '../house-list.html';
}

function redirectToDetail() {
  window.location.href = '../house-detail.html';
}

const ids = document.querySelectorAll('[id]')

const enHashmap = new Map([
  ["Project", "Project"],
  ["Work", "Work"],
  ["Marketplace", "Marketplace"],
  ["Ubication", "Ubication"],
  ["Who", "Who"],
  ["ConnectWallet", "Connect wallet"],
  ["HomeTitle", "Bnc"],
  ["HomeDescription", ""],
  ["HomeWhitepaper", "Whitepaper"],
  ["HeaderProject", "Project"],
  ["ProjectDescription1", "BNC Token"],
  ["ProjectDescription2", ""],
  ["ProjectDescription3", "token"],
  ["ProjectDescription4", ""],
  ["ProjectDescription5", "BNC Company"],
  ["ProjectDescription6", ""],
  ["HeaderFunction", ""],
  ["FunctionTitle1", ""],
  ["FunctionDescription1", ""],
  ["FunctionTitle2", ""],
  ["FunctionDescription2", ""],
  ["FunctionTitle3", ""],
  ["FunctionDescription3", ""],
  ["FunctionTitle4", ""],
  ["FunctionDescription4", ""],
  ["HeaderMarketplace", "Marketplace"],



]);

const esHashmap = new Map([
  ["Project", "Proyecto"],
  ["Work", "¿Como Funciona?"],
  ["Marketplace", "Mercado"],
  ["Ubication", "Ubicación"],
  ["Who", "Quiénes somos"],
]);

const poHashmap = new Map([
  ["Project", "Projeto"],
  ["Work", "Trabalho"],
  ["Marketplace", "Mercado"],
  ["Ubication", "Localização"],
  ["Who", "Quem somos"],
]);

let langSelected;
const lang = localStorage.getItem('lang') === undefined || localStorage.getItem('lang') === null ? 'en' : localStorage.getItem('lang');
switch (lang) {
  case 'en':
    langSelected = enHashmap;
    break;
  case 'es':
    langSelected = esHashmap;
    break;
  case 'po':
    langSelected = poHashmap;
    break;
  default:
    langSelected = enHashmap;
    break;
}

Array.prototype.forEach.call(ids, function (el) {
  if (langSelected.get(el.id)) {
    el.textContent = langSelected.get(el.id)
  }
})

