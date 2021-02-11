let balls = [];

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(0);
  
  balls.forEach(ball=> {
    ball.render();
  });
}

function mousePressed() {
  balls.push(new Ball({x:mouseX,y:mouseY}));
}





class Ball {
  constructor(pos) {
    this.diameter = 50;
    this.v_speed = 0;
    this.gravity = 0.2;
    this.endy = height - this.diameter / 2;
    this.pos = {
      x:pos.x,
      y:pos.y
    }

    this.h;
    this.w;
    this.bounce;
  }


  update() {
    this.v_speed += this.gravity;
    this.pos.y += this.v_speed;

    this.bounce = this.endy + Math.min(Math.abs(this.v_speed), this.diameter / 18);


    if (this.pos.y >= this.bounce) {
      this.pos.y = this.bounce;
      this.v_speed *= -0.75;
    }

    return this;
  }

  display() {
    this.h = Math.min(this.diameter, (height - this.pos.y) * 1.975)
    this.w = 2 * this.diameter - this.h;
    ellipse(this.pos.x, this.pos.y, this.w, this.h);
    fill(255);

    return this;
  }

  render() {
    return this.update().display();
  }
}