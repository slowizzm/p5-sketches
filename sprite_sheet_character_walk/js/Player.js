class Player {
  constructor(pos, wrapMode) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };


    this.idx = 0;
    this.anim = [];
    this.state = 'idle';
    this.playerMoveable = {
      up: true,
      down: true,
      left: true,
      right: true
    };

    this.wrapMode = wrapMode;

    // get and store sprites from sprite sheet
    let frames = spriteData.frames;
    for (let i = 0; i < frames.length; i++) {
      let data = frames[i].position;
      this.anim[i] = spriteSheet.get(data.x, data.y, data.w, data.h);
    }

    this.res = {
      w: this.anim[this.idx].width,
      h: this.anim[this.idx].height
    };
  }

  update() {
    switch (this.state) {
      case 'idle':
        // this.idx = 0;
        break;

      case 'move-left':
        this.idx >= 7 ? this.idx = 4 : this.idx++;
        break;

      case 'move-right':
        this.idx >= 11 ? this.idx = 8 : this.idx++;
        break;

      case 'move-up':
        this.idx >= 15 ? this.idx = 12 : this.idx++;
        break;

      case 'move-down':
        this.idx >= 3 ? this.idx = 0 : this.idx++;
        break;
    }
    return this;
  }

  move() {

    switch (this.state) {
      case 'idle':
        break;

      case 'move-left':
        if (this.playerMoveable.left) this.pos.x -= 10;
        break;

      case 'move-right':
        if (this.playerMoveable.right) this.pos.x += 10;
        break;

      case 'move-up':
        if (this.playerMoveable.up) this.pos.y -= 10;
        break;

      case 'move-down':
        if (this.playerMoveable.down) this.pos.y += 10;
        break;
    }
    return this;
  }

  wrap() {
    this.pos.x < -this.res.w / 2 ? this.pos.x = width + this.res.w / 2 :
      this.pos.x > width + this.res.w / 2 ? this.pos.x = this.res.w / 2 :
      this.pos.y < -this.res.h / 2 ? this.pos.y = height + this.res.h / 2 :
      this.pos.y > height + this.res.h / 2 ? this.pos.y = -this.res.h / 2 :
      null;

    return this;
  }

  bounds() {
    (this.pos.x <= this.res.w) ? this.playerMoveable.left = false: this.playerMoveable.left = true;
    (this.pos.x >= width - this.res.w) ? this.playerMoveable.right = false: this.playerMoveable.right = true;
    (this.pos.y <= this.res.h) ? this.playerMoveable.up = false: this.playerMoveable.up = true;
    (this.pos.y >= height - this.res.h) ? this.playerMoveable.down = false: this.playerMoveable.down = true;

    return this;
  }


  display() {
    image(this.anim[this.idx], this.pos.x, this.pos.y);

    return this;
  }

  render() {
    if (this.wrapMode === 'wrap') {
      return this.display().move().update().wrap();
    } else if (this.wrapMode === 'bounds') {
      return this.display().move().update().bounds();
    }
  }
}