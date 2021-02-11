let num = 600,
  frms = 60,
  z = 15,
  n = 100,
  angle = 0,
  theta = 0;

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);
  pg = createGraphics(width, height);
  for (let i = 0; i < n; i++) {
    pg.noStroke();
    pg.fill(map(i, 0, n, 100, 242));
    let sz = map(i, 0, n, width * 1.5, 5);
    pg.ellipse(width / 2, height / 2, sz, sz);
  }
  noStroke();
  setShadow(5, 5, 10, "rgba(13,17,21,1)");
}

function draw() {
  background('#fffafa');
  translate(width / 2, height / 2);

  let h = height / 2;
  for (let i = 0; i < z; i++) {
    f = (i % 2 === 0) ? 238 : 34;
    drawThing(h - (h * 0.95 / z * i), f, i);
  }

  theta += TWO_PI / frms;
  //if (frameCount<frms) saveFrame("img/image-###.gif");
}

const drawThing = (diam, col, n) => {
  fill(col);
  beginShape();
  let d = 0;
  for (let i = 0; i < num; i++) {
    let offSet = PI / z * n;
    let angle = TWO_PI / num * i;
    let s = 0.7 + 0.03 * sin(sq(offSet) + theta + angle * 4.0);
    d = 0.25 + 0.2 * pow(s, 0.8);
    d += 0.08 * pow(0.33 + 0.5 + cos(3333 * angle), 0.33);
    let x = cos(angle) * d * diam;
    let y = sin(angle) * d * diam;
    vertex(x, y);
  }
  endShape(CLOSE);
}

const setShadow = (x, y, b, c) => {
  drawingContext.shadowBlur = b;
  drawingContext.shadowColor = c;
  drawingContext.shadowOffsetX = x;
  drawingContext.shadowOffSetY = y;
}

function windowResized() {
  resizeCanvas(windowWidth - 4, windowHeight - 4);
}