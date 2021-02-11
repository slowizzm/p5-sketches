class Seeker {
  constructor() {
    this.pos = {
      x: width * 0.5,
      y: height * 0.5
    };
    this.target = 0;
    this.easing = 0.03;
  }

  update() {
    let targetX = mouseX;
    let targetY = mouseY;

    this.pos.x += (targetX - this.pos.x) * this.easing;
    this.pos.y += (targetY - this.pos.y) * this.easing;

    return this;
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 40, 40);
    return this;
  }

  run() {
    return this.update().display();
  }
}