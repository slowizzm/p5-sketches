let size = 15;
let izzms = [];
let _text;

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4, WEBGL);

	for (let y = 0; y < height; y += size * 1.5) {
		for (let x = 0; x < width; x += size * 1.5) {
			let c = new Izzm(x, y, size);
			izzms.push(c);
		}
	}

	_text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
	_text.textFont('Source Code Pro');
	_text.textAlign(CENTER);
	_text.textSize(33);
	_text.fill(0);
	_text.text('move mouse around canvas', width * 0.5, height * 0.5);
}

function draw() {
	background(217);
	push();
	translate(-width * 0.5, -height * 0.5);
	for (let i = 0; i < izzms.length; i++) {
		izzms[i].run();
	}
	pop();

	push();
	texture(_text);
	box(333, 333, 50);
	pop();
}


class Izzm {
	constructor(_x, _y, _s) {
		this.pos = createVector(_x, _y);
		this.rot = createVector();
		this.spin = createVector();
		this.col = 0;
		this.s = _s;
	}

	update() {
		this.d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
		if (this.d < this.s * 4) {
			this.motion = createVector(pmouseX, pmouseY);
			this.motion.sub(mouseX, mouseY);
			this.spin.x = this.motion.x * 0.1;
			this.spin.y = this.motion.y * 0.1;
		}

		this.rot.x += this.spin.x;
		this.spin.x *= 0.97;

		this.rot.y += this.spin.y;
		this.spin.y *= 0.97;

		this.col += (abs(this.spin.x) + abs(this.spin.y)) * 0.07;
		if (this.col > 200) {
			this.col = 190;
		}
	}

	display() {
		push();
		translate(this.pos.x, this.pos.y, 0);
		rotateY(radians(-this.rot.x));
		rotateX(radians(this.rot.y));

		noStroke();
		fill(this.col, 255, 255);
		box(this.size);
		pop();
	}

	run() {
		this.update();
		this.display();
	}
}