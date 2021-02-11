let msks = [];
let mskClones = [];

let mskGraphic;

function setup() {
  createCanvas(400, 200);
  for (let i = 0; i < 2; i++) {
    msks[i] = createGraphics(width, height);
    msks[i].rectMode(CENTER);
  }

  mskGraphic = createGraphics(width, height);
  rectMode(CENTER);
}

function draw() {
  background(3);
  mskGraphic.clear();
  msks[0].rect(width * 0.25, height * 0.5, 100, 100);
  msks[1].rect(width * 0.75, height * 0.5, 100, 100);

  //graphic visual when not masked
  mskGraphic.ellipse(mouseX, mouseY, 25, 25);

  //masks
  for (let i = 0; i < msks.length; i++) {
    (mskClones[i] = msks[i].get()).mask(mskGraphic.get());
    image(mskClones[i], 0, 0);
  }

  //bounding boxes
  stroke(233);
  strokeWeight(1);
  noFill();
  rect(width * 0.25, height * 0.5, 100, 100);
  rect(width * 0.75, height * 0.5, 100, 100);
}