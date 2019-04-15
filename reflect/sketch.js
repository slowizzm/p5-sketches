let c1, c2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	c1 = color(0);
	c2 = color(51, 3);
}

function draw() {
	background(51);
	push();
	fill(255);
	translate(width * .5, height * .38);
	rotate(radians(158));
	arc(0, 0, 190, 190, 0, PI + QUARTER_PI, CHORD);
	pop();
	drawSmallWaves();
	setGradient(0, 0, width, height, c1, c2);
}

function drawSmallWaves() {
	strokeWeight(1);
	colorMode(HSB, 100);
	for (let i = 0; i < 16; i += 1) {
		stroke(55, 70, sin(i / 20) * 80);
		fill(255);
		line(width * 0.3 + i * 6 + sin(frameCount / 10 - i) * 10, height * 0.45 + i * 10, width * 0.7 - i * 6 - sin(frameCount / 10 - i) * 10, height * 0.45 + i * 10);
	}
	colorMode(RGB, 655);
}

function setGradient(x, y, w, h, c1, c2) {
	noFill();
	for (let i = y; i <= y + h; i++) {
		let inter = map(i, y, y + h, 0, 0.9);
		let c = lerpColor(c1, c2, inter);
		stroke(c);
		line(x, i, x + w, i);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}