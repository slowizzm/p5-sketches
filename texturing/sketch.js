let customTexturedShape;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  colorMode(HSL, 360, 1, 1, 1);

  customTexturedShape = {
    texture: createGraphics(width, height),
    texture_col: color(200, 0.8, 0.2, 0.1),
    shape_bg: createGraphics(width, height),
    col: '#E8DBD899',
    img: createGraphics(width, height)
  }
  customTexturedShape.texture.colorMode(HSL, 360, 1, 1, 1);



  background('#203040');
  createTexturedShape(customTexturedShape.img,
    customTexturedShape.col,
    customTexturedShape.texture,
    customTexturedShape.texture_col);

}

function draw() {
  background('#203040');
  createCustomShapeBackground(customTexturedShape.shape_bg, '#E8DBD8');
  image(customTexturedShape.img, 0, 0);
}

function createTexturedShape(c_shape, col, g, t) {
  createCustomShape(c_shape);
  createTexture(g, t);
  applyTextureToShape(c_shape, g);
}


function createCustomShape(c_shape) {
  c_shape.push();
  c_shape.noStroke();
  c_shape.translate(width / 2, height / 2);
  c_shape.arc(0, 0, 200, 200, HALF_PI, HALF_PI * 3);
  c_shape.pop();
}

function createCustomShapeBackground(bg, col) {
  bg.push();
  bg.noStroke();
  bg.fill(col)
  bg.translate(width / 2, height / 2);
  bg.arc(0, 0, 200, 200, HALF_PI, HALF_PI * 3);
  bg.pop();

  image(bg, 0, 0);
}

function createTexture(g, c) {
  g.clear();
  let noiz = 0.1;
  let rnd = random(0.000001, 0.00001);
  for (let i = 0; i < 100000; i++) {
    const x = random(1) * width;
    const y = random(1) * height;
    const w = noise(noiz) * random(9, 13);
    const h = noise(noiz) * random(9, 13);
    g.stroke(c);
    g.strokeWeight(noiz)
    g.fill(c);
    g.ellipse(x, y, w, h);

    noiz += rnd;
  }
}

function applyTextureToShape(c_shape, tex) {
  c_shape.loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      if (c_shape.pixels[index + 3] != 0) {
        c_shape.pixels[index + 0] = tex.get(x, y)[0];
        c_shape.pixels[index + 1] = tex.get(x, y)[1];
        c_shape.pixels[index + 2] = tex.get(x, y)[2];
        c_shape.pixels[index + 3] = tex.get(x, y)[3];
      }
    }
  }
  c_shape.updatePixels();
}