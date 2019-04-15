let izzms = [];
let NUM_IZZMS = 10;
let numIzzmSlider, lineLengthSlider;
let spring = 0.05;

function setup() {
	createCanvas(window.innerWidth-4, 400);
	background(100);
	ellipseMode(CENTER);

	//creates a slider to adjust the amount of particles
	numIzzmSlider = createSlider(2, 50, 0);
	numIzzmSlider.position(width * 0.005, height * 1.1);
	numIzzmSlider.style('width', '100px');

	//creates a <p> tag
	let numIzzmP = createP('count');
	//references the <p> tags class in order to style it
	numIzzmP.class('numIzzmP');
	numIzzmP.position(width * 0.23, height * 1.06);

	//creates a slider to adjust the min distance need to form a connection
	lineLengthSlider = createSlider(33, 300, 0);
	lineLengthSlider.position(width * 0.55, height * 1.1);
	lineLengthSlider.style('width', '100px');
	//creates a <p> tag
	let lenIzzmP = createP('distance');
	//references the <p> tags class in order to style it
	lenIzzmP.class('lenIzzmP');
	lenIzzmP.position(width * 0.77, height * 1.06);

	for (let i = 0; i < NUM_IZZMS; i++) {
		let p = new Izzm(13);
		izzms.push(p);
	}
}

function draw() {
	background(51);
	noFill();
	stroke(255);
	rect(2, 2, width - 4, height - 4);

	for (let i = 0; i < izzms.length; i++) {
		izzms[i].render(lineLengthSlider.value());
	}

	if (izzms.length < numIzzmSlider.value()) {
		izzms.push(new Izzm(13));
	} else if (izzms.length > numIzzmSlider.value()) {
		izzms.splice(0, 1);
	}
}

function mousePressed() {
	if (mouseX >= 4 && mouseX <= width - 4 && mouseY >= 4 && mouseY <= height - 4) {
		izzms.forEach(izzm => {
			izzm.vel.x = random(TWO_PI);
			izzm.vel.y = random(TWO_PI);
		})
	}
}