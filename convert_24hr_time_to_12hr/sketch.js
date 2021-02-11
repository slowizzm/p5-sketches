let times = [];

function setup() {
  createCanvas(400, 400);
  textSize(33);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(220);
  times[0] = hour();
  times[1] = minute();
  times[2] = second();
  times = nf(times, 2);

  let hr = times[0];
  if (hr >= 12) hr = times[0] - 12;
  if (hr == 0) hr = 12;

  text(`${hr} : ${times[1]} : ${times[2]}`, width * 0.5, height * 0.5);
}