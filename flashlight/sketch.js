let img;

function preload() {
	img = loadImage('https://picsum.photos/640/360/?random');
}

function setup() {
	createCanvas(img.width, img.height);

	pixelDensity(1);
}

function draw() {

	loadPixels();
	let rad = 90;
	img.loadPixels();
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let pos = (x + y * width) * 4;
			let r = img.pixels[pos];
			let g = img.pixels[pos + 1];
			let b = img.pixels[pos + 2];

			let d = dist(x, y, mouseX, mouseY);


			let adjustBrightness = map(d, 0, rad, 1, 0);
			r *= adjustBrightness;
			g *= adjustBrightness;
			b *= adjustBrightness;


			r = constrain(r, 0, 255);
			g = constrain(g, 0, 255);
			b = constrain(b, 0, 255);


			pixels[pos] = r;
			pixels[pos + 1] = g;
			pixels[pos + 2] = b;
			pixels[pos + 3] = 255;
		}
	}

	updatePixels();
}