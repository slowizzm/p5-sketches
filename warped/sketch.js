let warped;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	fill(3, 9, 13);
	noStroke();
	rectMode(CENTER);
	noiseDetail(3, 0.9);

	warped = new Warped(width * 0.5, height * 0.5);
}

function draw() {
	background(233);
	warped.run();
}

class Warped {
	constructor(_x, _y) {
		this.startPos = createVector(_x, _y);
		this.d = 0;
	}

	update() {
		this.startPos.x = mouseX;
		this.startPos.y = mouseY;
	}

	display() {
		for (let x = 10; x < width; x += 7) {
			for (let y = 10; y < height; y += 7) {
				let n = noise(x * 0.005, y * 0.005, sin(frameCount) * 0.00009);
				if (mouseX <= 0 || mouseX >= width || mouseY <= 0 || mouseY >= height) {
					this.d = dist(width * 0.5, height * 0.5, x, y);
				} else {
					this.d = dist(this.startPos.x, this.startPos.y, x, y);
				}
				push();
				translate(x, y);
				rotate(TWO_PI * n * 333);
				scale(10 * (this.d / 333));
				rect(33, 0, x / width, y / height)
				pop();
			}
		}
	}

	run() {
		this.update();
		this.display();
	}
}