const keys = {
  ArrowUp: _ => {
    console.log('arrow up detected');
    col = color(30, 0.7, 0.8, 1);
  },
  ArrowDown: _ => {
    console.log('arrow down detected');
    col = color(130, 0.7, 0.8, 1);
  },
  ArrowLeft: _ => {
    console.log('arrow left detected');
    col = color(230, 0.7, 0.8, 1);
  },
  ArrowRight: _ => {
    console.log('arrow right detected');
    col = color(330, 0.7, 0.8, 1);
  }
};

let col;

function setup() {
  createCanvas(640, 360);
  colorMode(HSL, 360, 1, 1, 1);
  col = color(200, 0.2, 0.1, 1);
}

function draw() {
  background(col);
}


function keyPressed() {
  if (keys[key] !== undefined) keys[key]();
}