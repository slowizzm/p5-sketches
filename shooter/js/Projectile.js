class Projectile {
  constructor(pos) {
    this.pos = createVector(pos.x, pos.y);
    this.vel = createVector(7, -7);
    this.acc = createVector(0, 0);
    this.damping = 3;
    this.bounce = this.damping - 1;
    this.r = random(2, 10);
    this.col = 0;
    this.touched = false;
  }

  applyForce(f) {
    this.acc.add(f);
  }

  spring(t) {
    this.diff = createVector(this.pos.x, this.pos.y);
    this.diff.sub(t);
    this.diff.limit(this.damping);
    return (this.diff);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.mult(0.985);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.acc.y += 0.3;
    this.col += dist(mouseX, mouseY, pmouseX, pmouseY) / 33;

    return this;
  }

  display() {
    let len = 33;
    push();
    blendMode(ADD);
    colorMode(HSB, 255, 255, 255, 255);
    for (let i = 0; i < 10; i++) {
      stroke(this.col % 255, 200, 255, 255 / i);
      strokeWeight(i * 4);
      ellipse(this.pos.x, this.pos.y, this.r);
    }
    pop();

    return this;
  }

  bounds() {
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;

    if (this.pos.y >= height - (this.r * 0.5)) {
      this.isBounce = true;
      this.vel.y *= -0.67;
      this.pos.y = height - (this.r * 0.5);
    }
    return this;
  }

  render() {
    return this.update().display().bounds();
  }
}