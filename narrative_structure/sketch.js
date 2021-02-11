const imgs = [],
  NUM_IMGS = 2;

// inputs 
let nameInput,

  greeting,
  title,
  firstOption,
  secondOption,
  mode;

preload = _ => {
  for (let i = 0; i < NUM_IMGS; i++) {
    imgs[i] = loadImage(`assets/images/img${i}.jpg`);
  }
}

setup = _ => {
  let canvas = createCanvas(640, 360);
  canvas.position(0, 0);
  canvas.style('z-index', -1);
  imageMode(CENTER);
  startNarrative();
}

draw = _ => {
  let growRate = 0.001;

  if (mode == 'mountain') {
    push()
    translate(width * 0.5, height * 0.5);
    image(imgs[1], 0, 0, imgs[1].width * fc, imgs[1].height * fc);
    pop();
    if (!checkImgScl()) fc += growRate;
  } else if (mode == 'forest') {
    push()
    translate(width * 0.5, height * 0.5);
    image(imgs[0], 0, 0, imgs[0].width * fc, imgs[0].height * fc);
    pop();
    if (!checkImgScl()) fc += growRate;
  }
}

const checkImgScl = _ => {
  return (fc >= 1.05);
}