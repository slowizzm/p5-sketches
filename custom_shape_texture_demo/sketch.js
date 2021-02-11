const polyPoints = [{
    x: 445,
    y: 240
  },
  {
    x: 350,
    y: 410
  },
  {
    x: 150,
    y: 410
  },
  {
    x: 45,
    y: 240
  },
  {
    x: 150,
    y: 60
  },
  {
    x: 240,
    y: 225
  }
];


let tex, //texture
  url = 'https://images.unsplash.com/photo-1575633240877-edd68950f4a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500', //source
  img_shape; //graphics buffer

function preload() {
  tex = loadImage(url);
}

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
  img_shape = createGraphics(width, height);
  background('#f8f8f8');

  drawCustomShape();

  createTexture();

  image(img_shape, 0, 0);
}

function createTexture() {
  img_shape.loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      if (img_shape.pixels[index + 3] != 0) {
        img_shape.pixels[index + 0] = tex.get(x, y)[0];
        img_shape.pixels[index + 1] = tex.get(x, y)[1];
        img_shape.pixels[index + 2] = tex.get(x, y)[2];
        img_shape.pixels[index + 3] = tex.get(x, y)[3];
      }
    }
  }
  img_shape.updatePixels();
}

function drawCustomShape() {
  img_shape.beginShape();
  img_shape.noStroke();
  img_shape.fill(0);
  for (let i = 0; i < Object.keys(polyPoints).length; i++) {
    img_shape.vertex(polyPoints[i].x, polyPoints[i].y);
  }
  img_shape.endShape(CLOSE);
}