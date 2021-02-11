let ball;

function setup() {
  createCanvas(600, 600);
  ball = new Ball();
}

function draw() {
  background(0);
  ball.render();
}





class Ball {
  constructor() {
    this.diameter = 50;
    this.pos = {
      x: height * 0.25,
      y: width / 2
    };

    this.vel = {
      x: 0,
      y: 0
    };


    this.gravity = -0.1;
    this.ceil = this.diameter / 2;

    this.h;
    this.w;
    this.bounce;

    this.xoff = 0.0;
    this.vx_speed = 0;
  }


  update() {
    this.vel.y += this.gravity;
    this.pos.y += this.vel.y;
    this.pos.x += this.vel.x;

    this.bounce = this.ceil + Math.min(Math.abs(this.vel.x), this.diameter / 1.2);


    if (this.pos.y <= this.bounce) {
      this.pos.y = this.bounce;
      this.vel.y *= -0.75;
    }

    if (this.pos.x <= this.bounce || this.pos.x >= width) {
      this.vel.x *= -0.9;
    }


    this.vel.x += random(-0.015, 0.015);

    return this;
  }

  display() {
    this.h = Math.min(this.diameter, (height - this.pos.x) * 1.975)
    this.w = 2 * this.diameter - this.h;
    ellipse(this.pos.x, this.pos.y, this.w, this.h);
    fill(255);

    return this;
  }

  render() {
    return this.update().display();
  }
}