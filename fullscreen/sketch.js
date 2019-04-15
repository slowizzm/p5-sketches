function setup() { 
  createCanvas(windowWidth, windowHeight);
	colorMode(HSB,360,100,100);
	rectMode(CENTER);
} 

function draw() { 
  background(0,10,10);
  rectMode(CENTER);
	fill(200,60,90);
  rect(width*0.5, height*0.5, 80, 42,7);
	fill(0,0,100);
	textSize(27);
	textAlign(CENTER,CENTER);
	textFont('Avenir');
	text('click',width*0.5,height*0.5+2);
}

function touchStarted () {
  let fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
    event.preventDefault();
};