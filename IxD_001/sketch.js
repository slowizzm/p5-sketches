//WIP

let item, img_bottle;

function preload() {
	img_bottle = loadImage('images/wineBottle.png');
}

function setup() {
	createCanvas(400, 400);

	item = new Item(width * 0.5, height * 0.5, height * 0.35, 0.5, img_bottle, img_bottle.width * 0.07, img_bottle.height * 0.07);
}

function draw() {
	background(51);

	item.render('DEVILS CORNER', width * 0.5, item.bottlePos + 133, '$25', width * 0.5, item.bottlePos + 160, width * 0.5, height * 0.87);
}