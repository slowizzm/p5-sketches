class BotPart {
  constructor(pos, res, snd, highlight) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.res = {
      w: res.w,
      h: res.h
    };

    this.highlight = highlight;

    this.snd = snd;
    this.sndHasPlayed = false;
    this.offset = {
      x: 0,
      y: 0
    }
    this.isDraggable = false;
    this.isRollOver = false;
    this.isSnapped = false;
    this.nearSnapZone = null;

    this.snd.setVolume(0.25);
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

  checkIfNearSnapZone() {
    return (this.nearSnapZone < 33);
  }

  setSnapZone(loc) {
    this.snapZone = {
      x: loc.x,
      y: loc.y
    };
  }

  snapPart() {
    this.nearSnapZone = dist(this.pos.x, this.pos.y, this.snapZone.x, this.snapZone.y);

    if (this.checkIfNearSnapZone() && this.isDraggable) {
      this.pos.x = this.snapZone.x;
      this.pos.y = this.snapZone.y;
      this.isSnapped = true;
      this.isDragging = false;
      this.playSnapSnd();
    }

    return this;
  }

  getDistFromMouse() {
    return dist(mouseX, mouseY, this.pos.x, this.pos.y);
  }

  display(img) {
    stroke(0);
    image(img, this.pos.x, this.pos.y);
    return this;
  }

  showHighlight() {
    if (this.isDraggable && partsSnapped != NUM_PARTS) image(this.highlight, this.snapZone.x, this.snapZone.y);
  }

  render(img) {
    // this.isClosest();
    return this.display(img).drag().snapPart().showHighlight();
  }


  //needs to be moved to soundManager
  playSnapSnd() {
    if (!this.sndHasPlayed) {
      partsSnapped++;
      this.snd.play();
      this.sndHasPlayed = true;
    }
  }
}