function mousePressed() {
  for (let i = 0; i < pads.length; i++) {
    if (pads[i].hover()) {
      pads[i].isOn = !pads[i].isOn;
    }
  }
}

function touchStarted() {
  for (let i = 0; i < pads.length; i++) {
    if (pads[i].hover()) {
      pads[i].isOn = !pads[i].isOn;
    }
  }
}

function mouseReleased() {
  for (let i = 0; i < pads.length; i++) {
    pads[i].isOn = false;
  }
}

function touchEnded() {
  for (let i = 0; i < pads.length; i++) {
    pads[i].isOn = false;
  }
}