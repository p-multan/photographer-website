function headerSlider() {
  const header = document.querySelector('.header--home');
  const images = document.querySelectorAll('.header__picture');
  let randomNumber = Math.floor(Math.random() * 6);

  setInterval(() => {
    images.forEach(image => image.classList.remove('js-active'));
    images[randomNumber].classList.add('js-active');
    randomNumber = randomNumber >= 5 ? 0 : ++randomNumber;
  }, 8000);
}

headerSlider();
