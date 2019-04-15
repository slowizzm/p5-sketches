class SoundVolumeSymbol {
  constructor() {
    this.pos = createVector();
    strokeWeight(2);
  }

  vol_update() {
    noFill();
    stroke(50, 100, 100, 1);
    if (slider.pos.x >= 415) {
      arc(380, 210, 40, 40, -1, 1, OPEN);
      arc(380, 210, 60, 60, -1, 1, OPEN);
      arc(380, 210, 80, 80, -1, 1, OPEN);
    } else if (slider.pos.x <= 414 && slider.pos.x >= 360) {
      arc(380, 210, 40, 40, -1, 1, OPEN);
      arc(380, 210, 60, 60, -1, 1, OPEN);
    } else if (slider.pos.x <= 359 && slider.pos.x >= 305) {
      arc(380, 210, 40, 40, -1, 1, OPEN);
    } else if (slider.pos.x <= 304) {
      push();
      noStroke();
      fill(50, 100, 100, 1);
      textFont('Avenir');
      textAlign(CENTER,CENTER);
      textSize(23);
      text('off',400,210);
    }
    return this;
  }

  display() {
    noFill();
    stroke(50, 100, 100, 1);
    beginShape();
    vertex(370, 200);
    vertex(370, 190);
    vertex(370, 180);
    vertex(350, 200);
    vertex(330, 200);
    vertex(330, 220);
    vertex(350, 220);
    vertex(370, 240);
    vertex(370, 220);
    endShape();

    return this;
  }

  render() {
    return this.vol_update().display();
  }
}