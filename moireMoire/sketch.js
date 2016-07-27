/* Raymond G McCord (slow_izzm)
   06/03/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/


var x,
    y,
    i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width;
  y = height;
  
  noCursor();
}

function draw() {
  background(255);

  for (var pat = 0; pat < 1600; pat += 6) {
    stroke(0);
    noFill();
    ellipse(width / 2, height / 2, mouseX - pat - i, mouseY - pat + i);
    // line(width / 2, height / 2, pat + i, height/2 - pat + i);


  }

  i += 1;
  if (i == width * 1.5) {
    i = -i;

  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
