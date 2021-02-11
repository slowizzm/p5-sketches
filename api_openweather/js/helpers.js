function getTempHue(currentTemp) {
  let maxHue = 360;
  let minHue = 170;
  let rngHue = maxHue - minHue;

  let maxTemp = 210;
  let minTemp = -10;
  let rngTemp = maxTemp - minTemp;
  let degCnt = maxTemp - currentTemp;
  let hslsDeg = rngHue / rngTemp;
  let returnHue = (360 - ((degCnt * hslsDeg) - (maxHue - 360)));
  return returnHue;
}

function thermometer() {
  let mapTemp = map(weather.main.temp, -10, 210, height * 0.675, height * 0.275);

  let mapTempCol = map(weather.main.temp, -10, 210, 360, 0);

  //outline of thermometer
  rectMode(CENTER);
  strokeWeight(5);
  stroke(0, 0, 0.75, 1);
  noFill();
  rect(width * 0.5, height * 0.5, 30, 270);

  //bulb fill
  fill(getTempHue(weather.main.temp), 0.9, 0.4, 1);
  ellipse(width * 0.5, height * 0.79, 100);

  //mercury fill
  stroke(getTempHue(weather.main.temp), 0.9, 0.4, 1);
  strokeWeight(1);
  strokeCap(PROJECT);
  rectMode(CORNERS);
  rect(width * 0.5 + 12, height * 0.725, width * 0.5 - 12, mapTemp);



  //temp
  noStroke();
  fill(200, 1, 0.7, 1)
  textSize(12);
  textAlign(RIGHT, CENTER);
  text(weather.main.temp, 180, mapTemp);

  //temp line
  stroke(200, 1, 0.7, 1);
  strokeWeight(2);
  line(100, mapTemp, 130, mapTemp);
}