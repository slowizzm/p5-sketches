let boxSz = 500;
let radius = 500;
let seekers = [];
let seeked;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	colorMode(HSB, 360, 100, 100, 100);
	for (let i = 0; i < 1; i++) {
		seekers[i] = new Seeker();
	}

	seeked = new Seeked(0, 0, 0, random(360), random(360), random(0.025, 0.035), 5);
}

function draw() {
	background(200, 20, 20);
	translate(0, 0, map(sin(frameCount * 0.0125), -1, 1, -boxSz, -1500));

	rotateY(frameCount * 0.002);

	ambientLight(20, 90, 82);
	directionalLight(350, 90, 95, 0, 0, -1);
	directionalLight(350, 90, 25, 1, 0, 0);
	directionalLight(50, 95, 100, 0, 1, 0);
	directionalLight(280, 100, 95, 0, -1, 0);

	push();
	pointLight(200, 100, 10, 0, 0, 0);
	pop();

	for (let i = 0; i < seekers.length; i++) {
		seekers[i].update();
		seekers[i].seek(createVector(seeked.pos.x, seeked.pos.y, seeked.pos.z));
		seekers[i].display();

		//seekers[i].seek(createVector(mouseX, mouseY));  
	}

	seeked.render();
	drawBox();
}