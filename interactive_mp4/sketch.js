let vid;

function setup() {
  createCanvas(500, 150);
  vid = createVideo("pier.mp4", logVideoDuration);
  vid.loop();
}

function logVideoDuration() {
  console.log(`duration: ${vid.duration()}`)
}

function draw() {
  vid.time(map(mouseX, 0, vid.width, 0, 4.45));
}