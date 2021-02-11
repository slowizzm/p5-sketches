let a = 0,
	b = 0,
	c = 0;
let timeStarted = 0;
let spd = 0.1;

function setup() {
	createCanvas(600, 600);
	noFill();
}

function draw() {
	background(255);

	let timeLapsed = millis() - timeStarted;
	// strokeWeight(2 - a / 5);

	if (timeLapsed >= 3000) {
		a += spd;
		translate(-a * 325, -a * 120);
		scale(1 + a);
	}

	if (timeLapsed >= 4000) {
		a = 5.9;
	}

	if (timeLapsed >= 5000) {
		b += spd;
		translate(-b * 325, -b * 154);
		scale(b + 1);
	}

	if (timeLapsed >= 6000) {
		b = 6;
	}

	if (timeLapsed >= 7000) {
		c += spd;
		translate(-c * 327, -c * 152);
		scale(c + 1);
		// strokeWeight(0.1 + (c / 4));
	}

	if (timeLapsed >= 8000) {
		c = 6;
	}

	ellipse(325, 150, 133);

	translate(300, 130);
	scale(1 / 12);

	rect(300, 250, 33, 33);

	translate(307.08, 254.05);
	scale(1 / 24);

	ellipse(325, 150, 109);
  
  
  // strokeWeight(1);
  rect(325, 151, 2, 2);

	if (timeLapsed >= 9000) {
		a = 0;
		b = 0;
		c = 0;
		timeStarted = millis();
	}
}