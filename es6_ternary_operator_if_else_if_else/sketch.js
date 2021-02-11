function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 1, 1, 1);
}

function draw() {
  background(220);

  (mouseX > 0 && mouseX < 100) ? background(0, 1, 0.6, 1):
    (mouseX > 100 && mouseX < 200) ? background(100, 1, 0.6, 1) :
    (mouseX > 200 && mouseX < 300) ? background(200, 1, 0.6, 1) :
    (mouseX > 300 && mouseX < 400) ? background(300, 1, 0.6, 1) :
    background(0, 1, 0.1, 1);
}