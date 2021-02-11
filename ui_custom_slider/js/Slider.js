class Slider {
  constructor() {
    this.pos = {
      x: width * 0.5,
      y: height * 0.5
    };
    this.res = {
      w: 80,
      h: 30
    };
    this.offset = {
      w: null,
      h: null
    };
    this.isDraggable = false;
    rectMode(CENTER);
  }

  hover() {
    return (mouseX >= this.pos.x - (this.res.w / 2) &&
      mouseX <= this.pos.x + (this.res.w / 2) &&
      mouseY >= this.pos.y - (this.res.h / 2) &&
      mouseY <= this.pos.y + (this.res.h / 2))
    return this;
  }

  drag() {
    if (this.isDraggable) {
      this.pos.x = constrain(mouseX + this.offset.w, width * 0.1, width * 0.9);
      //this.pos.y = mouseY + this.offset.h;
    }
    return this;
  }

  head() {
    noStroke();
    if (this.isDraggable) fill(175, 200, 200);

    rect(this.pos.x, this.pos.y, this.res.w, this.res.h, 7);
    return this;
  }

  render() {
    return this.drag().head();
  }
}