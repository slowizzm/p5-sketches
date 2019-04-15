let angle = 13;
let r = 3;
let pixelCount = 0;
let w = 13;
let img;

function preload() {
	img = loadImage("https://i.imgur.com/PqSNKmX.png?1");
}

function setup() {
	createCanvas(500, 500);
	background(51);
	img.loadPixels();
	img.resize(img.width * 0.4, img.height * 0.4);
	noStroke();
}

function draw() {
	drawSpiral();
}

function drawSpiral() {
	translate(width >> 1, height >> 1);
	let pos = createVector();
	let x = sin(radians(angle)) * r;
	let y = cos(radians(angle)) * r;
	let p_col = img.get((width >> 1) - x, (height >> 1) + y);
	fill(p_col);

	ellipseMode(CENTER);
	ellipse(pos.x - x, pos.y + y, w);
	angle += 3;
	r += 0.05;
	pixelCount += 1;
	w += 0.0003;

	if (pixelCount > 4500) {
		noLoop();
	}
}