class ScaledObj {
  constructor(_x, _y) {
    this.pos = {
      x: _x,
      y: _y
    };
    this.r = 3;
  }

  update() {
    let d = dist(this.pos.x, this.pos.x, slider.pos.x, slider.pos.x);
    this.r = d;
    return this;
  }

  display() {
    push();
    //this.r = slider.pos.x;
    //rectMode(CORNERS);
    stroke(255);
    noFill();
    rect(this.pos.x, this.pos.y, 33, this.r);
    pop();

    return this;
  }

  render() {
    return this.update().display();
  }
}