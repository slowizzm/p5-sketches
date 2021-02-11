//sprite created by dogchicken - https://opengameart.org/content/skull-monster-sprite-sheet

let img_zombie = [],
  NUM_IMAGES = 19,
  imgScale = 1.25,
  index = 0,
  btn_prev, btn_nxt,
  btnIsActive = [false, true];

function preload() {
  for (let i = 0; i < NUM_IMAGES; i++) {
    img_zombie[i] = loadImage("zombie/zombie" + i + ".png");
  }
}

function setup() {
  createCanvas(200, 200);
  frameRate(12);

  btn_prev = createButton('prev');
  btn_prev.hide();
  btn_prev.position(20, height + 20);

  btn_nxt = createButton('next');
  btn_nxt.position(width - 70, height + 20);

  btn_prev.mousePressed(_ => {
    getNewImageInSequence.call(this, 'prev')
  });

  btn_nxt.mousePressed(_ => {
    getNewImageInSequence.call(this, 'nxt')
  });

  console.log('current image ' + (index + 1) + ' of ' + img_zombie.length);
}

function draw() {
  background(220);

  displayImage();
  updateButtonStyle();
}

function displayImage() {
  image(img_zombie[index], width * 0.45, height * 0.35, img_zombie[index].width * imgScale, img_zombie[index].height * imgScale);
}


function getNewImageInSequence(btn) {

  if (btn === 'prev') {
    index--;
  } else if (btn === 'nxt') {
    index++;
  }
  if (index <= 0) {
    index = 0;
    btnIsActive[0] = false
    btnIsActive[1] = true
  } else if (index >= 18) {
    index = 18;
    btnIsActive[0] = true
    btnIsActive[1] = false
  } else {
    btnIsActive[0] = true
    btnIsActive[1] = true
  }
  // console.clear();
  console.log(`current image  ${(index + 1)} of ${img_zombie.length}`);
}

function updateButtonStyle() {

  if (!btnIsActive[0]) {
    btn_nxt.show();
    btn_prev.hide();
  } else if (!btnIsActive[1]) {
    btn_prev.show();
    btn_nxt.hide();
  } else {
    btn_prev.show();
    btn_nxt.show();
  }
}