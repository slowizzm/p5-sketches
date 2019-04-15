//wip 

let w, h;
function setup() {
  createCanvas(375, 667);
  noStroke();
  w = width;
  h = height;
}

function draw() {
  background(217);

  fill(3,19,1);
  mainDesign();
  textSize(33);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Avenir');
  text('LURIA', w*0.5,h*0.27);
  //text('LUR', w*0.455,h*0.27);
  //text('IA', w*0.59,h*0.275);
}

function mainDesign() {
  push();
  let d = dist(mouseX,mouseY,w*0.3,h*0.3);
  beginShape();
  //translate(w*0.5,h*0.5);
  vertex(w*0.3,h*0.3);
  vertex(w*0.5-13,h*0.3);
  vertex(w*0.3,h*0.4);
  endShape();
  pop();

  beginShape();
  vertex(w*0.5,h*0.295);
  vertex(w*0.7,h*0.29);
  vertex(w*0.71,h*0.35);
  vertex(w*0.37,h*0.37);
  endShape();

  beginShape();
  vertex(w*0.295,h*0.415);
  vertex(w*0.35,h*0.38);
  vertex(w*0.54,h*0.382);
  vertex(w*0.5,h*0.54);
  vertex(w*0.2945,h*0.5);
  endShape();

  beginShape();
  vertex(w*0.556,h*0.381);
  vertex(w*0.69,h*0.38);
  vertex(w*0.689,h*0.58);
  vertex(w*0.514,h*0.54);
  endShape();

  beginShape();
  vertex(w*0.291,h*0.505);
  vertex(w*0.488,h*0.549);
  vertex(w*0.45,h*0.585);
  vertex(w*0.2940,h*0.585);
  endShape();

  beginShape();
  vertex(w*0.5189,h*0.555);
  vertex(w*0.68,h*0.604);
  vertex(w*0.66,h*0.63);
  vertex(w*0.503,h*0.6);
  endShape();
}
