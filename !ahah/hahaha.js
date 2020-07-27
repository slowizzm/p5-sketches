class Hahaha {
  constructor(x, y, s, img) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, -7);
    this.acc = createVector(0, 0);
    this.size = s;
    this.img = img;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    return this;
  }

  display() {
    image(this.img, this.pos.x, this.pos.y, (this.size * 4) - map(this.pos.y, 0, height, 33, 0), (this.size * 4) - map(this.pos.y, 0, height, 33, 0));

    return this;
  }

  render() {
    return this.update().display();
  }
}