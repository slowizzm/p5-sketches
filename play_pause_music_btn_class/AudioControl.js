class AudioPlayer {
  constructor(x, y, r, col, btn) {
    this.pos = createVector(x, y);
    this.btnRad = r; // radius
    this.btnCol = col; // button color
    this.playState = [false, true]; //play-pause, stop
    this.btn = btn;

    this.text_init();
    noStroke();

  }

  text_init() {
    rectMode(CENTER);
    textSize(15);
    textFont('Avenir');
    textAlign(CENTER, CENTER);
  }

  btn_play() {
    if (this.onHover()) {
      fill(this.btnCol[0]);
    } else {
      fill(this.btnCol[1]);
    }
    ellipse(this.pos.x, this.pos.y, this.btnRad);

    push();
    fill(33);
    translate(this.pos.x, this.pos.y);

    if (!this.playState[0]) {
      triangle(-10, -18, 18, 0, -10, 18);
    } else {
      rect(-10, 0, 10, 35);
      rect(10, 0, 10, 35);
    }
    pop();
    return this;
  }

  btn_pause() {
    noStroke();
    if (this.onHover()) {
      fill(this.btnCol[0]);
    } else {
      fill(this.btnCol[1]);
    }
    ellipse(this.pos.x, this.pos.y, this.btnRad);
    push();
    fill(33);
    translate(this.pos.x, this.pos.y);
    rect(0, 0, 30, 30);
    pop();

    return this;
  }

  onHover() {
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);

    return (d <= (this.btnRad / 2));
  }

  soundControl() {
    if (btns[0].playState[0] && !btns[1].playState[1]) {
      if (!snd.isPlaying()) {
        snd.play();
      }
    } else if (!btns[0].playState[0] && !btns[1].playState[1]) {
      snd.pause();
    } else if (!btns[0].playState[0] && btns[1].playState[1]) {
      snd.stop();
    }
  }

  ui() {
    if (this.btn === 'play') {
      this.btn_play();
    } else if (this.btn === 'stop') {
      this.btn_pause();
    }
  }

  btnState(state) {
    if (state == 'play-pause') {
      btns[0].playState[0] = !btns[0].playState[0];
      btns[1].playState[1] = false;
      this.soundControl();
    } else if (state == 'stop') {
      btns[0].playState[0] = false;
      btns[1].playState[1] = true;
      this.soundControl();
    }
  }
}