class Catmoji {
  constructor(pos, res) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };

    this.res = {
      w: res.w,
      h: res.h
    };

    this.shadow = {
      x: 3,
      y: 2,
      alpha: 50
    };

    this.cat = {
      state: String.fromCodePoint(0x1F63D),
      joy: String.fromCodePoint(0x1F639),
      weary: String.fromCodePoint(0x1F640),
      heart: String.fromCodePoint(0x1F63B),
      kiss: String.fromCodePoint(0x1F63D)
    };

    this.state = {
      current: null,
      right: 'move-right',
      left: 'move-left',
      up: 'move-up',
      down: 'move-down'
    };

    this.spd = 2;
    this.txtSize = 50;

    this.newState = null;
  }

  update() {
    switch (this.state.current) {

      case 'move-right':
        this.pos.x += this.spd;
        break;

      case 'move-down':
        this.pos.y += this.spd;
        break;

      case 'move-left':
        this.pos.x -= this.spd;
        break;

      case 'move-up':
        this.pos.y -= this.spd;
        break;

      default:
        this.pos.x += this.spd;
        break;
    }
    return this;
  }

  display() {
    noStroke();
    textSize(this.txtSize);
    text(this.cat.state, this.pos.x - this.txtSize / 2, this.pos.y + this.txtSize / 2)

    return this;
  }

  reachedDestination() {
    (this.pos.x >= width * 0.8 && this.pos.y <= height * 0.8) ? (this.state.current = this.state.down, this.cat.state = this.cat.joy) :
    (this.pos.x <= width * 0.2 && this.pos.y >= height * 0.2) ? (this.state.current = this.state.up, this.cat.state = this.cat.weary) :
    (this.pos.y >= height * 0.8 && this.pos.x >= width * 0.8) ? (this.state.current = this.state.left, this.cat.state = this.cat.heart) :
    (this.pos.y <= height * 0.2 && this.pos.x <= width * 0.2) ? (this.state.current = this.state.right, this.cat.state = this.cat.kiss) :
    null;

    return this;
  }

  render() {
    return this.update().display().reachedDestination();
  }
}