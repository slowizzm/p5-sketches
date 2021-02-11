let giphy, url = 'https://media.giphy.com/media/Qumf2QovTD4QxHPjy5/giphy.gif',
  isGifAtEnd = false;

function preload() {
  giphy = loadImage(url);
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  fill(33);
  textSize(27);
  textAlign(CENTER, CENTER);
  giphy.setFrame(giphy.numFrames() - 1);

  // console.log(giphy.numFrames());
}

function draw() {
  clear();
  image(giphy, width * 0.5, height * 0.5);

  text('click to slap ...', 110, 60);

  gifState();
}

function gifState() {
  isGifAtEnd = false;
  if (giphy.getCurrentFrame() >= giphy.numFrames() - 1) {
    isGifAtEnd = true;
    giphy.pause();
  }
}

function mousePressed() {
  if (isGifAtEnd) giphy.reset();
}