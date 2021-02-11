const eyes = [],
  eye = [];

function setup() {
  createCanvas(200, 200);
  let len = 40;
  eye[0] = {
    x: width / 2 - 32,
    y: height / 2
  };

  eye[1] = {
    x: width / 2 + 32,
    y: height / 2
  };

  for (let i = 0; i < 2; i++) {
    eyes[i] = new Eye({
      x: eye[i].x,
      y: eye[i].y
    }, len);
  }
}

function draw() {
  background(13, 17, 21);
  noStroke();

  for (let i = 0; i < eyes.length; i++) {
    eyes[i].render();
  }

}

class Eye {
  constructor(pos, l) {
    this.x = pos.x;
    this.y = pos.y;

    this.len = l;
    this.a = 0;
  }

  update() {
    this.a = atan2(mouseY - this.y, mouseX - this.x);

    return this;
  }

  sclera() {
    push();
    translate(this.x, this.y);
    fill('#fffafa');
    arc(0, -10, this.len, this.len, 0.5, PI - 0.5);
    arc(0, 10, this.len, this.len, PI + 0.5, -0.5);
    pop();

    return this;
  }


  pupil() {
    push();
    translate(this.x, this.y);
    rotate(this.a);

    fill(13, 17, 21);
    ellipse(8, 0, this.len / 2, this.len / 2);

    pop();

    return this;
  }

  render() {
    return this.update().sclera().pupil();
  }
}