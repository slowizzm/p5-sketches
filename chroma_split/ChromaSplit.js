class ChromaSplit {
  constructor(char, xpos, ypos, charSize) {
    this.pos = createVector(random() * 360,random() * 360);
    this.spd = 0.05;
    this.char = char;
    this.position = createVector(xpos - 300,ypos - 300);
    this.charSize = charSize;
  }

  display() {
    push();
    textSize(this.charSize);
    translate(width / 2, height / 2);
    scale((noise(this.pos.x, this.pos.y, this.chromaSize) * 0.3) + 0.7);
    blendMode(ADD);
    fill(255, 0, 0);
    text(this.char, (noise(this.pos.x, this.pos.y) * 50) + this.position.x,
      (noise(this.pos.x, this.pos.y, 2) * 50) + this.position.y);
    fill(0, 255, 0);
    text(this.char, (noise(this.pos.x, this.pos.y, frameCount / 100) * 50) + this.position.x,
      (noise(this.pos.x, this.pos.y, 2) * 50) + this.position.y);
    fill(0, 0, 255);
    text(this.char, (noise(this.pos.x, this.pos.y) * 50) + this.position.x,
      (noise(this.pos.x, this.pos.y, frameCount / 100) * 50) + this.position.y);
    pop();
    
    return this;
  }

  update() {
    this.pos.x += this.spd % 360;
    this.pos.y += this.spd % 360;
    
    return this;
  }
  
  render() {
    return this.update().display();
  }
}