let jumper;

function setup() {
	createCanvas(400, 400);
	jumper = new Jumper();
}

function draw() {
	clear();
	jumper.run();
	
	push();
	fill(217);
	textFont('Avenir');
	textAlign(CENTER,CENTER);
	textSize(33);
	text('space bar to jump', width>>1, height*0.15);
	pop();
}

function keyPressed() {
	jumper.vel.y = -3;
}