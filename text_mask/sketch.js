let msk, mskgraphic, mskClone,
  textInfo;

const param = {
  pos: {
    x: 0,
    y: 0.5
  },
  vel: 0.2,
  acc: 0.15
};


function setup() {
  createCanvas(300, 300);

  msk = createGraphics(width, height);
  mskGraphic = createGraphics(width, height);
  mskGraphic.textSize(33);
  mskGraphic.textAlign(CENTER);

  textInfo = new TextInfo(param.pos, param.vel, param.acc);
}

function draw() {
  background(13, 17, 21);
  clearMask();
  setMask();

  textInfo.render(mskClone);
}

const clearMask = _ => {
  mskGraphic.clear();
  msk.clear();
}

const setMask = _ => {
  msk.rect(150, 0, width, height);
  mskGraphic.text('hello', textInfo.pos.x, textInfo.pos.y);

  (mskClone = msk.get()).mask(mskGraphic.get());
}

class TextInfo {
  constructor(p, v, a) {
    this.pos = createVector(p.x, height * p.y);
    this.vel = createVector(v, 0);
    this.acc = createVector(a, 0);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    return this;
  }

  display(img) {
    image(img, 0, 0);

    return this;
  }

  stop() {
    if (this.pos.x >= width * 0.7) {
      this.vel.x = 0;
      this.acc.mult(0);
    }

    return this;
  }

  render(img) {
    return this.update().display(img).stop();
  }
}