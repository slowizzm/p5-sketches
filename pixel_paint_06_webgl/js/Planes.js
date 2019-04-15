class Planes {
	constructor(_pos, _z, _r, _col) {
		this.pos = createVector(_pos.x, _pos.y, _z);
		this.r = _r;
		this.col = _col;
	}

	display(_p) {
		push();
		fill(_p.col);
		translate(_p.pos.x - width / 2, _p.pos.y - height / 2, _p.pos.z);
		plane(_p.r, _p.r);
		pop();

		return this;
	}

	render(_p) {
		return this.display(_p);
	}
}