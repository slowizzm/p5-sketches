function setup() {
  createCanvas(400, 400);
	textFont('Cedarville Cursive');
}

function draw() {
  background(220);
	textSize(33);
	textFont('Cedarville Cursive');
	push();
	translate(width*0.5,height*0.5);
	rotate(radians(mouseX));
	text('Hello Font', 0,0);
	pop();
}