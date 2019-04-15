//wip

function setup() {
	createCanvas(400, 400);
	colorMode(HSB,360,100,100);
	noStroke();
	
	background(0,0,10);
}

function draw() {
}

function mousePressed() {
	fill(250);
	paws();
}

function paws() {
	size = map(mouseY, 0, height, 0, 8);
	
	ellipse(mouseX, mouseY, size * 3, size * 2.5);
	ellipse(mouseX + map(mouseY, 0, height, 0, 18), mouseY - map(mouseY, 0, height, 0, 5), size, size);
	ellipse(mouseX + map(mouseY, 0, height, 0, 12), mouseY - map(mouseY, 0, height, 0, 15), size, size);
	ellipse(mouseX, mouseY - map(mouseY, 0, height, 0, 19), size, size);
	ellipse(mouseX - map(mouseY, 0, height, 0, 12), mouseY - map(mouseY, 0, height, 0, 15), size, size);
}