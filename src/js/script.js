// Scrolling Arrow Top
const scrollTop = document.querySelector('.scrollTop');

window.addEventListener('scroll', function () {
  scrollTop.classList.toggle('active', window.scrollY > 500);
});

scrollTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Smooth Scrolling for the NavBar
const navLinks = document.querySelector('.nav__list');

navLinks.addEventListener('click', function (e) {
  e.preventDefault(); // Cancelar desplazamiento predeterminado (href -> id).
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});