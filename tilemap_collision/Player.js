class Player {
  constructor(p) {
    this.player = p;

    this.pos = {
      x: this.player.x,
      y: this.player.y
    };

    this.res = {
      w: this.player.w,
      h: this.player.h
    };
  }

  move() {

    switch (this.state) {
      case 'idle':
        break;

      case 'move-left':
        if (isPathTile(tilemap, this.player.mapY, this.player.mapX - 1)) {
          this.pos.x -= this.res.w;
          this.player.mapX--;
        }
        this.player.p.state = 'idle';
        break;

      case 'move-right':
        if (isPathTile(tilemap, this.player.mapY, this.player.mapX + 1)) {
          this.pos.x += this.res.w;
          this.player.mapX++;
        }
        this.player.p.state = 'idle';
        break;

      case 'move-up':
        if (isPathTile(tilemap, this.player.mapY - 1, this.player.mapX)) {
          this.pos.y -= this.res.h;
          this.player.mapY--;
        }
        this.player.p.state = 'idle';
        break;

      case 'move-down':
        if (isPathTile(tilemap, this.player.mapY + 1, this.player.mapX)) {
          this.pos.y += this.res.h;
          this.player.mapY++;
        }
        this.player.p.state = 'idle';
        break;
    }
    return this;
  }


  display() {
    noStroke();
    fill('red');
    rect(this.pos.x, this.pos.y, this.res.w, this.res.h);

    return this;
  }

  render() {
    return this.display().move();
  }
}