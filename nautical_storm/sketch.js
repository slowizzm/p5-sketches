let drops = [];
let horizon;
let c1, c2;

function preload() {}

function setup() {
	createCanvas(600, 600);
	noStroke();
	smooth();
	background(5, 5, 50);
	frameRate(60);
	//noCursor();
	for (let i = 0; i < 93; i++) {
		let p = new RainDrop();
		drops.push(p);
	}

	horizon = new Horizon();
	c1 = color(0);
	c2 = color(51, 3);
	c3 = color(3, 13, 133, 3);
	c4 = color(255);
}

function draw() {
	background(5, 5, 50);
	atmoshpere(0, 0, width, height, c1, c2);
	push();
	translate(width * 0.05, height * 0.03);
	scale(.9);
	horizon.mountains();
	pop();
	for (let i = 0; i < 93; i++) {
		if (!drops[i].isEvaporated) {
			drops[i].update();
			drops[i].display();
		} else {
			if (int(random(3)) == 0) {
				drops[i].setup(int(random(width * 0.25, width * 0.75), 0.6));
			}
		}
	}
	clouds(0, 0, width, height, c1, c2);
	horizon.stars();
}

function atmoshpere(x, y, w, h, c1, c2) {
	noFill();
	for (let i = y; i <= y + h; i++) {
		let inter = map(i, y, y + h, -1, 3);
		let c = lerpColor(c1, c2, inter);
		stroke(c);
		line(x, i, x + w, i);
	}
}

function clouds(x, y, w, h, c1, c2) {
	noFill();
	for (let i = y; i <= y + h; i++) {
		let inter = map(i, y, y + h, -1, 6);
		let c = lerpColor(c1, c2, inter);
		stroke(c);
		line(x, i, x + w, i);
	}
}



// function windowResized() {
// 	resizeCanvas(windowWidth, windowHeight);
// }