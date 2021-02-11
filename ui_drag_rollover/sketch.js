//Click/Hold to drag object
//Double click to change shape

let draggable,
  isSqr = true,
  text_info = `click+hold to drag, 
double click to change shape`;

text_info = text_info.toUpperCase();

function setup() {
  createCanvas(400, 400);
  draggable = new Draggable();

  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(LEFT, CENTER);
  textFont('Avenir');
  textSize(15);
}

function draw() {
  background(15, 17, 19);
  draggable.render();


  drawInfo();
}

function drawInfo() {
  push();
  noStroke();
  fill('#eee');
  text(text_info, width * 0.1, height * 0.15);
  pop();
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


function doubleClicked() {
  if (draggable.hover()) {
    isSqr = !isSqr;
  }
}