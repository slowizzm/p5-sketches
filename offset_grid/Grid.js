class Grid {
  constructor(_x, _y) {
    this.cell = createVector(_x, _y);
    this.pos = createVector();
    this.spacing = 13;
    this.offset = createVector(20, 50);
  }

  createGrid() {
    if (this.cell.y % 2 === 0) {
      this.pos.x = this.cell.x * this.spacing * 2 + this.offset.x;
    } else {
      this.pos.x = this.cell.x * this.spacing * 2 + this.spacing + this.offset.x;
    }
    this.pos.y = this.cell.y * this.spacing * 1.7 + this.offset.y;

    return this;
  }

  display() {
    stroke(255, 255, 255, 50)
    fill(2173);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(radians(30));
    rectMode(CENTER);
    rect(0, 0, 3, 3);
    pop();

    return this;
  }

  drawGrid() {
    return this.createGrid().display();
  }
}