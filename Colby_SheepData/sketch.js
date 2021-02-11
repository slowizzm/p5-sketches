let data;

const timer = {
  currentFrame: 0,
  delay: 1000,
  nextTimer: null,
}

function preload() {
  data = loadJSON('data/sheepdata.json', _ => {
    console.log(data);
  }, _ => {
    console.log('no data')
  });
}

function setup() {
  createCanvas(400, 400);
  timer.nextTimer = millis() + timer.delay;
}

function draw() {
  background('#1C1C1C');

  // if api responds with data
  if (data) {
    let lon = data.gpsLocation.dataPoint[timer.currentFrame].longitude;
    let lat = data.gpsLocation.dataPoint[timer.currentFrame].latitude;

    // draw lon/lat on canvas
    textSize(23);
    text(`lon: ${lon}`, width * 0.05, height * 0.1);
    text(`lat: ${lat}`, width * 0.05, height * 0.175);

    // map lat/lon to canvas
    let x = map(lat, 90, -90, 0, width);
    let y = map(lon, 0, 180, 0, height);
    x %= 1;
    y %= 1;

    // vis sheep
    noStroke();
    fill('#f8f8f8');
    text(String.fromCodePoint(0x1F411), map(x.toFixed(2), 0, 1, 0, width) - 10, map(y.toFixed(2), 0, 1, 0, height) + 10);

    // iterate through array once
    //   currentFrame = (currentFrame + 1) % data.gpsLocation.dataPoint.length;
    //   if (currentFrame > data.gpsLocation.dataPoint.length - 1) noLoop();

    runTimer();
  }
}

function runTimer() {
  if (millis() > timer.nextTimer) {
    timer.currentFrame++;
    if (timer.currentFrame >= data.gpsLocation.dataPoint.length) {
      timer.currentFrame = 0;
    }
    timer.nextTimer = millis() + timer.delay;
  }
}