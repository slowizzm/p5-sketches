function setup() {
  createCanvas(200, 200);
  background('#131721');

  gradientLine({
    x: 0,
    y: 0
  }, {
    x: width * 0.5,
    y: height * 0.5
  }, {
    start: 0.1,
    end: 13
  }, 130);
}

function gradientLine(start, end, weight, segments) {
  let prev_loc = {
    x: start.x,
    y: start.y
  };

  for (let i = 1; i <= segments; i++) {
    let cur_loc = {
      x: lerp(start.x, end.x, i / segments),
      y: lerp(start.y, end.y, i / segments)
    }
    push();
    strokeWeight(lerp(weight.start, weight.end, i / segments));
    stroke(lerp(0, 255, i / segments), 0, 100);
    line(prev_loc.x, prev_loc.y, cur_loc.x, cur_loc.y);
    pop();
    prev_loc.x = cur_loc.x;
    prev_loc.y = cur_loc.y;
  }
}