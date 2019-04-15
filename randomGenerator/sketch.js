const izzm = {
	zero: 'red',
	one: 'orange',
	two: 'yellow',
	three: 'green',
	four: 'blue',
	five: 'indigo',
	six: 'violet'
}

let randState;

function setup() {
	let c = createCanvas(400, 400);
	background(51);
	c.mouseClicked(RandNum);
}

function draw() {
	background(220);

	switch (randState) {
		case 0:
			background(izzm.zero);
			push();
			fill(217);
			textAlign(CENTER);
			textFont('Source Code Pro');
			textSize(42);
			text(izzm.zero, width * 0.5, height * 0.5);
			pop();
			break;
		case 1:
			background(izzm.one);
			push();
			fill(217);
			textAlign(CENTER);
			textFont('Source Code Pro');
			textSize(42);
			text(izzm.one, width * 0.5, height * 0.5);
			pop();
			break;
		case 2:
			background(izzm.two);
			push();
			fill(217);
			textAlign(CENTER);
			textFont('Source Code Pro');
			textSize(42);
			text(izzm.two, width * 0.5, height * 0.5);
			pop();
			break;
		case 3:
			background(izzm.three);
			push();
			fill(217);
			textAlign(CENTER);
			textFont('Source Code Pro');
			textSize(42);
			text(izzm.three, width * 0.5, height * 0.5);
			pop();
			break;
		case 4:
			background(izzm.four);
			push();
			fill(217);
			textAlign(CENTER);
			textFont('Source Code Pro');
			textSize(42);
			text(izzm.four, width * 0.5, height * 0.5);
			pop();
			break;
		case 5:
			background(izzm.five);
			push();
			fill(217);
			textAlign(CENTER);
			textFont('Source Code Pro');
			textSize(42);
			text(izzm.five, width * 0.5, height * 0.5);
			pop();
			break;
		case 6:
			background(izzm.six);
			push();
			fill(217);
			textAlign(CENTER);
			textFont('Source Code Pro');
			textSize(42);
			text(izzm.six, width * 0.5, height * 0.5);
			pop();
			break;
		default:
			background(3, 13, 9);
			push();
			fill(217);
			textAlign(CENTER);
			textFont('Source Code Pro');
			textSize(42);
			text('Click Me', width * 0.5, height * 0.5);
			pop();
			break;
	}
}

function RandNum() {
	randState = floor(random(7));
}