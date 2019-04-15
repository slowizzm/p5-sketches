let front;
let back;

function setup() {
	createCanvas(window.innerWidth - 4, 400);
	noStroke();
}

function draw() {
	background(51);

	front = map(mouseX, 0, width, width / 2 - 333, width / 2 + 333);
	back = map(mouseX, 0, width, width / 2 - 133, width / 2 + 133);

	fill(143, 199, 227);
	rect(back, 100, 100, 250, 250);

	fill(255);
	beginShape();
	vertex(front + 100, 230);
	vertex(front + 74, 269);
	vertex(front + 100, 256);
	vertex(front + 132, 278);
	endShape();

	fill(3, 3, 14, 133);
	rect(0, 250, width, 200);
}