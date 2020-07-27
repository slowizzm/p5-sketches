class Particle {
  constructor(pos, r) {
    this.pos = createVector(pos.x, pos.y);
    this.vel = createVector(1.3, 1.3);
    this.acc = createVector(0, 0.01);
    this.r = r;
  }
  update() {
    for (let i = 0; i < predator.length; i++) {
      this.acc = p5.Vector.sub(predator[i].pos, this.pos);
      this.acc.mult(3);
      this.acc.setMag(0.03);
      this.vel.normalize();
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }

    return this;
  }

  display() {
    stroke('#fffafa');
    fill(42, 142, 242);
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.r);

    return this;
  }

  edges() {
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;

    if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;

    return this;
  }

  run() {
    this.update().display().edges();
  }
}