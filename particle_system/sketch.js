var smoke;

function setup() {
  createCanvas(400, 400);
  smoke = new ParticleSystem(createVector(width/2, 150));
}

function draw() {
  background(51);
  smoke.addParticle();
  smoke.run();
}

