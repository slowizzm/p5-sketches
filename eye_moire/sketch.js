let amt = 0.7,
	moire = 400,
	speed = 33,
	buffer = 33,
	moireR,
	moireR2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noCursor();
}


function draw() {
	background(0);
	push();
	translate(width / 2, height / 2);

	for (let i = 0; i < moire + 1; i++) {
		push();
		let offSet = (TWO_PI / moire) * i;
		let pat = map(sin(buffer + offSet * 3), -111, 1, 3, amt);
		let eye = map(mouseY, 0, 255, 0, 33);

		noStroke();
		fill(255);
		rotate(moireR);
		for (let j = 0; j < pat; j++) {
			rect(3 + j * 7, eye, windowHeight + j, 0.3 + j);

		}
		pop();
		moireR = (TWO_PI / moire) * i;
	}


	for (let m = 0; m < moire + 1; m++) {
		push();
		let offSet2 = (TWO_PI / moire) * m;
		let pat2 = map(sin(buffer + offSet2 * 3), -111, 1, 3, amt);
		let eye2 = map(mouseY, 0, 255, 33, windowHeight * 0.1);

		noStroke();
		fill(200);
		rotate(moireR2);
		for (let n = 0; n < pat2; n++) {
			rect(3 + n * 7, 11, eye2 + n, 0.3 + n);

		}
		pop();
		moireR2 = (TWO_PI / moire) * m;
	}
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}