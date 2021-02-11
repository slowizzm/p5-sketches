class LightupSqr {
  constructor(pos, s) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.s = s;
    
    rectMode(CENTER);
  }

  display() {
    if (this.hover()) {
      fill('#ff7f7f');
    } else {
      fill('#fffafa');
    }
    rect(this.pos.x, this.pos.y, this.s, this.s, 3);

    return this;
  }

  hover() {
    return (mouseX >= this.pos.x - (this.s / 2) &&
      mouseX <= this.pos.x + (this.s * 0.5) &&
      mouseY >= this.pos.y - (this.s * 0.5) &&
      mouseY <= this.pos.y + (this.s * 0.5))
  }

  run() {
    return this.display();
  }
}