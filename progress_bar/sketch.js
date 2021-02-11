let progressBar;

setup = () => {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 1, 1, 1);

  progressBar = new ProgressBar(width * 0.25, width * 0.75, height * 0.5, height * 0.5, 3000);
}

draw = () => {
  background(180, 0.5, 0.2, 1);
  progressBar.render();
}

mousePressed = () => {
  mouseX <= width * 0.5 ? (progressBar.pBar.newCurr = millis(), progressBar.pBar.curr = 0) : null;

  mouseX > width * 0.5 ? (progressBar.pBar.col = floor(random(360)), progressBar.pBar.newCurr = millis(), progressBar.pBar.curr = 0) : null;
}

class ProgressBar {
  constructor(_x1, _x2, _y1, _y2, _spd) {
    this.pBar = {
      curr: millis(),
      newCurr: 0,
      x1: _x1,
      x2: _x2,
      y1: _y1,
      y2: _y2,
      spd: _spd,
      col: 280
    }
  }

  update() {
    this.pBar.curr >= this.pBar.x2 ?
      this.pBar.curr = this.pBar.x2 :
      this.pBar.curr = map(millis(), this.pBar.newCurr, this.pBar.newCurr + this.pBar.spd, this.pBar.x1, this.pBar.x2);

    return this;
  }

  fillBar() {
    stroke(this.pBar.col, 1, 0.8, 1);
    strokeWeight(30);
    line(this.pBar.x1, this.pBar.y1, this.pBar.curr, this.pBar.y2);

    return this;
  }

  display() {
    stroke(this.pBar.col, 1, 0.75, 0.3);
    strokeWeight(30);
    line(this.pBar.x1, this.pBar.y1, this.pBar.x2, this.pBar.y2);

    return this;
  }

  render() {
    return this.update().display().fillBar();
  }
}