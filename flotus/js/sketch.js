let izzm = [],
	izzm2 = [];
const NUM_IZZMS = 10;

function setup() {
	createCanvas(480, 640);

	for (let i = 0; i < NUM_IZZMS; i++) {
		let pos = createVector(random(width), random(height))
		let izz = new Izzm(pos, i);
		izzm.push(izz);
		let izz2 = new Izzm(pos);
		izzm2.push(izz2);
	}
	background(255);
}

function draw() {
	stroke(0, 3);
	fill(33, 133, 213, 67);
	rectMode(CENTER);
	rect(width / 2, height / 2, 233, 233);

	for (let i = 0; i < izzm.length; i++) {
		izzm[i].run();
		izzm2[i].run();
	}
}