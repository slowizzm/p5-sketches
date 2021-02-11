const burstParticles = [],
  NUM_BURSTS = 333;

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);
  for (let i = 0; i < NUM_BURSTS; i++) {
    burstParticles[i] = new BurstParticle();
  }
  background(3, 7, 11);
}

function draw() {
  for (let i = 0; i < burstParticles.length; i++) {
    burstParticles[i].render();
  }
}

function windowResized() {
  resizeCanvas(windowWidth - 4, windowHeight - 4);
}