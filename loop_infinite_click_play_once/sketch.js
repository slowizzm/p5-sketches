//Timer on left loops at 20
//Start button stops, hides, and resets timer on left and starts timer on right
// Timer on right plays till count is 100 then hides, resets to 0, and button/timer on left unhides and starts

let btnPosX = 300,
  btnPosY = 330,
  btnWidth = 130,
  btnHeight = 60,
  isHovering = false,
  startScene = false,
  sceneOneIndex = 0.0,
  sceneTwoIndex = 0.0,
  loopPlayLength = 30,
  playOnceLength = 60;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textSize(30);
  textFont('Avenir');
  textAlign(CENTER, CENTER);
}

function draw() {
  background(33);
  push();
  noStroke();
  fill(242);
  rectMode(CORNER);
  rect(width / 2, 0, width / 2, height);
  pop();

  onStartBtnHover();
  sceneControl();
}

function onStartBtnHover() {
  if (mouseX >= btnPosX - (btnWidth / 2) &&
    mouseX <= btnPosX + (btnWidth / 2) &&
    mouseY >= btnPosY - (btnHeight / 2) &&
    mouseY <= btnPosY + (btnHeight / 2) && !startScene) {
    isHovering = true;
    cursor('pointer');
  } else {
    isHovering = false;
    cursor();
  }
}

function sceneControl() {
  if (startScene) {
    push();
    fill(33);
    text('PLAY ONCE', width * 0.75, height * 0.1);
    text(`${floor(sceneTwoIndex)}`, width * 0.75, height / 2);
    pop();
    sceneTwoIndex += 0.1;
  }

  if (sceneTwoIndex >= playOnceLength && startScene) {
    startScene = false;
  }

  if (!startScene) {
    noStroke();
    push();
    fill(33);
    rect(btnPosX, btnPosY, btnWidth, btnHeight, 7);
    pop();
    push();
    fill(242);
    text('START', btnPosX, btnPosY);
    pop();
    push();
    fill(242);
    text('LOOP', width * 0.25, height * 0.1);
    text(`${floor(sceneOneIndex)}`, width * 0.25, height / 2);
    pop();

    sceneOneIndex = (sceneOneIndex + 0.1) % loopPlayLength;
  }
}

function mousePressed() {
  if (isHovering) {
    sceneOneIndex = 0;
    sceneTwoIndex = 0;
    startScene = true;
  }
}