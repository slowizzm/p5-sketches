const checkIfSuccess = _ => {
  if (snds[1].currentTime() >= snd_dur - 3 || showSuccess) {
    for (let i = 0; i < botGrid.length; i++) {
      botGrid[i].drawGrid();
    }

    push();
    noStroke();
    fill('#FFFAFAEF');
    rect(0, 0, width, height);
    pop();
    drawSuccess();
  }
}

const checkIfSoundShouldPlay = _ => {
  if (partsSnapped == NUM_PARTS && !snapSndHasPlayed) {
    setTimeout(_ => {
      snds[1].play();
    }, 500);
    snapSndHasPlayed = true;
  }
}

const initSnapZones = _ => {
  bots[0].snapZone.x = width * 0.5;
  bots[1].snapZone.x = width * 0.5;
  bots[2].snapZone.x = width * 0.5 + 135;
  bots[3].snapZone.x = width * 0.5 - 135;
  bots[4].snapZone.x = width * 0.5 + 80;
  bots[5].snapZone.x = width * 0.5 - 80;

  bots[0].snapZone.y = 370;
  bots[1].snapZone.y = 490;
  bots[2].snapZone.y = 510;
  bots[3].snapZone.y = 510;
  bots[4].snapZone.y = 630;
  bots[5].snapZone.y = 630;
}

const drawTitle = _ => {
  push();
  noStroke();
  fill(33);
  textAlign(CENTER);
  textSize(80);
  textFont('Avenir');
  text('Build-A-Bot', width * 0.5, height * 0.125);
  pop();
}

const drawInstructions = _ => {
  push();
  noStroke();
  fill(33);
  textAlign(CENTER);
  textSize(30);
  textFont('Avenir');
  text('Click and drag parts to build bot', width * 0.5, height * 0.175);
  pop();
}

const drawSuccess = _ => {
  push();
  noStroke();
  fill(33);
  textAlign(CENTER);
  textSize(30);
  textFont('Avenir');
  text('SUCCESS', width * 0.5, height * 0.85);
  pop();
}

const gridSetup = _ => {
  cols = width / 5;
  rows = height / 20;

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      botGrid.push(new BotGrid({
          x: col,
          y: row
        },
        img_bot));
    }
  }
}