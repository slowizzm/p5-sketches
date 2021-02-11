let temp = 30;

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

function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 1, 1, 1);

  console.log(getTempHue(temp));
  background(getTempHue(temp), 1, 0.45, 1);
}