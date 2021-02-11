let msk, mskClone, mskGraphic;

let draggable;

function setup() {
  createCanvas(200, 200);
  msk = createGraphics(width, height);
  msk.rectMode(CENTER);
  rectMode(CENTER);

  mskGraphic = createGraphics(width, height);
  mskGraphic.rectMode(CENTER);

  draggable = new Draggable({
    w: 20,
    h: 200
  });
}

function draw() {
  background(13,17,21);
  mskGraphic.clear();
  msk.clear();
  mskGraphic.clear();
  msk.clear();
  msk.rect(draggable.pos.x, draggable.pos.y, draggable.res.w, draggable.res.h);

  //graphics hidden by mask
  mskGraphic.ellipse(100, 100, 100);

  //mask
  (mskClone = msk.get()).mask(mskGraphic.get());
  draggable.render(mskClone);

  //bounding boxes - to show mask position
  stroke(233);
  strokeWeight(1);
  noFill();
  rect(draggable.pos.x, draggable.pos.y, draggable.res.w, draggable.res.h);

}



function mousePressed() {
  if (draggable.hover()) {
    draggable.isDraggable = true;

    // ses an offset to stop shape from centering on the mouse pos
    draggable.offset.x = draggable.pos.x - mouseX;
    draggable.offset.y = draggable.pos.y - mouseY;
  }
}

function mouseReleased() {
  draggable.isDraggable = false;
}