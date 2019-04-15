class Btn {
  constructor(_pos, _res, _col) {
    this.pos = createVector(_pos.x, _pos.y);
    this.col = _col;
    this.sclr = 1.05;
    this.res = createVector(_res.x, _res.y);
    this.onRes = createVector(this.res.x / this.sclr, this.res.y / this.sclr);
    this.offRes = createVector(this.res.x, this.res.y);
    rectMode(CENTER);
    this.isOn = false;
    this.isRollOver = false;
  }

  onRollover() {
    if (this.rollover(this.pos.x, this.pos.y, this.res.x, this.res.y)) {
      this.col = color(300, 100, 60);
      cursor('pointer');
    } else {
      this.col = color(300, 80, 60);
      cursor();
    }
    return this;
  }

  onClick() {
    if (this.isOn) {
      this.res.set(this.onRes.x, this.onRes.y);
    } else {
      this.res.set(this.offRes.x, this.offRes.y);
    }

    return this;
  }

  btn() {
    push();
    noStroke();
    fill(0, 0, 0, 7);
    rect(this.pos.x + 1, this.pos.y + 2, this.res.x + 2, this.res.y, 7);
    fill(this.col);
    rect(this.pos.x, this.pos.y, this.res.x, this.res.y, 7);
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

  rollover(_x, _y, _w, _h) {
    if (mouseX >= _x - (_w / 2) &&
      mouseX <= _x + (_w / 2) &&
      mouseY >= _y - (_h / 2) &&
      mouseY <= _y + (_h / 2)) {

      this.isRollOver = true;
      return true;
    } else {
      this.isRollOver = false;
      return false;
    }
  }

  render() {
    return this.display().onClick().onRollover();
  }
}