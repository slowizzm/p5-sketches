let cols = 33,
	rows = 133;
let grid = [];

function setup() {
	createCanvas(windowWidth * 0.95, windowHeight * 0.95);

	for (let x = 0; x < rows; x++) {
		for (let y = 0; y < cols; y++) {
			grid.push(new Grid(x, y));
		}
	}
}

function draw() {
	background(51);

	for (let i = 0; i < grid.length; i++) {
		grid[i].drawGrid();
	}
}