//sprite created by dogchicken - https://opengameart.org/content/skull-monster-sprite-sheet

let zombie = [], NUM_IMAGES = 19, index = 0;
let isPlay = false;
let button;

function preload() {
	for (let i = 0; i < NUM_IMAGES; i++) {
		zombie[i] = loadImage("zombie/zombie" + i + ".png");
	}
}

function setup() {
  createCanvas(200, 200);
	frameRate(12);
	
	button = createButton('play');
  button.position(width*1.9, height*2);
}

function draw() {
  background(220);
	button.mousePressed(playSprite);
	if (isPlay) {
	image(zombie[index], width*0.5,height*0.5,zombie[index].width,zombie[index].height);
	index = (index+1) % zombie.length;
	} else {
		image(zombie[index], width*0.5,height*0.5,zombie[index].width,zombie[index].height);
	}
}

function playSprite() {
	isPlay = !isPlay;
	
	if(isPlay) {
		button.html('stop');
	} else {
		button.html('play');
	}
}