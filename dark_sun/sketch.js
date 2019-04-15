let xoff, yoff;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 1);

  rectMode(CENTER);
  // noLoop();
  xoff = 0.01;
  yoff = 0.01;
}

function draw() {
  blendMode(BLEND);
  background(200, 100, 20);

  blendMode(ADD);

  noStroke();
  for (let i = 180; i > 75; i = i - 1) {
    fill(30, 80, 30, 0.05);
    ellipse(width * 0.66, height * 0.33, i, i);
  }
  fill(255, 0.4);
  ellipse(width * 0.66, height * 0.33, 80, 80);

  //clouds
  noiseDetail(7, 0.6);
  for (let x = width - 1; x > 2; x -= 5) {
    for (let y = height - 1; y > 2; y -= 5) {
      let n = map(noise(x * 0.01 + xoff, y * 0.01 + yoff), 0, 1, 0, 40);
      fill(n, 0.8);
      rect(x, y, 5, 5);
    }
  }

  xoff += 0.008;
  yoff += 0.003;

}