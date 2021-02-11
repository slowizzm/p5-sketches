const NUM_BTNS = 3,
  btns = [];

function setup() {
  // createCanvas(400, 400);

  for (let i = 0; i < NUM_BTNS; i++) {
    btns[i] = createButton(`button ${i}`);
    btns[i].position(i * 80, 0);

  }

  btns.forEach(btn => {
    btn.mousePressed(getButtonPressed);
  });

}

function getButtonPressed() {
  switch (this) {
    case btns[0]:
      console.log('btn 0 clicked');
      break;

    case btns[1]:
      console.log('btn 1 clicked');
      break;

    case btns[2]:
      console.log('btn 2 clicked');
      break;
  }
}

function draw() {
  background(220);
}