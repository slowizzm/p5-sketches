const url = 'https://picsum.photos/360/640/?random';
let img, scanner;

function preload() {
  img = loadImage(url, _ => {
    // console.log(img);
  });
}

function setup() {
  createCanvas(img.width * 2, img.height);
  scanner = new Scanner({
    w: img.width,
    h: img.height
  }, height);
}

function draw() {
  clear();
  image(img, 0, 0);

  if (mouseIsPressed) {
    scanner.scan();
  }
  scanner.display();

}

class Scanner {
  constructor(res, scanHeight) {
    this.pos = {
      x: -1,
      y: 0
    }
    this.res = {
      w: res.w,
      h: res.h
    }
    this.scanHeight = scanHeight;
    this.pg = createGraphics(this.res.w, this.res.h);
    this.pg.clear();
  }

  update() {
    this.pos.x++;
    if (this.pos.x > this.res.w) {
      this.pos.x = 0;
    }

    return this;
  }

  createScan() {
    this.pg.image(img.get(mouseX, 0, 1, this.scanHeight), this.pos.x, this.pos.y);

    return this;
  }

  display() {
    image(this.pg, width*0.5, 0);
  }

  scan() {
    return this.update().createScan();
  }
}