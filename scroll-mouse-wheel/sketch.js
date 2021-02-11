const scrollProperties = {
  y: null,
  spd: null
};

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);
}

function draw() {
  background(13,17,21);
  scrollProperties.y -= scrollProperties.spd;
  scrollProperties.spd /= 1.9;

  for (let i = height - (scrollProperties.y % 100); i > 0; i -= 100) {
    colorMode(RGB, 255, 255, 255, 255);
    strokeWeight(2);
    stroke('#fffafa');
    line(0, i, width, i);
  }
}

function mouseWheel(event) {
  scrollProperties.spd = event.delta;
}