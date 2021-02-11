function setup() {
  colorMode(HSB, 360, 100, 100, 1);
  createCanvas(
    window.innerWidth,
    window.innerHeight);
  cols = floor(width / 5);
  rows = floor(height / 5);
  
  select('#menu').position(width*0.025,0);

  sliders = selectAll('.slider');
  hideInterface();
}

function draw() {
  background(33);
}

//reactive menu
function showInterface() {
  let i = select('#interface');
  i.style('top', '0');
}

function hideInterface() {
  let i = select('#interface');
  i.style('top', '-450px');
}