const izzm = {
  zero: 'red',
  one: 'orange',
  two: 'yellow',
  three: 'green',
  four: 'blue',
  five: 'indigo',
  six: 'violet'
}

let randState;

function setup() {
  let c = createCanvas(400, 400);
  background(51);
  c.mouseClicked(RandNum);
  fill(217);
  textAlign(CENTER);
  textFont('Source Code Pro');
  textSize(42);
}

function draw() {
  background(220);

  switch (randState) {
    case 0:
      background(izzm.zero);
      text(izzm.zero, width * 0.5, height * 0.5);
      break;
    case 1:
      background(izzm.one);
      text(izzm.one, width * 0.5, height * 0.5);
      break;
    case 2:
      background(izzm.two);
      text(izzm.two, width * 0.5, height * 0.5);
      break;
    case 3:
      background(izzm.three);
      text(izzm.three, width * 0.5, height * 0.5);
      break;
    case 4:
      background(izzm.four);
      text(izzm.four, width * 0.5, height * 0.5);
      break;
    case 5:
      background(izzm.five);
      text(izzm.five, width * 0.5, height * 0.5);
      break;
    case 6:
      background(izzm.six);
      text(izzm.six, width * 0.5, height * 0.5);
      break;
    default:
      background(3, 13, 9);
      text('Click Me', width * 0.5, height * 0.5);
      break;
  }
}

function RandNum() {
  randState = floor(random(7));
}