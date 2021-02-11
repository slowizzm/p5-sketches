const rand = function(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
};

function setup() {
  createCanvas(400, 400);
  background(rand(30, 230));
}