let img,
  imgPos = {};

function preload() {
  img = loadImage('images/stlCards.png');
}

function setup() {
  createCanvas(800, 400);

  colorMode(HSL, 360, 1, 1, 1);
  img.resize(img.width * 0.5, img.height * 0.5);
  imgPos.x = width * 0.5 - (img.width * 0.5);
  imgPos.y = height * 0.5 - (img.height * 0.5);

}

function draw() {
  if (checkTransparency() && hover()) {
    background(0, 0.9, 0.6, 1);
  } else {
    background(0, 0.7, 0.8, 1);
  }

  image(img, imgPos.x, imgPos.y);
}

//Check the alpha of the image pixel the mouse is currently over
const checkTransparency = _ => {
  return (img.get(mouseX - imgPos.x, mouseY - imgPos.y)[3] > 0);
}

const hover = _ => {
  return (mouseX > imgPos.x && mouseX < imgPos.x + img.width && mouseY > imgPos.y && mouseY < imgPos.y + img.height);
}