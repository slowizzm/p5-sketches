let izzms = [],
	NUM_IZZMS = 3;

function setup() {
	createCanvas(400, 400);

	for (let i = 0; i < NUM_IZZMS; i++) {
		let izz = new Izzm((i + 1) * 33, height * 0.2, 33, random(100, 255), random(100, 255), random(200, 255));
		izzms.push(izz);
	}
}

function draw() {
	background(220);
	translate(width*0.3,0);
	for (let i = 0; i < izzms.length; i++) {
		izzms[i].run();
	}

	for (let izzm of izzms) {
		push();
		translate(0, 100);
		izzm.run();
		pop();
	}

	izzms.forEach(izzm => {
		push();
		translate(0, 200);
			izzm.run();
		pop();
		})
	}

	class Izzm {
		constructor(_x, _y, _s, _r, _g, _b) {
			this.pos = createVector(_x, _y);
			this.vel = createVector();
			this.acc = createVector();

			this.s = _s;
			this.c = color(_r, _g, _b);
		}

		update() {
			this.vel.add(this.acc);
			this.pos.add(this.vel);
		}

		display() {
			push();
			fill(this.c);
			rect(this.pos.x, this.pos.y, this.s, this.s);
			pop();
		}

		run() {
			this.update();
			this.display();
		}
	}