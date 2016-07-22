/* Raymond G McCord (slow_izzm)
   07/07/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

var amt = 33,
  res = 67,
  colr = 42,
  colg = 119,
  colb = 142,
  spd = 33,
  scl = 0,
  rots;



var chakras = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < 3; i++) {
    var p = new Chakra();
    chakras.push(p);
  }
}

function draw() {
  //background(255,255,255,33);
  tint(255,255);
  //background(colr, colg, colb);
  
  for (i = 0; i < chakras.length; i++) {
    chakras[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}