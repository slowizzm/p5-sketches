const sqr = [];

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
  for (let i = 0; i < 1; i++) {
    sqr[i] = new Sqr(random(30));
  }

  setInterval(_ => {
    sqr.push(new Sqr(random(30)));
  }, random(500, 1000));
}

function draw() {
  background(13, 17, 21);
  for (let i = 0; i < sqr.length; i++) {
    sqr[i].render();

    if (sqr[i].a < -10) sqr.splice(0, 1);
  }
}

function windowResized() {
  resizeCanvas(windowWidth - 4, windowHeight - 4);
}