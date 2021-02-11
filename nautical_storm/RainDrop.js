class RainDrop {
  constructor() {
    this.y = 0;
    this.g = 0;
    this.dropSpeed = random(0, 20);
    this.waveRadius = 50;
    this.waveSpeed = 0.8;
    this.isDropped = false;
    this.isReusable = false;
    this.size = ceil(random(3));
  }
  setup(x) {
    this.isEvaporated = false;
    this.x = x;
    this.y = random(133, 333);
    this.g = random(height * 0.7, height * 0.8);
    this.isDropped = false;
  }

  update() {
    this.y += map(this.dropSpeed, 0, 20, 5, 7);
    if (this.g < this.y) {
      this.isDropped = true;
    }

    if (this.isDropped && (this.y - this.g) * this.waveSpeed > this.waveRadius) {
      this.isEvaporated = true;
    }
  }

  display() {
    if (!this.isDropped) {
      fill(255, 100);
      ellipse(this.x, this.y, this.size);  
    } else if (!this.isEvaporated) {
      noFill();
      strokeWeight(1);
      stroke(map((this.y - this.g) * this.waveSpeed, 0, this.waveRadius, 230, 13), 113);
      ellipse(this.x, this.g, (this.y - this.g) * this.waveSpeed, (this.y - this.g) * this.waveSpeed / 2);
      noStroke();
      fill(255);
    }
  }
}