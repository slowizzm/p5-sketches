let expElt;
let bg;

function setup() {
	createCanvas(700, 700);
	textAlign(CENTER, CENTER);
	rectMode(CENTER);

	expElt = new ExpandElt(width >> 1, height >> 1, 0.5, 50);

	bg = createVector(100, 200, 200);
}

function draw() {
	background(0);
	fill(bg.x, bg.y, bg.z);
	rect(width >> 1, height, width, height);
	expElt.render();
}

function mouseClicked() {
	if (expElt.rollOver(expElt.pos.x, expElt.pos.y, expElt.res.x, expElt.res.y)) {
		bg.x = random(100, 200);
		bg.y = random(100, 150);
		bg.z = random(200, 230);
	}
}

class ExpandElt {
	constructor(_x, _y, _scl, _max) {
		this.pos = createVector(_x, _y);
		this.scl = _scl;
		this.max = _max;
		this.res = createVector(130, 30);
	}

	update() {
		if (this.rollOver(this.pos.x, this.pos.y, this.res.x, this.res.y)) {
			this.scl += 1.5;
		} else {
			this.scl -= 1.5;
		}

		if (this.scl <= 0.0) {
			this.scl = 0.0;
		}

		if (this.scl >= 13) {
			this.scl = 13;
		}

		return this;
	}

	display() {
		push();
		translate(this.pos.x, this.pos.y);
		strokeWeight(2);
		stroke(255);
		noFill();
		rect(0, 0, this.res.x + this.scl, this.res.y + this.scl);

		fill(255);
		noStroke();
		textFont('Avenir');
		textSize(13 + (this.scl * 0.1));
		text('Expanding Element', 0, 0);
		pop();

		//ellipse(this.pos.x,this.pos.y,33);
		return this;
	}

	rollOver(_x, _y, _w, _h) {
		if (mouseX > _x - (_w >> 1) && mouseX < _x + (_w >> 1) && mouseY > _y - (_h >> 1) && mouseY < _y + (_h >> 1)) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		return this.update().display();
	}
}