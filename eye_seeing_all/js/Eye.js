class Eyeball {
  constructor(pos, diam) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };

    this.diam = diam;
    this.ang = 0;
    this.r = null;
  }

  update() {
    this.ang = atan2(mouseY - this.pos.y, mouseX - this.pos.x);
    this.r = dist(this.pos.x, this.pos.y, mouseX, mouseY) / this.diam;

    return this;
  }

  display() {
    push();
    fill('#fffafa');
    ellipse(this.pos.x, this.pos.y, this.diam);
    stroke(33,37,41);
    fill(133,137,141);
    ellipse(this.pos.x + this.r * cos(this.ang), this.pos.y + this.r * sin(this.ang), this.diam / 3);
    pop();

    return this;
  }

  render() {
    return this.update().display();
  }
}