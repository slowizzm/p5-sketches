let isWorld = true;
const p_elts = [];

function setup() {
  noCanvas();
  for (let i = 0; i < 15; i++) {
    let p_elt = createP('hello world');
    p_elt.position(random(width * 3, width * 7), random(height * 3));
    p_elts.push(p_elt);
  }
}

function draw() {
  for (let i = 0; i < p_elts.length; i++) {
    if (isWorld) {
      p_elts[i].html('hello world');
      p_elts[i].class('world');
    } else {
      p_elts[i].html('hello nature');
      p_elts[i].class('nature');
    }
  }
}

function mousePressed() {
  isWorld = !isWorld;
}