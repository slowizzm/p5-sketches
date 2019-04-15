let flowfield;
let vehicles;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	flowfield = new FlowField(20);
	flowfield.init();
	vehicles = [];

	for (let i = 0; i < 10000; i++) {
		let vPos = createVector(random(width), random(height));
		vehicles.push(new Vehicle(vPos, random(4, 10), random(0.1, 0.5)));
	}
}

function draw() {
	// clear();

	for (let i = 0; i < vehicles.length; i++) {
		vehicles[i].follow(flowfield);
		vehicles[i].run();
	}
}