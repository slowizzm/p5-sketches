class Skittles {
	constructor(_x,_y, _r, _sCol) {
		this.pos = createVector(_x,_y);
		this.r = _r;
		this.currentColor = _sCol;
		this.sc = 'skittleColor';
		this.col = _sCol;
	}

	display() {
		switch (this.currentColor) {
			case 'red':
				this.sc = 'red';
				break;
			case 'orange':
				this.sc = 'orange';
				break;
			case 'yellow':
				this.sc = 'yellow';
				break;
			case 'green':
				this.sc = 'green';
				break;
			case 'blue':
				this.sc = 'blue';
				break;
			case 'purple':
				this.sc = 'purple';
				break;
		}
		push();
		noStroke();
		fill(this.col);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
		pop();
	}
}