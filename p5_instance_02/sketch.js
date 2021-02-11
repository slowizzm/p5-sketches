const sketch = p5 => {
  const cols = ['#FF1BAC', '#dffd33', '#00ffff', '#FF5301', '#00ff00'];
  p5.shuffle(cols, true);
  let curr_col = 0;
  p5.setup = _ => p5.createCanvas(400, 400);
  p5.draw = _ => {
    p5.background(cols[curr_col + 1] || cols[0]);
    p5.noStroke();
    p5.fill(cols[curr_col]);
    p5.ellipse(p5.width / 2, p5.height / 2, 100, 100);
  }
  p5.mousePressed = _ => {
    (curr_col < cols.length - 1) ? curr_col++ : curr_col = 0;
  }
}

new p5(sketch);