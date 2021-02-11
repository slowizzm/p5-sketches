function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
  noStroke();


  const cols = [color('#1e4594'),
    color('#144c99'),
    color('#18819e'),
    color('#62c9ae'),
    color('#ecdb73'),
    color('#f7ad55'),
    color('#f5934a'),
    color('#e4888b')
  ];
  
  
  let rad = 228,
    idx = 0;
  cols.forEach(col => {
    col.setAlpha(100)
  });

  for (let i = 0; i < width; i += rad / 2) {
    if (idx < cols.length) {
      fill(cols[idx]);
      ellipse(i, height * 0.5, rad);
      idx++;
    }
  }
}