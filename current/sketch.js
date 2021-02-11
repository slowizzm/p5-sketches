const current = [];
let count,
  waveHeight;

function setup() {
  createCanvas(window.innerWidth - 4, 360);
  waveHeight = 83;
  widthExtra = ((int(windowWidth / waveHeight)) * waveHeight) + waveHeight;
  count = int(widthExtra / waveHeight);
  var index = 0;
  for (let i = 0; i < width; i++) {
    current[index++] = new Current((int(i) * waveHeight), 0);
  }
}

function draw() {
  noStroke();
  background(0);
  for (var i = 0; i <= count; i++) {
    current[i].display();
  }
}

function mousePressed() {
  for (var i = 0; i <= count; i++) {
    current[i].direction();
  }
}

class Current {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
    this.depth = 0;
    this.speed = 1;
    this.forward = true;
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(255);
    ellipse(this.depth, this.depth + 25, 333, height);
    this.pos.x = this.pos.x + this.speed;
    if (this.pos.x > widthExtra) {
      this.pos.x = -waveHeight;
    }
    if (this.pos.x < -waveHeight) {
      this.pos.x = widthExtra;
    }
    pop();
  }

  direction() {
    if (this.forward === true) {
      this.speed *= -1;
      this.forward = false;
    } else {
      this.speed *= -1;
      this.forward = true;
    }
  }
}