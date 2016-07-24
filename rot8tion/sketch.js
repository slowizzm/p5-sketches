/* Raymond G McCord (slow_izzm)
   07/24/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

function setup(){
  createCanvas(windowWidth, windowHeight);
}
 
function draw(){
  background(0, 20, 35);
  translate(width/2, height/2);
  rotate(radians(frameCount));
  for(var i = 0; i < 360; i+=10){
    var x = sin(radians(i+frameCount));
    var y = cos(radians(i+frameCount));
     
    var x2 = x * sqrt(1 * pow(y, 2));
    var y2 = y * sqrt(1 - pow(x, 2));
    
    stroke(255, 255, 255);
    strokeWeight(1);
    line(x*150, y*150, x2*100, y2*100);

    stroke(255, 255, 255);
    ellipse(x2*100, y2*100, 1, 1);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}