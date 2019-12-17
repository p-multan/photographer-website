const tabs = document.querySelector('.js-tabs');
const singleTabs = document.querySelectorAll('.js-tab');
const panels = document.querySelectorAll('.js-panel');

function cartChangeHandler(e) {
  if (e.target.tagName === 'LI') {
    const targetPanel = document.querySelector(e.target.dataset.info);
    panels.forEach(panel => {
      if (panel === targetPanel) {
        panel.classList.add('js-active');
        singleTabs.forEach(tab => tab.classList.remove('js-active'));
        document
          .querySelector(`[data-info="${e.target.dataset.info}"]`)
          .classList.add('js-active');
      } else {
        panel.classList.remove('js-active');
      }
    });
  }
}

tabs.addEventListener('click', cartChangeHandler);
