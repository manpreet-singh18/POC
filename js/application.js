function goBack() {
  window.history.back();
}

function handleSubmit(e) {
  e.preventDefault();
  window.location.href = './verification.html';
}
t1 = gsap.timeline();
t1.to('.animate', {
  duration: 0.7,
  opacity: 1,
  y: 0,
});
t1.to('.animate p', { duration: 0.5, y: 0, display: 'block' }, '>0.1');
t1.to('.bubbles', { duration: 1, y: 0, x: 0 }, '-=1.2');
