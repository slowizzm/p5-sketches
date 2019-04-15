let col = 0;
let sineSize;
let a = 0;
let counter = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	noStroke();
}

function draw() {
	for (let x = 0; x < 33; x++) {
		for (let y = 0; y < 33; y++) {
			sineSize = sin(counter + tan(x / 42 + counter) + tan(y / 33 + counter) - tan((x + y) / 7 + counter));
			col = map(sin(sineSize), -1, 1, 0, 255);
			fill(col, col, col);
			rect(width / 2, y * y, sineSize * x * y, sineSize);
			ellipse(x * x, height / 2, sineSize / x, sineSize * y * x);
			ellipse(width / 2, y * y, (sineSize * x * y) / 2, sineSize);
			rect(x * x, height / 2, sineSize / x, (sineSize * y * x) / 2);
		}
		counter += 0.001;
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}