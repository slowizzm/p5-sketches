const pos = {},
  target = {};

function setup() {
  createCanvas(400, 400);
  noStroke();

  //set target positon
  target.x = width * 0.5;
  target.y = height * 0.5;

}

function draw() {
  background('#030711');

  //set smileyFace position
  pos.x = mouseX;
  pos.y = mouseY;


  //set angle to pass to smileyFace()
  let angleTo = radians((atan2(getDist().y, getDist().x) * 180 / PI));


  //vusuals
  drawTargetVisual();
  smileyFace(angleTo);

}

//get distance from smileyface to target to use in updating the angle
function getDist() {
  return {
    x: pos.x - target.x,
    y: pos.y - target.y
  }
}

function drawTargetVisual() {
  fill('yellow')
  ellipse(target.x, target.y, 13)
}

function smileyFace(angle) {
  translate(pos.x, pos.y);

  //update the angle based on the updateAngleTo() calculation
  rotate(angle);

  //face
  push();
  fill('yellow');
  ellipse(0, 0, 100);
  pop();

  //eyes
  push();
  fill('#131721');
  ellipse(20, -20, 20);
  ellipse(20, 20, 20);
  pop();

  //smile
  push();
  noFill();
  stroke('#131721');
  strokeWeight(3);
  translate(10, 0);
  rotate(radians(90));
  arc(0, 0, 80, 80, 0.1 * PI, 0.9 * PI);
  pop();
}