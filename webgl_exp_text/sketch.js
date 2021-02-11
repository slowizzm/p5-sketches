let _text;

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4, WEBGL);

  _text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
  _text.textFont('Source Code Pro');
  _text.textAlign(CENTER);
  _text.textSize(133);
  _text.fill(3, 7, 11);
  _text.noStroke();
  _text.text('test', width * 0.5, height * 0.5);
}

function draw() {
  background(217);
  noStroke();
  texture(_text);
  rotateY(map(mouseX, 0, width, 0, 3));
  plane(window.innerWidth - 4, window.innerHeight - 4);
}