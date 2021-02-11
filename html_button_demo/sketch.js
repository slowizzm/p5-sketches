let btn, isOn = false;

function setup() {
  noCanvas();

  btn = createButton('my button');
  // console.log(btn)

  btn.mousePressed(toggleBooleanValue)
}

function toggleBooleanValue() {
  isOn = !isOn;

  console.log(isOn)
}