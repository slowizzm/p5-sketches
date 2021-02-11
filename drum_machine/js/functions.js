//plays sound relative to pad hit
function hitPad(e, hit) {

  if (isHit) {
    pads[e].style('background-color', '#3CB9FC');
    switch (currPack) {
      case 0:
        if (snds_0[e].isPlaying()) {
          snds_0[e].stop();
          snds_0[e].play();
        } else {
          snds_0[e].play();
        }
        break;

      case 1:
        if (snds_1[e].isPlaying()) {
          snds_1[e].stop();
          snds_1[e].play();
        } else {
          snds_1[e].play();
        }
        break;

      case 2:
        if (snds_2[e].isPlaying()) {
          snds_2[e].stop();
          snds_2[e].play();
        } else {
          snds_2[e].play();
        }
        break;
    }

  } else {
    pads[e].style('background-color', '#B537F2');
  }
}

function mouseReleaseCatch() {
  for (let i = 0; i < pads.length; i++) {
    pads[i].style('background-color', '#B537F2');
  }
}

function selectSoundPack(e) {

  for (let i = 0; i < soundPacksElt.length; i++) {
    soundPacksElt[i].style('background-color', '#B537F2');
  }
  soundPacksElt[e].style('background-color', '#3CB9FC');
  display_txt.html(`${soundPacksTxt[e]}`);
  currPack = e;
}

function togglePower() {
  isPowerOn = !isPowerOn;

  if (!isPowerOn) {
    toggleSwitch.removeClass('toggle-switch-on');
    toggleSwitch.addClass('toggle-switch-off');

    for (let i = 0; i < pads.length; i++) {
      pads[i].mousePressed(false);
    }
  } else {
    toggleSwitch.removeClass('toggle-switch-off');
    toggleSwitch.addClass('toggle-switch-on');

    for (let i = 0; i < pads.length; i++) {
      pads[i].mousePressed(_ => hitPad.call(this, i, isHit = true));
    }

  }
}