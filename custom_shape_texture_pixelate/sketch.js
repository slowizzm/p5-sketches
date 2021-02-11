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
  url = 'https://picsum.photos/500/500/?random', //source
  img_shape; //graphics buffer


let pg, pg_overlay;
const cols = [];

function preload() {
  tex = loadImage(url);
}


function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
  img_shape = createGraphics(width, height);
  pg = createGraphics(width, height);
  pg_overlay = createGraphics(width, height);
  background('#f8f8f8');

  createCustomShape();
}

function draw() {
  background('#f8f8f8');
  createCustomeShapeStroke();
  let d = dist(mouseX, mouseY, width * 0.5, height * 0.5);
  let pix = map(d, 0, width, 1, 32);
  for (let y = 0; y < height; y += pix) {
    for (let x = 0; x < width; x += pix) {
      if (img_shape.get(x, y)[3] != 0) {
        fill(tex.get(x, y));
        stroke(tex.get(x, y));
        rect(x, y, pix, pix);
      }
    }
  }

  image(pg_overlay, 0, 0)
}

function createCustomShape() {
  img_shape.beginShape();
  img_shape.noStroke();
  img_shape.fill(0);
  for (let i = 0; i < Object.keys(polyPoints).length; i++) {
    img_shape.vertex(polyPoints[i].x, polyPoints[i].y);
  }
  img_shape.endShape(CLOSE);
}

function createCustomeShapeStroke() {
  pg_overlay.clear();
  pg_overlay.beginShape();
  pg_overlay.strokeJoin(ROUND);
  pg_overlay.stroke('#f8f8f8');
  pg_overlay.strokeWeight(map(dist(mouseX, mouseY, width * 0.5, height * 0.5), 0, width, 30, 100));
  pg_overlay.noFill();
  for (let i = 0; i < Object.keys(polyPoints).length; i++) {
    pg_overlay.vertex(polyPoints[i].x, polyPoints[i].y);
  }
  pg_overlay.endShape(CLOSE);
}