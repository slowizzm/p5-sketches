class World {
  constructor(img, _x, _y, offset) {
    this.img = img;
    this.pos = {
      x: _x,
      y: _y
    }

    this.offset = {
      x: offset.x,
      y: offset.y
    }

    this.angle = 0;
    this.dir = 'idle';
  }

  spin() {
    if (this.dir === 'right') {
      this.angle += 0.01;
    } else if (this.dir === 'left') {
      this.angle -= 0.01;
    }
    return this;
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    image(this.img, this.offset.x, this.offset.y);
    pop();
    return this;
  }

  render() {
    return this.spin().display();
  }
}