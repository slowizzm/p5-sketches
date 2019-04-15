class Nav {
	constructor() {
		this.isHover = false;
		this.state;
	}

	display(_x, _y, _char, _size) {
		this.pos = createVector(_x, _y);
		this.size = _size;
		push();
		if (dropDown.isDropped) {
			fill(0);
		} else {
			fill(217);
		}
		textStyle(BOLD);
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

	dropped() {
		if (dropDown.isDropped) {
			this.navState();
		}
	}

	run(_x, _y, _char, _size) {
		this.display(_x, _y, _char, _size);
		this.onHover();
		this.dropped();
	}

	navState() {
		if (nav[0].isHover) {
			this.state = 0;
		}
		if (nav[1].isHover) {
			this.state = 1;
		}
		if (nav[2].isHover) {
			this.state = 2;
		}


		switch (this.state) {
			case 0:
				push();
				fill(33, map(this.pos.y, 0, this.pos.y, 0, 255));
				textStyle(BOLD);
				textAlign(CENTER, CENTER);
				textSize(this.size);
				textFont('Avenir');
				text('nav state one text', dropDown.pos.x, dropDown.pos.y - 200);
				pop();
				break;
			case 1:
				push();
				fill(33, map(this.pos.y, 0, this.pos.y, 0, 255));
				textStyle(BOLD);
				textAlign(CENTER, CENTER);
				textSize(this.size);
				textFont('Avenir');
				text('nav state two text', dropDown.pos.x, dropDown.pos.y - 200);
				pop();
				break;
			case 2:
				push();
				fill(33, map(this.pos.y, 0, this.pos.y, 0, 255));
				textStyle(BOLD);
				textAlign(CENTER, CENTER);
				textSize(this.size);
				textFont('Avenir');
				text('nav state three text', dropDown.pos.x, dropDown.pos.y - 200);
				pop();
				break;
			default:
				break;
		}
	}
}