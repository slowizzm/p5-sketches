let scl, bgCol, shapeType, inverted;

function setup() {
	let cvs = createCanvas(400, 400);
	cvs.position(width * 0.5, 0);
}

function draw() {
	let scaleSlider = select('#scl')
	scl = scaleSlider.value()

	let invertedValue = select('#inverted')
	inverted = invertedValue.checked()

	let backgroundColorPicker = select('#bgCol')
	bgCol = backgroundColorPicker.value()

	let pixelTypeValue = select('#shapeType')
	shapeType = pixelTypeValue.value()


	background(bgCol);

	if (inverted) {
		stroke(217);
		noFill();
	} else {
		noStroke();
		fill(217);
	}

	if (shapeType === 'circle') {
		ellipse(width * 0.5, height * 0.5, scl);
	} else if (shapeType === 'square') {
		rectMode(CENTER);
		rect(width * 0.5, height * 0.5, scl, scl);
	}

}