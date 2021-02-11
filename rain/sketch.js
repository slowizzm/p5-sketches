let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 200; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  clear();

  for (let i = 0; i < 200; i++) {
    drops[i].display();
    drops[i].update();
  }
}

class Drop {
  constructor() {
    this.pos = createVector(random(width), random(height));
  }
  
  update() {
    this.speed = random(5, 15);
    this.gravity = 0.85;
    this.pos.y = this.pos.y + this.speed * this.gravity;

    if (this.pos.y > height) {
      this.pos.y = random(0, -height);
    }
  }
  display() {
    noStroke();
    fill(112, 182, 234);
    ellipse(this.pos.x, this.pos.y, 2, 10);
  }


}