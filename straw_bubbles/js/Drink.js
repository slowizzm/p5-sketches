class Drink {
  constructor() {}

  cup() {
    push();
    noFill();
    stroke(33, 100);
    strokeWeight(1);
    beginShape();
    vertex(width * 0.5 - 42, height * 0.4);
    vertex(width * 0.5 - 42, height * 0.6);
    vertex(width * 0.5 + 42, height * 0.6);
    vertex(width * 0.5 + 42, height * 0.4);
    endShape();
    //ellipse(width*0.5,height*0.4,84,7);
    pop();

    return this;
  }

  liquid() {
    push();
    fill(147, 149, 198, 200);
    noStroke();
    beginShape();
    //vertex(width*0.5-42,height*0.4);
    vertex(width * 0.5 - 42, height * 0.6);
    vertex(width * 0.5 + 42, height * 0.6);
    vertex(width * 0.5 + 42, height * 0.4);
    vertex(width * 0.5 + 42, height * 0.483);
    bezierVertex(width * 0.5, height * 0.5, width * 0.5 + 33, height * 0.435, width * 0.5, height * 0.483);
    bezierVertex(width * 0.5, height * 0.483, width * 0.43, height * 0.53, width * 0.39, height * 0.483);
    endShape();
    pop();

    return this;
  }

  straw() {
    push();
    stroke(248, 90, 202, 140);
    strokeWeight(5);
    line(width * 0.49, height * 0.58, width * 0.55, height * 0.4);
    line(width * 0.55, height * 0.4, width * 0.63, height * 0.38);
    pop();

    return this;
  }

  render() {
    return this.cup().straw().liquid();
  }
}