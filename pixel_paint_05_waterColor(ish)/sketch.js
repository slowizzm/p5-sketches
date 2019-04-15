let water = []
let count = 300
let img;

function preload() {
	img = loadImage('https://i.imgur.com/PqSNKmX.png?1');
}

function setup() {
	createCanvas(600, 600)
	background(217)

	for (let i = 0; i < count; i++) {
		water[i] = {};
		water[i].pos = createVector(random(width), random(height));
		water[i].prevPos = createVector(water[i].pos.x, water[i].pos.y);

		water[i].dir = random() > 0.5 ? 1 : -1;
		water[i].radius = random(3, 10);
		water[i].theta = random(TWO_PI);
	}
	img.loadPixels();
	img.resize(img.width * 0.5, img.height * 0.5);
}

function draw() {
	for (let i = 0; i < count; i++) {
		let brush = water[i];

		brush.theta += 0.3 / brush.radius * brush.dir;
		brush.pos.x -= cos(brush.theta) * brush.radius;
		brush.pos.y -= sin(brush.theta) * brush.radius;

		let color = img.get(brush.pos.x, brush.pos.y);
		let bright = brightness(color);
		color[3] = 33;

		if (bright < 20 || random() < 0.01) {
			brush.dir *= -1;
			brush.radius = random(3, 5);
		}

		if (brush.pos.x < 0 || brush.pos.x > width || brush.pos.y < 0 || brush.pos.y > height) {
			brush.theta += PI;
		}

		strokeWeight(map(bright, 0, 255, 1, 0));
		stroke(color);
		fill(color);
		rect(brush.prevPos.x, brush.prevPos.y, brush.pos.x / 33, brush.pos.y / 33);

		brush.prevPos.x = brush.pos.x;
		brush.prevPos.y = brush.pos.y;
	}
}