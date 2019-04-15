class Slider {
  constructor() {
    this.pos = createVector(width * 0.5, height * 0.5);
    this.res = createVector(50, 30);
    this.offset = createVector();
    this.isDraggable = false;
    rectMode(CENTER);
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

  drag() {
    if (this.isDraggable) {
      this.pos.x = constrain(mouseX + this.offset.x, width * 0.35, width * 0.65);
    }
    return this;
  }

  head() {
    noStroke();
    fill(0, 0, 10, 0.3);
    ellipse(this.pos.x, this.pos.y, this.res.x / 2);

    if (this.isDraggable) {
      fill(50, 100, 100, 0.7);
      ellipse(this.pos.x, this.pos.y, this.res.x / 3);
    } else {
      fill(50, 100, 100, 1);
      ellipse(this.pos.x, this.pos.y, this.res.x / 3);
    }

    return this;
  }

  bar() {
    push();
    fill(50, 100, 100, 1);
    rect(width * 0.5, height * 0.5, width * 0.3, 5, 30);
    pop();
    return this;
  }

  render() {
    return this.drag().bar().head().rollover();
  }
}