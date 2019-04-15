let boxSz = 250;
let numSpheres = 300;
let x = [];
let y = [];
let z = [];
let t = 0.0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	colorMode(HSB, 360, 100, 100, 100);

	for (let i = 0; i < numSpheres; i++) {
		x[i] = random(-boxSz, boxSz);
		y[i] = random(-boxSz, boxSz);
		z[i] = random(-boxSz, boxSz);
	}
}

function draw() {
	background(300, 50, 20);
	translate(0, 0, -500);
	rotateY(frameCount * 0.001);

	ambientLight(360, 10, 10);
	directionalLight(150, 90, 95, 0, 0, -1);
	directionalLight(300, 1, 1, 1, 0, 0);
	directionalLight(300, 2, 2, 0, 1, 0);
	directionalLight(20, 100, 95, 0, -1, 0);

	push();
	pointLight(100, 100, 100, 0, 0, 0);
	pop();

	for (let i = 0; i < numSpheres; i++) {
		push();
		translate(x[i], y[i], z[i]);
		specularMaterial(355, 10, 100);
		sphere((boxSz * noise(333) / i), 25);
		pop();
	}

}