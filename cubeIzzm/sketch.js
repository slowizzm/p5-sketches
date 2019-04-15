let izzms = [];

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4, WEBGL);
	for (let x = 42; x < width - 42; x += 42) {
		for (let y = 42; y < height - 42; y += 42) {
			let izz = new Izzm(x, y, 0);
			izzms.push(izz);
		}
	}
}

function draw() {
	background(51);
	stroke(217);
	noFill();
	for (let i = 0; i < izzms.length; i++) {
		izzms[i].display();
	}
}

class Izzm {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y, 0);
	}

	display() {
		let d = dist(mouseX, mouseY, this.pos.x, this.pos.y)
		push();
		noFill();
		stroke(d);
		translate(this.pos.x - width / 2, this.pos.y - height / 2, -d);
		rotateY(radians(map(d, 0, height, 90, 0)));
		if (d <= 42) {
			push();
			fill(d, 200);
			box(33);
			pop();
		} else {
			box(42);
		}
		pop();
	}
}