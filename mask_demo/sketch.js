let msk, mskClone, mskGraphic,
  borderRadius = 13,
  viewerScl = 80,
  hiddenGemPos;

function setup() {
  createCanvas(200, 200);
  msk = createGraphics(width, height);
  msk.rectMode(CENTER);
  rectMode(CENTER);

  mskGraphic = createGraphics(width, height);


  hiddenGemPos = {
    x: random(width),
    y: random(height)
  }
}

function draw() {
  background(3);
  mskGraphic.clear();
  msk.clear();
  msk.rect(mouseX, mouseY, viewerScl, viewerScl, borderRadius);

  //graphics hidden by mask
  mskGraphic.ellipse(hiddenGemPos.x, hiddenGemPos.y, 32);

  //mask
  (mskClone = msk.get()).mask(mskGraphic.get());
  image(mskClone, 0, 0);

  //mask visual representation
  stroke(233);
  strokeWeight(1);
  noFill();
  rect(mouseX, mouseY, viewerScl, viewerScl, borderRadius);
}