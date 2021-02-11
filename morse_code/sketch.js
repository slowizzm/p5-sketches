let morse, curr_key = "";

const timer = {
  delay: 150,
  start: null,
  stop: null,
  running: false
};

let charcount = 0,
  char_idx = 0;

const scaleArray = 60;
let osc,
  envelope,
  fft,
  note = 0;


function preload() {
  morse = loadJSON("morse.json");
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 1, 1, 1);

  textAlign(CENTER);
  textSize(33);
  fill(200, 0.9, 0.7, 1);

  audioInit();
}

function draw() {
  background(30, 0.1, 0.1, 1);
  push();
  textSize(20);
  fill(100, 0.7, 0.4, 1);
  text('press a-z | 0-9 | for morse code', width * 0.5, height * 0.15);
  pop();

  timerState();

  if (char_idx <= charcount.length) {
    if (!timer.running) {
      // startLoop();
      if (charcount.charAt(char_idx - 1) == '•') {

        startLoop(100);
        playNote(1)
      } else if (charcount.charAt(char_idx - 1) == '—') {

        startLoop(300);
        playNote(0);
      }
    }
    text(morse[curr_key], width * 0.5, height * 0.5);
    text(curr_key, width * 0.5, height * 0.8);
  }
}


function keyPressed(e) {
  if (morse.hasOwnProperty(e.key)) {
    curr_key = e.key.toLowerCase()
    charcount = morse[curr_key].replace(/\s+/g, '')
    char_idx = 0;
  } else {
    curr_key = '';

  }
}