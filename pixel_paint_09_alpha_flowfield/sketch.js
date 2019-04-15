let flowfield;
let vehicles;

let img;

let pg;

function preload() {
	img = loadImage('images/some_logo.png');
}

function setup() {
	createCanvas(img.width, img.height);
	background(51);
	flowfield = new FlowField(3);
	flowfield.init();
	vehicles = [];

	img.loadPixels();
	for (let i = 0; i < 250; i++) {
		let vPos = createVector(random(width), random(height));
		vehicles.push(new Vehicle(vPos, random(4, 10), random(0.1, 0.5)));
	}

	img.resize(img.width >> 1, img.height >> 1);
	pg = createGraphics(img.width, img.height);
}

function draw() {
	//clear();
	// push();
	// noStroke();
	// fill(51, 10);
	// rect(0, 0, width, height);
	// pop();
	for (let i = 0; i < vehicles.length; i++) {
		vehicles[i].follow(flowfield);
		vehicles[i].run();
	}
}