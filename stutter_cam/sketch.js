const photoAlbum = [],
  photoProps = {
    x: 0,
    y: 0,
    w: null,
    h: null
  };


let video,
  btn,
  slider,
  col;

function setup() {
  createCanvas(640, 480);
  colorMode(HSL, 360, 1, 1, 1);

  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  col = tint(10, 0.9, 0.6, 1);

  photoProps.w = width;
  photoProps.h = height;
}

function draw() {
  photoAlbum.push(video.get());

  for (let i = 0; i < photoAlbum.length; i++) {
    push();
    translate(width, 0);
    scale(-1, 1);
    image(photoAlbum[i], photoProps.x, photoProps.y, photoProps.w, photoProps.h);
    pop();


    if (photoAlbum.length > 7) {
      photoAlbum.splice(0, 7);
      photoProps.x = 0;
      photoProps.y = 0;

    }
  }
}