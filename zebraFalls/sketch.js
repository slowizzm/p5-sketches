let zebra;

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight * 0.7);
	noStroke();

	zebra = new Zebra(0.0);
}

function draw() {
	clear();

	zebra.run();
}

class Zebra {
	constructor(_yoff) {
		this.xoff = 0.0;
		this.yoff = _yoff;
	}

	update() {
		push();
		beginShape();
		this.xoff = 0;
		for (let x = 0; x <= width; x += 13) {
			for (let y = 33; y <= height; y += 13) {
				let z = map(noise(this.xoff, this.yoff), 0, 1, 200, 300);
				vertex(x, y - z);
				this.xoff += 0.003;
			}
		}
		this.yoff += 0.003;
		endShape(CLOSE);
		pop();
	}

	display() {
		fill(217);
	}

	run() {
		this.update();
		this.display();
	}
}

function windowResized() {
	resizeCanvas(window.innerWidth - 4, window.innerHeight * 0.7);
}