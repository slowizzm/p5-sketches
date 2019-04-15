let font;
let points;
let bounds;
let str = "type";
let inpt;

function preload(){
	font = loadFont("AlfaSlabOne-Regular.ttf");
}

function setup() {
  createCanvas(window.innerWidth, windowHeight);
  angleMode(DEGREES);
  textFont(font);
  textSize(100);
  textAlign(CENTER,CENTER);
  inpt = createInput(str);
}
function draw() {
  background(220);
  let w = textWidth(str);
  let h = 133;
  let n = map(sin(frameCount),-1,1,0.1,0.3);
  points = font.textToPoints(inpt.value(), width/2-w/2, height/2+h/2, 200, {
    sampleFactor: n,
    //simplifyThreshold: 0
  });
	
	push();
	fill(217,150);
	translate(-150,0);
  for(let i = 0; i < points.length; i++){
  	p = points[i];
    ellipse(p.x,p.y,sin(frameCount/map(mouseX,0,width,33,133))*333,30);
  }
  //noLoop();
  
}