const sketch1 = (p5) => {
  const p = p5;
  let theta = 0;

  p.setup = () => {
    const cnv = p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
  };

  p.draw = () => {
    p.clear();
    p.normalMaterial();

    p.translate(0, 0, 0);
    p.push();
    p.rotateZ(theta);
    p.rotateX(theta);
    p.rotateY(theta);
    p.box(75);
    p.pop();
    theta += 0.003;
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
    console.log('resized');
  };
};

let sketch = new p5(sketch1);