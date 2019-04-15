let imgs = [];

function preload() {
	for (let i = 0; i < 4; i++) {
		imgs[i] = loadImage('images/' + i + '.png');
	}
}

function setup() {
	createCanvas(1280, 580);
	colorMode(HSB, 360, 100, 100);
}

function draw() {
	background(20, 80, 100);
	drawQuad();
	drawImage();
}

function drawImage() {
	let j = map(mouseX, 0, width, 0, width * 0.6);
	let r = map(mouseX, 0, width, 0, width * 0.45);
	let p = map(mouseX, 0, width, 0, width * 0.3);
	let g = map(mouseX, 0, width, 0, width * 0.15);
	image(imgs[0], j, 200, 220, 220);
	image(imgs[1], r, 200, 220, 220);
	image(imgs[2], p, 200, 220, 220);
	image(imgs[3], g, 200, 220, 220);
}

function drawQuad() {
	push();
	noStroke();
	fill(217);
	quad(240, 300, 270, 300, 150, 450, 100, 450);
	quad(300, 300, 330, 300, 250, 450, 190, 450);
	quad(360, 300, 390, 300, 355, 450, 290, 450);
	quad(420, 300, 450, 300, 450, 450, 390, 450);
	quad(480, 300, 510, 300, 540, 450, 490, 450);
	quad(540, 300, 570, 300, 640, 450, 580, 450);
	quad(600, 300, 630, 300, 730, 450, 680, 450);
	quad(660, 300, 690, 300, 820, 450, 770, 450);
	pop();
}