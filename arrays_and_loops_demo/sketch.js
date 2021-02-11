const bigSixActivists = ['Martin Luther King Jr', 'James Farmer', 'John Lewis', 'A. Philip Randolph', 'Roy Wilkins', 'Whitney Young'],
  num_activists = 6;


function setup() {
  createCanvas(200, 200);
  background('#131721')
  noStroke();
  fill('#f2f2f2');
  textAlign(CENTER, CENTER);

  for (let i = 0; i < num_activists; i++) {
    text(bigSixActivists[i], width * 0.5, 30 * (i + 1))
  }
}