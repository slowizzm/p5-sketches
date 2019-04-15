let falloff = 133;
let speed = 0.1;
let col = 0;
let grid;

let streamGrid;


function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER);
	col = random(200, 255);

	streamGrid = new StreamGrid(width * 0.5, height * 0.5);
}


function draw() {
	background(0);
	streamGrid.run();
}

class StreamGrid {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(3, 3);
		this.acc = createVector();
		this.charsize = 0;
		this.n;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		grid = map(width * 0.5, 0, width, 10, 30);


	}

	display() {
		for (let x = 0; x < width; x += grid) {
			for (let y = 0; y < height; y += grid) {
				let mult = 0.09;
				let d = dist(this.pos.x, this.pos.y, x, y);
				if (d < falloff) {
					mult = map(d, 0, falloff, 1.0, 0.1);
				}
				let n = noise(x * 0.005, y * 0.005, sin(frameCount) * 0.00009);
				let charSize = sin((x * y + frameCount) * speed) * grid * mult;

				if (abs(charSize) > 1) {
					textSize(abs(charSize));
					noStroke();
					if (charSize > 0) {
						fill(col, 255);
						text(n, x, y);
					} else {
						fill((col + 180) % 360);
						text(n, x, y);
					}
				} else {
					stroke(col);
					strokeWeight(charSize);
					point(x, y);
				}
			}
		}

		col = (col + 0.5) % 360;
	}

	edges() {
		if (this.pos.x < 0 || this.pos.x > width) {
			this.pos.x = constrain(this.pos.x, 0, width);
			this.vel.x *= -1;
		}

		if (this.pos.y < 0 || this.pos.y > height) {
			this.pos.y = constrain(this.pos.y, 0, height);
			this.vel.y *= -1;
		}
	}

	run() {
		this.update();
		this.display();
		this.edges();
	}
}