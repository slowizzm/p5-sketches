const terrain = [];

let cols, rows,
    w = 100,
	h = 300,
	s = 20,
    speed = 0;

function setup() {
	createCanvas(windowWidth-4, windowHeight-4, WEBGL);

	cols = w / s;
	rows = h / s;

	for (let x = 0; x < cols; x++) {
		terrain[x] = [];
		for (let y = 0; y < rows; y++) {
			terrain[x][y] = 0; //specify a default value for now
		}
	}
}

function draw() {
	background(51);

	speed -= 0.1;
	let yOff = speed;
	for (let y = 0; y < rows; y++) {
		let xOff = 0;
		for (let x = 0; x < cols; x++) {
			terrain[x][y] = map(noise(xOff, yOff), 0, 1, -100, 100);
			xOff += 0.2;
		}
		yOff += 0.2;
	}

	translate(0, 50);
	fill(51, 50);
	translate(-w / 2, -h / 2);
	for (var y = 0; y < rows - 1; y++) {
		beginShape(TRIANGLE_STRIP);
		for (var x = 0; x < cols; x++) {
			vertex(x * s, y * s, terrain[x][y]);
			vertex(x * s, (y + 3) * s, terrain[x][y + 1]);
		}
		endShape();
	}
}

function windowResized() {
	resizeCanvas(windowWidth-4, windowHeight-4);
}