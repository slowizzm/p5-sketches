const clickableObjectProps = {
  pos: {
    x: null,
    y: null
  },
  res: {
    w: 80,
    h: 40
  },
  col: {
    on: '#ff69b4',
    off: '#008dff'
  },
  curr_col: '#ff69b4',
  isOn: false
}


function clickableObject(pos, res, col) {
  push();
  rectMode(CENTER);
  fill(col);
  rect(pos.x, pos.y, res.w, res.h, 13);
  pop();
}

function isHovering(pos, res) {
  return (mouseX > pos.x - (res.w * 0.5) &&
    mouseX < pos.x + (res.w * 0.5) &&
    mouseY > pos.y - (res.h * 0.5) &&
    mouseY < pos.y + (res.h * 0.5));
}