function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 1, 1, 1);

  let s = createSlider(0, 10, 0, 0.1);
  background(map(s.value(), 0, 10, 0, 360), 0.7, 0.7, 1);
  s.input(_ => {
    background(map(s.value(), 0, 10, 0, 360), 0.7, 0.7, 1);
  })
  s.style('width', `${width}px`);
  // console.log(s)
}