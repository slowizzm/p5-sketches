let spd = 24,
	num = 400,
	scl,
	rot = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	scl = width / 222;
	smooth(4);
	noStroke();
}

function draw() {
	background(51, 100);
	let r = PI;
	for (let i = 0; i < num; i++) {
		var offSet = TWO_PI / num * i;
		push();
		translate(width / 2, height / 2);
		rotate(r);
		let d = map(sin(rot - offSet), -1, 1, 100, 200);
		let x = width / 133 + map(cos(rot + offSet * 13), -1, 1, .1, d);
		ellipse(x, 42, scl, scl);
		r += (TWO_PI / num);
		pop();
	}
	rot -= TWO_PI / spd;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}