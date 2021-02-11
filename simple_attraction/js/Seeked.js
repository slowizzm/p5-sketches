class Seeked {
  constructor() {
    this.pos = createVector(width * 0.5, height * 0.5);
    this.vel = createVector(sin(1) * -1, sin(7) * random(1));
    this.acc = createVector();
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    return this;
  }

  display() {
    push();
    fill(133, 7, 11);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 33);
    pop();

    return this;
  }

  edges() {
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;

    if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;

    return this;
  }

  render() {
    return this.update().edges().display();
  }
}