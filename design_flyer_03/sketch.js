//wip

function setup() {
	createCanvas(375, 667);
	rectMode(CENTER);
}

function draw() {
	background(217);
	for (let x = 30; x < width; x += 100) {
		for (let y = 67; y < height * 0.7; y += x) {
			push();
			fill(3, 13, 9);
			rect(x, y, 7, 67, 2);
			pop();
		}
	}

	textAlign(RIGHT,CENTER);
	textStyle(BOLD);
	textSize(50);
	textFont('Avenir');
	text('L O R E M', width * 0.95, height * 0.8);
	textSize(33);
	textAlign(RIGHT,CENTER);
	text("IPSUM", width * 0.95, height * 0.86);
}