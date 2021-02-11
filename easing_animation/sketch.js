let anim;

function setup() {
  createCanvas(400, 400);

  anim = new Anim({
    x: width * 0.5,
    y: height * 0.5
  }, 33);
}

function draw() {
  background('#ffafa');
  anim.run();
}