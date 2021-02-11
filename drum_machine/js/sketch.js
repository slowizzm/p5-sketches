function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  //setups eventlisteners
  listeners();

  //displays the drum machine after everything loads
  drum_machine_container = select('.drum-machine-container').style('display', 'flex');
}


function draw() {
  //background(220);
}