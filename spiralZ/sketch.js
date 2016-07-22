/* Raymond G McCord (slow_izzm)
   07/03/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/



var xoff = 33,
    yoff = 333,
    start = 33,
    inc = 333,
    levels = 33,
    rad = 9000,
    xvals = 3;

function setup(){
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  background(0,0,0);
  rad = min(windowWidth,windowHeight)*0.33;
}

function draw(){
  background(0,0,0);
  noFill();
  xoff = start;
  yoff = 33;
  inc = map(sin(frameCount/500),-1,1,0.002,0.02)
  translate(width/2,height/2);
  for(var t=0;t<levels;t++){
    rotate(sin(frameCount/50));
    yoff += sin(frameCount/9000)*3000;
    stroke(255);
    strokeWeight(cos(frameCount/9000)*.3);
    beginShape();
    for(var x=0;x<xvals;x++){
      y = noise(xoff)*rad;
      vertex(sin(y/300)*y,asin(x/9000)*y+yoff);
      vertex(sin(x*30)/y,asin(x*90)/y-yoff);
    }
    endShape(CLOSE);
  }
  start+=.3;
  yoff+=33;
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight); 
}
