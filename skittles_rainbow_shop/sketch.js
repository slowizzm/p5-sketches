let redSkittles = 0, orangeSkittles = 0, yellowSkittles = 0, greenSkittles = 0, blueSkittles = 0, purpleSkittles = 0, totalSkittles = 0;
let skittleSize = 20;
let skittleDist = 0;

let skittles = [],
	skCol = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

let rainbow;

function setup() {
	createCanvas(640, 500);
	background(0);
	noStroke();
	ellipseMode(CENTER);
	for (let i = 0; i < 6; i++) {
		let s = new Skittles(width * 0.4, 95 + (i * 50), skittleSize, skCol[i]);
		skittles.push(s);
	}
	
	rainbow = new Rainbow();
}

function draw() {
	background(51);
	push()
	fill(217);
	text('Red Skittles: ' + redSkittles, 50, 100);
	text('Orange Skittles: ' + orangeSkittles, 50, 150);
	text('Yellow Skittles: ' + yellowSkittles, 50, 200);
	text('Green Skittles: ' + greenSkittles, 50, 250);
	text('Blue Skittles: ' + blueSkittles, 50, 300);
	text('Purple Skittles: ' + purpleSkittles, 50, 350);
	text('Total Skittles: ' + totalSkittles, 50, 400);
	pop();

	for (let i = 0; i < skittles.length; i++) {
		skittles[i].display();
	}
	
	rainbow.run();

	totalSkittles = redSkittles + orangeSkittles + yellowSkittles + greenSkittles + blueSkittles + purpleSkittles;
}

function mousePressed() {
	for (let i = 0; i < skittles.length; i++) {
		skittleDist = dist(mouseX, mouseY, skittles[i].pos.x, skittles[i].pos.y);

		if (skittleDist <= skittleSize && skittles[i].sc == 'red') {
			redSkittles++;
		} else if (skittleDist <= skittleSize && skittles[i].sc == 'orange') {
			orangeSkittles++;
		} else if (skittleDist <= skittleSize && skittles[i].sc == 'yellow') {
			yellowSkittles++;
		} else if (skittleDist <= skittleSize && skittles[i].sc == 'green') {
			greenSkittles++;
		} else if (skittleDist <= skittleSize && skittles[i].sc == 'blue') {
			blueSkittles++;
		} else if (skittleDist <= skittleSize && skittles[i].sc == 'purple') {
			purpleSkittles++;
		}
	}
}