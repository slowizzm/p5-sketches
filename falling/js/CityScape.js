class CityScape {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
		this.size = 333;
	}

	display() {
		push();
		translate(this.pos.x, this.pos.y);
		fill(255);
		ellipse(0, 0, this.size, this.size);
		pop();
		image(img_city,width>>1,height*0.7);
	}
}