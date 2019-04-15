class Izzm {
	constructor(_vx,_vy,_r) {
		this.pos = createVector(width*0.5,height*0.5);
		this.vel = createVector(_vx,_vy);
		this.acc = createVector(_vx/333,_vy/333);
		this.r = _r;
		this.vel.setMag(5);
		this.switch = false;
		this.lineDist = 0;
		rectMode(CENTER);
	}

	connect(_len) {
		this.lineDist = _len;
		for (let i = 0; i < izzms.length; i++) {
			let d = dist(this.pos.x, this.pos.y, izzms[i].pos.x, izzms[i].pos.y);
			if (d < this.lineDist) {
				if (this.switch == false) {
					this.switch = true;
				}
				push();
				blendMode(ADD);
				stroke(this.pos.x,this.pos.y,this.vel.x,this.vel.y*3);
				strokeWeight(this.pos.y/33);
				bezier(this.pos.x, this.pos.y, izzms[i].pos.x, izzms[i].pos.y,this.pos.x, this.pos.y, izzms[i].pos.x, this.pos.y);
				pop();
			} else {
				if (this.switch == true)
					this.switch = false;
			}
		}
	}
	
	collision() {
		for (let i = 0; i < izzms.length; i++) {
			let d = dist(this.pos.x, this.pos.y, izzms[i].pos.x, izzms[i].pos.y);
			if (d >= this.lineDist - 0.3 && d <= this.lineDist + 0.3) {
				this.vel.mult(-0.9);
			}
		}
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	edges() {
		let d = dist(this.pos.x, this.pos.y, width*0.5,height*0.5);
		if (d <= 200) {
			this.pos.x = random(width*0.5-133,width*0.5+133);
		}

		if (d <= 200) {
			this.pos.y = random(height*0.5-133,height*0.5+133);
		}

	}

	display() {
		push();
		noStroke();
		blendMode(ADD);
		fill(this.pos.x,this.pos.y,this.vel.x,this.vel.y*3);
		ellipse(this.pos.x, this.pos.y, this.vel.x);
		pop();
	}

	run(_len) {
		this.update();
		//this.collision();
		this.edges();
		this.connect(_len);
		this.display();
	}
}