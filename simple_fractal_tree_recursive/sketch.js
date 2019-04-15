let sw;
let sc;
let depth;
let noiseScale;

function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);

	sw = 10;
	sc = color(0, 0, 100);
	depth = 0;
	noiseScale = random(100, 400);
}

function draw() {
	background(120, 40, 40);
	translate(width / 2, height);
	let len = height / 10;
	branch(depth, len);
	noLoop();
}

function branch(depth, len) {
	if (depth < 10) {
		let sw = map(len, 0, height / 10, 0, 5);
		strokeWeight(sw);
		strokeCap(ROUND);
		stroke(0, 0, 80);
		line(0, 0, 0, -len);
		push(); // a start
		translate(0, -len);
		rotate(random(-15, 15));

		len = len * random(0.85, 0.93);

		if (random(100) < 50) {
			push();
			rotate(-20, 0);
			branch(depth + 1, len);
			pop();
			push();
			rotate(0, 20);
			branch(depth + 1, len);
			pop();
		} else {
			push();
			branch(depth, len);
			pop();
		}
		pop(); // a end
	}
}

function mousePressed() {
	redraw();
}