let img;
let num = 20;
let gridX;
let gridY;

function preload() {
  img = loadImage('https://picsum.photos/640/480/?random');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(220);
  image(img, 0, 0);

  gridX = img.width / num;
  gridY = img.height / num;

  for (let y = 0; y < img.height; y = y + gridY) {
    for (let x = 0; x < img.width; x = x + gridX) {
      let c = img.get(x, y);
      tint(c);
      image(img, x, y, gridX, gridY);
    }
  }
  noLoop();
}