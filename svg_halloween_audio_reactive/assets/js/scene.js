function styleSetup() {
  building = select('#scraper-scene').position(width * 0.125, 0);
  building.size(800, 800);

  buildings[0] = select('#scraper-1');
  buildings[1] = select('#scraper-2');
  buildings[2] = select('#scraper-3');
  buildings[3] = select('#scraper-4');
  buildings[4] = select('#scraper-5');

  windows[0] = select('#b1_d');
  windows[1] = select('#b2_w');
  windows[2] = select('#b3_w1');
  windows[3] = select('#b3_w2');
  windows[4] = select('#b3_w3');
  windows[5] = select('#b3_w4');
  windows[6] = select('#b3_w5');
  windows[7] = select('#b3_w6');
  windows[8] = select('#b3_w7');
  windows[9] = select('#b4_w');

  witch = select('#witchOnBroom');
  witch.size(1366 / 2, 768 / 2);

  lamp = select('#lamp').position(350, 300).size(326, 635);
  lampPost = select('#bulb');
  
  scene = select('#scraper-scene');
}

function sceneBuildings() {
  buildings[0].style('fill', `hsla(242,7%,${sceneReact/sceneReactAmount}%,0.4)`);
  buildings[1].style('fill', `hsla(233,3%,${sceneReact/sceneReactAmount*2}%,0.5)`);
  buildings[2].style('fill', `hsla(123,13%,${sceneReact/sceneReactAmount}%,0.6)`);
  buildings[3].style('fill', `hsla(233,11%,${sceneReact/sceneReactAmount}%,0.5)`);
  buildings[4].style('fill', `hsla(221,9%,${sceneReact/sceneReactAmount}%,0.4)`);
}


function sceneWindowLights(_rCol) {
  rectMode(CENTER);
  noStroke();

  if (!aud.isPlaying()) {
    for (i = 0; i < windows.length; i++) {
      windows[i].style('fill', `hsla(0,0%,${_rCol}%,0.4`);
    }
  } else {
    windows[2].style('fill', `hsla(3,${90 - windowsReact}%,40%,1`);
    windows[3].style('fill', `hsla(7,${80 - windowsReact}%,40%,0.9`);
    windows[4].style('fill', `hsla(13,${70 - windowsReact}%,40%,0.85`);
    windows[5].style('fill', `hsla(23,${60 - windowsReact}%,40%,0.7`);
    windows[6].style('fill', `hsla(33,${50 - windowsReact}%,40%,0.6`);

    windows[7].style('fill', `hsla(42,${40 - windowsReact}%,40%,0.5`);
    windows[8].style('fill', `hsla(50,${30 - windowsReact}%,40%,0.4`);

    windows[0].style('fill', `hsla(20,${90 - windowsReact}%,40%,0.3`);
    windows[1].style('fill', `hsla(49,${70 - windowsReact}%,40%,0.85`);
    windows[9].style('fill', `hsla(30,${50 - windowsReact}%,40%,0.6`);
  }
}

function sceneText() {
  fill(255);
  textSize(20);
  textFont('Avenir');
  text("CLICK TO START", 130, 150);
}

function SceneSetup(rand) {
  sceneBuildings();
  sceneWindowLights(rand);
  sceneText();
}