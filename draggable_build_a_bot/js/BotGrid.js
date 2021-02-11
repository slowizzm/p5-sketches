class BotGrid {
  constructor(cell, img) {
    this.cell = {
      x: cell.x,
      y: cell.y
    };
    this.img = img;
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
    image(this.img, this.pos.x, this.pos.y, this.img.width / 10, this.img.height / 10);

    return this;
  }

  drawGrid() {
    return this.createGrid().display();
  }
}