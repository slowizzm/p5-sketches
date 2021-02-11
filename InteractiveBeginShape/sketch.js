/*
to do: fix showCoords

click to add vertex points to build shape, click and drag a vertex point to update position, double click on vertex point to remove
*/

let ib, vertexPoint = [],
  btn_fill, btn_stroke, btn_clearShape, btn_printConsole, btn_clearConsole,
  isCleared = false,
  slide_stroke,
  onDraggable = false,
  chkbx_clear, chkbx_fill, chkbx_showCoords,
  swapType,
  refImages = [],
  canShowCoords = false;

function preload() {

  // refImages[0] = loadImage('refs/ref.png', _ => {
    // refImages[0].resize(refImages[0].width * 0.5, refImages[0].height * 0.5)
  // });
}

function setup() {
  createCanvas(760, 561);
  btn_printConsole = createButton('print vertex points');
  btn_printConsole.mouseClicked(ConsoleLogShape);
  btn_printConsole.position(10, height + 15);

  btn_clearConsole = createButton('clear console');
  btn_clearConsole.mouseClicked(ClearConsoleLog);
  btn_clearConsole.position(150, height + 15);


  swapType = createSelect();
  swapType.option('Line');
  swapType.option('Curve');
  swapType.position(280, height + 15);

  ib = new InteractiveBeginShape();
  btn_clearShape = createButton('clear shape');
  btn_clearShape.position(20, height + 70);
  btn_clearShape.mouseClicked(clearCtx);

  chkbx_clear = createCheckbox('closeShape', false);
  chkbx_clear.changed(closeShape);
  chkbx_clear.position(150, height + 70);
  chkbx_clear.style('color', 'white');

  chkbx_fill = createCheckbox('fillShape', false);
  chkbx_fill.changed(fillShape);
  chkbx_fill.position(260, height + 70);
  chkbx_fill.style('color', 'white');

  chkbx_fill = createCheckbox('showCoords', false);
  chkbx_fill.changed(showCoords);
  chkbx_fill.position(370, height + 70);
  chkbx_fill.style('color', 'white');
}

function draw() {
  background(51);


  // draw axis
  push();
  stroke(33);
  line(width * 0.5, 0, width * 0.5, height);
  line(0, height * 0.5, width, height * 0.5);
  pop();

  push();
  imageMode(CENTER);


  // image(refImages[0], width * 0.5, height * 0.5);
  pop();


  ib.render();
  for (let v of vertexPoint) {
    v.render();
  }

  referenceShape();

}