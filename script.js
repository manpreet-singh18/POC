const toggler = document.querySelector('.toggler svg');
const toggleClose = document.querySelector('.close');
t1 = gsap.timeline();
t1.to('.dropdown', { duration: 0.6, display: 'block', opacity: 1, x: 0 });
t1.pause();
toggler.addEventListener('click', function (e) {
  t1.play();
});
toggleClose.addEventListener('click', function (e) {
  t1.reverse();
});
