let incr = 0,
	phase,
	mult;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	noStroke();
	mult = 33;
}

function draw() {
	background(51);
	phase = 33;
	for (let i = 0; i <= TWO_PI; i += PI / 33) {
		push();
		translate(windowWidth >> 1, windowHeight >> 1);
		rotate(i * incr);
		fill(217, 100);
		ellipse(cos(incr / phase) * 100, 0, 13, 13);
		fill(33, 100);
		stroke(217);
		rect(cos(incr / phase) * 10, 0, 13, 13);
		pop();
		phase /= (PI / 2);
	}
	incr += 0.005 / (PI / 2);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}