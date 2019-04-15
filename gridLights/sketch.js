//Not working properly

let sqrs=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(33);
  rectMode(CENTER);
  for (let x =25; x < width; x+=100) {
    for (let y =25; y < height; y +=100) {
      let s = new Sqr(x,y,50);
      sqrs.push(s);
    }
  }
}

function draw() {
  background(51);
  for (let i = 0; i < sqrs.length; i++) {
    sqrs[i].run();
  }
}

function Sqr(_x,_y,_s) {
  this.pos = createVector(_x,_y);
  this.s = _s;

  this.display = function() {
    rect(this.pos.x,this.pos.y,this.s,this.s);
  }

  this.lightUp = function() {
    if(mouseX >= this.pos.x -(this.s/2) &&
       mouseX <= this.pos.x +(this.s/2) &&
       mouseY >= this.pos.y -(this.s/2) &&
       mouseY <= this.pos.y +(this.s/2)) {
      fill('red');
    } else {
      fill(217);
    }
  }

  this.run = function() {
    this.display();
    this.lightUp();
  }
}