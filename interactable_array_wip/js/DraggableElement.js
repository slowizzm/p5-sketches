class DraggableElement {
  constructor(id, pos, res) {
    imageMode(CENTER);
    rectMode(CENTER);
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.res = {
      w: res.w,
      h: res.h
    };
    this.id = id;
    this.offset = {
      x: 0,
      y: 0
    }
    this.isDraggable = false;
    this.isRollOver = false;
    this.isSnapped = false;
    this.distFromSnapZone = null;

    this.snapRadius = (this.res.w * this.res.h / 100) * 2;
    this.selected = false;
  }

  hover() {
    return (mouseX > this.pos.x - (this.res.w / 2) &&
      mouseX < this.pos.x + (this.res.w / 2) &&
      mouseY > this.pos.y - (this.res.h / 2) &&
      mouseY < this.pos.y + (this.res.h / 2));
  }

  drag() {
    if (this.isDraggable && !this.isSnapped) {
      this.pos.x = mouseX + this.offset.x;
      this.pos.y = mouseY + this.offset.y;
    }

    return this;
  }

  isClosest() {
    // check if closest to mouse
  }

  setSnapZone(pos) {
    this.snapZone = {
      x: pos.x,
      y: pos.y
    };
  }

  canBeSnapped() {
    return (this.distFromSnapZone < this.snapRadius);
  }

  setPos(pos) {
    console.log(pos)
    this.pos.x = pos.x;
    this.pos.y = pos.y;
  }


  snapPart() {
    for (let i = 0; i < snapZones.length; i++) {
      this.distFromSnapZone = dist(this.pos.x, this.pos.y, snapZones[i].snapZone.x, snapZones[i].snapZone.y);
      if (this.canBeSnapped() && !mouseIsPressed && !snapZones[i].occupied) {
        this.pos.x = snapZones[i].snapZone.x;
        this.pos.y = snapZones[i].snapZone.y;
        this.isSnapped = true;
        this.isDragging = false;

        snapZones[i].occupied = true;
        snapZones[i].guestID = this.id;
        this.selected = false;
      }
    }

    return this;
  }

  getClosestSnapZone() {
    let zones = [];

    for (let i = 0; i < snapZones.length; i++) {
      this.distFromNearestSnapZone = dist(this.pos.x, this.pos.y, snapZones[i].snapZone.x, snapZones[i].snapZone.y);
      zones.push(this.distFromNearestSnapZone)
    }

    let closestZone = Math.min(...zones);

    return zones.indexOf(closestZone);
  }

  getDistFromMouse() {
    return dist(mouseX, mouseY, this.pos.x, this.pos.y);
  }

  display() {
    push();
    noStroke();
    fill('#13172120');
    rect(this.pos.x - 3, this.pos.y + 3, this.res.w, this.res.h, 3);
    pop();
    push();
    stroke('#f8f8f8');
    fill('#131721');
    rect(this.pos.x, this.pos.y, this.res.w, this.res.h, 3);
    pop();

    push();
    noStroke();
    fill('#f8f8f8');
    textAlign(CENTER, CENTER);
    textSize(13);
    text(this.id, this.pos.x, this.pos.y)
    pop();

    return this;
  }

  highlight() {
    // if (this.canBeSnapped()) {
    //   // console.log('hh');
    //   push();
    //   stroke('#131721');
    //   fill('#131721');
    //   noStroke();
    //   rect(this.pos.x, this.pos.y, this.res.w, this.res.h, 13);
    //   pop();
    // }
    return this;
  }

  render() {
    // this.isClosest();
    return this.display().drag().snapPart().highlight();
  }
}