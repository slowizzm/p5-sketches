let res;
let x, y;
let bnc, spd;

function setup() {
	createCanvas(windowWidth * 0.95, windowHeight * 0.95);
	noCursor();
	res = 20;
	spd = 10;
	x = width / res;
	y = height / res;
	bnc = 0;
}

function draw() {
	background(51);
	noStroke();
	push();
	translate(0, 0);
	for (let i = width*0.015; i < x - width*0.015; i++) {
		for (let j = 0; j < y-height*0.015; j++) {
			rect(i * res + spd * (sin((i / x) * TWO_PI * 3)), j * res + spd * (cos((j / y) * TWO_PI * 3 + (bnc % TWO_PI))), j, 7);
			bnc += 0.00005;
		}
	}
	pop();
}