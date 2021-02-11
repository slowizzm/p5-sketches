let pg,
  rotAmnt = 1;

function setup() {
  createCanvas(400, 400, WEBGL);
  pg = createGraphics(400, 400, WEBGL);
  imageMode(CENTER);

  let rot_slider = createSlider(0.1, rotAmnt, rotAmnt, 0.01);
  rot_slider.input(_ => {
    rotAmnt = rot_slider.value();
  });
}

function draw() {
  background('#f8f8f8');

  //************************
  //draw your graphics
  pg.clear();
  pg.stroke('#343434');
  pg.noFill();
  pg.sphere(173);


  //transform the output
  push();
  rotateY(rotAmnt);
  image(pg, 0, 0);
  pop();
  //************************


  stroke('#f8f8f8');
  noFill();
  rotateZ(-rotAmnt);
  sphere(173);
}