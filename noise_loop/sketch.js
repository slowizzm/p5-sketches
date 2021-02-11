const totalFrames = 640;
let inc = 0, record = false;

let particles = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  let percent = float(inc % totalFrames) / totalFrames;
  render(percent);
  inc++;
}

function render(percent) {
  background(0);
  let a = percent * TWO_PI;
  
  for (let p of particles) {
    p.render(a);
  }
}

function mousePressed() {
  particles.push(new Particle({x: mouseX,y: mouseY}));
}