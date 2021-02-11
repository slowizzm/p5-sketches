class RainDrop {
  constructor(_x, _y, d) {
    this.pos = {
      x : _x,
      y : _y
    };
    this.diam = d;
    this.finalSize = random(33, 42);
  }

  update() {
    this.diam += 3;

    if (this.diam >= this.finalSize) this.diam = this.finalSize;

    return this;
  }

  display() {
    stroke(100, 200, 200);
    noFill();
    ellipse(this.pos.x, this.pos.y, this.diam);

    return this;
  }

  render() {
    return this.update().display();
  }
}