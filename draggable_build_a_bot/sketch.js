/*
to do: 
avoid dragging multiple parts - check closest part and set all others to undraggable
*/

const bots = [],
  NUM_PARTS = 6,
  snds = [],
  NUM_SNDS = 2,
  botGrid = [];

let partsSnapped = 0,
  snapSndHasPlayed = false,
  showSuccess = false,
  snd_dur = null,
  img_bot,
  cols, rows;

for (let i = 0; i < NUM_PARTS; i++) {
  bots[i] = {};
  bots[i].res = {};
  bots[i].startPos = {};
  bots[i].snapZone = {};
}

function preload() {
  /*
img0     head
img1     torso
img2     left_arm
img3     right_arm
img4     left_leg
img5     right_leg
*/
  for (let i = 0; i < NUM_PARTS; i++) {
    bots[i].part = loadImage(`assets/images/bot0/part/img${i}.png`);
    bots[i].highlight = loadImage(`assets/images/bot0/highlights/highlight${i}.png`);
  }

  for (let i = 0; i < NUM_SNDS; i++) {
    snds[i] = loadSound(`assets/sound/snd${i}.mp3`);
  }

  img_bot = loadImage('assets/images/bot0/bot.png');
}

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
  imageMode(CENTER);

  initSnapZones();

  for (let i = 0; i < NUM_PARTS; i++) {
    bots[i].res.w = bots[i].part.width;
    bots[i].res.h = bots[i].part.height;
    bots[i].startPos.x = (i + 1) * (width / NUM_PARTS) - width * 0.05;
    bots[i].startPos.y = random(height * 0.8, height * 0.9);

    bots[i].botPart = new BotPart({
        x: bots[i].startPos.x,
        y: bots[i].startPos.y
      }, {
        w: bots[i].res.w,
        h: bots[i].res.h
      },
      snds[0],
      bots[i].highlight);

    bots[i].botPart.setSnapZone(bots[i].snapZone);
  }

  snds[1].onended(_ => {
    showSuccess = true;
  });
  snd_dur = snds[1].duration();

  gridSetup();
}

function draw() {
  background('#FFFAFA');

  checkIfSuccess();

  for (let i = 0; i < bots.length; i++) {
    bots[i].botPart.render(bots[i].part);
  }

  checkIfSoundShouldPlay();
  drawTitle();
  drawInstructions();
}

function mousePressed() {
  for (let i = 0; i < bots.length; i++) {
    if (bots[i].botPart.hover()) {
      bots[i].botPart.isDraggable = true;
      bots[i].botPart.offset.x = bots[i].botPart.pos.x - mouseX;
      bots[i].botPart.offset.y = bots[i].botPart.pos.y - mouseY;
    }
  }
}

function mouseReleased() {
  for (let i = 0; i < bots.length; i++) {
    bots[i].botPart.isDraggable = false;
  }
}