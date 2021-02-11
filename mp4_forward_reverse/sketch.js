let btn, vid, forward = true,
  spd = 0;

function setup() {
  createCanvas(300, 150);
  vid = createVideo("pier.mp4");
  vid.loop()

  btn = createButton('click to play in reverse').mousePressed(_ => {
    forward = !forward;
  }).position(490, 400);
}


function draw() {

  if (forward) {
    spd += 0.05;
    btn.html('click to play in reverse');
  } else {
    spd -= 0.05;
    btn.html('click to play in forward');
  }

  vid.time(spd);

  if (spd > 4.544) {
    spd = 0;
  } else if (spd < 0) {
    spd = 4.544
  }
}