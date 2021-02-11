let img;
let ppaint;

function preload() {
	var myImageURL = "https://i.imgur.com/PqSNKmX.png?1";
	img = loadImage(myImageURL);
}

function setup() {
	createCanvas(500, 500);
	background(0);
	// rectMode(CENTER);
	// img.loadPixels();
	// img.resize(img.width * 0.4, img.height * 0.4);
	
	ppaint = new PPaint();
}

function draw() {
// 	let pos = createVector(random(width), random(height));
// 	let ix = constrain(floor(pos.x), 0, width - 1);
// 	let iy = constrain(floor(pos.y), 0, height - 1);
// 	let pixelColor = img.get(ix, iy);

// 	noStroke();
// 	fill(pixelColor);
// 	rect(pos.x, pos.y, 3, 3);

// 	let m_pixelColor = img.get(mouseX, mouseY);
// 	stroke(m_pixelColor);
// 	let d = dist(mouseX, mouseY, width >> 1, height >> 1);
// 	strokeWeight(map(d, 0, 100, 0.3, 0.7));
// 	line(pmouseX, pmouseY, mouseX, mouseY);
	
	ppaint.paint();
}

class PPaint {
	constructor() {
		rectMode(CENTER);
	img.loadPixels();
	img.resize(img.width * 0.4, img.height * 0.4);
	}
	
	paint() {
		let pos = createVector(random(width), random(height));
	let ix = constrain(floor(pos.x), 0, width - 1);
	let iy = constrain(floor(pos.y), 0, height - 1);
	let pixelColor = img.get(ix, iy);

	noStroke();
	fill(pixelColor);
	rect(pos.x, pos.y, 3, 3);

	let m_pixelColor = img.get(mouseX, mouseY);
	stroke(m_pixelColor);
	let d = dist(mouseX, mouseY, width >> 1, height >> 1);
	strokeWeight(map(d, 0, 100, 0.3, 0.7));
	line(pmouseX, pmouseY, mouseX, mouseY);
	}
	
}