//WIP

let drank;
let bubbles = [];

function setup() {
  createCanvas(375, 667);
  background(176,234,222);

  drank = new Drank();

  for (let i = 0; i < 33; i++) {
    let b = new Bubble(width*0.56 + random(-7,7),height*0.553+random(-7,7),ceil(random(7)));
    bubbles.push(b);
  }
}

function draw() {
  background(176,234,222);
  drank.cup();
  drank.straw();
  drank.liquid();
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
    bubbles[i].edges();
  }

  face();
}

function face() {
  push();
  translate(0,37);
  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(width*0.85,height*0.1);
  bezierVertex(width*0.75,height*0.1,width*0.65,height*0.18,width*0.7,height*0.23);
bezierVertex(width*0.7,height*0.23,width*0.63,height*0.28,width*0.7,height*0.29);
bezierVertex(width*0.67,height*0.29,width*0.61,height*0.35,width*0.78,height*0.37);
  endShape();

  ellipse(width*0.73,height*0.2,7,7);
  pop();
}

function Drank() {

  this.cup = function() {
    push();
    noFill();
    stroke(255,100);
    strokeWeight(1);
    beginShape();
    vertex(width*0.5-42,height*0.4);
    vertex(width*0.5-42,height*0.6);
    vertex(width*0.5+42,height*0.6);
    vertex(width*0.5+42,height*0.4);
    endShape();
    //ellipse(width*0.5,height*0.4,84,7);
    pop();
  }

  this.liquid = function() {
    push();
    fill(247,249,198,200);
    noStroke();
    beginShape();
  //vertex(width*0.5-42,height*0.4);
    vertex(width*0.5-42,height*0.6);
    vertex(width*0.5+42,height*0.6);
    vertex(width*0.5+42,height*0.4);
    vertex(width*0.5+42,height*0.483);
    bezierVertex(width*0.5, height*0.5, width*0.5+33, height*0.435, width*0.5, height*0.483);
    bezierVertex(width*0.5, height*0.483, width*0.43, height*0.53, width*0.39, height*0.483);
    endShape();
    pop();
  }

  this.straw = function() {
    push();
    stroke(248,90,202,200);
    strokeWeight(5);
    line(width*0.49,height*0.58,width*0.55,height*0.4);
    line(width*0.55,height*0.4,width*0.63,height*0.38);
    pop();
  }
}

function Bubble(_x,_y,_s) {
  this.pos = createVector(_x,_y);
  this.vel = createVector(-.1,-0.3);
  this.acc = createVector(0,0);
  this.s = _s;

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    push();
    noFill();
    stroke(176,234,222);
    ellipse(this.pos.x-17,this.pos.y,this.s*2,this.s*2);
    push();
    fill(200);
    rotate(radians(7));
    ellipseMode(CENTER);
    ellipse(this.pos.x+19,this.pos.y,1,this.s);
    pop();
    pop();
  }

  this.edges = function() {
    if (this.pos.y <= height*0.5) {
      this.pos.y = height*0.55+random(-7,7);
      this.pos.x = width*0.553+random(-7,7);
    }
  }
}