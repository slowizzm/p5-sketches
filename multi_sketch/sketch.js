const sketch1 = (p5) => {
  const p = p5;
  let theta = 0;

  p.setup = () => {
    const canvas = p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);

    canvas.parent('stage');
    canvas.position(0, 0);
    canvas.elt.style.position = 'fixed';
    canvas.style('z-index', '-1');
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
  };
};

const sketch2 = (p5) => {
  const p = p5;
  let theta = 0;

  p.setup = () => {
    const canvas = p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
    canvas.parent('stage');
    canvas.position(0, 0);
    canvas.elt.style.position = 'fixed';
    canvas.style('z-index', '-1');
  };

  p.draw = () => {
    p.clear();
    p.normalMaterial();

    p.translate(0, 0, 0);
    p.push();
    p.rotateZ(theta);
    p.rotateX(theta);
    p.rotateY(theta);
    p.torus(75, 35);
    p.pop();
    theta += 0.003;
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};

let visual;
let sketchIndex = 0;
let initialLoad = true;

const showSketch = () => {
  const sketches = [sketch1, sketch2];
  const sketch = sketches[sketchIndex];

  if (!initialLoad) {
    visual.remove();
  }

  initialLoad = false;
  visual = new p5(sketch);

  sketchIndex = (sketchIndex + 1) % sketches.length;
}

const initialize = () => {
  showSketch();
};

window.addEventListener('click', showSketch);
window.addEventListener('load', showSketch);