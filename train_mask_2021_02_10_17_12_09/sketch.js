let img_trainCar,
  img, imgClone,
  mskGraphic,
  train;


function preload() {
  img_trainCar = loadImage('images/train_car.png');
}



function setup() {
  createCanvas(800, 200);
  img = createGraphics(width, height);
  mskGraphic = createGraphics(width, height);
  img.rect(20, 0, width - 45, img_trainCar.height);

  train = new Train();
}

function draw() {
  background(33);
  train.render();
}

class Train {
  constructor() {
    this.pos = createVector(-width * 1.7, 0);
    this.vel = createVector(7, 0);
    this.acc = createVector();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    return this;
  }

  display() {
    mskGraphic.clear();
    mskGraphic.image(img_trainCar, this.pos.x, this.pos.y);
    (imgClone = mskGraphic.get()).mask(img.get());
    image(imgClone, 0, 20);
    return this;
  }

  bounds() {
    if (this.pos.x >= 800) {
      this.pos.x = -width * 1.7;
    }

    return this;
  }

  render() {
    return this.update().display().bounds();
  }
}