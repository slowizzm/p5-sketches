let img;

let izzms = [],
	sizer = 13;

function preload() {
	img = loadImage("images/izzm.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	var prox = 20,
		row = ceil(width / prox) + 1,
		column = ceil(height / prox) + 1;

	for (var j = 0; j < column; j++) {
		for (var i = 0; i < row; i++) {
			izzms.push(new p5.Vector(prox * i, prox * j));
		}
	}
}

function draw() {
	background(255);
	noFill();
	stroke(51);
	strokeWeight(1);
	for (var i = izzms.length - 1; i >= 0; i--) {
		var h = calcVec(izzms[i].x - mouseX, izzms[i].y - mouseY);
		rect(
			izzms[i].x,
			izzms[i].y,
			izzms[i].x + sizer * cos(h.heading()),
			izzms[i].y + sizer * sin(h.heading()));
	}
	push();
	fill(51);
	noStroke();
	rect(0, 0, width, height * 0.3);
	rect(0, height * 0.7, width, height);
	pop();

	imageMode(CENTER);
	image(img, width / 2, height / 2, 1920 / 2, 1080 / 2);
}


function calcVec(x, y) {
	return new p5.Vector(y - x, -x - y);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}