class BurstParticle {
  constructor() {
    this.pos = createVector(width * 0.5, height * 0.5);
    this.vel = createVector();
    this.acc = createVector();
    this.scl = 33;
    this.col = color(151, 51, 200, 1);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(random(-0.1, 0.1), random(-0.1, 0.1));

    return this;
  }

  display() {
    stroke(this.col);
    noFill();

    rect(this.pos.x, this.pos.y, this.scl, this.scl);

    return this;
  }

  render() {
    return this.update().display();
  }
}