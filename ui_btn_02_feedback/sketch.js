//WIP

let particles = [];
let btn;

function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 100, 100, 100);
  let pos = createVector(width * 0.5, height * 0.5);
  let res = createVector(80, 30);
  let col = color(300, 100, 100, 1);
  btn = new Btn(pos, res, col);
}

function draw() {
  background(0, 0, 90);


  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].render();
    if (particles[i].lifespan()) {
      particles.splice(i, 1);
    }
  }

  btn.render();
}

function mousePressed() {
  if (btn.isRollOver) {
    let n = noise(frameCount / 100);
    n = map(n, 0, 1, 3, 42);
    for (let i = 0; i < n; i++) {
      particles.push(new Particle(mouseX, mouseY));
    }
    btn.isOn = true;
  }
}

function mouseReleased() {
  btn.isOn = false;
}