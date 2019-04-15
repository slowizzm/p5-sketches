let img;
let slider = [];
let sliders = [];

function preload() {
	img = loadImage("slow.jpg");
}

function setup() {
	createCanvas(800, 500);
	background(51);
	slider = new Sliderz();
	slider.setup();
}

function draw() {
	// background(220);
	// slider[0] = sliders[0].value();
	slider[1] = sliders[1].value();
	slider[2] = sliders[2].value();
	slider[3] = sliders[3].value();
	slider[4] = sliders[4].value();


	image(img, 0, 0, 3108 / 6, 3263 / 6);

	loadPixels();
	let d = pixelDensity();
	let s = width / 4 * d * height * d * 4;
	let wpixels = width * d * slider[0];
	let hpixels = height * d;


	for (let i = 0; i < hpixels; i++) {
		for (let j = 0; j < wpixels; j++) {
			if (i % slider[3] < 3) {
				pixels[(i * wpixels) + j + slider[1]] = pixels[(i * wpixels) + j + slider[2]];
				pixels[(i * wpixels) + j + 1] = pixels[(i * wpixels) + j];
				pixels[(i * wpixels) + j + 2] = pixels[(i * wpixels) + j];
			}
			if (i % slider[4] > 2) {
				pixels[(i * wpixels) + j] = pixels[(i * wpixels) + j + 64];
				pixels[(i * wpixels) + j + 1] = pixels[(i * wpixels) + j + 65];
				pixels[(i * wpixels) + j + 2] = pixels[(i * wpixels) + j + 66];
			}
		}
	}

	updatePixels();
	push();
	fill(255);
	rect(width * .63, 0, 300, height);
	pop();
	push();
	slider.display();
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}