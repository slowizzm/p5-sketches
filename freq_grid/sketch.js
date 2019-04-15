let sqrs = [];

function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);

	for (let x = 90; x < width - 90; x += 60) {
		for (let y = 90; y < height - 90; y += 60) {
			let s = new Sqr(x, y, 33);
			s.init();
			sqrs.push(s);
		}
	}
}

function draw() {
	background(51);

	for (let i = 0; i < sqrs.length; i++) {
		sqrs[i].run();
	}
}

function mousePressed() {
	for (let i = 0; i < sqrs.length; i++) {
		if (mouseX > sqrs[i].pos.x - (sqrs[i].size / 2) &&
			mouseX < sqrs[i].pos.x + (sqrs[i].size / 2) &&
			mouseY > sqrs[i].pos.y - (sqrs[i].size / 2) &&
			mouseY < sqrs[i].pos.y + (sqrs[i].size / 2)) {
			sqrs[i].isOn = !sqrs[i].isOn;
		}
	}
}

function mouseReleased() {
	for (let i = 0; i < sqrs.length; i++) {
		sqrs[i].isOn = false;
	}
}

class Sqr {
	constructor(_x, _y, _s) {
		this.pos = createVector(_x, _y);
		this.size = _s;
		this.isOn = false;
	}

	audio() {
		this.env = new p5.Envelope();
		this.env.setADSR(0.0001, 0.005, 1, 0.05);

		this.osc = new p5.SinOsc();
		this.osc.amp(0);
		this.osc.start();
		this.osc.freq(this.freq);
		this.osc.amp(this.env);
	}

	playAudio() {
		if (this.isOn) {
			this.osc.freq(map((this.pos.x * this.pos.y) / 15, 540, 4860, 440, 200));
			this.osc.amp(0.3, 0.2);
		} else if (!this.isOn) {
			this.osc.freq(0);
		}
	}

	display() {
		push();
		if (this.isOn) {
			fill(133, 200, 255);
			rect(this.pos.x, this.pos.y, this.size, this.size);
		} else {
			fill(217);
			rect(this.pos.x, this.pos.y, this.size, this.size);
		}
		pop();
	}

	init() {
		this.audio();
	}

	run() {
		this.playAudio();
		this.display();
	}
}