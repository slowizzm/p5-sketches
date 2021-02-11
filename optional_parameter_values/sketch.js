let col;
function setup() {
  createCanvas(400, 400);
  colorMode(HSL,360,100,100,1);
  col = color(0,20,10,1);
}

function draw() {
  background(col);
  updateBG();
}

const updateBG = (h, s, l) => {
  let l_H = h || 30;
  let l_S = s || 70;
  let l_L = l || 70;
  col = color(l_H, l_S, l_L,1);
}