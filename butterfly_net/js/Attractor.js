class Attractor {
	constructor(_v) {
		this.pos = createVector(width*0.5,height*0.5);
		this.vel = createVector(_v,_v);
		this.acc = createVector();
	}
	
	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		
		return this;
	}
	
	edges() {
		if (this.pos.x <= width*0.5 -333 || this.pos.x >= width*0.5 + 333) {
			this.vel.x *= -1;
		}
		
		if (this.pos.y <= height*0.5 - 433 || this.pos.y >= height*0.5 + 433) {
			this.vel.y *= -1;
		}
		return this;
	}
	
	render() {
		return this.update().edges();
	}
}