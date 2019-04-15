let izzms = [];
let NUM_IZZMS = 67;
let spring = 0.05;

function setup() {
	createCanvas(window.innerWidth-4, 400);
	background(100);

	for (let i = 0; i < NUM_IZZMS; i++) {
		let p = new Izzm(sin(random(360)),sin(random(-360)),11);
		izzms.push(p);
	}
}

function draw() {
	background(51);
	noFill();

	for (let i = 0; i < izzms.length; i++) {
		izzms[i].run(113, izzms, i);
	}
}

function mousePressed() {
	if (mouseX >= 4 && mouseX <= width - 4 && mouseY >= 4 && mouseY <= height - 4) {
		izzms.forEach(izzm => {
			izzm.vel.x = random(-TWO_PI,TWO_PI);
			izzm.vel.y = random(-TWO_PI,TWO_PI);
		})
	}
}