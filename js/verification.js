const time = document.querySelector('.time');
gsap.registerPlugin(MotionPathPlugin);

t1 = gsap.timeline();
t2 = gsap.timeline();
t1.from('.info', {
  duration: 0.7,
  rotation: 200,
  x: 400,
});
t1.from(
  '.small-bubble',
  {
    duration: 0.7,
    width: 120,
    height: 120,
    opacity: 0,
  },
  '-=1.7'
);
t1.from('.progress', { duration: 0.3, display: 'none' });
t1.to(
  '.animate',
  {
    duration: 0.7,
    opacity: 1,
    y: 0,
  },
  '-=.2'
);
t1.to(
  '.animated-circle',
  { duration: 0.8, width: 0, height: 0, opacity: 0 },
  '-=1.2'
);
t2.to('.ver_p, form, .progress', { duration: 0.3, display: 'none' });
t2.to('.small-bubble', {
  duration: 1,
  motionPath: {
    path: [
      { x: 700, y: -200 },
      { x: -600, y: 600 },
      { x: -1000, y: 800 },
    ],
  },
  curviness: 5,
  width: 200,
  height: 200,
});
t2.to(
  '.animated-circle',
  {
    duration: 1,
    width: 3000,
    height: 3000,
    opacity: 1,
  },
  '-=.9'
);

t2.pause();
function goBack() {
  window.history.back();
}
counter = 60;
const timer = setInterval(() => {
  if (counter === 1) {
    clearInterval(timer);
  }
  counter = counter - 1;
  time.innerHTML = '' + counter;
}, 1000);
function handleSubmit(e) {
  e.preventDefault();
  t2.play();
}
