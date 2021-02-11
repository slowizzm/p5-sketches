class Character {
  constructor(pos, res, scl, spd, msk, imgBack, imgShadow) {
    this.pos = createVector(pos.x, pos.y);
    this.res = createVector(res.x / 1.25, res.y / 1.25);
    this.scl = scl;
    this.spd = spd;
    this.canFill = false;
    this.msk = msk;
    this.msk.resize(msk.width / 1.25, msk.height / 1.25)
    this.mskGraphic = createGraphics(width, height);
    this.imgBack = imgBack;
    this.imgShadow = imgShadow;
    this.mskClone;
  }

  maskCharacter() {
    this.mskGraphic.clear();
    this.mskGraphic.noStroke();
    this.mskGraphic.fill(233);
    this.mskGraphic.ellipse(this.pos.x, this.pos.y + (this.res.y * 2.25), this.res.y - this.scl);

    (this.mskClone = this.msk.get()).mask(this.mskGraphic.get());
    image(this.mskClone, this.pos.x, this.pos.y);
    return this;
  }

  fillCharacter() {
    this.canFill ? (this.scl += this.spd) : (this.scl -= this.spd);

    if (this.scl <= 100) {
      this.scl = 100;
    } else if (this.scl >= 1250) {
      this.scl = 1250;
    }

    return this;
  }

  displayCharacter() {
    image(this.imgBack, this.pos.x, this.pos.y, this.res.x, this.res.y);
    image(this.imgShadow, 275, 235);
    return this;
  }

  isRollover() {
    if (mouseX >= this.pos.x - (this.res.x / 2) &&
      mouseX <= this.pos.x + (this.res.x / 2) &&
      mouseY >= this.pos.y - (this.res.y / 2) &&
      mouseY <= this.pos.y + (this.res.y / 2)) {
      cursor('pointer')
    } else {
      cursor();
    }

    return this;
  }

  render() {
    return this.displayCharacter().maskCharacter().fillCharacter().isRollover();
  }
}