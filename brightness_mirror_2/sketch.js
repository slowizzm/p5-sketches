//Brightness Mirror from The Coding Train

let video, videoScale = 16,
  cols, rows;

function setup() {
  createCanvas(640, 480);
  cols = width / videoScale;
  rows = height / videoScale;

  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();
}

function draw() {
  background(0);
  video.loadPixels();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {

      let loc = ((cols - i - 1) + j * cols) * 4;

      let r = video.pixels[loc];
      let g = video.pixels[loc + 1];
      let b = video.pixels[loc + 2];

      let sz = map((r + g + b) / 3, 0, 255, 0, videoScale);
      rectMode(CENTER);
      fill(255);
      noStroke();
      let x = i * videoScale;
      let y = j * videoScale;
      rect(x + videoScale / 2, y + videoScale / 2, sz, sz);
    }
  }
}