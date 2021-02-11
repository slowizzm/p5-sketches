class Draggable {
  constructor(pos, col) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };

    this.diam = 40;
    this.offset = {
      x: null,
      y: null
    };

    this.isDraggable = false;

    this.col = col;
  }

  hover() {
    return (dist(mouseX, mouseY, this.pos.x, this.pos.y) <= this.diam);
  }

  //sets position equal to the mouse position + the offset (offset is set on mousePress)
  drag() {
    if (this.isDraggable) {
      this.pos.x = mouseX + this.offset.x;
      this.pos.y = mouseY + this.offset.y;
    }

    return this;
  }

  display() {
    push();
    fill(this.col[0], this.col[1], this.col[2], this.col[3]);

    ellipse(this.pos.x, this.pos.y, this.diam);
    pop();

    return this;
  }

  render() {
    this.drag().display();
  }
}