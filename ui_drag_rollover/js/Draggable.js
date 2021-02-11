class Draggable {
  constructor() {
    this.pos = {
      x: width * 0.5,
      y: height * 0.5
    };

    this.res = {
      w: 75,
      h: 50
    };

    this.diam = 75;
    this.offset = {
      x: null,
      y: null
    };

    this.isDraggable = false;
  }

  hover() {
    if (isSqr) {
      return (mouseX > this.pos.x - (this.res.w / 2) &&
        mouseX < this.pos.x + (this.res.w / 2) &&
        mouseY > this.pos.y - (this.res.h / 2) &&
        mouseY < this.pos.y + (this.res.h / 2));
    } else {
      return (dist(mouseX, mouseY, this.pos.x, this.pos.y) <= this.diam);
    }

    return this;
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
    stroke(33);
    if (this.isDraggable) {
      fill('green');
    } else if (this.hover()) {
      fill('yellow');
    } else {
      fill('red');
    }
    
    (isSqr) ? rect(this.pos.x, this.pos.y, this.res.w, this.res.h) : ellipse(this.pos.x, this.pos.y, this.diam);
    
    return this;
  }

  render() {
    this.drag().display();
  }
}