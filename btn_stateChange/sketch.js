let btn_red, btn_green, btn_blue;

function setup() {
	createCanvas(windowWidth * 0.95, windowHeight * 0.95);
	btn_red = new Button(createVector(width * 0.25, height >> 1), 6, color(223, 93, 26));
	btn_green = new Button(createVector(width >> 1, height >> 1), 11, color(142, 192, 56));
	btn_blue = new Button(createVector(width * 0.75, height >> 1), 22, color(50, 127, 219));

}

function draw() {
	clear();
	btn_red.run();
	btn_green.run();
	btn_blue.run();
}