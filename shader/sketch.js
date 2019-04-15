let camShader;
let cam;


function preload(){
  camShader = loadShader('shader/vert.txt', 'shader/frag.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);
  cam.hide();
}

function draw() { 
  shader(camShader);

  camShader.setUniform('tex0', cam);
  camShader.setUniform('resolution', [width, height]);

  rect(0,0,width, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}