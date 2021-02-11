let r;
let angle;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  r = 0;
  angle = random(360);
  background(220);
}

function draw() {
  for (let i = 0; i < 255; i++) {
    push();
    translate(width / 2, height / 2);
    let x = cos(angle) * r;
    let y = sin(angle) * r;
  	stroke((frameCount+i)%255);
		noFill();
    ellipse(x, y,13%100,13%3);
	
    r += map(sin(i+frameCount),-1,1,-0.05,0.05);
    angle += map(tan(i+frameCount%0.2),-1,1,-5,5);
    pop();

  }

}