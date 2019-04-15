let img;
let x;
let y;

function preload() {
	img = loadImage("https://picsum.photos/640/480/?random");
}

function setup() {
	createCanvas(640, 480);
	x = width / 2;
	y = height / 2;
}

function draw() {
	let min = map(frameCount % 1000, 0, 1000, 10, 1);
	let max = map(frameCount % 1000, 0, 1000, 50, 5);

	for (let i = 0; i < 1000; i++) {
		let c = img.get(x, y);
		noStroke();
		fill(c);

		let w = random(min, max);
		let h = random(min, max);
		ellipse(x, y, 10, 10);

		x += random(-3, 3);
		y += random(-3, 3);
	}

	if (random(100) < 10) {
		x = random(width);
		y = random(height);
	}

	// if(frameCount%1000 == 0){
	// 	saveCanvas("img_" + frameCount + ".png");
	// }
}