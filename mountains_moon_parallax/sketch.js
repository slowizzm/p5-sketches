function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
}

function draw() {
  background(13, 17, 21);

  noStroke();
  fill('#fffafa');
  ellipse(width * 0.5 + (mouseX - width * 0.5) * 0.01, height * 0.5, 500, 500);

  fill(13, 17, 21);
  beginShape();
  vertex(0, height);
  vertex(0, height);
  for (let x = 0; x < width; x += 10) {
    vertex(x + (mouseX - width * 0.5) * 0.05, ((noise(x / 100) * height * 0.2) + dist(width * 0.5, 0, x, 0) / 2 + height * 0.4) + height * 0.5 * 0.05);
  }
  vertex(width, height);
  vertex(width, height);
  endShape();
}

function mouseClicked() {
  noiseSeed(random(100000));
}