let col,
  cols = {
    h: 30,
    s: 70,
    l: 70,
    test: {
      hex: '#1e4646',
      func: _ => {
        console.log('hello')
      }
    },
  };


// console.log(cols)

// this will log 'hello' because we are invoking the method, but it also logs undefined because of the console.log nested in the console.log
// console.log(cols.test.func())

// in this example we don't need to console.log ... we can just invoke the method
cols.test.func();

function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 100, 100, 1);
  col = color(0, 20, 10, 1);
}

function draw() {
  background(col);
  updateBG(cols);
}

function updateBG(obj) {
  col = color(obj.h, obj.s, obj.l, 1);
}


//ES6
// const updateBG = (obj) => {
//   col = color(obj.h, obj.s, obj.l, 1);
// }