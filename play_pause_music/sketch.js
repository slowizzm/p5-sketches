//music from http://soundimage.org/wp-content/uploads/2017/05/Puzzle-Dreams-2.mp3

let btnStart = [], // xpos,ypos
  btnPause = [],
  btnRad = 60, // radius
  btnCol, // button color
  isHovering = [false, false],
  isPlay = false,
  isStop = true,
  snd,
  onSoundEnd = _ => {
    if (isPlay) {
      console.info("sound finished");
      isPlay = false;
      isStop = true;
    }
  };

function preload() {
  snd = loadSound('snd.mp3');
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textSize(15);
  textFont('Avenir');
  textAlign(CENTER, CENTER);
  snd.setVolume(0.45);
  snd.onended(onSoundEnd);

  btnStart = [width * 0.4, height * 0.5]; // xpos,ypos
  btnPause = [width * 0.6, height * 0.5];
  btnCol = [color('#72d2d0'), color('#72d2d0')];
}

function draw() {
  background(33);

  startBtn();
  pauseBtn();


  if (isHovering[0]) {
    cursor('pointer');
    btnCol[0] = color('#83eBd1');
  } else if (isHovering[1]) {
    cursor('pointer');
    btnCol[1] = color('#83eBd1');
  } else {
    cursor();
    btnCol[0] = color('#72d2d0')
    btnCol[1] = color('#72d2d0')
  }
}

function startBtn() {
  let d = dist(mouseX, mouseY, btnStart[0], btnStart[1]);

  if (d <= (btnRad / 2)) {
    isHovering[0] = true;
  } else {
    isHovering[0] = false;
  }

  noStroke();
  fill(btnCol[0]);
  ellipse(btnStart[0], btnStart[1], btnRad);
  push();
  fill(33);
  translate(btnStart[0], btnStart[1]);

  if (!isPlay) {
    triangle(-10, -18, 18, 0, -10, 18);
  } else {
    rect(-10, 0, 10, 35);
    rect(10, 0, 10, 35);
  }
  pop();
}

function pauseBtn() {
  let d = dist(mouseX, mouseY, btnPause[0], btnPause[1]);

  if (d <= (btnRad / 2)) {
    isHovering[1] = true;
  } else {
    isHovering[1] = false;
  }

  noStroke();
  fill(btnCol[1]);
  ellipse(btnPause[0], btnPause[1], btnRad);
  push();
  fill(33);
  translate(btnPause[0], btnPause[1]);
  rect(0, 0, 30, 30);
  pop();
}

function musicControl() {
  if (isPlay && !isStop) {
    if (!snd.isPlaying()) {
      snd.play();
    }
  } else if (!isPlay && !isStop) {
    snd.pause();
  } else if (!isPlay && isStop) {
    snd.stop();
  }
}

function mousePressed() {
  if (isHovering[0]) {
    isPlay = !isPlay;
    isStop = false;
    musicControl();
  } else if (isHovering[1]) {
    isStop = true;
    isPlay = false;
    musicControl();
  }
}