const particles = [],
  NUM_PARTICLES = 10,
  shards = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < NUM_PARTICLES; i++) {
    particles[i] = new Particle(width * 0.5, height * 0.5);
  }
}


function draw() {
  background(220);

  particleManager();
  shardManager();
  addParticle();
}

const addParticle = _ => {
  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

const particleManager = _ => {
  for (let i = 0; i < particles.length; i++) {
    particles[i].render();

    if (particles[i].hitGround()) {
      for (let j = 0; j < random(2, 5); j++) {
        shards.push(new Shard(particles[i].getInfo()));
      }
      particles.splice(i, 1);
    }
  }

  if (particles.length > 25) {
    particles.pop();
  }
}

const shardManager = _ => {
  for (let i = 0; i < shards.length; i++) {
    shards[i].render();

    if (shards[i].hitGround()) {
      shards.splice(i, 1);
    }
  }
}