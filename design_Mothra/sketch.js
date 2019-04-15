let mothra;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  mothra = new Mothra();
  frameRate(12);
}

function draw() {
    background(51);
    mothra.display();
    MothraText();
}

function Mothra() {
  this.pos = createVector();

  this.display = function() {
    this.r = random(63,67);
    push();
    translate(width*0.5,height*0.5);
    rotate(radians(90));
    fill(255);
    ellipseMode(CENTER);
    push();
    rotate(radians(-20));
    ellipse(-33,0,33,this.r);
    pop();
    push();
    rotate(radians(20));
    ellipse(-33,0,33,this.r);
    pop();
    pop();

    push();
    fill(255);
    ellipse(width*0.5,height*0.455,33,33);
    ellipse(width*0.5,height*0.435,33,33);
    pop();

    push();
    translate(width*0.5,height*0.5);
    stroke(255);
    strokeWeight(3);
    noFill();
    bezier(0, -20, -5, -50, 5, -70, 30, -60);
    bezier(0, -20, 5, -50, -5, -70, -30, -60);
    pop();
  }
}

function MothraText() {
  push();
  fill(255);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(13);
  textFont('Avenir');
  text('MOTHRA',width*0.5,height*0.545);
}