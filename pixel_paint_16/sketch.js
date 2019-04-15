let r, angle, img;

function preload() {
	img = loadImage('https://picsum.photos/200/300/?random');
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  r = 0;
  angle = random(360);
  background(220);
}

function draw() {
	
	for (let i = 0; i < 10; i++) {
		let x = random(img.width);
		let y = random(img.height);
		let c = img.get(x, y);
		
		
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
	
	
		//let angle = hue(c);
		
		
		
		
		push();
		translate(x, y);
		rotate(angle / noise(33) * frameCount / 33);
		stroke(c);
		fill(c);
		rect(0, 10, angle / 33, angle / 33);
		pop();
	}

}