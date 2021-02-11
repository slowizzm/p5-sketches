let img_mask, msk,
  graphic, img_graphics = [], curr_graphic = 0,
  msk_render;

function preload() {
  img_mask = loadImage('inner.png');

  for (let i = 0; i < 2; i++) {
    img_graphics[i] = loadImage('Asset 21.png');
  }
}

function setup() {
  createCanvas(400, 400);

  graphic = createGraphics(width, height);
  msk = createGraphics(width, height);
  msk_render = createGraphics(width, height);
  graphic.rectMode(CENTER);
  msk.rectMode(CENTER);
  msk.imageMode(CENTER);
}

function draw() {
  background('#f2f2f2');

  //layer mask
  msk.clear();
  msk.push();
  msk.translate(width * 0.5, height * 0.5);
  msk.rotate(radians(map(mouseX, 0, width, 0, 360)));
  msk.image(img_mask, 0, -124);
  msk.pop();

  // image(msk, 0, 0);



  //lower layers
  graphic.push();
  graphic.translate(width * 0.5, height * 0.5);
    graphic.image(img_graphics[curr_graphic], -width * 0.5, -height * 0.5);
  curr_graphic = (curr_graphic + 1) % img_graphics.length;
  graphic.pop();

  // image(graphic, 0, 0);
  


  //render mask
  (msk_render = graphic.get()).mask(msk.get());
  
  image(msk_render, 0, 0);
}