const drops = [],
  NUM_DROPS = 200;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (let i = 0; i < NUM_DROPS; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  clear();

  for (let i = 0; i < drops.length; i++) {
    drops[i].render();
  }
}

class Drop {
  constructor() {
    this.pos = createVector(random(width), random(height), random(500, 1000));
  }

  update() {
    this.speed = random(1, 7);
    this.gravity = 0.85;
    this.pos.z = this.pos.z - this.speed * this.gravity;

    if (this.pos.z < 0) {
      this.pos.z = random(200, 500);
    }

    return this;
  }
  display() {
    push();
    translate(-width * 0.5, -height * 0.5, 0);
    noStroke();
    fill(112, 182, 234, map(this.pos.z, 500, 0, 255, 0));
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    sphere(map(this.pos.z, 500, 0, 3, 0));
    pop();
    pop();

    return this;
  }

  render() {
    return this.update().display();
  }
}