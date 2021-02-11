function setup() {
  createCanvas(400, 600);
  noStroke();
  colorMode(HSL);

  h = random(60);
  s = random(40, 70);
  l = 80;

  //sky
  for (let i = 0; i < 200; i++) {
    fill(h, s, l + 0.1 * i);
    rect(0, i * 4, width, 4);
  }

  //moon
  fill(h, s + 50, l + 50, 0.2);
  ellipse(width * 0.5 + (mouseX - width * 0.5) * 0.01, height * 0.5, 500, 500);

  mountain();
}

const mountain = _ => {
  beginShape();
  vertex(0, height);
  vertex(0, height);
  for (let x = 0; x < width + 100; x++) {
    fill(200, 30, 360 - (x * 0.7), 1);
    vertex(x, ((noise(x / 100) * height * 0.2) + dist(width * 0.5, 0, x, 0) / 2 + height * 0.4) + height * 0.5 * 0.05);
  }
  vertex(width, height);
  vertex(width, height);
  endShape();
}

function mouseClicked() {
  setup();
  noiseSeed(random(0, 100000));
}