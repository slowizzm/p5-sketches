class Btn {
  constructor(pos, res, col) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.col = col;
    this.sclr = 1.05;
    this.res = {
      w: res.w,
      h: res.h
    };
    this.onRes = {
      w: this.res.w / this.sclr,
      h: this.res.h / this.sclr
    };
    this.offRes = {
      w: this.res.w,
      h: this.res.h
    };
    rectMode(CENTER);
    this.isOn = false;
    this.isMouseover = false;
  }


  onHover() {
    if (this.hover(this.pos.x, this.pos.y, this.res.w, this.res.h)) {
      this.col = color(300, 100, 60);
      cursor('pointer');
      this.isMouseover = true;
    } else {
      this.col = color(300, 80, 60);
      cursor();
      this.isMouseover = false;
    }
    return this;
  }

  onClick() {
    if (this.isOn) {
      this.res.w = this.onRes.w;
      this.res.h = this.onRes.h;
    } else {
      this.res.w = this.offRes.w;
      this.res.h = this.offRes.h;
    }

    return this;
  }

  btn() {
    push();
    noStroke();
    fill(0, 0, 0, 7);
    rect(this.pos.x + 1, this.pos.y + 2, this.res.w + 2, this.res.h, 7);
    fill(this.col);
    rect(this.pos.x, this.pos.y, this.res.w, this.res.h, 7);
    pop();
    return this;
  }

  btn_text() {
    push();
    noStroke();
    fill(0, 0, 100);
    textFont('Avenir');
    textAlign(CENTER, CENTER);
    textSize(20);
    text('click', this.pos.x, this.pos.y + 2);
    pop();
    return this;
  }

  display() {
    return this.btn().btn_text();
  }

  hover(x, y, w, h) {
    return (mouseX >= x - (w / 2) &&
      mouseX <= x + (w / 2) &&
      mouseY >= y - (h / 2) &&
      mouseY <= y + (h / 2))
  }

  render() {
    return this.display().onClick().onHover();
  }
}