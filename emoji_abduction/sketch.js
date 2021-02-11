// emojis fromCodePoint - https://emojipedia.org/emoji/
// replace U+ with 0x

const cows = [],
  cowsNum = 42;

let ufo,
  col1, col2, col3, col4,
  sunPos;



setup = () => {
  createCanvas(windowWidth, 576);

  col1 = color('#131862');
  col2 = color('#138510');
  sunPos = {
    x: random(width * 0.75, width * 0.8),
    y: random(height * 0.25, height * 0.3)
  };

  ufo = new Ufo();
  for (let i = 0; i < cowsNum; i++) {
    cows.push(new Cow());
  }

  textAlign(CENTER, CENTER);
  noCursor();

}

draw = () => {
  clear();
  setGradient(0, height * 0.7, width, height, col1, col2);
  sun();
  cows.forEach(cow => cow.render());
  ufo.render();
}

const sun = () => {
  push();
  fill(255)
  textSize(150);
  text(String.fromCodePoint(0x1F31E), sunPos.x, sunPos.y);
  textSize(280);
  text(String.fromCodePoint(0x2601), sunPos.x + 80, sunPos.y + 70);
  pop();
}

const setGradient = (x, y, w, h, c1, c2) => {
  push();
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
  pop();
}