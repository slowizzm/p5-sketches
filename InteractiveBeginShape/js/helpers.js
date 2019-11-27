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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 120);
  btn_printConsole.position(10, height + 10);
  btn_clearConsole.position(150, height + 15);
  swapType.position(280, height + 15);
  btn_clearShape.position(20, height + 70);
  chkbx_clear.position(150, height + 70);
  chkbx_fill.position(260, height + 70);
}
