function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // setHorizontalGradient({
  //   start: color('#ee9933'),
  //   end: color('#3399ee')
  // }, {
  //   start: 0,
  //   end: 1.15
  // });

  setVerticalGradient({
    start: color('#ee9933'),
    end: color('#3399ee')
  }, {
    start: 0,
    end: 1.15
  });
}

const setHorizontalGradient = (col, point) => {
  push();
  for (let x = 0; x < width + 1; x++) {
    let inter = map(x, 0, width, point.start, point.end);
    let c = lerpColor(col.start, col.end, inter);
    stroke(c);
    line(x, 0, x, width);
  }
  pop();
}

const setVerticalGradient = (col, point) => {
  push();
  for (let y = 0; y < height + 1; y++) {
    let inter = map(y, 0, height, point.start, point.end);
    let c = lerpColor(col.start, col.end, inter);
    stroke(c);
    line(0, y, height, y);
  }
  pop();
}