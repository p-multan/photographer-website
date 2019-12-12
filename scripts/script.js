const hamburgerIcon = document.getElementById('header-hamburger');
const menuOverlay = document.getElementById('header-overlay');

hamburgerIcon.addEventListener('click', e => {
  hamburgerIcon.classList.toggle('js-menu-open');
  menuOverlay.classList.toggle('js-menu-open');
});

menuOverlay.addEventListener('click', e => {
  menuOverlay.classList.remove('js-menu-open');
  hamburgerIcon.classList.remove('js-menu-open');
});
