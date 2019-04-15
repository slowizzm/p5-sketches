let pos = [],
	arrows = [];

const NUM_ARROWS = 1000;

function setup() {
	createCanvas(displayWidth, displayHeight);

	for (let i = 0; i < NUM_ARROWS; i++) {
		pos[i] = createVector(random(width), random(height));
		arrows.push(new Arrow(pos[i].x, pos[i].y, 42));
		}
}

function draw() {
	background(51);

	for (let i = 0; i < arrows.length; i++) {
		arrows[i].display(atan2(mouseY - pos[i].y, mouseX - pos[i].x));
	}
}

class Arrow {
	constructor(_x, _y, _size) {
		this.pos = createVector(_x, _y);
		this.size = _size;
	}

	display(_angle) {
		
		push();
		translate(this.pos.x, this.pos.y);
		let d = dist(this.pos.x,this.pos.y,width*0.5,height*0.5);
		stroke(217,255-(d/5));
		strokeWeight(255/(d/3));
		rotate(_angle);
		translate(-this.pos.x, -this.pos.y);

		line(this.pos.x + this.size / 2 - this.size / 10, this.pos.y - this.size / 20, this.pos.x + this.size / 2, this.pos.y);
		line(this.pos.x - this.size / 2, this.pos.y, this.pos.x + this.size / 2, this.pos.y);
		line(this.pos.x + this.size / 2 - this.size / 10, this.pos.y + this.size / 20, this.pos.x + this.size / 2, this.pos.y);

		pop();

		return this;
	}
}