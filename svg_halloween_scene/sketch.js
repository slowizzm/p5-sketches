let windows;

function setup() {
  windows = select('.windows');
}

function draw() {
  clear();

  windows.style('fill', `hsla(20, 80%, ${random(30)}%, 1)`);
}