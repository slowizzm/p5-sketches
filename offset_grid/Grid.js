class Grid {
  constructor(cell) {
    this.cell = {
      x: cell.x,
      y: cell.y
    };
    this.pos = {};
    this.spacing = 50;
    this.offset = {
      x: 2,
      y: 20
    };
  }

  createGrid() {
    if (this.cell.y % 2 === 0) {
      this.pos.x = this.cell.x * this.spacing * this.offset.x;
    } else {
      this.pos.x = this.cell.x * this.spacing * this.offset.x + this.spacing;
    }

    this.pos.y = this.cell.y * this.spacing + this.offset.y;

    return this;
  }

  display() {
    stroke(255, 255, 255, 50)
    fill(2173);
    ellipse(this.pos.x, this.pos.y, 10);

    return this;
  }

  drawGrid() {
    return this.createGrid().display();
  }
}