const splideSettings = {
  type: 'loop',
  perPage: 2,
  width: '100%',
  height: '70vh',
  focus: 'center',
  easing: 'ease-in-out',
  arrows: true,
  cover: true,
  gap: '3rem',
  focus: 'center',
  heightRatio: 0.5,
  lazyLoad: 'sequential'
};

new Splide('.splide', splideSettings).mount();
