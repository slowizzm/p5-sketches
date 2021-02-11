//wip

let ldng;

function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 360, 100, 100);
	background(0, 0, 10);
	let pos = createVector(width * 0.5, height * 0.5);
	ldng = new Ldng(pos);
}

function draw() {
	background(0, 0, 10, 0.006);

	ldng.render();
}