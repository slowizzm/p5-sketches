class ZPoint {
	constructor() {
		this.isRev = false;
		this.anim =0;
		this.num = 13;
		this.frames = 180;
	}

	display() {
		push();
		fill(3, 9, 13);
		noStroke();
		rect(width * 0.5, height * 0.5, 600, 600);
		pop();


		push();
		translate(width * 0.5, height * 0.5);
		for (let i = 0; i < this.num; i++) {
			let sz = i * 23;
			let sw = map(sin(this.anim + TWO_PI / this.num * i), -1, 1, 1, 15);
			strokeWeight(sw / 13);
			if (sw >= 5) {
				ellipse(0, 0, sz);
			} else {
				rect(0, 0, sz, sz);
			}
		}
		if (this.isRev) {
			this.anim += TWO_PI / -this.frames;
		} else {
			this.anim += TWO_PI / this.frames;
		}
	}
}