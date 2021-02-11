class Vec {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  }
}

const createVec = (x, y) => {
  return new Vec(x, y);
};