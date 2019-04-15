class InteractiveBeginShape {
  constructor() {
    this.point = [];
    this.isFill = false;
    this.isClose = false;
  }

  anchor() {
    for (let i = 0; i < vertexPoint.length; i++) {
      this.point[i] = createVector(vertexPoint[i].pos.x, vertexPoint[i].pos.y);
    }

    return this;
  }

  shape() {
    push();
    if (this.isFill) {
      fill(217);
    } else {
      noFill();
    }
    stroke(217);
    switch (swapType.value()) {
      case 'Line':
        beginShape();
        for (let i = 0; i < this.point.length; i++) {
          vertex(this.point[i].x, this.point[i].y);
        }
        if (this.isClose) {
          endShape(CLOSE);
        } else {
          endShape();
        }
        break;
      case 'Curve':
        beginShape();
        for (let i = 0; i < this.point.length; i++) {
          curveVertex(this.point[i].x, this.point[i].y);
        }
        if (this.isClose) {
          endShape(CLOSE);
        } else {
          endShape();
        }
        break;
    }
    pop();
    return this;
  }

  render() {
    return this.anchor().shape();
  }
}