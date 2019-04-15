// createGraphics using get() method - works with tint() : alpha

let graphics = [],
	grabbedImage;
let catbeard, vart, frame, border;
let isVapor = true;
let info;

function preload() {
	vart = loadImage("vart-logo.png");
}

function setup() {
	createCanvas(720, 480);
	strokeWeight(32);
	noFill();
	noStroke();
	imageMode(CENTER);
	for (let i = 0; i < 3; i++) {
		let g = createGraphics(width, height);
		graphics.push(g);
	}

	info = createP('V-ART');
	info.position(width * 0.47, 0);
	info.class('vart');

}

function draw() {
	blendMode(BLEND);
	background(3, 13, 9);
	push();
	noFill();
	stroke(217, 233);
	strokeWeight(7);
	rect(0, 0, width - 4, height - 4);
	pop();

	push();
	strokeWeight(3);
	stroke(33, 233);
	for (let y = 4; y < height - 4; y += 4) {
		fill(y);
		line(4, y, width - 8, y);
	}
	pop();
	blendMode(ADD);

	push();
	translate(width * 0.35, height * 0.5);
	for (let i = 0; i < graphics.length; i++) {
		graphics[0].tint(255, 0, 0);
		graphics[1].tint(0, 255, 0);
		graphics[2].tint(0, 0, 255);
		graphics[i].image(vart, 0, 0, vart.width / 3, vart.height / 3);
		grabbedImage = graphics[i].get();
		drawLogo();
	}
	pop();
}

function drawLogo() {
	let rgbSplit = createVector();
	if (isVapor) {
		rgbSplit.x = random(width * 0.5 - 2, width * 0.5 + 2);
		rgbSplit.y = random(height * 0.4 - 2, height * 0.4 + 2);
	} else {
		rgbSplit.x = width * 0.5;
		rgbSplit.y = height * 0.4;
	}
	image(grabbedImage, rgbSplit.x, rgbSplit.y, grabbedImage.width, grabbedImage.height);
}

function mousePressed() {
	isVapor = !isVapor;
}