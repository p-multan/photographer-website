const form = document.querySelector('.contact__form');
const formButton = document.querySelector('.contact__form-button');
const formResult = document.querySelector('.contact__formResult');

const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const subjectInput = document.querySelector('input[name="subject"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector('textarea');

// function success() {
//   form.reset();
//   formResult.style.backgroundColor = 'green';
//   formResult.innerText = 'Wysłano pomyślnie formularz';
// }

// function fail() {
//   form.reset();
//   formResult.style.backgroundColor = 'red';
//   formResult.innerText = 'Wystąpił błąd';
// }

function showAlert(msg, className) {
  const div = document.createElement('div');
  div.className = `contact__alert contact__alert--${className}`;
  div.appendChild(document.createTextNode(msg));
  const parentElement = document.querySelector('.contact');

  parentElement.insertBefore(div, form);

  setTimeout(() => {
    document.querySelector('.contact__alert').remove();
  }, 8000);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    subject: e.target.subject.value,
    phone: e.target.phone.value,
    message: e.target.message.value
  };

  const url = 'https://formspree.io/xwkpzbeg';

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
        console.log(
          'Prawdopodobnie źle wypełniłeś formularz, wypełnij go poprawnie i spróbuj jeszcze raz go wysłać.'
        );
        form.reset();
        showAlert(
          'niestety wiadomość nie została wysłana, proszę jeszcze raz wysłać poprawnie wypełniony formularz, jeżeli próba znowu się nie powiedzie proszę o kontakt poprzez niżej podane sposoby',
          'fail'
        );
      } else {
        form.reset();
        showAlert(
          'dziękuję za wysłanie wiadomości, postaram się odpowiedzieć w możliwie najkrótszym czasie',
          'success'
        );
      }
    })
    .catch(err => {
      form.reset();
      showAlert(
        'niestety wiadomość nie została wysłana, proszę jeszcze raz wysłać poprawnie wypełniony formularz, jeżeli próba znowu się nie powiedzie proszę o kontakt poprzez niżej podane sposoby',
        'fail'
      );
    });
});
