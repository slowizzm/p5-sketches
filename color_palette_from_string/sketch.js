let palette = "22223B-4A4E69-9A8C98-C9ADA7-F2E9E4".split("-").map(a => "#" + a);

function setup() {
  createCanvas(800, 800);
  const NUM_PANELS = width / palette.length;
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  let i = 0;
  background(0, 0, 80);
  for (let x = 0; x < width; x += NUM_PANELS) {
    fill(palette[i++]);
    rect(x, 0, NUM_PANELS, height);
  }
}