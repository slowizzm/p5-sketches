function setup() {
  createCanvas(400, 400);
  
  let col = color('#62c9ae');
  
  console.log(col.toString('rgb'));
  console.log(col.toString('rgba'));
  console.log(col.toString('hsb'));
  console.log(col.toString('hsl'));
  
  console.log(col.toString('#rgb'));
  console.log(col.toString('#rgba'));
  console.log(col.toString('#rrggbb'));
  console.log(col.toString('#rrggbbaa'));  
  
  console.log(col.toString('rgb%'));
  console.log(col.toString('rgba%'));
  console.log(col.toString('hsb%'));
  console.log(col.toString('hsba%'));
  console.log(col.toString('hsl%'));
  console.log(col.toString('hsla%'));
  
  background(col);
}