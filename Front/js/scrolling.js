let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

  marketplace.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec => {

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        const nav = document.querySelector('header .navbar a[href*=' + id + ']');
        if (nav) {
          nav.classList.add('active');
        }
      });
    };

  });

  let header = document.querySelector('header');
  header.classList.toggle('scrolling-active', window.scrollY > 0);
  console.log(window.scrollY);
}