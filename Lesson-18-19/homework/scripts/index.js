const burger = document.getElementById('burger');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileNav.classList.toggle('active');
  body.classList.toggle('overflow');
})

window.addEventListener('resize', () => {
  burger.classList.remove('open');
  mobileNav.classList.remove('active');
  body.classList.remove('overflow');
})

