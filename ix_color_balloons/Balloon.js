function Balloon(_x, _y, _size, _c) {

	this.pos = createVector(_x, _y);
	this.vel = createVector(0, -2);
	this.acc = createVector(0, 0);
	this.size = _size;
	this.maxspeed = 33;
	this.maxforce = 0.01;
	this.c = _c;

	this.update = function(_v) {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
		this.vel.mult(_v);
	}

	this.seek = function(target) {
		let desired = p5.Vector.sub(target, this.pos);
		desired.setMag(this.maxspeed);
		let steer = p5.Vector.sub(desired, this.vel);
		steer.limit(this.maxforce);

		if (desired <= this.size) {
			this.vel.mult(0);
		} else {
			this.vel.mult(1);
		}

		this.applyForce(steer);
	}

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.arrive = function(target) {
		let desired = p5.Vector.sub(target, this.pos);
		let d = desired.mag();

		if (d < height) {
			let m = map(d, 0, height, 0, this.maxspeed);
			desired.setMag(m);
		} else {
			desired.setMag(this.maxforce);
		}

		let steer = p5.Vector.sub(desired, this.vel);
		steer.limit(this.maxspeed);

		if (desired <= this.size) {
			this.vel.mult(0);
		} else {
			this.vel.mult(1);
		}

		this.applyForce(steer);
	}

	this.display = function(_l) {
		ellipse(CENTER);
		fill(cols[this.c]);
		ellipse(this.pos.x + 5, this.pos.y, this.size);
		push();
		fill(255);
		textSize(42);
		textAlign(CENTER);
		textStyle(BOLD);
		text(circLetters[_l], this.pos.x + 5, this.pos.y + 13);
		pop();
		
		push();
		beginShape();
		vertex(this.pos.x+7,this.pos.y+36);
		vertex(this.pos.x+9,this.pos.y+39);
		vertex(this.pos.x+11,this.pos.y+42);
		vertex(this.pos.x+7,this.pos.y+42);
		endShape(CLOSE);
		pop();
	}

	this.edges = function() {
		if (this.pos.x <= 0 || this.pos.x >= width) {
			this.vel.x *= -1;
		}
		if (this.pos.y <= 0 || this.pos.y >= height) {
			this.pos.y = mouseY;
			this.vel.y *= -1;
		}
	}
}