//Click/Hold to drag object
//Double click to change shape

let draggable;
let isSqr = true;

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	draggable = new Draggable();

	rectMode(CENTER);
	ellipseMode(CENTER);
}

function draw() {
	background(51);
	draggable.drag();
	draggable.rollover();

	if (isSqr) {
		draggable.sqr();
	} else {
		draggable.circ();
	}
}

function mousePressed() {
	if (mouseX > draggable.pos.x - (draggable.size.x / 2) &&
		mouseX < draggable.pos.x + (draggable.size.x / 2) &&
		mouseY > draggable.pos.y - (draggable.size.y / 2) &&
		mouseY < draggable.pos.y + (draggable.size.y / 2)) {
		draggable.isDraggable = true;
		draggable.offset.x = draggable.pos.x - mouseX;
		draggable.offset.y = draggable.pos.y - mouseY;
	}
}

function mouseReleased() {
	draggable.isDraggable = false;
}

function doubleClicked() {
	if (mouseX > draggable.pos.x - (draggable.size.x / 2) &&
		mouseX < draggable.pos.x + (draggable.size.x / 2) &&
		mouseY > draggable.pos.y - (draggable.size.y / 2) &&
		mouseY < draggable.pos.y + (draggable.size.y / 2)) {
		isSqr = !isSqr;
	}
}


class Draggable {
	constructor() {
		this.pos = createVector(width * 0.5, height * 0.5);
		this.size = createVector(75, 50);
		this.r = 75;
		this.offset = createVector();
		this.isDraggable = false;
		this.isRollOver = false;
	}

	rollover() {
		this.d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
		if (isSqr) {
			if (mouseX > this.pos.x - (this.size.x / 2) &&
				mouseX < this.pos.x + (this.size.x / 2) &&
				mouseY > this.pos.y - (this.size.y / 2) &&
				mouseY < this.pos.y + (this.size.y / 2)) {
				this.isRollOver = true;
			} else {
				this.isRollOver = false;
			}
		} else {
			if (this.d <= this.r) {
				this.isRollOver = true;
			} else {
				this.isRollOver = false;
			}
		}
	}

	drag() {
		if (this.isDraggable) {
			this.pos.x = mouseX + this.offset.x;
			this.pos.y = mouseY + this.offset.y;
		}
	}

	sqr() {
		stroke(0);
		if (this.isDraggable) {
			fill('green');
		} else if (this.isRollOver) {
			fill('yellow');
		} else {
			fill('red');
		}
		rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
	}

	circ() {
		stroke(0);
		if (this.isDraggable) {
			fill(175, 200, 200);
		} else if (this.isRollOver) {
			fill(175, 100, 200);
		} else {
			fill(0, 175, 200);
		}
		ellipse(this.pos.x, this.pos.y, this.r);
	}
}