let seeker;

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);

  seeker = new Seeker();
}

function draw() {
  clear();
  seeker.run();
}