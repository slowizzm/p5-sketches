class Jumper {
	constructor() {
		this.pos = createVector(width>>1,50);
		this.vel = createVector();
		this.grav = 0.1;
	}

	update() {
		this.vel.y += this.grav; // vy = vy + gravity;
		this.pos.y += this.vel.y; // y = y + vy;
		this.pos.y = constrain(this.pos.y, -1000, 350);
		return this;
	}

	display() {
		fill(217);
		ellipse(this.pos.x,this.pos.y, 33, 33);
		return this;
	}

	run() {
		return this.update().display();
	}
}