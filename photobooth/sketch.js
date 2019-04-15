// noprotect

let video;
let btn;
let photoAlbum = [];
let slider;
let canvas;

let col;

function setup() {
  canvas = createCanvas(800, 240);
  background(51);

  video = createCapture(VIDEO);
  video.size(320, 240);

  btn = createButton("Click to begin");
  btn.mousePressed(snapPhoto);
}

function snapPhoto() {
	btn.html('Snap Photo');
  photoAlbum.push(video.get());
}

function draw() {
  col = tint(255, 255, 0);

  let w = 160;
  let h = 120;
  let x = 0;
  let y = 0;

  for (let i = 0; i < photoAlbum.length; i++) {
    image(photoAlbum[i], x, y, w, h);
    x = x + w;
    if (x >= width) {
      x = 0;
      y = y + h;
    }
    if (photoAlbum.length > 10) {
      photoAlbum.splice(0, 10);
      x = 0;
      y = 0;
    }
  }

}