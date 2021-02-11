class Arrow {
  constructor(pos, size) {
    this.pos = {
      x: pos.x,
      y: pos.y
    }
    this.size = size;
  }

  display(_angle) {

    push();
    translate(this.pos.x, this.pos.y);
    let d = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    if (d < 50) {
      noStroke();
      noFill();
    } else {
      stroke(217, 255 - (d / 2));
      strokeWeight(255 / (d / 0.75));
    }
    rotate(_angle);
    translate(-this.pos.x, -this.pos.y);

    line(this.pos.x + this.size / 2 - this.size / 10, this.pos.y - this.size / 20, this.pos.x + this.size / 2, this.pos.y);
    line(this.pos.x - this.size / 2, this.pos.y, this.pos.x + this.size / 2, this.pos.y);
    line(this.pos.x + this.size / 2 - this.size / 10, this.pos.y + this.size / 20, this.pos.x + this.size / 2, this.pos.y);

    pop();

    return this;
  }
}