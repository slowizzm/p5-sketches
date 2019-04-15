let izzm = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 1, 1);
}

function draw() {
	push();
	colorMode(RGB);
	background(33, 10);
	pop();
	for (let i = 0; i < izzm.length; i++) {
		izzm[i].render();
	}

	push();
	colorMode(RGB);
	noStroke();
	fill(100, 7, 233, 10);
	rect(-4, -4, width + 4, height + 4);
	pop();

	if (izzm.length >= 13) {
		izzm.splice(0, 1);
	}
}

function mousePressed() {
	izzm.push(new Izzm(mouseX, mouseY, random(-width, width), random(-height, height), random(13, 33), random(3, 7)));
}