class Ball {
  constructor() {
    this.pos = createVector();
    this.radius = 33;
    this.angle = 0;
    this.speed = 13;
    this.scalar = 10;
    this.newXPos = 0;
    this.isClicked = false;
  }

  update() {
    this.newXPos = this.scalar * cos(radians(this.angle));

    if (this.isClicked) {
      this.angle += this.speed;
    }
    
    return this;
  }

  display(x, y) {
    this.pos.set(x, y);
    fill(100, 202, 153);
    push();
    translate(this.pos.x, this.pos.y);
    ellipse(this.newXPos, 0, this.radius);
    pop();
    
    return this;
  }

  onClick() {
    let d = dist(this.pos.x, this.pos.y, mouseX, mouseY);

    if (d < this.radius * 0.5 && mouseIsPressed) {
      return true;
    }
  }

  render(x, y) {
    return this.update().display(x, y);
  }
}