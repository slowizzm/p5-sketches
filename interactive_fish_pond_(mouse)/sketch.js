//fish code borrowed from Sean Frosali

let light;
let fish = [];
const NUM_FISH = 11;
let xoff = 0;

function setup() {
	createCanvas(960, 540);
	noCursor();
	light = new Light();

	for (var i = 0; i < NUM_FISH; i++) {
		fish[i] = new Fish(random(width), random(height), random(0.3, 0.5));
	}
}

function draw() {
	background(33);

	for (let i = 0; i < fish.length; i++) {

		let x = map(noise(i + xoff), 0, 1, -0.1, 0.1);
		let y = map(noise(i + xoff + 1), 0, 1, -0.1, 0.1);

		fish[i].render(x, y);
	}
	xoff += 0.01;

	light.display();
	if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
		light.move(mouseX, mouseY);

		for (let x = 0; x < width; x += 33) {
			for (let y = 0; y < height; y += 33) {
				let d = dist(mouseX, mouseY, x, y);
				noStroke();
				fill(map(d, 0, 255, 255, 0), map(d, 0, 255, 55, 0))
				rect(x, y, 33, 33);
			}
		}
	}

	fill(11, 9, 33, 90);
	rect(-4, -4, width + 4, height + 4);
}