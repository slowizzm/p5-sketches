const slot_frames = [],
  NUM_FRAMES = 3,
  timer = {
    delay: 100,
    spd: 10,
    inc: 0,
    nextTimer: 0,
    slowDown: Math.random() * (80 - 120) + 80
  }

let currentFrame = Math.floor(Math.random() * Math.floor(NUM_FRAMES));

let spriteSheet,
  spriteData,
  weapons = [];

let spriteSheetURL = 'https://dl.dropboxusercontent.com/s/tpuz6tjx7rwmcqj/complete_width448.png?dl=0',
  jsonDataURL = `https://dl.dropboxusercontent.com/s/gbw0ermcqe1c9tr/weapons.json?dl=0`;

function preload() {
  spriteSheet = loadImage(spriteSheetURL);
  spriteData = loadJSON(jsonDataURL);
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);

  // get and store sprites from sprite sheet
  let frames = spriteData.frames;
  //iterate through each object in the array
  for (let i = 0; i < frames.length; i++) {
    //store the object in data
    let data = frames[i].position;
    //push the pixels from the sprite sheet into the weapons array
    weapons[i] = spriteSheet.get(data.x, data.y, data.w, data.h);
    weapons[i].resize(64, 64);
  }
  timer.nextTimer = millis() + timer.delay
}

function draw() {
  clear();

  image(weapons[currentFrame], width * 0.5, height * 0.5);

  if (timer.delay != 2100) {
    if (millis() > timer.nextTimer) {
      timer.inc += 10;

      if (timer.inc >= timer.slowDown + 50) {
        timer.delay += 500;
        timer.delay = 2100;
      } else if (timer.inc >= timer.slowDown + 20) {
        timer.delay += 250;
      } else if (timer.inc >= timer.slowDown) {
        timer.delay += 100;
      }

      currentFrame++;

      if (currentFrame >= weapons.length) {
        currentFrame = 0;
      }
      timer.nextTimer = millis() + timer.delay;
    }
  }

  button();
}

function button() {
  let btn = {
    x: width * 0.5,
    y: height * 0.8,
    w: 80,
    h: 40
  }
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(18);
  noStroke();
  fill(200);
  text('spin', btn.x, btn.y)
  stroke(200);
  noFill();
  rect(btn.x, btn.y, 80, 40);

  return (mouseX > btn.x - (btn.w * 0.5) && mouseX < btn.x + (btn.w * 0.5) && mouseY > btn.y - (btn.h * 0.5) && mouseY < btn.y + (btn.h * 0.5));
}


function mousePressed() {
  if (button()) {
    timer.delay = 100;
    timer.spd = 10;
    timer.inc = 0;
    timer.nextTimer = 0;
    timer.slowDown = Math.random() * (80 - 120) + 80;
  }
}