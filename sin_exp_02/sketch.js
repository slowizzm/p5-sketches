
let x;
let y;
let d;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB,360,100,100,100);
  angleMode(DEGREES);
  x = 0;
  y = 0;
  d = 30;
}

function draw() {
  push();
  translate(width/2,height/2);
  
	let r = map(sin(frameCount%100),-1,1,100,150);
  x = cos(frameCount) * r;
  y = sin(frameCount) * r;
  
  ellipse(x%80,y%100,3);
  pop();
}