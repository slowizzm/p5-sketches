let res = 15,
  cols, rows;

const fields = [];

function setup() {
  createCanvas(400, 400);
  background('#a4a4a4');
  cols = 1 + width / res;
  rows = 1 + height / res;

  for (let i = 0; i < cols; i++) {
    fields[i] = [];
  }

  let xoff = 0;

  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      fields[x][y] = floor(noise(xoff) * 2);
      xoff += 0.75;
    }
  }

  // console.log(fields);
}

let xoff = 0;

function draw() {

  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      stroke(fields[x][y] * 255);
      strokeWeight(res * 0.4);
      point(x * res, y * res);
    }
  }

  for (let y = 0; y < cols - 1; y++) {
    for (let x = 0; x < rows - 1; x++) {

      let pos = {
        x: x * res,
        y: y * res
      };

      let a = createVector(pos.x + res * 0.5, pos.y);
      let b = createVector(pos.x + res, pos.y + res * 0.5);
      let c = createVector(pos.x + res * 0.5, pos.y + res);
      let d = createVector(pos.x, pos.y + res * 0.5);
      let state = getState(
        fields[x][y],
        fields[x + 1][y],
        fields[x + 1][y + 1],
        fields[x][y + 1]
      );
      stroke(255);
      strokeWeight(1);

      const cellIndexLookup = cell => {
        const cellIndex = {
          1: _ => {
            return myLine(c, d);
          },
          2: _ => {
            return myLine(b, c);
          },
          3: _ => {
            return myLine(b, d);
          },
          4: _ => {
            return myLine(a, b);
          },
          5: _ => {
            return (myLine(a, d),
              myLine(b, c));
          },
          6: _ => {
            return myLine(a, c);
          },
          7: _ => {
            return myLine(a, d);
          },
          8: _ => {
            return myLine(a, d);
          },
          9: _ => {
            return myLine(a, c);
          },
          10: _ => {
            return (myLine(a, b),
              myLine(c, d));
          },
          11: _ => {
            return myLine(a, b);
          },
          12: _ => {
            return myLine(b, d);
          },
          13: _ => {
            return myLine(b, c);
          },
          14: _ => {
            return myLine(c, d);
          }
        };

        if (typeof cellIndex[cell] !== 'function') return;

        return cellIndex[cell]();
      }

      cellIndexLookup(state)
    }
  }
}

function myLine(v1, v2) {
  line(v1.x, v1.y, v2.x, v2.y);
}

function getState(a, b, c, d) {
  return a * 8 + b * 4 + c * 2 + d * 1;
}