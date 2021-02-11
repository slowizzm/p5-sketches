const imgPixels = [];
let img, url = 'https://i.imgur.com/PqSNKmX.png?1',
  pixelRes = 10;

function preload() {
  img = loadImage(url, _ => {
    img.resize(img.width * 0.25, img.height * 0.25)
  });
}

function setup() {
  createCanvas(img.width, img.height);
  rectMode(CENTER);

  let idx = 0;
  for (let rows = 32; rows < img.height - 32; rows += 32) {
    for (let cols = 32; cols < img.width - 32; cols += 32) {
      imgPixels[idx] = new ImgPixel({
        x: cols,
        y: rows
      }, 4, img.get(cols, rows));
      idx++;
    }
  }
}

function draw() {
  background('#131721');
  image(img, 0, 0);
  for (let i = 0; i < imgPixels.length; i++) {
    imgPixels[i].display(map(mouseX, 0, width, -10, 10), map(mouseY, 0, height, -10, 10));
  }
}


class ImgPixel {
  constructor(pos, s, col) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.size = s;
    this.col = col;
    this.col[3] = 200;
  }

  display(mx, my) {
    this.distFromMouse = dist(mouseX, mouseY, this.pos.x, this.pos.y)
    push();
    noStroke();
    fill(this.col);

    if (this.distFromMouse <= 500) {
      rect(this.pos.x - mx, this.pos.y - my, this.size + (this.distFromMouse / 10), this.size + (this.distFromMouse / 10));
    } else {
      rect(this.pos.x, this.pos.y, this.size, this.size);
    }
    pop();

    return this;
  }
}