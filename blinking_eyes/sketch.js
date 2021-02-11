let blinkingEyes;

function setup() {
  createCanvas(400, 400);
  smooth();
  frameRate(5);
  background(100);


  blinkingEyes = new BlinkingEye(-20, 20, 13);
}

function draw() {
  background(100);

  blinkingEyes.blink();
}

class BlinkingEye {
  constructor(x1, x2, spd) {
    this.isBlinking = false;
    this.blinkSpd = spd;
    this.blinkMin = 0;
    this.blinkMax = 14;
    this.blinkScl = 0;
    this.eyePos = {
      left: x1,
      right: x2
    }
  }

  update() {

    // blinking eyes
    if (random(10) < 1) {
      this.isBlinking = true;
    }

    // if true reduce eye height else increase
    if (this.isBlinking) {
      this.blinkScl -= this.blinkSpd;
    } else {
      this.blinkScl += this.blinkSpd;
    }

    // keeps incrementer within min/max range
    if (this.blinkScl <= this.blinkMin) {
      this.blinkScl = this.blinkMin;
      strokeWeight(2);
      stroke(0);
      line(this.eyePos.left - 3, 0, this.eyePos.left + 3, 0);
      line(this.eyePos.right - 3, 0, this.eyePos.right + 3, 0);
      this.isBlinking = false;
    } else if (this.blinkScl >= this.blinkMax) {
      this.blinkScl = this.blinkMax;
    }

  }


  //  blink(0);
  //blink(40);

  blink() {
    this.update();
    push();
    translate(width * 0.5, height * 0.5);
    fill(255);
    noStroke();
    ellipse(this.eyePos.left, 0, 20, 18);
    ellipse(this.eyePos.right, 0, 20, 18);

    fill(0);
    ellipse(this.eyePos.left, 0, 5, this.blinkScl);
    ellipse(this.eyePos.right, 0, 5, this.blinkScl);
    pop();
  }
}