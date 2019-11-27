/*
click to add vertex points to build shape, click and drag a vertex point to update position, double click on vertex point to remove
*/

let ib, vertexPoint = [],
  btn_fill, btn_stroke, btn_clearShape, btn_printConsole, btn_clearConsole, isCleared = false,
  slide_stroke,
  onDraggable = false,
  chkbx_clear, chkbx_fill,
  swapType;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight - 120);
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
}

function draw() {
  background(51);

  ib.render();
  for (let v of vertexPoint) {
    v.render();
  }
}

function ConsoleLogShape() {
  switch (swapType.value()) {
    case 'Line':
      console.log('beginShape(); ');
      for (let i = 0; i < vertexPoint.length; i++) {
        console.log('vertex(' + vertexPoint[i].pos.x + ',' + vertexPoint[i].pos.y + ')');
      }
      console.log(' endShape();');
      break;
    case 'Curve':
      console.log('beginShape(); ');
      for (let i = 0; i < vertexPoint.length; i++) {
        console.log('curveVertex(' + vertexPoint[i].pos.x + ',' + vertexPoint[i].pos.y + ')');
      }
      console.log(' endShape();');
      break;
  }
}

function ClearConsoleLog() {
  console.clear();
}

function mousePressed() {
  for (let i = 0; i < vertexPoint.length; i++) {
    let d = dist(mouseX, mouseY, vertexPoint[i].pos.x, vertexPoint[i].pos.y);

    if (d < vertexPoint[i].r / 2) {
      vertexPoint[i].isDraggable = true;
      onDraggable = true;
    }
  }
  if (!onDraggable && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    vertexPoint.push(new Points(mouseX, mouseY));
  }
}

function mouseReleased() {
  if (mouseX >= 4 && mouseX <= width - 4 && mouseY >= 4 && mouseY <= height - 4) {
    for (let i = 0; i < vertexPoint.length; i++) {
      vertexPoint[i].isDraggable = false;
    }
  }
  onDraggable = false;
}

function doubleClicked() {
  for (let i = 0; i < vertexPoint.length; i++) {
    let d = dist(mouseX, mouseY, vertexPoint[i].pos.x, vertexPoint[i].pos.y);
    if (d < vertexPoint[i].r / 2) {
      vertexPoint.splice(i, 1);
    }
  }
}
