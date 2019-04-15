let scrollY = 0;
let ySpeed = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);

}

function draw() {
	background(51);
	scrollY -= ySpeed;
	ySpeed /= 1.05;
	
	for (let i = height - (scrollY % 100); i > 0; i -= 100) {
		colorMode(RGB, 255, 255, 255, 255);
		strokeWeight(2);
		stroke(255, 255, 255, 255);
		line(0, i, width, i);
	}
}

function mouseWheel(event) {
	ySpeed = event.delta/13;
}