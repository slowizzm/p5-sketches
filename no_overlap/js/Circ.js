class Circ {
	constructor(_x, _y, _r) {
		this.pos = createVector(_x, _y);
		this.r = _r;
	}

	render() {
		fill(255, 0, 175, 100);
		noStroke();
		ellipse(this.pos.x, this.pos.y, this.r);
	}
}