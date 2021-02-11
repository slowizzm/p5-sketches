class Slider {
  constructor() {
    this.pos = {
      x: width * 0.5,
      y: height * 0.5
    };

    this.res = {
      w: 50,
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
    if (mouseX >= this.pos.x - (this.res.w / 2) &&
      mouseX <= this.pos.x + (this.res.w / 2) &&
      mouseY >= this.pos.y - (this.res.h / 2) &&
      mouseY <= this.pos.y + (this.res.h / 2)) {
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
      this.pos.x = constrain(mouseX + this.offset.w, width * 0.05, width * 0.95);
      //this.pos.y = mouseY + this.offset.h;
    }
    return this;
  }

  head() {
    noStroke();
    fill(0, 0, 10, 0.3);
    ellipse(this.pos.x, this.pos.y, this.res.w / 1.7);
    fill(0, 0, 100);
    ellipse(this.pos.x, this.pos.y, this.res.w / 2);
    if (this.isDraggable) {
      fill(0, 10, 10, 0.3);
      ellipse(this.pos.x, this.pos.y, this.res.w / 3);
    }
    return this;
  }

  bar() {
    push();
    fill(map(this.pos.x, 0, width, 100, 200), 100, 100, 1);
    rect(width * 0.5, height * 0.5, width * 0.9, 15, 30);
    pop();
    return this;
  }

  render() {
    return this.drag().bar().head().hover();
  }
}