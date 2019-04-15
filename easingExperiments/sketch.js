let pulseRate = 60,
	sec;
let currentPulseRate;
let pulseProg, easingIn, easingOut, jitters;

let izzm;

function setup() {
	createCanvas(400, 400);

	izzm = new Pulse(width * 0.5, height * 0.5, 33);
}

function draw() {
	background(217);
	sec = second();
	izzm.run();
}

class Pulse {
	constructor(_x, _y, _d) {
		this.pos = createVector(_x, _y);
		this.d = _d;
	}

	update() {
		currentPulseRate = frameCount % pulseRate;
		pulseProg = currentPulseRate / pulseRate;
		easingIn = -pow(pulseProg - 1, 4);
		easingOut = -sq(pulseProg - 1) + 3;
		jitters = -pow(pulseProg - 1, 13) + 1;
		this.pulse = this.d * (1.5 - easingIn);
	}

	shrink() {
		noStroke();
		fill(3, 13, 9);
		ellipse(this.pos.x, this.pos.y, this.pulse);
		fill(3, 13, 9, 100);
		ellipse(this.pos.x + 2, this.pos.y + 2, this.pulse);
	}

	expand() {
		this.ripple = this.d * 1.5 * easingOut;
		stroke(3, 13, 9);
		strokeWeight(this.d * 0.2 * (1 - easingOut));
		noFill();
		ellipse(this.pos.x, this.pos.y, this.ripple);
		stroke(3, 13, 9, 100);
		ellipse(this.pos.x + 2, this.pos.y + 2, this.ripple);
	}

	jitter() {
		this.disp = this.d * 0.5 * (1 - jitters);
		this.s = this.d * 0.3;
		noStroke();
		fill(217);
		ellipse(
			this.pos.x + random(-this.disp, this.disp),
			this.pos.y + random(-this.disp, this.disp),
			this.s,
			this.s
		);
	}

	spin() {
		rectMode(CENTER);
		let theta = PI * easingIn;
		noStroke();
		push();
		fill(3, 13, 9);
		translate(this.pos.x, this.pos.y);
		rotate(theta);
		rect(0, 0, this.d * 3, this.d * 0.15);
		rect(0, 0, this.d * 0.15, this.d * 3);
		fill(3, 13, 9, 100);
		rect(2, 2, this.d * 3, this.d * 0.15);
		rect(2, 2, this.d * 0.15, this.d * 3);
		pop();
		push();
		fill(3, 13, 9);
		translate(this.pos.x, this.pos.y);
		rotate(theta * 2);
		rect(0, 0, this.d * 3, this.d * 0.15);
		rect(0, 0, this.d * 0.15, this.d * 3);
		fill(3, 13, 9, 100);
		rect(2, 2, this.d * 3, this.d * 0.15);
		rect(2, 2, this.d * 0.15, this.d * 3);
		pop();
		push();
		fill(3, 13, 9);
		translate(this.pos.x, this.pos.y);
		rotate(theta * 3);
		rect(0, 0, this.d * 3, this.d * 0.15);
		rect(0, 0, this.d * 0.15, this.d * 3);
		fill(3, 13, 9, 100);
		rect(2, 2, this.d * 3, this.d * 0.15);
		rect(2, 2, this.d * 0.15, this.d * 3);
		pop();
	}

	run() {
		this.update();
		this.spin();
		this.shrink();
		this.expand();
		this.jitter();
	}
}