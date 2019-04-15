let scl = 20;
let t = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
}

function draw() {
	background(0);
	noFill();
	for (let x = 0; x < width; x += scl) {
		for (let y = 0; y < height; y += scl) {
			stroke(x, y);


			push();
			translate(x, y);
			rotate(t);
			if (y >= height * 0.4 && y <= height * 0.7) {
				let r;
				if (y >= height * 0.2) {
					rotate(-t / 1.002);
					stroke(y, y, x, 255 - (x) / 5);
					r = map(y, 30 * 5, 30 * 12, 0.3, -0.03);
					rect(0, 0, 1, 1);
				} else {
					stroke(t, r, x);
					r = map(y, 300 * 4, 300 * 100, 0, 30.4);
					rect(0, 0, 1, 1);
				}
				rotate(noise(r));
			}

			line(0, 0, noise(33), x / 113);
			pop();

		}
	}

	t += 1;
}