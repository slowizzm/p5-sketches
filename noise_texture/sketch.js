let graphics, col;

function setup() {
  createCanvas(800, 800);
  colorMode(HSL, 360, 1, 1, 1);
  // background(335, 0.7, 0.5, 1);

  col = color(0, 0, 1, 0.05);
  graphics = createGraphics(width, height);
  graphics.colorMode(HSL, 360, 1, 1, 1);
  drawNoiseBackground(graphics, col);

  rectMode(CENTER);
}


function drawNoiseBackground(g, c) {
  g.clear();
  let noiz = 0.1;
  let rnd = random(0.000001, 0.00001)
  for (let i = 0; i < 100000; i++) {
    const x = random(1) * width;
    const y = random(1) * height;
    const w = noise(noiz) * random(5, 33);
    const h = noise(noiz) * random(5, 33);
    g.stroke('#131721');
    g.strokeWeight(noiz)
    g.fill(c);
    g.ellipse(x, y, w, h);

    noiz += rnd;
  }
}



function draw() {
  background(335, 0.7, 0.5, 1);
  image(graphics, 0, 0);


  // rect(mouseX,mouseY, 100, 100);
}


function mousePressed() {
  drawNoiseBackground(graphics, col);
}