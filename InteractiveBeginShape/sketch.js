/*
click to add vertex points to build shape, click and drag a vertex point to update position, double click on vertex point to remove
*/

let ib, vertexPoint = [];

let btn_fill, btn_stroke, slide_stroke;

let onDraggable = false;
let btn;

let btn_clear, isCleared = false,
  chkbx_clear, chkbx_fill;

let swapType;

function setup() {
  createCanvas(windowWidth, windowHeight - 100);
  btn = createButton('print vertex points');
  btn.mouseClicked(showPoints);


  swapType = createSelect();
  swapType.option('Line');
  swapType.option('Curve');
  swapType.position(150, height * 1.005);

  ib = new InteractiveBeginShape();
  btn_clear = createButton('clear');
  btn_clear.position(20, windowHeight - 50);
  btn_clear.mouseClicked(clearCtx);

  chkbx_clear = createCheckbox('closeShape', false);
  chkbx_clear.changed(closeShape);
  chkbx_clear.position(100, windowHeight - 50);
  chkbx_clear.style('color', 'white');

  chkbx_fill = createCheckbox('fillShape', false);
  chkbx_fill.changed(fillShape);
  chkbx_fill.position(210, windowHeight - 50);
  chkbx_fill.style('color', 'white');
}

function draw() {
  background(51);

  ib.render();
  for (let v of vertexPoint) {
    v.render();
  }
}

function showPoints() {
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