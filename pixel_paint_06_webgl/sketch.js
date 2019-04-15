//Click and drag to orbit

let img,
	planes = [],
	numPlanes = 5000;

function preload() {
	img = loadImage('https://i.imgur.com/PqSNKmX.png?1');
}

function setup() {
	createCanvas(500, 500, WEBGL);
	noStroke();
	img.loadPixels();
	img.resize(img.width * 0.4, img.height * 0.4);
	let fov = 90/180 * PI;
	let cam = (height >> 1) / tan(fov / 30.0);
	perspective(60 / 180 * PI, width / height, cam * 0.1, cam * 100);

	for (let i = 0; i < numPlanes; i++) {
		let
			pos = createVector(random(width), random(height)),
			col = img.get(pos.x, pos.y),
			z = -lightness(col) * 3;

		planes.push(new Planes(pos, z, 7, col));
	}
}

function draw() {
	background(51);
	for (let i = 0; i < planes.length; i++) {
		let p = planes[i];
		planes[i].render(p);
	}
	let controls = orbitControl();
	//controls.enableZoom = false;
}