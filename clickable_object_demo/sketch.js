function setup() {
  createCanvas(400, 400);
  noStroke();
  clickableObjectProps.pos.x = width * 0.5;
  clickableObjectProps.pos.y = height * 0.5;
}

function draw() {
  background('#030711');

  if (clickableObjectProps.isOn) {
    clickableObjectProps.curr_col = clickableObjectProps.col.on;
  } else {
    clickableObjectProps.curr_col = clickableObjectProps.col.off;
  }


  clickableObject({
      x: clickableObjectProps.pos.x,
      y: clickableObjectProps.pos.y
    }, {
      w: clickableObjectProps.res.w,
      h: clickableObjectProps.res.h
    },
    clickableObjectProps.curr_col);


  // buttonBoundsVis();

}

//visualize the bounds of the button - mouse needs to be in these bounds to be true
function buttonBoundsVis() {
  strokeWeight(3)
  stroke('white')

  line(160, 0, 160, height)
  line(0, 180, width, 180)

  line(0, 220, width, 220)
  line(240, 0, 240, height)
}


function mousePressed() {
  if (isHovering({
      x: clickableObjectProps.pos.x,
      y: clickableObjectProps.pos.y
    }, {
      w: clickableObjectProps.res.w,
      h: clickableObjectProps.res.h
    })) {
    clickableObjectProps.isOn = !clickableObjectProps.isOn;
  }

  // console.log(clickableObjectProps.isOn)
}