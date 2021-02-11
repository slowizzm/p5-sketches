class Particle {
  constructor(pos) {
    this.xNoise = new NoiseLoop(0.25, 0, width);
    
    this.pos = createVector(pos.x,pos.y);
    this.vel = createVector(0,-1);
    this.acc = createVector();
  }
  
  update(a) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.pos.x = this.xNoise.value(a);
    
    return this;
  }
  
  hitCeil() {
    if (this.pos.y <= 0) {
      this.vel.y = 0;
    }
    
    return this;
  }

  display(a) {
    noStroke();
    ellipse(this.pos.x, this.pos.y, 30);
    
    return this;
  }
  
  render(a) {
    return this.update(a).display(a).hitCeil();
  }
}