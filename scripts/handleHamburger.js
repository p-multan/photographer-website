const hamburgerIcon = document.getElementById('header-hamburger');
const menuOverlay = document.getElementById('header-overlay');

function hamburgerClickHandler() {
  hamburgerIcon.classList.toggle('js-menu-open');
  menuOverlay.classList.toggle('js-menu-open');
}
function backdropClickHandler() {
  menuOverlay.classList.remove('js-menu-open');
  hamburgerIcon.classList.remove('js-menu-open');
}

hamburgerIcon.addEventListener('click', hamburgerClickHandler);
menuOverlay.addEventListener('click', backdropClickHandler);
