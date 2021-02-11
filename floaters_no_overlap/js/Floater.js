class Floater {
  constructor(size, pos, col) {
    this.size = size;
    this.pos = createVector(pos.x, pos.y);
    this.vel = createVector(0, -1);
    this.acc = createVector();
    this.t = 1.5;
    this.col = col;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.pos.x += random(-0.2, 0.2) * this.size / 20;
    this.vel.y += random(-1 * this.size / 1333, 0.03);

    this.vel.x = this.t * noise(frameCount);

    this.t -= 0.01;
    return this;
  }

  display() {
    push();
    // fill(180,0.8,0.9,0.3);
    fill(180,0.8,0.7,0.3);
    ellipse(this.pos.x+3,this.pos.y-3,this.size);
    // fill(180,0.8,0.7,0.7);
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.size*2);
    pop();

    return this;
  }
  
  bounds() {
    if (this.pos.x >= width) this.vel.x *= -1;
    
    if (this.pos.y <= 0) this.vel.y *= -1;
  }

  render() {
    return this.update().display().bounds();
  }
}