let inc = 20;
let countX = 0;
let countY = 0;
let amp = 0.0;
let xoff = 0.0;
let yoff = 0.0;
let zoff = 0.0;


let pSphere = [];

function setup() {
	createCanvas(windowWidth * 0.95, windowHeight * 0.95, WEBGL);
	background(0);
	for (var i = 0; i < 360; i += inc) {
		countY = 0;
		pSphere[countX] = [];
		for (var j = 0; j < 360; j += inc) {
			let theta = createVector(i,j);
			pSphere[countX][countY] = new PSphere(theta);
			countY += 1;
		}
		countX += 1;
	}
}

function draw() {
	background(51);
	updateSphere();
}