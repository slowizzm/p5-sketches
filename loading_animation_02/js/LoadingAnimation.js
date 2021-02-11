class Ldng {
	constructor(_pos) {
		this.pos = createVector(_pos.x, _pos.y);
		this.angle = 0;
		this.alpha = 1;
	}

	update() {
		if (this.angle >= 6.25) {
			this.angle = 0;
			this.alpha = 1;
			background(0, 0, 10);
		}

		this.angle += 0.058;
		this.alpha -= 0.006;
		return this;
	}

	display() {
		push();
		stroke(260,90,100,this.alpha);
		translate(this.pos.x, this.pos.y)
		rotate(this.angle);
		fill(200, 60, 100, this.alpha);
		ellipse(33, -100, 13 - (this.alpha * 13));
		pop();

		return this;
	}

	render() {
		this.update().display();
	}
}