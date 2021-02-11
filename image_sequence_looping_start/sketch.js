let btnPosX = 100,
  btnPosY = 430,
  btnWidth = 110,
  btnHeight = 60,
  isHovering = false,
  startScene = false,
  loopIndex = 0,
  playOnceIndex = 0,
  imgs_loop = [],
  imgs_playOnce = [];

const NUM_PLAY_ONCE = 322,
  NUM_LOOP = 32;

function preload() {
  for (let i = 0; i < NUM_LOOP; i++) {
    imgs_loop[i] = loadImage(`assets/images/loop/loop${i}.jpg`);
  }

  for (let i = 0; i < NUM_PLAY_ONCE; i++) {
    imgs_playOnce[i] = loadImage(`assets/images/play-once/play-once${i}.jpg`);
  }
}

function setup() {
  createCanvas(960, 540);
  imageMode(CENTER);
  rectMode(CENTER);
  textFont('Avenir');
  textSize(30);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(33);

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
  if (!startScene) {
    image(imgs_loop[loopIndex], width * 0.5, height * 0.5, imgs_loop[loopIndex].width * 0.5, imgs_loop[loopIndex].height * 0.5);
    loopIndex = (loopIndex + 1) % imgs_loop.length;
    noStroke();
    fill(33, 180);
    rect(btnPosX, btnPosY, btnWidth, btnHeight,7);
    push();
    fill(242);
    text('START', btnPosX, btnPosY+5);
    pop();
  }

  if (startScene) {
    image(imgs_playOnce[playOnceIndex], width * 0.5, height * 0.5, imgs_playOnce[playOnceIndex].width * 0.5, imgs_playOnce[playOnceIndex].height * 0.5);
    playOnceIndex++;
  }

  if (playOnceIndex >= 322 && startScene) {
    startScene = false;
  }
}

function mousePressed() {
  if (isHovering) {
    loopIndex = 0;
    playOnceIndex = 0;
    startScene = true;
    // console.log(startScene);
  }
}