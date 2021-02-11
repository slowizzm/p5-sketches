function customShape() {
  push();
  (isClosed) ? fill(217): noFill();

  stroke(217);

  beginShape();
  for (let i = 0; i < vertexPoints.length; i++) {
    vertex(vertexPoints[i].pos.x, vertexPoints[i].pos.y);
  }

  (isClosed) ? endShape(CLOSE): endShape();
  pop();
}

function customShapeImage() {
  pg.push();
  (isClosed) ? pg.fill(217): pg.noFill();

  pg.stroke(217);

  pg.beginShape();
  for (let i = 0; i < vertexPoints.length; i++) {
    pg.vertex(vertexPoints[i].pos.x, vertexPoints[i].pos.y);
  }

  (isClosed) ? pg.endShape(CLOSE): pg.endShape();
  pg.pop();
  
  hasNewShape = true;
}