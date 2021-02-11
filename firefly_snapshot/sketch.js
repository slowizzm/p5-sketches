const fireFlies = [];

let atmos;

function preload() {
  atmos = loadImage('dust.png');
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 1, 1, 1);

  for (let i = 0; i < 100; i++) {
    fireFlies.push(new FireFly({
      x: random(width),
      y: random(height)
    }, i / 2, 1));
  }
}

function draw() {
  background(340, 0.75, 0.1, 1);

  fireFlies.forEach(firefly => {
    firefly.render()
  });

  image(atmos, 0, 0);
  
  noLoop();
}

class FireFly {
  constructor(pos, r, v) {
    this.offset = (r / v) / 40;
    this.pos = createVector(pos.x, pos.y);
    this.vel = createVector(random(-this.offset, this.offset), random(-1, 1));
    this.acc = createVector();
    this.r = r;
    this.col = {
      h: null,
      s: null,
      b: null,
      a: 1
    };

    this.rot = 0;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    return this;
  }

  display() {
    push();
    blendMode(ADD);
    noStroke();

    for (let i = 0; i < 1; i += 0.1) {
      fill(random(30), 0.9, i, 0.7 - i);
      ellipse(this.pos.x, this.pos.y, this.r * i);
    }
    pop();

    return this;
  }

  bounds() {
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= width) this.vel.y *= -1;

    return this;
  }

  render() {
    return this.update().display().bounds();
  }
}