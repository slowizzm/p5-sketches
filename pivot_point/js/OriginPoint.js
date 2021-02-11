class OriginPoint {
  constructor(_x, _y) {
    this.pos = {
      x: _x,
      y: _y
    };
  }

  display() {
    push();
    fill(33);
    translate(this.pos.x, this.pos.y); //set origin point to rotate around
    rotate(radians(map(mouseX, 0, width, 0, 360)));

    push();
    noFill(); //comment this line out to see the origin point
    noStroke();
    rect(0, 0, 3, 3);
    pop();


    rect(100, 0, 33, 33); //offset the shape by 100 pixels on the x-axis
    pop();

    return this;
  }
}