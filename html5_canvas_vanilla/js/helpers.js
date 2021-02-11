let mouse = {
  x: 0,
  y: 0
};

window.addEventListener('mousemove', e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('resize', e => {
  for (let i = 0; i < canvasLayers.length; i++) {
    canvasLayers[i].width = getWindowWidth();
    canvasLayers[i].height = getWindowHeight();
  }
  canvasWidth = getWindowWidth();
  canvasHeight = getWindowHeight();

  for (let orb of orbs) {
    orb.pos = createVec(randRange(canvasWidth), randRange(canvasHeight));
  }

  for (let orb of orbs2) {
    orb.pos = createVec(randRange(canvasWidth), randRange(canvasHeight));
  }
});