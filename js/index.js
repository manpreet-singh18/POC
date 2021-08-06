const toggler = document.querySelector('.toggler svg');
const toggleClose = document.querySelector('.close');
t1 = gsap.timeline();
t1.to('.dropdown', { duration: 1, display: 'block', opacity: 1, x: 0 });
t1.pause();
toggler.addEventListener('click', function (e) {
  t1.play();
});
toggleClose.addEventListener('click', function (e) {
  t1.reverse();
});

const swiper = new Swiper('.swiper-container', {
  setWrapperSize: true,
  width: 180,
});
