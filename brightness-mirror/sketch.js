let img,
  pixelScl = 7;

function setup() {
  createCanvas(640, 480);
  rectMode(CENTER);
  img = createCapture(VIDEO);
  img.size(320, 240);
  img.hide();
}

function draw() {

  img.loadPixels();

  for (let y = 0; y < img.height; y += pixelScl) {
    for (let x = 0; x < img.width; x += pixelScl) {
      let pix = img.pixels[(y * img.width + x) * 4];

      (pix <= 128) ? fill(33): fill(242);

      rect(x * 2, y * 2, pixelScl, pixelScl)
    }
  }
}