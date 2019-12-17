$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    dots: true,
    dotsEach: true,
    items: 3,
    margin: 15,
    loop: true,
    center: true,
    autoWidth: true,
    nav: true,
    navText: ['<div></div>', '<div></div>'],
    slideTransition: 'linear',
    animateIn: true,
    animateOut: true
  });
});
