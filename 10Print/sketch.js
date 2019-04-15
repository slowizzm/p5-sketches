let x = 0;
let y = 0;
let spacing = 15;

function setup() {
	createCanvas(400, 400);
	background(0);
	frameRate(12);

}

function draw() {
	if (random(1) < 0.5) {
		if (x > width * 0.5) {
			stroke(map(x, width * 0.6, width, 0, 255));
		} else {
			stroke(map(x, 0, width * 0.6, 255, 0));
		}
		line(x, y, x + spacing, y + spacing);
	} else {
		if (x > width * 0.5) {
			stroke(map(x, width * 0.6, width, 0, 255));
		} else {
			stroke(map(x, 0, width * 0.6, 255, 0));
		}
		line(x, y + spacing, x + spacing, y);
	}
	x = x + spacing;
	if (x > width) {
		x = 0;
		y = y + spacing;
	}

	//if (y > height) { x = 0; y = 0; spacing-=15 }

	push();
	fill(0);
	noStroke();
	textSize(100);
	textAlign(CENTER, CENTER);
	textStyle(BOLD);
	textFont('Source Code Proe');
	//text('10 Print',width*0.5,height*0.5)
	pop();
}