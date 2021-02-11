//click and hold to record

const photoAlbum = [],
  photoProps = {
    x: 0,
    y: 0,
    w: null,
    h: null
  };
let video,
  slider,
  col,
  btnPlay, btnRecord, isPressed = false,
  idx = 0,
  newAlbum = [];

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  col = tint(255, 255, 0);

  photoProps.w = width;
  photoProps.h = height;

  btnRecord = new Button({
    x: width * 0.4,
    y: height * 0.8,
    w: 80,
    h: 40
  }, 'record');

  btnPlay = new Button({
    x: width * 0.6,
    y: height * 0.8,
    w: 80,
    h: 40
  }, 'play');
}

function draw() {

  background(51);
  if (newAlbum.length > 0) {
    image(newAlbum[idx], photoProps.x, photoProps.y, photoProps.w, photoProps.h);

    if (isPlay) {
      idx = (idx + 1) % newAlbum.length;
    }
  }

  btnRecord.display();
  btnPlay.display();

  if (mouseIsPressed) {
    if (!isRecording) photoAlbum.length = 0;
    isRecording = true;
    if (btnRecord.hover()) photoAlbum.push(video.get());
  } else {
    isRecording = false;
  }
}

function mousePressed() {
  if (btnPlay.hover()) {
    newAlbum.length = 0;
    photoAlbum.forEach(p => {
      newAlbum.push(p);
    });

    shuffle(newAlbum);

    newAlbum = shuffle(photoAlbum)
  }

  isPressed = true;

  if (btnPlay.hover()) {
    idx = 0;
    isPlay = true;
    console.log(isPlay)
    console.log(newAlbum.length)
  }
}

function mouseReleased() {
  isPressed = false;
}




class Button {
  constructor(props, txt) {
    this.btn = {
      x: props.x,
      y: props.y,
      w: props.w,
      h: props.h
    }

    this.txt = txt;
  }

  display() {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(18);
    noStroke();
    fill(200);
    text(this.txt, this.btn.x, this.btn.y)
    stroke(200);
    (this.hover()) ? fill(200, 100): noFill();
    rect(this.btn.x, this.btn.y, 80, 40);
  }

  hover() {
    return (mouseX > this.btn.x - (this.btn.w * 0.5) && mouseX < this.btn.x + (this.btn.w * 0.5) && mouseY > this.btn.y - (this.btn.h * 0.5) && mouseY < this.btn.y + (this.btn.h * 0.5));
  }
}