class Pad {
  constructor(pos, s) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.size = s;
    this.isOn = false;
  }

  audio() {
    this.env = new p5.Envelope();
    this.env.setADSR(0.0001, 0.005, 1, 0.05);

    this.osc = new p5.SinOsc();
    this.osc.amp(0);
    this.osc.start();
    this.osc.freq(this.freq);
    this.osc.amp(this.env);
  }

  playAudio() {
    if (this.isOn) {
      this.osc.freq(map((this.pos.x * this.pos.y) / 15, 540, 4860, 440, 200));
      this.osc.amp(0.3, 0.2);
    } else {
      this.osc.freq(0);
    }

    return this;
  }

  hover() {
    return (mouseX >= this.pos.x - (this.size / 2) &&
      mouseX <= this.pos.x + (this.size * 0.5) &&
      mouseY >= this.pos.y - (this.size * 0.5) &&
      mouseY <= this.pos.y + (this.size * 0.5))
  }

  display() {
    push();
    if (this.isOn) {
      fill(133, 200, 255);
      rect(this.pos.x, this.pos.y, this.size, this.size);
    } else {
      fill(217);
      rect(this.pos.x, this.pos.y, this.size, this.size);
    }
    pop();

    return this;
  }

  init() {
    this.audio();
  }

  run() {
    return this.playAudio().display();
  }
}