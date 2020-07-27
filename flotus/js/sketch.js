const prey = [],
  predator = [],
  NUM_PARTICLES = 10;

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
  rectMode(CENTER);

  for (let i = 0; i < NUM_PARTICLES; i++) {
    const pos = {
      x: random(width),
      y: random(height)
    };
    prey.push(new Particle(pos, i));
    predator.push(new Particle(pos, i));
  }
  background('#fffafa');
}

function draw() {
  stroke(13, 17, 21, 3);
  fill(33, 133, 213, 67);
  rect(width * 0.5, height * 0.5, 233, 233);

  for (let i = 0; i < prey.length; i++) {
    prey[i].run();
    predator[i].run();
  }
}