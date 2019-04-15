class Header {
	constructor() {
		this.isHover = false;
	}

	display(_x, _y, _char, _size) {
		this.pos = createVector(_x, _y);
		this.size = _size;
		push();
		if (this.isHover) {
			fill(217);
		} else {
			fill(237, 196, 68);
		}
		textStyle();
		textAlign(CENTER, CENTER);
		textSize(this.size);
		textFont('Avenir');
		text(_char, this.pos.x, this.pos.y);
		pop();

		push();
		rectMode(CENTER);
		if (this.state == 0) {
			fill(0);
			rect(nav[0].pos.x, this.pos.y + 13, 67, 1);
		} else if (this.state == 1) {
			fill(0);
			rect(nav[1].pos.x, this.pos.y + 13, 67, 1);
		} else if (this.state == 2) {
			fill(0);
			rect(nav[2].pos.x, this.pos.y + 13, 67, 1);
		}
		pop();
	}

	onHover() {
		if (mouseX >= this.pos.x - ((this.size / 2) + 20) && mouseX <= this.pos.x + ((this.size / 2) + 20) && mouseY >= this.pos.y - ((this.size / 2) + 10) && mouseY <= this.pos.y + ((this.size / 2) + 10)) {
			this.isHover = true;
		} else {
			this.isHover = false;
		}
	}

	run(_x, _y, _char, _size) {
		this.display(_x, _y, _char, _size);
		this.onHover();
	}
}