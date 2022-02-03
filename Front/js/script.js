
let navbar = document.querySelector('.navbar');
var day = true;
var root = document.querySelector(':root');

function changeDayNight(){
  console.log("changeDayNight", day)
  if(day){
    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--primary-color', '#132938');
    root.style.setProperty('--secondary-color', '#80CCDD');
    root.style.setProperty('--light-color', '#018C9A');
    day = false;
  }else{
    root.style.setProperty('--background', '#2a2f32');
    root.style.setProperty('--primary-color', '#ffffff');
    root.style.setProperty('--secondary-color', '#80CCDD');
    root.style.setProperty('--light-color', '#018C9A');
    day = true;
  }
}

/*marketplace.onclick = () =>{
  marketplace.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  marketplace.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        const nav = document.querySelector('header .navbar a[href*='+id+']');
        if(nav){
          nav.classList.add('active');
        }
      });
    };

  });

  let header = document.querySelector('header');
  header.classList.toggle('scrolling-active', window.scrollY > 0);
  console.log(window.scrollY);
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
  loop:true,
});

var swiper = new Swiper(".ubication-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
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
