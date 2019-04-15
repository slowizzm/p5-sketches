let sqrs;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  sqrs = new Sqrs(width/3);
}

function draw() {
  background(51);
  sqrs.display();
}

class Sqr {
  constructor(_x,_y) {
    this.pos = createVector(_x,_y);
    this.res = 33;
  }

  display() {
    push();
    stroke(217);
    noFill();
    rect(this.pos.x,this.pos.y,this.res,this.res);
    pop();
  }
}

class Sqrs {
  constructor(_pos) {
    this.sqrs = [];

    for (let i = 1; i < 4; i++) {
      this.sqrs.push(new Sqr(i*(_pos-33), height*0.5));
    }
  }

  display() {
    for (let i = 0; i < this.sqrs.length; i++) {
      this.sqrs[i].display();
    }
  }
}
