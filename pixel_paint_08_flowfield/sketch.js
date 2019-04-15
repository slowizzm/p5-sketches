let flowfield;
let vehicles;

let img;
let ppaint;

let img_tower, img_city;

function preload() {
	img = loadImage('images/the-starry-night.jpg');
	img_tower = loadImage('images/tower.png');
	img_city = loadImage('images/city.png');
}

function setup() {
	createCanvas(img.width, img.height);
	background(51);
	flowfield = new FlowField(42);
	flowfield.init();
	vehicles = [];

	img.loadPixels();
	for (let i = 0; i < 1000; i++) {
		let vPos = createVector(random(width), random(height));
		vehicles.push(new Vehicle(vPos, random(4, 10), random(0.1, 0.5)));
	}
}

function draw() {
	// clear();
	push();
	noStroke();
	fill(51,10);
	rect(0,0,width,height);
	pop();
	for (let i = 0; i < vehicles.length; i++) {
		vehicles[i].follow(flowfield);
		vehicles[i].run();
	}

	image(img_tower, 110, 50);
	image(img_city,392,489);
}