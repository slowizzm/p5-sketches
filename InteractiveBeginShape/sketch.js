/*
click to add vertex points to build shape, click and drag a vertex point to update position, double click on vertex point to remove
*/

let ib, vertexPoint = [],
  btn_fill, btn_stroke, btn_clearShape, btn_printConsole, btn_clearConsole,
  isCleared = false,
  slide_stroke,
  onDraggable = false,
  chkbx_clear, chkbx_fill, chkbx_showCoords, chkbx_setStroke,
  swapType, swapStrokeCol,
  img_ref,
  canShowCoords = false,
  setBlack = false;

function preload() {
  //add image reference to refs
  //check image format in path below
  //un comment if using ref image
  // img_ref = loadImage('refs/ref.png', _ => {
  //   img_ref.resize(img_ref.width * 0.5, img_ref.height * 0.5)
  // });
}

function setup() {
  if (img_ref) {
    createCanvas(img_ref.width, img_ref.height);
  } else {
    createCanvas(400, 400);
  }

  setupUI();
}

function draw() {
  background(51);


  // draw axis
  push();
  stroke(33);
  line(width * 0.5, 0, width * 0.5, height);
  line(0, height * 0.5, width, height * 0.5);
  pop();

  checkRefImage();


  ib.render();
  for (let v of vertexPoint) {
    v.render();
  }
}