let expElt, lowerBackground;

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  colorMode(HSL, 360, 1, 1, 1);
  rectMode(CENTER);
  lowerBackground = color(200, 0.4, 0.5, 1);

  expElt = new ExpandElt(width * 0.5, height * 0.485, 0.5, 0, 13);
}

function draw() {
  background(0, 0.1, 0.075, 1);

  drawLowerBackground();
  expElt.show();
}

//function to draw the lower background
function drawLowerBackground() {
  noStroke();
  fill(lowerBackground);
  rect(width * 0.5, height, width, height);
}

function mouseClicked() {
  //update bottom background color if the mouse is hovering the button and clicked
  if (expElt.hover(expElt.pos, expElt.res))
    lowerBackground = color(floor(random(360)), 0.4, 0.5, 1);
}