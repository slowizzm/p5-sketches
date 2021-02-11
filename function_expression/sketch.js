let col, txt = 'click canvas';
txt = txt.toUpperCase();

setup = _ => {
  const cnv = createCanvas(400, 400);
  cnv.mousePressed(_ => updateBG.call(this, random(360)));

  colorMode(HSL, 360, 1, 1, 1);
  col = color(0, 20, 10, 1);
  textAlign(CENTER, CENTER);
  textFont('Avenir');
  textStyle(BOLD);
  textSize(33);
}

draw = _ => {
  background(col);
  text(txt, width * 0.5, height * 0.5);

}

const updateBG = h => {
  col = color(h, 0.7, 0.7, 1);
}