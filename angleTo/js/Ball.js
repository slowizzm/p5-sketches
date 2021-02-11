class Ball {
  constructor(pos) {
    this.pos = createVector(pos.x, pos.y);
    this.vel = createVector(1, 0.5);
    this.acc = createVector();

    this.diam = 33;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    return this;
  }

  display() {
    noStroke();
    fill(33);
    ellipse(this.pos.x, this.pos.y, this.diam);
    return this;
  }

  bounds() {
    if (this.pos.x <= this.diam / 2 || this.pos.x >= width - this.diam / 2) this.vel.x *= -1;

    if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;

    return this;
  }

  render() {
    return this.update().display().bounds();
  }
}