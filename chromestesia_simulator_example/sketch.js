let img;
let cols = [],
  r = 0,
  g = 0,
  b = 0,
  alphaMax = 60,
  keys = 3,
  keysDown = [];

for (let i = 0; keys.length; i++) {
  keysDown.push(false);
}


function preload() {
  img = loadImage('https://picsum.photos/800/600/?random'); //grabbing random image from lorem picsum
}

function setup() {
  createCanvas(800, 600);

  cols = [color('rgb(255,0,0)'), color('rgb(0,255,0)'), color('rgb(0,0,255')];
}

function draw() {
  image(img, 0, 0);

  updateTint();
  updateNotes();
}


function updateNotes() {
  if (keysDown[0]) {
    fill(255, 0, 0, 200);
    rect(150, 375, 70, 225);
  } else {
    fill(255, 200);
    rect(150, 375, 70, 225);
  }

  if (keysDown[1]) {
    fill(0, 255, 0, 200);
    rect(220, 375, 70, 225)
  } else {
    fill(255, 200);
    rect(220, 375, 70, 225)
  }
}

function updateTint() {
  if (keyIsDown(65)) { //press a
    push();

    cols[0].setAlpha(r)
    fill(cols[0])
    rect(0, 0, width, height)
    pop();

    if (r <= alphaMax) {
      r++
    }

    keysDown[0] = true;

  } else {
    push();

    cols[0].setAlpha(r)
    fill(cols[0])
    rect(0, 0, width, height)
    pop();

    if (r >= 0) {
      r--
    }

    keysDown[0] = false;
  }

  if (keyIsDown(83)) { //press s
    push();

    cols[1].setAlpha(g)
    fill(cols[1])
    rect(0, 0, width, height)
    pop();

    if (g <= alphaMax) {
      g++
    }

    keysDown[1] = true;

  } else {
    push();

    cols[1].setAlpha(g)
    fill(cols[1])
    rect(0, 0, width, height)
    pop();

    if (g >= 0) {
      g--
    }

    keysDown[1] = false;
  }
}