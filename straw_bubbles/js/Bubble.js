class Bubble {
  constructor(_x, _y, _s) {
    this.pos = createVector(_x, _y);
    this.vel = createVector(-0.1, -0.3);
    this.acc = createVector(0, 0);
    this.s = _s;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    return this;
  }

  display() {
    push();
    noFill();
    stroke(176, 234, 222);
    ellipse(this.pos.x - 17, this.pos.y, this.s * 2, this.s * 2);
    push();
    fill(200);
    rotate(radians(7));
    ellipseMode(CENTER);
    ellipse(this.pos.x + 19, this.pos.y, 1, this.s);
    pop();
    pop();

    return this;
  }

  edges() {
    if (this.pos.y <= height * 0.5) {
      this.pos.y = height * 0.55 + random(-7, 7);
      this.pos.x = width * 0.553 + random(-7, 7);
    }

    return this;
  }

  render() {
    return this.update().edges().display();
  }
}