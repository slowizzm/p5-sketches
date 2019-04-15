let particles = [];

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
}

function draw() {
	background(51);
	for (let i = 0; i < particles.length; i++) {
		particles[i].run();
	}

	if (particles.length >= 3) {
		particles.splice(0, 2);
	}
}

function mouseDragged() {
	for (let i = 0; i < 33; i++) {
		let p = new Particle(mouseX, mouseY);
		particles.push(p);
	}

	if (particles.length >= 32) {
		particles.splice(0, 3);
	}
}