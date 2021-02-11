function setup() {
  createCanvas(400, 400);

  console.log(addFive(10, add));
}

const add = (x, y) => {
  return x + y;
}

const addFive = (x, callback) => {
  return callback(5, x);
}