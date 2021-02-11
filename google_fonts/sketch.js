setup = _ => {
  createCanvas(400, 400);

  background('#343434');
  fill('#f8f8f8');
  textFont("JetBrains Mono");
  textSize(32);
  textAlign(CENTER, CENTER);
  text('JetBrains Mono', width * 0.425, height * 0.295);
  text('font from google', width * 0.5, height * 0.5, 200, 200);
}