const faqContainer = document.querySelector('.faq__accordion');
const questions = document.querySelectorAll('.faq__accordion-item-question');
const answers = document.querySelectorAll('.faq__accordion-item-answer');

faqContainer.addEventListener('click', e => {
  if (e.target.classList.contains('faq__accordion-item-question-text')) {
    const question = e.target;
    const answer = e.target.parentElement.parentElement.lastElementChild;
    const iconsContainer = e.target.nextElementSibling;

    answers.forEach(answer => answer.classList.remove('js-open'));
    questions.forEach(question => {
      question.lastElementChild.classList.remove('js-shrink');
    });
    answer.classList.add('js-open');
    iconsContainer.classList.add('js-shrink');
  }
});
