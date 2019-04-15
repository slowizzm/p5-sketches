let toggle, target;
let ctx;

function setup() {
	ctx = createCanvas(windowWidth, windowHeight);

	colorMode(HSB, 360, 100, 100, 1);
	background(300, 30, 30);

	let pos = new p5.Vector(width * 0.5, height * 0.5),
		target = new p5.Vector(width * 0.5, height * 0.5);

	let startHue = 0;
	let angle = 0;
	let len = 80;
	target = new p5.Vector(len * cos(angle), len * sin(angle));

	toggle = new Toggle(pos.x, pos.y, target, startHue, len);
}

function draw() {
	background(300, 10, 10);
	if (toggle.animate) {
		toggle.render();
	} else {
		toggle.display();
	}
	fill(300, 30, 30, 0.1);
	rect(0, 0, windowWidth, windowHeight);
}

function mousePressed() {
	if (toggle.rollover()) {
		toggle.flip();
	}
}