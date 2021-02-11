const floaters = [];

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
  noStroke();
}

function draw() {
  background(13, 17, 21);

  for (let i = 0; i < floaters.length; i++) {
    floaters[i].render();

    if (floaters[i].pos.y >= height + 13) floaters.splice(i, 1);
  }
}

function mousePressed() {
  floaters.push(new Floater(33 * random() + 3, mouseX, mouseY));
}