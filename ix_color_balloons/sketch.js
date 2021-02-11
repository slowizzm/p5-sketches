const cols = ['rgba(208,196,170,0.3)',
    'rgba(143,211,194,0.3)',
    'rgba(238,200,97,0.3)',
    'rgba(239,167,89,0.3)',
    'rgba(228,147,137,0.3)'
  ],
  ltrs = ['C',
    'O',
    'L',
    'O',
    'R'
  ],
  balloons = [];

let colIdx = 0;

function setup() {
  createCanvas(375, 667);
  noStroke();
  for (let i = 1; i < 6; i++) {
    balloons.push(new Balloon(i * 60, height * 0.4, 77, cols[colIdx], ltrs[colIdx]));
    colIdx++;
  }
}

function draw() {
  background(251, 247, 235);
  push();
  textSize(13);
  textAlign(CENTER);
  fill(151, 147, 135);
  text("Click and drag balloon up or down, release to return.", width * 0.5, height * 0.05);
  pop();

  balloons.forEach((balloon, index) => {
    let startPos = createVector(balloon.pos.x, height * 0.4);
    (!balloon.isDraggable) ? balloon.render(1, startPos): balloon.update(0);
    balloon.display();
  });
}

function mousePressed() {
  balloons.forEach((balloon, index) => {
    let d = dist(mouseX, mouseY, balloon.pos.x, balloon.pos.y);
    if (d < balloon.size / 2.25) balloon.isDraggable = true;
  });
}

//touchEnded on mobile
function mouseReleased() {
  balloons.forEach(balloon => {
    balloon.isDraggable = false;
  });
}

//touchMoved on mobile
function mouseDragged() {
  balloons.forEach(balloon => {
    if (balloon.isDraggable) {
      if (balloon.checkIfBalloonReachedBottom()) {
        balloon.pos.y = height;
      } else if (balloon.checkIfBalloonReachedTop()) {
        balloon.pos.y = 0;
      } else {
        balloon.pos.y = mouseY;
      }
    }
  });
}