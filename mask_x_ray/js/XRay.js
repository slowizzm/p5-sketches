class XRay {
  constructor(pos) {
    this.pos = createVector(pos.x, pos.y);
    this.vel = createVector(0, 1);
    this.acc = createVector();
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);


    return this;
  }

  bounds() {
    if (this.pos.y <= height * 0.175 || this.pos.y >= height * 0.825) {
      this.vel.y *= -1;
    }

    return this;
  }

  display(img) {
    image(img, 0, 0);

    return this;
  }

  render(img) {
    return this.update().bounds().display(img);
  }
}