let floatObj;

function setup() {
	createCanvas(400, 400);

	floatObj = new FloatingObject(width * 0.5, height * 0.42);
}

function draw() {
	background(51);

	floatObj.run();

	push();
	stroke(3, 3, 33, 100);
	fill(3, 3, 33, 33);
	rect(0, height * 0.5, width, height);
	pop();
}

class FloatingObject {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
		this.float = 18;
		this.minSize = 42;
		this.maxSize = 33;
		this.sizeSpeed = 0.04;
	}

	update() {
		this.float = map(sin((millis() * 0.05) * this.sizeSpeed), -1.0, 1.0, this.minSize, this.maxSize)
		
		return this;
	}

	display() {
		push();
		noStroke();
		fill(217);
		ellipse(this.pos.x, this.pos.y + this.float, 33);
		pop();
		
		return this;
	}

	run() {
		return this.update().display();
	}
}