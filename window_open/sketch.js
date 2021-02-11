let posx,
  posy,
  d,
  r = 200,
  w,
  h;


function setup() {
  createCanvas(400, 400);

  posx = width * 0.5;
  posy = height * 0.5;
}

function draw() {
  background('#51d0de');

  strokeWeight(2);
  stroke('#d9d9d9');
  fill('#bf4aa8');
  ellipse(posx, posy, r);
}

function mousePressed() {
  d = dist(mouseX, mouseY, posx, posy);
  if (d < r / 2) {
    window.open('https://www.w3schools.com/jsref/met_win_open.asp');
  }
}