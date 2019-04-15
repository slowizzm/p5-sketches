function createFlames() {
  if (!flamesFull) {
    if (flames.length > flameCount) {
      flamesFull = true;
    } else {
      flames.push(new Flame());
    }
  }
}