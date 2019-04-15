let img;
let imgX = 100;
let imgY = 60;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  colorMode(HSL, 360, 100, 100, 1);

  img = loadImage("images/stlCards.png");
}

function draw() {
  if (checkTransparency() && rollover()) {
    background(0, 100, 60, 1);
  } else {
    background(0, 70, 80, 1);
  }

  image(img, imgX, imgY);
}

/*
Check the alpha of the image pixel the mouse is currently over
 */

function checkTransparency() {
  return (img.get(mouseX - imgX, mouseY - imgY)[3] > 0);
}

function rollover() {
  return (mouseX > imgX && mouseX < imgX + img.width && mouseY > imgY && mouseY < imgY + img.height);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}