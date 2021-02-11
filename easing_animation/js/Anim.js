class Anim {
  constructor(pos, d) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.d = d; //diameter
    this.pulse = 0;
    this.pulseRate = 120;
    this.currentPulseRate = 0;
    this.pulseProg = 0;
    this.easingIn = 0;
    this.easingOut = 0;



    rectMode(CENTER);
  }

  update() {
    this.currentPulseRate = frameCount % this.pulseRate;
    this.pulseProg = this.currentPulseRate / this.pulseRate;
    this.easingIn = -pow(this.pulseProg - 1, 4);
    this.easingOut = -sq(this.pulseProg - 1) + 3;
    this.jitters = -pow(this.pulseProg - 1, 13) + 1;
    this.pulse = this.d * (1.5 - this.easingIn);

    return this;
  }

  shrink() {
    noStroke();
    fill(13, 17, 21);
    ellipse(this.pos.x, this.pos.y, this.pulse);
    fill(13, 17, 21, 100);
    ellipse(this.pos.x + 2, this.pos.y + 2, this.pulse);

    return this;
  }

  expand() {
    this.ripple = this.d * 1.5 * this.easingOut;
    stroke(13, 17, 21);
    strokeWeight(this.d * 0.2 * (1 - this.easingOut));
    noFill();
    ellipse(this.pos.x, this.pos.y, this.ripple);
    stroke(13, 17, 21, 100);
    ellipse(this.pos.x + 2, this.pos.y + 2, this.ripple);

    return this;
  }

  jitter() {
    this.disp = this.d * 0.5 * (1 - this.jitters);
    this.s = this.d * 0.3;
    noStroke();
    fill('#fffafa');
    ellipse(
      this.pos.x + random(-this.disp, this.disp),
      this.pos.y + random(-this.disp, this.disp),
      this.s,
      this.s
    );

    return this;
  }

  run() {
    return this.update().shrink().expand().jitter();
  }
}