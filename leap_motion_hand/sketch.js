let izzm;

let handX = 100,
	handY = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);

	let pos = createVector(width * 0.5, height * 0.5);
	let vel = createVector(0, 0);

	izzm = new Izzm(pos, vel);
}

Leap.loop(function(frame) {
	if (frame.hands.length > 0) {
		let hand = frame.hands[0];
		handX = hand.stabilizedPalmPosition[0];
		handY = hand.stabilizedPalmPosition[1];
	}
});

function draw() {
	background(51);
	izzm.display();
	izzm.pos.x = map(round(handX), 50, 300, width, 0);
	izzm.pos.y = map(round(handY), 50, 300, height, 0);
}

class Izzm {
	constructor(_pos, _vel) {
		this.pos = _pos;
		this.vel = _vel;
	}
	display() {
		push();
		translate(this.pos.x, this.pos.y);
		noStroke();
		fill(217);
		ellipse(0, 0, 33, 33);
		pop();
	}
}