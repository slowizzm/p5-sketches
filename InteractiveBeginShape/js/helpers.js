function clearCtx() {
  vertexPoint = [];
  ib = new InteractiveBeginShape();
}

function closeShape() {
  ib.isClose = !ib.isClose;
}

function fillShape() {
  ib.isFill = !ib.isFill;
}

function showCoords() {
  vertexPoint.forEach(p => {
    canShowCoords = !canShowCoords;
  });
}

function ConsoleLogShape() {
  switch (swapType.value()) {
    case 'Line':
      console.log('beginShape(); ');
      for (let i = 0; i < vertexPoint.length; i++) {
        console.log('vertex(' + vertexPoint[i].pos.x + ',' + vertexPoint[i].pos.y + ');');
      }
      if (ib.isClose) {
        console.log(' endShape(CLOSE);');
      } else {
        console.log(' endShape();');
      }
      break;
    case 'Curve':
      console.log('beginShape(); ');
      for (let i = 0; i < vertexPoint.length; i++) {
        console.log('curveVertex(' + vertexPoint[i].pos.x + ',' + vertexPoint[i].pos.y + ');');
      }

      if (ib.isClose) {
        console.log(' endShape(CLOSE);');
      } else {
        console.log(' endShape();');
      }
      break;
  }
}

function ClearConsoleLog() {
  console.clear();
}

function mousePressed() {
  if (mouseX > 0 &&
    mouseY > 0 &&
    mouseX < width &&
    mouseY < height) {
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
    if (d < vertexPoint[i].r + 10) {
      vertexPoint.splice(i, 1);
      ib.point.splice(i, 1);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 120);
  btn_printConsole.position(10, height + 10);
  btn_clearConsole.position(150, height + 15);
  swapType.position(280, height + 15);
  btn_clearShape.position(20, height + 70);
  chkbx_clear.position(150, height + 70);
  chkbx_fill.position(260, height + 70);
}