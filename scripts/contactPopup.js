const contactPopup = document.getElementById('contactPopup');
const contactPopupForm = document.getElementById('contactPopupForm');
const contactPopupCloseIcon = document.getElementById('closeContactPopup');
const contactIcon = document.getElementById('contactIcon');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    contactPopup.classList.add('js-show');
  }, 30000);
});

contactPopupCloseIcon.addEventListener('click', () => {
  contactPopup.classList.toggle('js-show');
  contactIcon.classList.toggle('js-show');
});

contactIcon.addEventListener('click', () => {
  contactIcon.classList.toggle('js-show');
  contactPopup.classList.toggle('js-show');
});

function showAlert(msg, className, closePopup) {
  const div = document.createElement('div');
  div.className = `contact-popup__alert contact-popup__alert--${className}`;
  div.appendChild(document.createTextNode(msg));
  const parentElement = document.querySelector('.contact-popup');

  parentElement.insertAdjacentElement('afterbegin', div);

  setTimeout(() => {
    document.querySelector('.contact-popup__alert').remove();

    if (closePopup) {
      contactPopup.classList.toggle('js-show');
      contactIcon.classList.toggle('js-show');
    }
  }, 5000);
}

contactPopupForm.addEventListener('submit', e => {
  e.preventDefault();

  const emailRegEx = /^\S+@\S+\.\S+$/gi;

  if (
    (e.target.phone.value !== '' && e.target.phone.value.length < 7) ||
    (e.target.email.value !== '' && !emailRegEx.test(e.target.email.value))
  ) {
    showAlert('Proszę, podaj prawidłowe dane', 'wrong-data', false);
    e.target.reset();
  } else {
    const data = {
      adnotacja: 'Osoba, która podała następujące dane prosi o kontakt',
      telefon: e.target.phone.value
        ? e.target.phone.value
        : 'Nie podano numeru telefonu',
      email: e.target.email.value
        ? e.target.email.value
        : 'Nie podanu adresu email'
    };

    const url = 'https://formspree.io/xknonpkb';
    const headers = {
      'Content-Type': 'application/json'
    };

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(resContent => {
        if ('error' in resContent) {
          form.reset();
          showAlert(
            'Niestety wiadomość nie została wysłana, proszę jeszcze raz wysłać poprawnie wypełniony formularz.',
            'fail',
            true
          );
        } else {
          contactPopupForm.reset();
          showAlert(
            'Prośba o kontakt została pomyślnie wysłana',
            'success',
            true
          );
        }
      })
      .catch(err => {
        contactPopupForm.reset();
        showAlert(
          'Niestety wiadomość nie została wysłana, proszę jeszcze raz wysłać poprawnie wypełniony formularz.',
          'fail',
          true
        );
      });
  }
});
