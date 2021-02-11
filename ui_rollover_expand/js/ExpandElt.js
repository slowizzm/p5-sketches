class ExpandElt {
  constructor(_x, _y, scl, min, max) {
    textFont('Avenir');
    textAlign(CENTER, CENTER);
    textStyle(BOLD);

    this.pos = {
      x: _x,
      y: _y
    };
    this.scl = scl;
    this.min = min;
    this.max = max;
    this.res = {
      w: 180,
      h: 50
    };
  }

  //method to update the scale of the button and text if mouse is hovering the button
  update() {
    if (this.hover(this.pos, this.res)) {
      this.scl += 1.5;
      cursor(HAND);
    } else {
      this.scl -= 1.5;
      cursor(ARROW);
    }

    if (this.scl <= this.min) {
      this.scl = this.min;
    } else if (this.scl >= this.max) {
      this.scl = this.max;
    }

    return this;
  }

  // method to style the button
  buttonDisplay() {
    push();
    translate(this.pos.x, this.pos.y);
    strokeWeight(2);
    stroke(200, 0.8, 0.9, 1);
    noFill();
    rect(0, 0, this.res.w + this.scl, this.res.h + this.scl / 2);
    pop();

    return this;
  }

  //method to style the text
  textDisplay() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(200, 0.8, 0.9, 1);
    textSize(15 + (this.scl * 0.1));
    text('Expanding Element', 0, 0);
    pop();

    return this;
  }

  //boolean method to check if the mouse is hovering the button
  hover(pos, res) {
    return (mouseX > pos.x - (res.w * 0.5) && mouseX < pos.x + (res.w * 0.5) && mouseY > pos.y - (res.h * 0.5) && mouseY < pos.y + (res.h * 0.5));
  }

  show() {
    return this.update().buttonDisplay().textDisplay();
  }
}