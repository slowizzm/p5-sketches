let hue;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	hue = 255;
	colorMode(HSB, 360, 100, 100, 100);
}

function draw() {

	let size = (abs(pmouseX - mouseX) + abs(pmouseY - mouseY)) + 10;

	if (mouseIsPressed) {
		sp(mouseX, mouseY, size);
	}

	if (keyIsDown(LEFT_ARROW)) {
		hue = hue - 1;
		hue = constrain(hue, 0, 360);
	} else if (keyIsDown(RIGHT_ARROW)) {
		hue = hue + 1;
		hue = constrain(hue, 0, 360);
	}
}

function sp(x, y, size) {
	push();
	noStroke();
	fill(hue, 100, 100, 30);
	translate(x, y);
	for (let i = 0; i < size * 2; i = i + 1) {
		let radius = random(size);
		let angle = random(TWO_PI);
		let xpos = radius * cos(angle);
		let ypos = radius * sin(angle);
		ellipse(xpos, ypos, map(radius, 0, size, size / 5, 0), map(radius, 0, size, size / 5, 0));
	}
	pop()
}