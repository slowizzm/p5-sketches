//sprite created by dogchicken - https://opengameart.org/content/skull-monster-sprite-sheet

const zombie = [],
  NUM_IMAGES = 19;

let isPlay = false,
  index = 0,
  button;

function preload() {
  for (let i = 0; i < NUM_IMAGES; i++) {
    zombie[i] = loadImage(`zombie/zombie${i}.png`);
  }
}

function setup() {
  createCanvas(200, 200);
  frameRate(12);

  button = createButton('play');
  button.class('btn-elt');
  button.position(5, height * 1.05);

  //invokes playSprite function when button is clicked to toggle play/stop and set button text
  button.mousePressed(toggleAnimationState);
}

function draw() {
  background(220);

  animateImageSequence();
}

function toggleAnimationState() {
  isPlay = !isPlay;

  (isPlay) ? button.html('stop'): button.html('play');
}

function animateImageSequence() {
  if (isPlay) {
    //iterates through the array index to animate image sequence
    image(zombie[index], width * 0.5, height * 0.5);
    index = (index + 1) % zombie.length; //restarts loop when index equals 0
  } else {
    image(zombie[index], width * 0.5, height * 0.5);
  }
}