function setup() {
  createCanvas(400, 400);
  background('#f8f8f8');
  rectMode(CENTER);
  noFill();
  stroke('#131721');
}

// let d = 10;
function draw() {
  background('#f8f8f8');
  let parallaxScaler = 2;
  let depthAmt = 50;
  for (let i = 0; i < depthAmt; i++) {
    let mX = map(mouseX, 0, width, i * parallaxScaler, -i * parallaxScaler);
    let mY = map(mouseY, 0, height, i * parallaxScaler, -i * parallaxScaler);
    strokeWeight(i / 20);
    rect((width / 2) + mX, (height / 2) + mY, i * (i / 4), i * (i / 4), (i / 10));
  }
}