function updateHue() {
  hue = h.value();
  h.style('color: black');
}

function updateSaturation() {
  sat = s.value();
  s.style('color: black');
}

function updateLightness() {
  light = l.value();
  l.style('color: black');
}

function updateAlpha() {
  alph = a.value();
  a.style('color: black');
}

function clearHue() {
  h.value('');
}

function clearSaturation() {
  s.value('');
}

function clearLightness() {
  l.value('');
}

function clearAlpha() {
  a.value('');
}

function randomCol() {
  hue = floor(random(361));
  sat = floor(random(80, 101));
  light = floor(random(80, 101));
  alph = random(0, 1);
  h.value('hue = ' + hue);
  s.value('saturation = ' + sat);
  l.value('lightness = ' + light);
  a.value('alpha = ' + alph);
  background(hue, sat, light, alph);
}