let msk,
  mskClone,
  mskGraphic,
  cnv_center,
  res,
  xray;

const imgs = [];

function preload() {
  for (let i = 0; i < 2; i++) {
    imgs[i] = loadImage(`assets/images/xray/skel${i}.png`);
  }
}

function setup() {
  createCanvas(360, 640);
  cnv_center = {
    x: width * 0.5,
    y: height * 0.5
  };

  msk = createGraphics(width, height);
  mskGraphic = createGraphics(width, height);
  msk.rectMode(CENTER);
  mskGraphic.imageMode(CENTER);

  res = {
    w: imgs[0].width * 0.75,
    h: imgs[0].height * 0.75
  };

  xray = new XRay(createVector(width * 0.5, height * 0.175));
}

function draw() {
  background(13, 17, 21);
  clearMask();
  setMask();

  push();
  imageMode(CENTER);
  image(imgs[0], width * 0.5, height * 0.5, res.w, res.h);
  pop();

  xray.render(mskClone);
}