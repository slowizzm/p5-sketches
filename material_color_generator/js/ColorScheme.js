class ColorScheme {
	constructor(_i, _col) {
		this.pos = createVector(_i, 0);
		this.size = createVector(100, 500);
		this.panels = 100;
		this.rnd = int(random(_col));
	}

	display() {
		if (colorData) {
			for (let i = 0; i < colorData.colors.length; i++) {
				fill(colorData.colors[this.rnd]);
				rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
			}
		}
	}

	onHover() {
		if (colorData) {
			for (let i = 0; i < colorData.colors.length; i++) {
				if (mouseX >= this.pos.x && mouseX <= this.pos.x + this.size.x && mouseY >= 0 && mouseY <= height) {
					hoveredColor.style('color: white; font-family: Source Code Pro, monospace;');
					hoveredColor.html(colorData.colors[this.rnd]);
				}
			}
		}
	}

	run() {
		this.display();
		this.onHover();
	}
}