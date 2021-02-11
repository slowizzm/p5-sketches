const arrowProps = new function() {
  this.arrows = [];
  this.num_arrows = 33;
  this.angle = (2 * Math.PI) / (this.num_arrows);
  this.count = 0;
  this.radius = 90;
}();

const diamondProps = new function() {
  this.diamonds = [];
  this.num_diamonds = 17;
  this.angle = (2 * Math.PI) / (this.num_diamonds);
  this.count = 0;
  this.radius = 60;
}();

const heartProps = new function() {
  this.hearts = [];
  this.num_hearts = 11;
  this.angle = (2 * Math.PI) / (this.num_hearts);
  this.count = 0;
  this.radius = 110;
}();

let count = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  // for (let i = 0; i < arrowProps.num_arrows; i++) {
  //   arrowProps.arrows[i] = new MyShape(arrowProps.angle, arrowProps.radius, customShape.bind(this, 3), 0.01, 1, 1);
  // }

  for (let i = 0; i < diamondProps.num_diamonds; i++) {
    diamondProps.diamonds[i] = new MyShape(diamondProps.angle, diamondProps.radius, diamond.bind(this, 3), 0.0075, 1, 1);
  }

  for (let i = 0; i < heartProps.num_hearts; i++) {
    heartProps.hearts[i] = new MyShape(heartProps.angle, heartProps.radius, heart, 0.005, -1, 1);
  }
}

function draw() {
  background('#131721')
  for (let i = 0; i < diamondProps.diamonds.length; i++) {
    diamondProps.diamonds[i].display();
  }

  for (let i = 0; i < heartProps.hearts.length; i++) {
    heartProps.hearts[i].display();
  }
}