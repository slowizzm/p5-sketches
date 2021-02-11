let aurora;

function setup() {
	createCanvas(500, 500);
	noStroke();

	aurora = new Aurora(0.0);
}

function draw() {
	background('#131721');

	aurora.run();
}


class Aurora {
	constructor(_yoff) {
		this.xoff = 0;
		this.yoff = _yoff;
	}

	update() {
		push();
		translate(0, -190);
		beginShape();
		this.xoff = 0;
		for (let x = 33; x <= width - 33; x += 13) {
			for (let y = 0; y <= height; y += 13) {
				let y = map(noise(this.xoff, this.yoff), 0, 1, 200, 300);
				vertex(x, y);
				this.xoff += 0.003;
			}
		}

		this.yoff += 0.03;
		vertex(250, height);
		vertex(250, height);
		endShape(CLOSE);
		pop();
	}

	display() {
		fill(217, 0, 127);

		push();
		fill('#131721');
		translate(width * 0.5, height * 0.9);
		ellipse(-2, -289, 67);
		triangle(-135, -30, 0, -235, 131, -30);
		pop();

		push();
		fill('#341334');
		translate(width * 0.5, height * 0.9);
		ellipse(0, -290, 67);
		triangle(-133, -30, 0, -233, 133, -30);
		pop();
	}

	run() {
		this.update();
		this.display();
	}
}