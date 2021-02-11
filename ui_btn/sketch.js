let btn_cycle, btn_reset;
let newCol = 0;

function setup() {
  createCanvas(400, 200);
  background(0);
  btn_cycle = createButton("click for red");
  btn_cycle.style('fontFamily: Source Code Pro');
  btn_cycle.size(110, 25);
  btn_cycle.position(10, 225);
  btn_cycle.style('font-size', '10px');

  btn_reset = createButton("reset");
  btn_reset.style('fontFamily: Source Code Pro');
  btn_reset.size(95, 25);
  btn_reset.position(130, 225);
  btn_reset.style('font-size', '10px');

  btn_cycle.mouseClicked(nextCol);
  btn_reset.mouseClicked(reset);
}

function nextCol() {
  let col;

  switch (newCol) {
    case 0:
      col = color(255, 0, 0);
      btn_cycle.html('click for green');
      break;
    case 1:
      col = color(0, 255, 0);
      btn_cycle.html('click for blue');
      break;
    case 2:
      col = color(0, 0, 255);
      btn_cycle.html('click for red');
      break;
  }
  background(col);
  newCol++;

  if (newCol == 3) newCol = 0;
}

function reset() {
  background(0);
}