// https://editor.p5js.org/slow_izzm/sketches/ky6EaaeAf

let combo_index = 0,
  bg_col,
  currentFrame = 0,
  canShow = false,
  passwordEnabled = false,
  txt_msg = 'enabled';

const timer = {
  delay: 2000,
  start: null,
  stop: null,
  running: false
};

function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 1, 1, 1);
  textAlign(CENTER, CENTER);
  textSize(100);
  bg_col = color(267, 0.7, 0.5, 1);
}

function draw() {
  background(bg_col);
  if (isTimerRunning()) {
    push();
    fill(30, 0.1, 0.2, 1);
    text(txt_msg, width * 0.5, height * 0.5);
    pop();
  }

  if (passwordEnabled) {
    push();
    noStroke();
    fill(30, 0.1, 0.2, 1);
    rect(width * 0.1, height * 0.85, 30, 30);
    pop();
  }
}

function keyPressed(e) {
  e.key.toLowerCase();
  const combo = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  // console.log(e.key);

  (e.key == combo[combo_index]) ? combo_index++ : combo_index = 0;

  if (combo_index == combo.length) {
    combo_index = 0;
    updateBodyColor()
    timerState()
  }
}

const updateBodyColor = _ => {
  bg_col = color(random(360), 0.7, 0.5, 1);
}