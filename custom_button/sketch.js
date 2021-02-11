let mouseIsClicked = false;
let btn;

function setup() {
  createCanvas(400, 400);

  btn = {
    x: width * 0.5,
    y: height * 0.5,
    w: 133,
    h: 133,
    colFill: color('#33f8ee'),
    colStroke: color('#f8f8f8'),
    weight: 2,
    colHover: color('#e7aadd'),
    callback: e => {
      if (e) console.log('click')
    }
  }
}

function draw() {
  background(220);


  customButton({
    x: btn.x,
    y: btn.y
  }, {
    w: btn.w,
    h: btn.h
  }, btn.colFill, btn.colStroke, btn.weight, btn.colHover, btn.callback);


  mouseIsClicked = false;
}

function customButton(pos, res, colFill, colStroke, sw, colHover, func) {
  if (colStroke === null) colStroke = color('#00000000');
  if (sw === null) sw = 0;
  if (colHover === null) colHover = colFill;
  
  strokeWeight(sw);
  stroke(colStroke);
  ellipse(pos.x, pos.y, res.w);

  (dist(pos.x, pos.y, mouseX, mouseY) <= res.w * 0.5) ? (isHovering = true, fill(colHover)) : (isHovering = false, fill(colFill));

  (isHovering && mouseIsClicked) ? isClicked = true : isClicked = false;

  func(isClicked);
}

function mouseClicked() {
  mouseIsClicked = true;
}