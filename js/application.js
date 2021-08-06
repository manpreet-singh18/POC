function goBack() {
  window.history.back();
}

function handleSubmit(e) {
  e.preventDefault();
  window.location.href = './verification.html';
}
gsap.registerPlugin(MotionPathPlugin);
t1 = gsap.timeline();
t1.to('.animate', {
  duration: 0.7,
  opacity: 1,
  y: 0,
});
t1.to('.animate p', { duration: 0.5, y: 0, display: 'block' }, '>0.1');
t1.from(
  '.big-bubble',
  {
    duration: 1,
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: -200, y: 620 },
        { x: -700, y: 620 },
      ],
    },
    curviness: 3,
    width: 220,
    height: 220,
    opacity: 0,
  },
  '-=1'
);
t1.from(
  '.small-bubble',
  {
    duration: 1,
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: -200, y: 620 },
        { x: -700, y: 620 },
      ],
    },
    curviness: 2,
    width: 370,
    height: 370,
    opacity: 0,
  },
  '-=1.2'
);
