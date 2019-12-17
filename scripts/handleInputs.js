const inputs = document.querySelectorAll('.js-input');

inputs.forEach(input => {
  input.addEventListener('focus', e => {
    e.target.previousElementSibling.classList.add('js-focus');
  });
});

inputs.forEach(input => {
  input.addEventListener('blur', e => {
    if (e.target.value === '') {
      e.target.previousElementSibling.classList.remove('js-focus');
    } else {
      return;
    }
  });
});
