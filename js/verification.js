function goBack() {
  window.history.back();
}
t1 = gsap.timeline();
t1.to('.animate', {
  duration: 0.8,
  opacity: 1,
  y: 0,
});
t1.to('.animate p', { duration: 0.3, y: 0, display: 'block' }, '<0.3');
