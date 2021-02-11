class HitPoint {
  constructor(pos, diam, hd) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.r = diam/2;
    this.hitDiam = hd;
  }

  update() {
    this.d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
    if (this.d <= this.hitDiam) {
      if (mouseIsPressed) {
        fill('#ef6125');
      }
    } else {
      fill('#90aa3c');
    }

    return this;
  }

  display() {
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r);

    return this;
  }

  render() {
    return this.update().display();
  }
}