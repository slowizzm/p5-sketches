let msk,
  mskClone,
  mskGraphic;

function setup() {
  createCanvas(400, 200);

  msk = createGraphics(width, height);
  mskGraphic = createGraphics(width, height);
}

function draw() {
  background(13, 17, 21);


  drawMaskShape();
  drawMaskOutline();

  //graphic visual when not masked
  mskGraphic.ellipse(mouseX, mouseY, 25, 25);

  //mask
  (mskClone = msk.get()).mask(mskGraphic.get());
  image(mskClone, 0, 0);
}

const drawMaskShape = _ => {
  mskGraphic.clear();
  msk.beginShape();
  msk.vertex(30, 10);
  msk.vertex(130, 10);
  msk.vertex(50, 100);
  msk.vertex(130, height - 10);
  msk.vertex(30, height - 10);
  msk.endShape(CLOSE);

  msk.beginShape();
  msk.vertex(width - 30, 10);
  msk.vertex(width - 130, 10);
  msk.vertex(width - 50, 100);
  msk.vertex(width - 130, height - 10);
  msk.vertex(width - 30, height - 10);
  msk.endShape(CLOSE);
}

const drawMaskOutline = _ => {
  //same shape as mask - used to draw the stroke for visual aid
  noFill();
  stroke('#fffafa');
  strokeWeight(2);
  beginShape();
  vertex(30, 10);
  vertex(130, 10);
  vertex(50, 100);
  vertex(130, height - 10);
  vertex(30, height - 10);
  endShape(CLOSE);

  beginShape();
  vertex(width - 30, 10);
  vertex(width - 130, 10);
  vertex(width - 50, 100);
  vertex(width - 130, height - 10);
  vertex(width - 30, height - 10);
  endShape(CLOSE);
}