class Toggle {
  constructor(_pos) {
    this.pos = createVector(_pos.x, _pos.y);
    this.res = createVector(70, 44);
    this.r = 42;
    this.inc = -13;
    this.isClicked = false;
    this.col_1 = color(0, 0, 100);
    this.col_2 = color(0, 0, 10);
    rectMode(CENTER);
    snd_on.amp(0.3, 0.9);
    snd_off.amp(0.3, 0.9);
  }

  audio_play() {
    if (this.isClicked) {
      snd_on.playMode('restart');
      snd_on.play();
    } else {
      snd_off.playMode('restart');
      snd_off.play();
    }
    return this;
  }

  btn_toggle() {
    if (this.inc >= 13) {
      this.inc = 13;
      background(0, 0, 90);
      this.col_1 = color(0, 0, 10);
      this.col_2 = color(0, 0, 100);
    } else if (this.inc <= -13) {
      this.inc = -13;
      background(0, 0, 20);
      this.col_1 = color(0, 0, 100);
      this.col_2 = color(0, 0, 10);
    }

    return this;
  }

  btn_face() {
    push();
    stroke(this.col_1);
    fill(this.col_2);
    ellipse(this.pos.x + this.inc, this.pos.y, this.r);
    pop();

    return this;
  }

  btn_fixture() {
    push();
    stroke(this.col_1);
    fill(this.col_1);
    rect(this.pos.x, this.pos.y, this.res.x, this.res.y, 33);
    pop();

    return this;
  }

  update() {
    if (this.isClicked) {
      this.inc += 3;
    } else {
      this.inc -= 3;
    }

    return this;
  }

  pointer() {
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);

    if (d <= this.r) {
      cursor('pointer');
    } else {
      cursor();
    }
    return this;
  }


  rollover(_x, _y, _r) {
    let d = dist(mouseX, mouseY, _x, _y);

    if (d <= _r) {
      cursor('pointer');
      return true;
    } else {
      cursor();
      return false;
    }
  }

  display() {
    return this.btn_toggle().btn_fixture().btn_face();
  }

  render() {
    return this.update().display().pointer();
  }
}