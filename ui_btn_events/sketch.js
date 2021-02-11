// Animations
let anim;

// Button grid
let buttons = [];

function setup() {
  createCanvas(640, 480);
  anim = new Bokehs();

  buttons = [
    new Button(width * 0.25, height * 0.85, 33),
    new Button(width*0.5, height * 0.85, 33),
    new Button(width * 0.75, height * 0.85, 33)
  ];

  anim.init();
}

function draw() {
  background(0);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].over();
  }

  if (buttons[0].clicked) {
    anim.one();
  } else if (buttons[1].clicked) {
    anim.two();
  } else if (buttons[2].clicked) {
    anim.three();
  }

  blendMode(ADD);
  anim.display();
  blendMode(BLEND);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].display();
  }
  // filter(DILATE);
}