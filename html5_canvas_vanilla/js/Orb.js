class Orb {
  constructor(x, y, s) {
    this.size = s;
    this.current = 0;
    this.amplitude = randRange(10, 30);
    this.period = randRange(50, 60);
    this.min = randRange(50, 60);
    this.pos = createVec(x, y);
    this.vel = createVec(0, -1);
    this.acc = createVec();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    return this;
  }

  displayBG(layer) {
    let gradient = ctx[layer].createRadialGradient(this.pos.x, this.pos.y, 0, this.pos.x, this.pos.y, this.size);
    let d = getDistance(mapRange(mouse.x, 0, canvasWidth, canvasWidth * 0.25, canvasWidth * 0.75), canvasHeight * 0.5, this.pos.x, this.pos.y);
    gradient.addColorStop(0, lerpColor(
      "#ed3e6f",
      "#fff25e",
      mapRange(this.pos.y, 0, canvasHeight, 1, 0)
    ));
    gradient.addColorStop(1, 'rgba(255,150,150,0)');
    ctx[layer].fillStyle = gradient;
    ctx[layer].fillRect(this.pos.x - this.size, this.pos.y - this.size, this.size * 2, this.size * 2);

    this.size = (this.min / 6) + Math.abs(this.amplitude * Math.cos(this.current / this.period) - (d / 3));
    this.current++;

    return this;
  }

  displayOV(layer) {
    let gradient = ctx[layer].createRadialGradient(this.pos.x, this.pos.y, 0, this.pos.x, this.pos.y, this.size);
    let d = getDistance(mapRange(mouse.x, 0, canvasWidth, canvasWidth * 0.25, canvasWidth * 0.75), canvasHeight * 0.5, this.pos.x, this.pos.y);
    gradient.addColorStop(0, lerpColor(
      "#ed3e6f",
      "#fff25e",
      mapRange(this.pos.y, 0, canvasHeight, 1, 0)
    ));
    gradient.addColorStop(1, 'rgba(255,150,150,0)');
    ctx[layer].fillStyle = gradient;
    ctx[layer].fillRect(this.pos.x - this.size, this.pos.y - this.size, this.size * 2, this.size * 2);

    this.size = (this.min / 6) + Math.abs(this.amplitude * Math.cos(this.current / this.period) - (d / 3));
    this.current++;

    return this;
  }

  bounds() {
    if (this.pos.y <= -33) {
      this.pos.y = canvasHeight * 1.05;
    }

    return this;
  }

  render(layer) {
    if (layer === 0) {
      return this.update().displayBG(layer).bounds();
    } else if (layer === 1) {
      return this.update().displayOV(layer).bounds();
    }
  }
}