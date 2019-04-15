//MOBILE

let x, y, z;
let xpos, ypos;

function setup() {
	createCanvas(windowWidth, windowHeight);
	fill(0);
	noStroke();
	rectMode(CENTER);
	frameRate(30);
	noiseDetail(2, 0.9);

	xpos = 200;
	ypos = 200;
	x = 0;
	y = 0;
}

function draw() {
	background(255);

	xpos = xpos + x;
	ypos = ypos - y;

	for (let i = 0; i < width + 33; i += 33) {
		for (let j = 0; j < height + 33; j += 10) {
			let n = sin(noise(i * 0.005, j * 0.005, xpos * 0.005));
			let m = cos(xpos) + sin(ypos) * atan(0.00005);
			push();
			translate(i, j);
			rotate(radians(10 * n));
			scale(6 * n);
			let fx = map(xpos, 0, windowWidth, 0.5, 1);
			// let fy = map(ypos, 0, windowHeight, 200,255);
			rect(0, 0, 3, 3);
			pop();
		}
	}
}

// accelerometer Data
window.addEventListener('devicemotion', function(e) {
	// get accelerometer values
	x = parseInt(e.accelerationIncludingGravity.x);
	y = parseInt(e.accelerationIncludingGravity.y);
	z = parseInt(e.accelerationIncludingGravity.z);
});

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}