function setup() { 
  noFill();
  createCanvas(400, 400);
	angleMode(DEGREES);
} 
let angleoff = 0;
function draw() { 
  background(220);
	translate(width/2,height/2)	
	let radius = map(mouseX,0,width,50,100);
	let a = 15;
	strokeWeight(1);	
	beginShape();
	for (let angle =0; angle<360; angle++) {	
	
    let x = (radius*cos(a*(angle)))*cos(angle+angleoff);
		let y = (radius+20*sin(a*(angle)))*sin(angle+angleoff);
	
		vertex(x,y);	
	}
	endShape(CLOSE);
  angleoff = angleoff+0.1
}