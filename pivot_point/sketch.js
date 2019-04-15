let oPnt;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  oPnt = new OriginPoint(width * 0.5, height * 0.5);
  rectMode(CENTER);
}

function draw() {
  background(220);

  oPnt.display();
}

class OriginPoint {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
  }

  display() {
    push();
    fill(33);
    translate(this.pos.x, this.pos.y); //set origin point to rotate around
    rotate(radians(map(mouseX,0,width,0,360)));
    
    push();
    noFill();  //comment this line out to see the origin point
    noStroke();
    rect(0,0, 3,3);
    pop();
    
    
    rect(100,0, 33, 33);
    pop();
    
    return this;
  }
}