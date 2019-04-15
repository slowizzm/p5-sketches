let noiseMax = 33;
let aoff = 0;

function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 360, 100, 100);
}

function draw() {
	background(200, 10, 5, 0.1);
	translate(width / 2, height / 2);
	stroke(255);
	noFill();
	beginShape();
	for (let a = 0; a < TWO_PI; a += 0.001) {
		let xoff = map(cos(a), -1, 1, 0, noiseMax) +
			map(cos(aoff), -1, 1, 0, noiseMax);
		let yoff = map(sin(a), -1, 1, 0, noiseMax) +
			map(sin(aoff), -1, 1, 0, noiseMax);
		let r = map(noise(xoff, yoff), 0, aoff, 100, 110);
		let x = r * cos(a - (r / 1333));
		let y = r * sin(a - (r / 1333));
		vertex(x, y);
	}
	endShape(CLOSE);
	aoff += 0.01;
}