class ElasticMesh {
	constructor(_pos) {
		this.pos = createVector(_pos.x, _pos.y);
		this.vel = createVector();
		this.start = createVector(_pos.x, _pos.y);
		this.damping = 0.83;
		this.springMult = 0.03;
		this.pushMult = 1;
		this.d = 3;
	}

	update() {
		let diff = createVector((mouseX - offset.x) - this.pos.x, (mouseY - offset.y) - this.pos.y);
		let dist = sqrt(diff.x * diff.x + diff.y * diff.y);
		let diffNorm = createVector(diff.x / dist, diff.y / dist);
		if (dist < pushRadius) {
			let force = (1 - dist / pushRadius) * this.pushMult;
			this.vel.x -= diffNorm.x * force;
			this.vel.y -= diffNorm.y * force;
		}
		let springDiff = createVector(this.start.x - this.pos.x, this.start.y - this.pos.y);
		let springDist = sqrt(springDiff.x * springDiff.x + springDiff.y * springDiff.y);
		if (springDist > 0) {
			let normSpringX = springDiff.x / springDist;
			let normSpringY = springDiff.y / springDist;
			this.vel.x += normSpringX * (springDist * this.springMult);
			this.vel.y += normSpringY * (springDist * this.springMult);
		}

		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		this.vel.x *= this.damping;
		this.vel.y *= this.damping;

		return this;
	}

	display() {
		push();
		// fill(217,33);
		// stroke(33);
		// strokeWeight(3);
		ambientMaterial(67);
		pointLight(255,255,255, mouseX-400,mouseY-400,0);
		translate(this.pos.x, this.pos.y, 33);
		sphere(3);
		pop();

		return this;
	}

	run() {
		return this.update().display();
	}
}