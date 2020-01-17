const arrow = document.querySelector('.offer__description-arrow');
arrow.addEventListener('click', () => {
  const morePar = document.querySelector('.offer__description--more');
  const arrowIcon = document.querySelector('.offer__description-arrow-item');
  morePar.classList.toggle('js-show');
  arrowIcon.classList.toggle('closed');
});
