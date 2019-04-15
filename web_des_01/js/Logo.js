class Logo {
	constructor() {
		this.pos = createVector(width * 0.23, height * 0.15);
	}

	display() {
		push();
		fill(217);
		textStyle(BOLD);
		textAlign(CENTER, CENTER);
		textSize(67);
		textFont('Avenir');
		text('LOGO', this.pos.x, this.pos.y);
		pop();
	}
}