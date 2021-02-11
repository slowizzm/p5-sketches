function BallProto(pos,diam) {
  this.pos = {
    x: pos.x,
    y: pos.y
  };

  this.diam = diam;
}

BallProto.prototype.display = function() {
  noStroke();
  fill('red');
  ellipse(this.pos.x, this.pos.y, this.diam);
}