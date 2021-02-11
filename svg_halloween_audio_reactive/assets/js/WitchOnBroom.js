class WitchOnBroom {
  constructor() {
    this.pos = createVector(200, 150);
    this.vel = createVector(-1, 0);
    this.acc = createVector();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    return this;
  }

  bounds() {
    if (this.pos.x <= -1500) {
      this.pos.x = 200;
    }

    return this;
  }

  display() {
    witch.position(this.pos.x, this.pos.y);
    return this;
  }

  render() {
    return this.update().display().bounds();
  }
}