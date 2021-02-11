const NUM_SNGS = 2,
  sng_src = ['https://archive.org/serve/kzz003/01_-_james_scott_-_frog_legs_rag.mp3', 'https://archive.org/serve/kzz003/07_-_joe_rosey_-_out_of_the_east.mp3'],
  sngs = [],
  vols = [],
  volRange = {
    min: 0,
    max: 0.15
  };

function preload() {
  for (let i = 0; i < NUM_SNGS; i++) {
    sngs[i] = loadSound(sng_src[i]);
  }
}

function setup() {
  createCanvas(720, 400);

  sngs.forEach(sng => {
    sng.play();
    sng.loop();
  });
}

function draw() {
  background(230);

  vols[0] = map(mouseX, 0, width, volRange.min, volRange.max);
  vols[1] = map(mouseX, 0, width, volRange.max, volRange.min);

  vols.forEach(vol => {
    constrain(vol, volRange.min, volRange.max);
  });
  sngs.forEach((sng, idx) => {
    sng.amp(vols[idx]);
  });
}