// createGraphics using get() method - works with tint() : alpha

const graphics = [];
let grabbedImage,
  catbeard, vart, frame, border,
  info;

function preload() {
  vart = loadImage('vart-logo.png');
}

function setup() {
  createCanvas(720, 480);
  imageMode(CENTER);

  for (let i = 0; i < 3; i++) {
    graphics[i] = createGraphics(width, height);
  }

  info = createP('V-ART');
  info.position(width * 0.47, 0);
  info.class('vart');

}

function draw() {
  blendMode(BLEND);
  background(13, 17, 21);

  drawBorder();
  drawTVLines();
  renderLogo();
}

const renderLogo = _ => {
  blendMode(ADD);
  push();
  translate(width * 0.35, height * 0.5);
  graphics[0].tint(255, 0, 0);
  graphics[1].tint(0, 255, 0);
  graphics[2].tint(0, 0, 255);
  for (let i = 0; i < graphics.length; i++) {
    graphics[i].image(vart, 0, 0, vart.width / 3, vart.height / 3);
    grabbedImage = graphics[i].get();
    drawLogo();
  }
  pop();
}

const drawBorder = _ => {
  push();
  noFill();
  stroke(217, 233);
  strokeWeight(7);
  rect(0, 0, width - 4, height - 4);
  pop();
}

const drawTVLines = _ => {
  push();
  strokeWeight(3);
  stroke(33, 233);
  for (let y = 4; y < height - 4; y += 4) {
    fill(y);
    line(4, y, width - 8, y);
  }
  pop();
}

const drawLogo = _ => {
  let rgbSplit = {};
  rgbSplit.x = random(width * 0.5 - 2, width * 0.5 + 2);
  rgbSplit.y = random(height * 0.4 - 2, height * 0.4 + 2);
  image(grabbedImage, rgbSplit.x, rgbSplit.y, grabbedImage.width, grabbedImage.height);
}