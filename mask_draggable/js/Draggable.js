class Draggable {
  constructor(res) {
    this.pos = {
      x: width * 0.5,
      y: height * 0.5
    };

    this.res = {
      w: res.w,
      h: res.h
    };

    this.offset = {
      x: null,
      y: null
    };

    this.isDraggable = false;
  }

  hover() {
    return (mouseX > this.pos.x - (this.res.w / 2) &&
      mouseX < this.pos.x + (this.res.w / 2) &&
      mouseY > this.pos.y - (this.res.h / 2) &&
      mouseY < this.pos.y + (this.res.h / 2))
  }

  //sets position equal to the mouse position + the offset (offset is set on mousePress)
  drag() {
    if (this.isDraggable) {
      this.pos.x = constrain(mouseX, width * 0.2, width * 0.8) + this.offset.x;
      // this.pos.y = mouseY + this.offset.y;
    }

    return this;
  }

  display(msk) {
    image(msk, 0, 0);

    return this;
  }

  render(msk) {
    this.drag().display(msk);
  }
}