const form = document.querySelector('.contact__form');

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
        console.log(
          'Prawdopodobnie źle wypełniłeś formularz, wypełnij go poprawnie i spróbuj jeszcze raz go wysłać.'
        );
        form.reset();
        showAlert(
          'Niestety wiadomość nie została wysłana, proszę jeszcze raz wysłać poprawnie wypełniony formularz, jeżeli próba znowu się nie powiedzie proszę o kontakt poprzez niżej podane sposoby.',
          'fail'
        );
      } else {
        form.reset();
        showAlert(
          'Dziękuję za wysłanie wiadomości, postaram się odpowiedzieć w możliwie najkrótszym czasie.',
          'success'
        );
      }
    })
    .catch(err => {
      form.reset();
      showAlert(
        'Niestety wiadomość nie została wysłana, proszę jeszcze raz wysłać poprawnie wypełniony formularz, jeżeli próba znowu się nie powiedzie proszę o kontakt poprzez niżej podane sposoby.',
        'fail'
      );
    });
});
