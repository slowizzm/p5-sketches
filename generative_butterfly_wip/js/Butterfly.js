class Butterfly {
  constructor(pos, img_body) {
    this.pos = createVector(pos.x, pos.y);
    this.idx = {
      l: 0,
      r: 0
    };
    this.wingsL = [];
    this.wingsR = [];
    this.state = 'default';
    this.offset = {
      rX: 105,
      rY: -10,
      lX: 120,
      lY: 10
    };

    let frames_wingsL = json_wings.wings_left;
    for (let i = 0; i < 9; i++) {
      let d = frames_wingsL[i].position;
      this.wingsL[i] = sprite_wingsL.get(d.x, d.y, d.w, d.h);
    }

    let frames_wingsR = json_wings.wings_right;
    for (let i = 0; i < 9; i++) {
      let d = frames_wingsR[i].position;
      this.wingsR[i] = sprite_wingsR.get(d.x, d.y, d.w, d.h);
    }

    this.wings = [this.wingsL, this.wingsR];
    this.img_body = img_body;
  }

  update() {

    return this;
  }

  wingL_state(state) {
    const wing = {
      '0': _ => {
        return (this.offset.lX = 120, this.offset.lY = 10);
      },
      '1': _ => {
        return (this.offset.lX = 90, this.offset.lY = 10);
      },
      '2': _ => {
        return (this.offset.lX = 110, this.offset.lY = 30);
      },
      '3': _ => {
        return (this.offset.lX = 120, this.offset.lY = 10);
      },
      '4': _ => {
        return (this.offset.lX = 125, this.offset.lY = 20);
      },
      '5': _ => {
        return (this.offset.lX = 105, this.offset.lY = 0);
      },
      '6': _ => {
        return (this.offset.lX = 120, this.offset.lY = 40);
      },
      '7': _ => {
        return (this.offset.lX = 95, this.offset.lY = 5);
      },
      '8': _ => {
        return (this.offset.lX = 120, this.offset.lY = 20);
      }
    };

    if (typeof wing[state] !== 'function') return console.log('default');

    return wing[state]();
  }

  wingR_state(state) {
    const wing = {
      '0': _ => {
        return (this.offset.rX = 105, this.offset.rY = -10);
      },
      '1': _ => {
        return (this.offset.rX = 110, this.offset.rY = 30);
      },
      '2': _ => {
        return (this.offset.rX = 120, this.offset.rY = 30);
      },
      '3': _ => {
        return (this.offset.rX = 135, this.offset.rY = 10);
      },
      '4': _ => {
        return (this.offset.rX = 140, this.offset.rY = 50);
      },
      '5': _ => {
        return (this.offset.rX = 115, this.offset.rY = 20);
      },
      '6': _ => {
        return (this.offset.rX = 125, this.offset.rY = 0);
      },
      '7': _ => {
        return (this.offset.rX = 125, this.offset.rY = 10);
      },
      '8': _ => {
        return (this.offset.rX = 140, this.offset.rY = 15);
      }
    };

    if (typeof wing[state] !== 'function') return console.log('default');

    return wing[state]();
  }

  body() {
    image(this.img_body, this.pos.x, this.pos.y);
    return this;
  }

  display() {
    image(this.wingsL[this.idx.l], this.pos.x - this.offset.lX, this.pos.y + this.offset.lY);
    image(this.wingsR[this.idx.r], this.pos.x + this.offset.rX, this.pos.y + this.offset.rY);
    return this;
  }

  render() {
    return this.update().display().body();
  }
}