const imgArr = [],
  imgs = [];

let img_mask, msk,
  graphic, img_graphics = [],
  curr_graphic = 0,
  msk_render;


function preload() {
  img_mask = loadImage('masks/msk.png');

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 24; j++) {
      img_graphics[j] = loadImage(`PNGS${nf(j,2)}.png`);
    }
    imgArr[i] = img_graphics;
  }
}

function setup() {
  createCanvas(img_graphics[0].width, img_graphics[0].height);
  colorMode(HSL, 360, 1, 1, 1);
  graphic = createGraphics(width, height);
  msk = createGraphics(width, height);
  msk_render = createGraphics(width, height);
  graphic.rectMode(CENTER);
  msk.rectMode(CENTER);
  msk.imageMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(290, 0.2, 0.5, 1);

  //layer mask
  msk.clear();
  msk.push();
  msk.translate(width * 0.5, height * 0.5);
  msk.rotate(radians(map(mouseX, 0, width, 0, 360)));
  msk.image(img_mask, 0, -124);
  msk.pop();

  // image(msk, 0, 0);



  //lower layers
  graphic.clear();
  graphic.push();
  graphic.translate(width * 0.5, height * 0.5);
  graphic.image(img_graphics[curr_graphic], -width * 0.5, -height * 0.5);
  curr_graphic = (curr_graphic + 1) % img_graphics.length;
  graphic.pop();

  // image(graphic, 0, 0);



  //render mask
  (msk_render = graphic.get()).mask(msk.get());

  image(msk_render, width * 0.5, height * 0.5);
}