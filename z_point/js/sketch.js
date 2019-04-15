let zPoint;

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	background(51);
	rectMode(CENTER);
	ellipseMode(CENTER);
	stroke(217);
	noFill();
	
	zPoint = new ZPoint();

	let btn_rev = createButton("Reverse");
	btn_rev.position(35, height * 0.05);
	btn_rev.mouseClicked(reverseDirection);
}

function draw() {
	zPoint.display();
}

function reverseDirection() {
	zPoint.isRev = !zPoint.isRev;
}