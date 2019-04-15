let eyes = [];

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	background(51);
	noStroke();
	for (let i = 0; i < 2; i++) {
		let e = new Eye(width, height, ((i + 1) * 170) - width * 0.365);
		eyes.push(e);
	}
}

function draw() {
	background(51);
	for (let i = 0; i < eyes.length; i++) {
		eyes[i].run();
	}
}

class Eye {
	constructor(_w, _h, _offSetX) {
		this.offSetX = _offSetX;
		this.size = 142;
		this.pos = createVector();
		this.res = createVector(_w, _h);
		this.target = createVector();
		this.constrainEye = 3333;
	}

	update() {
		this.target.x = mouseX;
		this.target.y = mouseY;
		this.pos.x += (this.target.x - this.pos.x) * 0.33;
		this.pos.y += (this.target.y - this.pos.y) * 0.33;
	}

	display() {
		push();
		translate((width * 0.5) - this.offSetX, height * 0.3);
		fill(255);
		ellipse(width * -0.005, height * 0.005, this.size, this.size);
		fill(45);
		ellipse((this.pos.x - this.res.x * 0.5) * this.size / this.constrainEye, (this.pos.y - this.res.y * 0.5) * this.size / this.constrainEye, this.size * 0.5, this.size * 0.5);
		pop();
	}

	run() {
		this.update();
		this.display();
	}
}