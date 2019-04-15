let video;
let x = 0;

function setup() {
  createCanvas(320, 240);
  background(220);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(320, 240);
}

function draw() {
  video.loadPixels();
  slitScan();
}

function slitScan() {
  let w = video.width;
  let h = video.height;
  copy(video, w / 2, 0, 1, h, x, 0, 1, h);

  x = x + 1;

  if (x > width) {
    x = 0;
  }
}