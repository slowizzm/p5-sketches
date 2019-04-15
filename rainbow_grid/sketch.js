//noprotect
function setup() {
  createCanvas(800, 800);
  colorMode(HSL);

  let s = 30;

  noStroke();
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let x = i * s;
      let y = j * s;
      let hu = map(i, 0, 3, 0, 120);
      let li = map(j, 0, 49, 50, 10);
      fill(hu, 100, li);
      rect(x, y, s, s);
    }
  }
}