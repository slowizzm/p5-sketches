let aud;
let amp;
let sceneReact;
let windowsReact;
let building;
let buildings = [];
let windows = [];
let lamp, lampPost;
let rand = 0;
let witch;
let witchOnBroom;
let drops = [];
let scene;

let audsource = 'assets/audio/spooky_hip_hop_beat_slowed.mp3';

let sceneReactAmount = 42;
let windowsReactAmount = 33;

function preload() {
  aud = loadSound(audsource);
}

function setup() {
  createCanvas(1300, 1200);
  colorMode(HSL, 360, 100, 100, 1);

  amp = new p5.Amplitude();
  amp.setInput(aud);
  aud.setLoop(true);

  styleSetup();

  rand = random(70, 100);


  witchOnBroom = new WitchOnBroom();

  for (let i = 0; i < 13; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  clear();

  sceneReact = amp.getLevel();
  sceneReact = map(sceneReact, 0, 1, 200, 360);
  windowsReact = amp.getLevel();
  windowsReact = map(windowsReact, 0, 1, 0, 360);

  SceneSetup(rand);
  witchOnBroom.render();

  for (let i = 0; i < drops.length; i++) {
    drops[i].render();
  }

  if (aud.isPlaying()) {
    lampPost.style('fill', `hsla(0,80%,${random(80,90)}%,1`);
  } else {
    lampPost.style('fill', 'hsla(0,80%,100%,1');
  }

  if (frameCount > 10) {
    scene.style('display', 'block');
    lamp.style('display', 'block');
  }
}



function mousePressed() {
  if (aud.isPlaying()) {
    aud.pause();
  } else {
    aud.play();
  }
}