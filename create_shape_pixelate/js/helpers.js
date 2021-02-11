function mouseDragged() {
  if (frameCount % 10 == 0) {
    if (!hasNewShape) {
      for (let i = 0; i < vertexPoints.length; i++) {
        let d = dist(mouseX, mouseY, vertexPoints[i].pos.x, vertexPoints[i].pos.y);

        if (d < vertexPoints[i].r /2) {

          onPoint = true;

          if (vertexPoints[i] == vertexPoints[0] && vertexPoints.length > 2) {
            isClosed = true;
            customShapeImage();
          }
          vertexPoints[i].isDraggable = true;
          onDraggable = true;
        }
      }
      if (!onDraggable &&
        mouseX >= 0 &&
        mouseX <= width &&
        mouseY >= 0 &&
        mouseY <= height) {

        if (isClosed && !onPoint) {
          vertexPoints.length = 0;
          isClosed = false;
        }

        vertexPoints.push(new Points(mouseX, mouseY));
      }
    }
  }
}

function mouseIsOverCanvas() {
  return (mouseX >= 4 && mouseX <= width - 4 && mouseY >= 4 && mouseY <= height - 4);
}

function mouseReleased() {
  if (mouseIsOverCanvas) {
    for (let i = 0; i < vertexPoints.length; i++) {
      vertexPoints[i].isDraggable = false;
    }
  }
  onDraggable = false;
  onPoint = false;
}

function doubleClicked() {
  for (let i = 0; i < vertexPoints.length; i++) {
    let d = dist(mouseX, mouseY, vertexPoints[i].pos.x, vertexPoints[i].pos.y);
    if (d < vertexPoints[i].r / 2) {
      vertexPoints.splice(i, 1);
    }
  }

  if (hasNewShape) {
    save(pg, `${Date.now()}`, 'png');
    save(cnv, `${Date.now()}`, 'png');
  }
}