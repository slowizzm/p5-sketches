let particles = 1024;
let c = 0;
let x = [particles];
let y = [particles];
let vx = [particles];
let vy = [particles];



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(217);
}


function draw() {
	for (let i = 0; i < c; i++) {
		let ax = 0,
			ay = 0;

		for (let j = 0; j < c; j++) {
			if (i != j) {
				dx = x[i] - x[j];
				dy = y[i] - y[j];
				let d = sqrt(dx * dx + dy * dy);
				if (d < 1) d = 1;
				let common = cos(d) / d;
				ax += common * dx;
				ay += common * dy;
			}
		}

		vx[i] += ax * 0.001;
		vy[i] += ay * 0.001;
	}


	for (let i = 0; i < c; i++) {
		x[i] += vx[i];
		y[i] += vy[i];
	}

	for (let i = 0; i < c; i++) {
		set(x[i], y[i], 0);
	}
	updatePixels();
}

function addNewParticle() {
	x[c] = mouseX;
	y[c] = mouseY;
	vx[c] = 0.01;
	vy[c] = 0;
	++c;
	c = c % particles;
}

function mouseDragged() {
	addNewParticle();
}