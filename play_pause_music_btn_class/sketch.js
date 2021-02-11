//needs reworked to create be an audio controls class that spits out full media player control ui rather than individual buttons

//music from http://soundimage.org/wp-content/uploads/2017/05/Puzzle-Dreams-2.mp3

let btns = [],
  snd,
  onSoundEnd = _ => {
    if (btns[0].playState[0]) {
      console.info("sound finished");
      btns[0].playState[0] = false;
      btns[1].playState[1] = true;
    }
  };

function preload() {
  snd = loadSound('snd.mp3');
}

function setup() {
  createCanvas(400, 400);

  snd.setVolume(0.45);
  snd.onended(onSoundEnd);

  btnCol = [color('#83eBd1'), color('#72d2d0')];

  for (let i = 0; i < 2; i++) {
    if (i === 0) btns[0] = new AudioPlayer(width * 0.4, height * 0.5, 60, btnCol, 'play');
    if (i === 1) btns[1] = new AudioPlayer(width * 0.6, height * 0.5, 60, btnCol, 'stop');
  }
}

function draw() {
  background(33);

  btns.forEach(btn => btn.ui())

  if (btns[0].onHover()) {
    cursor('pointer');
  } else if (btns[1].onHover()) {
    cursor('pointer');
  } else {
    cursor();
  }
}

function mousePressed() {
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].onHover() && i === 0) {
      btns[i].btnState('play-pause');
    } else if (btns[i].onHover() && i === 1) {
      btns[i].btnState('stop');
    }
  }
}