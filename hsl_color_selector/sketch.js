let h = 360,
  s = 10,
  l = 20,
  a = 1;
let hue,sat,light,alph;

let btn_rnd;

function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 100, 100, 1);
  background(h, s, l,a);
  hue = floor(random(361));
  sat = floor(random(40,80));
  light = floor(random(60,80));
  alph = 1;

  h = createInput('hue = ' + hue);
  h.mouseClicked(clearHue);
  h.style('color: grey');
  h.position(0, height * 1.1);
  h.size(80);

  s = createInput('saturation = ' + sat);
  s.mouseClicked(clearSaturation);
  s.style('color: grey');
  s.position(100, height * 1.1);
  s.size(80);

  l = createInput('ligthness = '+ light);
  l.mouseClicked(clearLightness);
  l.style('color: grey');
  l.position(200, height * 1.1);
  l.size(80);

  a = createInput('alpha = ' + alph);
  a.mouseClicked(clearAlpha);
  a.style('color: grey');
  a.position(300, height * 1.1);
  a.size(80);

  btn_rnd = createButton('random color');
  btn_rnd.position(0, height * 1.2);
  btn_rnd.mouseClicked(randomCol);
}

function draw() {
  h.changed(updateHue);
  s.changed(updateSaturation);
  l.changed(updateLightness);
  a.changed(updateAlpha);
  background(hue, sat, light,alph);
}

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
  h.value(hue);
  s.value(sat);
  l.value(light);
  a.value(alph);
  background(hue, sat, light, alph);
}