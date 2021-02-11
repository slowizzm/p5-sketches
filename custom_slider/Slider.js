class Slider {
  constructor(pos, mn, mx, orient) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.range = {
      min: mn,
      max: mx
    };
    this.res = createVector(50, 30);
    this.offset = createVector();
    this.isDraggable = false;
    this.orientation = orient;
    this.isVerticla = false;
    this.isHorizontal = false;

    this.setOrientation();
    console.log(this.orientation)
  }

  rollover() {
    if (mouseX >= this.pos.x - (this.res.x / 2) &&
      mouseX <= this.pos.x + (this.res.x / 2) &&
      mouseY >= this.pos.y - (this.res.y / 2) &&
      mouseY <= this.pos.y + (this.res.y / 2)) {
      cursor('grab');
      return true;
    } else {
      cursor();
      return false;
    }
    return this;
  }

  checkIfDraggable() {
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
    if (mouseIsPressed) {
      if (mouseX >= this.pos.x - (this.res.x / 2) &&
        mouseX <= this.pos.x + (this.res.x / 2) &&
        mouseY >= this.pos.y - (this.res.y / 2) &&
        mouseY <= this.pos.y + (this.res.y / 2)) {
        this.isDraggable = true;
        this.offset.x = this.pos.x - mouseX;
        this.offset.y = this.pos.y - mouseY;
      }
    } else {
      this.isDraggable = false;
    }

    return this;
  }

  setOrientation() {
    if (this.orientation === 'vertical') {
      this.isHorizontal = false;
      this.isVertical = true;
    } else if (this.orientation === 'horizontal') {
      this.isVertical = false;
      this.isHorizontal = true;
    }
    return this;
  }

  constrainRange() {
    if (!this.isDraggable) {
      return this;
    } else if (this.isDraggable && this.isVertical) {
      this.pos.y = constrain(mouseY + this.offset.y, this.range.min, this.range.max);
    } else if (this.isDraggable && this.isHorizontal) {
      this.pos.x = constrain(mouseX + this.offset.x, this.range.min, this.range.max);
    }

    return this;
  }

  head() {
    noStroke();
    fill(0, 0, 10, 0.3);
    ellipse(this.pos.x, this.pos.y, this.res.x / 2);

    if (this.isDraggable) {
      fill(50, 100, 100, 0.7);
    } else {
      fill(50, 100, 100, 1);
    }

    ellipse(this.pos.x, this.pos.y, this.res.x / 3);

    return this;
  }

  bar() {
    let opac = map(this.pos.y, this.range.min, this.range.max, 1, 0.3);
    fill(50, 100, 100, opac);
    stroke(50, 100, 100, 1);
    if (this.isVertical) {
      rect(width * 0.5, height * 0.5, 10, height * 0.325, 30);
    } else if (this.isHorizontal) {
      rect(width * 0.5, height * 0.5, width * 0.3, 5, 30);
    }
    return this;
  }

  render() {
    return this.checkIfDraggable().constrainRange().bar().head().rollover();
  }
}