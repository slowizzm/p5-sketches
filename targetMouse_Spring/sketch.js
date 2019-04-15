let springX;
let springY;

function setup() {
  createCanvas(640, 480);
  springX = new Spring();
  springY = new Spring();
}

  function draw() {
  let deltaTime = 1.0 / 60.0;
  springX.update(deltaTime);
  springY.update(deltaTime);

  clear();
  
  ellipse(springX.position, springY.position, 50, 50);
}

function mousePressed() {
  springX.target = mouseX;
  springY.target = mouseY;
}

function mouseDragged() {
  springX.target = mouseX;
  springY.target = mouseY;
}

class Spring {
  constructor(){
  this.position = 0.0;
  this.velocity = 0.0;
  this.target = 0.0;
  this.springFactor = 100.0;
  this.dampRatio = 1.0;
  }
  reset() {
    this.position = 0.0;
    this.velocity = 0.0;
    this.target = 0.0;
  }
  
  update(deltaTime) {
    this.velocity += (-this.springFactor * (this.position - this.target) - 0.8 * this.velocity * sqrt(this.springFactor)) * deltaTime;
    this.position += this.velocity * deltaTime;
  }
}