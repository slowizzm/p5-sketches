/* Raymond G McCord (slow_izzm)
   07/24/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(33);
  translate(windowWidth / 2, windowHeight / 2);

  for (var i = 0; i < 360; i += 0.3) {
    var x = sin(radians(i)) * 2 + sin(radians(i + i - frameCount * 2)) * 100;
    var y = cos(radians(i)) * 2 + cos(radians(i + i - frameCount * 0.7)) * 100;
    var x2 = sin(radians(i)) * 3 + sin(radians(i + i - frameCount * 2)) * 100;
    var y2 = cos(radians(i)) * 3 + cos(radians(i + i - frameCount * 0.7)) * 100;
    var d = map(i, 0, 140, 3, 0);
    fill(255);
    ellipse(x, y, x2, y2);
  }
}

function windowReisized() {
  resizeCanvas(windowWidth, windowHeight);
}
