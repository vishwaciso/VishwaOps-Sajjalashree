
const burger = document.querySelector('.hamburger');
const menu = document.querySelector('nav.primary');
if (burger && menu) {
  burger.addEventListener('click', () => menu.classList.toggle('open'));
}
