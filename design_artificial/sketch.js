let sqrs;
let mx,my;
function setup() {
  createCanvas(375, 667);
  rectMode(CENTER);
  sqrs = new Sqrs();
}

function draw() {
  background(217);

  sqrs.display();

  mx = mouseX;
  my = mouseY;

  push();
  noStroke();
  fill(255);
  // text(mx/width,33,33);
  // text(my/height,33,42);
}

function Sqrs() {
  
  this.display = function() {
    push();
    fill(3,13,9);
    //stroke(33,100);
    strokeWeight(3);
    //left
    translate(-67-map(mouseX,0,width,-13,13),0);
    beginShape();
  vertex(width*-0.3,height*-0.2);
 bezierVertex(width*0.31,height*-0.1,width*0.32,height*0.2,width*0.6,height*0.3);
bezierVertex(width*0.6,height*0.3,width*0.6,height*0.4,width*0.35,height*0.5);
bezierVertex(width*0.35,height*0.5,width*0.6,height*0.6,width*0.33,height*0.7);
bezierVertex(width*0.6,height*0.7,width*0.32,height*0.8,width*0.18,height*0.9);
vertex(width*-0.3,height*1.2);
  endShape();


  push();
  translate(113,0);
  beginShape();
  vertex(width*1.3,height*-0.2);

bezierVertex(width*0.79,height*-0.1,width*0.77,height*0.2,width*0.4,height*0.3);
bezierVertex(width*0.4,height*0.3,width*0.4,height*0.4,width*0.75,height*0.5);
bezierVertex(width*0.75,height*0.5,width*0.4,height*0.6,width*0.77,height*0.7);
bezierVertex(width*0.4,height*0.7,width*0.78,height*0.8,width*0.92,height*0.9);
vertex(width*1.3,height*1.2);
  endShape();
  pop();
  pop();

  push();
  fill(217);
  stroke(33);
  textSize(67,133);
  textStyle(BOLD);
  textAlign(CENTER);
  textFont('Avenir');
  text('ARTIFICIAL',width*0.5,height*0.7);
  pop();

//right
  
  }
}