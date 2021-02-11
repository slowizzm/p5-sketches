// html5 canvas - no libraries
// add canvas layers
canvasLayers.push(document.querySelector('.layer1'), document.querySelector('.layer2'));

(canvasLayers.length === 0) ? console.log('no canvas layer'): console.log(`canvas layer count: ${canvasLayers.length}`);

function mousemove(event) {
  mouse.x = event.pageX - mouse.offsetLeft;
  mouse.y = event.pageY - mouse.offsetTop;
}

// global variables
let gravity = new Vec(0, -0.3);
let orbs = [],
  orbs2 = [];

function init() {
  canvasRes(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 900; i++) {
    orbs[i] = new Orb(randRange(canvasWidth), randRange(canvasHeight), randRange(0.0003));
  }

  for (let i = 0; i < 30; i++) {
    orbs2[i] = new Orb(randRange(canvasWidth), randRange(canvasHeight), randRange(0.0003));
  }
}


function anim() {
  ctx[0].clearRect(0, 0, canvasWidth, canvasHeight);
  ctx[1].clearRect(0, 0, canvasWidth, canvasHeight);
  for (let orb of orbs) {
    orb.render(0);
  }

  for (let orb of orbs2) {
    orb.render(1);
  }
  requestAnimationFrame(anim);
}

init();
anim();