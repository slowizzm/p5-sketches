let num = 0;

function setup() {
  const ctx = createCanvas(600, 400);
  ctx.mouseClicked(_ => {
    num = random()
  });
  background('#FFFAFA');
  textAlign(CENTER);
}

function draw() {
  background('#FFFAFA');
  fill(33);
  textSize(25);
  text('Click canvas to get random number from 0 and 1', width * 0.5, height * 0.3);
  textSize(80);
  text(num.toFixed(1), width * 0.5, height * 0.6);
}