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