class ColorTrees {
  constructor(pos, res, scl, spd, msk, imgBack, mskOrigin) {
    this.pos = createVector(pos.x, pos.y);
    this.res = createVector(res.x, res.y);
    this.scl = scl;
    this.spd = spd;
    this.canFill = false;
    this.imgBack = imgBack;
    this.msk = msk;
    this.mskOrigin = createVector(mskOrigin.x,mskOrigin.y);
    this.msk.resize(msk.width, msk.height)
    this.mskGraphic = createGraphics(width, height);
    this.mskClone;
  }

  maskCharacter() {
    this.mskGraphic.clear();
    this.mskGraphic.noStroke();
    this.mskGraphic.fill(233);
    this.mskGraphic.ellipse(this.pos.x, this.pos.y + (this.res.y * this.mskOrigin.y), this.res.y - this.scl);

    (this.mskClone = this.msk.get()).mask(this.mskGraphic.get());
    image(this.mskClone, this.pos.x, this.pos.y);
    return this;
  }

  fillCharacter() {
    this.canFill ? (this.scl += this.spd) : (this.scl -= this.spd);

    if (this.scl <= 100) {
      this.scl = 100;
    } else if (this.scl >= 2150) {
      this.scl = 2150;
    }

    return this;
  }

  displayCharacter() {
    image(this.imgBack, this.pos.x, this.pos.y, this.res.x, this.res.y);

    return this;
  }

  isRollover() {
    return (mouseX >= this.pos.x - (this.res.x / 2) &&
      mouseX <= this.pos.x + (this.res.x / 2) &&
      mouseY >= this.pos.y - (this.res.y / 2) &&
      mouseY <= this.pos.y + (this.res.y / 2))
  }

  render() {
    return this.displayCharacter().maskCharacter().fillCharacter();
  }
}