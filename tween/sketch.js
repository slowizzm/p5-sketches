const NUM_PARTICLES = 33;
let bokeh = [];
let fade = 1;

let word, pos, vel, acc, alph = 0;
let btn;

function setup() {
  createCanvas(800, 400);

  init(width * 0.25, height * 0.4);

  for (var i = 0; i < NUM_PARTICLES; ++i) {
    bokeh.push(new Bokeh(fade));
    bokeh[i].init();
  }
}

function draw() {
  background('#000529');
  //bokeh particles for visual candy
  for (var i = 0; i < NUM_PARTICLES; ++i) {
    bokeh[i].render();
  }

  //filter to push bokeh visual further into background
  fill(11, 9, 133, 90);
  rect(0, 0, width, height);

  //splash elements
  //head
  textFont('Avenir');
  push();
  colorMode(HSL, 360, 100, 100, 1);
  noStroke();
  fill(220, 90, 50, alph);
  textAlign(CENTER, CENTER);
  textSize(133);
  text('coding', pos.x + 20, pos.y);
  pop();
  
  //sub
  push();
  noStroke();
  fill(alph, alph - 10);
  textAlign(CENTER, LEFT);
  textSize(33);
  text('for the visual arts', pos.x + 25, pos.y + 90);
  pop();
  
  setTimeout(render, 500);
  
  bounce();
}