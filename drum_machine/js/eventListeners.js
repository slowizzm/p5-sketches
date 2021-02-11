function listeners() {
  //event listeners for pads
  for (let i = 0; i < pads.length; i++) {

    if (!isMobileDevice()) {
      pads[i].mousePressed(_ => hitPad.call(this, i, isHit = true));
    } else {
      pads[i].touchStarted(_ => hitPad.call(this, i, isHit = true));
    }
  }

  for (let i = 0; i < pads.length; i++) {
    pads[i].mouseReleased(_ => hitPad.call(this, i, isHit = false));
    pads[i].touchEnded(_ => hitPad.call(this, i, isHit = false));
  }

  doc.mouseReleased(mouseReleaseCatch);
  doc.touchEnded(mouseReleaseCatch);

  //event listeners for soundBanks
  for (let i = 0; i < soundPacksElt.length; i++) {
    soundPacksElt[i].mousePressed(_ => selectSoundPack.call(this, i));
    soundPacksElt[i].touchStarted(_ => selectSoundPack.call(this, i));
  }

  toggleSwitch.mousePressed(togglePower);
  toggleSwitch.touchStarted(togglePower);
}