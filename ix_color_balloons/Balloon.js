class Balloon {
  constructor(x, y, size, col, ltr) {

    this.pos = createVector(x, y);
    this.vel = createVector(0, -2);
    this.acc = createVector(0, 0);
    this.size = size;
    this.maxspeed = 33;
    this.maxforce = 0.01;
    this.col = col;
    this.isDraggable = false;
    this.ltr = ltr;
  }

  update(v) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(v);

    return this;
  }

  seek(targ) {
    let desired = p5.Vector.sub(targ, this.pos);
    desired.setMag(this.maxspeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);


    this.applyForce(steer);

    return this;
  }

  applyForce(f) {
    this.acc.add(f);
  }

  arrive(targ) {
    let desired = p5.Vector.sub(targ, this.pos);
    let d = desired.mag();

    if (d < height) {
      let m = map(d, 0, height, 0, this.maxspeed);
      desired.setMag(m);
    } else {
      desired.setMag(this.maxforce);
    }

    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxspeed);

    this.applyForce(steer);

    return this;
  }

  balloon() {
    fill(this.col);
    ellipse(this.pos.x + 5, this.pos.y, this.size);

    push();
    fill(33, 30);
    textSize(42);
    textAlign(CENTER);
    textStyle(BOLD);
    text(this.ltr, this.pos.x + 8, this.pos.y + 16);
    pop();

    push();
    fill(255);
    textSize(42);
    textAlign(CENTER);
    textStyle(BOLD);
    text(this.ltr, this.pos.x + 5, this.pos.y + 13);
    pop();

    push();
    beginShape();
    vertex(this.pos.x + 7, this.pos.y + 36);
    vertex(this.pos.x + 9, this.pos.y + 39);
    vertex(this.pos.x + 11, this.pos.y + 42);
    vertex(this.pos.x + 7, this.pos.y + 42);
    endShape(CLOSE);
    pop();

    return this;
  }

  checkIfBalloonReachedTop() {
    return (this.pos.y <= 0);
  }

  checkIfBalloonReachedBottom() {
    return (this.pos.y >= height);
  }

  balloonSlingBack() {
    if (this.checkIfBalloonReachedTop()) {
      this.pos.y = 0;
      this.vel.y *= -1;
    } else if (this.checkIfBalloonReachedBottom()) {
      this.pos.y = height;
      this.vel.y *= -1
    }
    return this;
  }

  display() {
    return this.balloon().balloonSlingBack();
  }

  render(v, targ) {
    return this.update(v) /*.seek(targ)*/ .arrive(targ);
  }
}