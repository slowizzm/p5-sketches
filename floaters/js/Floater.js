class Floater {
  constructor(size, x, y) {
    this.size = size;
    this.pos = createVector(x, y);
    this.vel = createVector(0, -1);
    this.acc = createVector();
    this.t = 1.5;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.pos.x += random(-0.2, 0.2) * this.size / 20;
    this.vel.y += random(-1 * this.size / 1333, 0.03);

    this.vel.x = this.t * noise(frameCount);

    this.t -= 0.01;
    return this;
  }

  display() {
    push();
    fill('#9FCFE3DD');
    ellipse(this.pos.x, this.pos.y, this.size);
    pop();

    return this;
  }

  render() {
    return this.update().display();
  }
}