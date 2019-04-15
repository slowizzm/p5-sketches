let spd = 0;
let waveSpd;

function setup() {
  createCanvas(windowWidth, windowHeight);
	waveSpd = createSlider(1,42,13);
}

function draw() {
  background(33);
  strokeWeight(3);
  stroke(217);
  
  let amt = spd*waveSpd.value();
  for (let y = 0; y <= windowHeight; y+=33) {
    let dis = map(noise(spd),0,1,30,90);
    let r = dis;
    let x = cos(spd)*sin(amt)*dis+windowWidth/2;
    line(0,y,x-r,y);
    line(x+r,y,600,y);
    for (let i = PI; i < 7; i+=0.3) {
      let px = cos(i)*r+x;
      let py = sin(i)*sin(spd+amt-i)*r+y;
      stroke(px);
      noFill();
      ellipse(px,py,py/133);
    }
    amt+=0.5;
  }  
  spd+=0.005;
}