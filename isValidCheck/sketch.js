function setup() {
  createCanvas(400, 400);

  let e = new Entity();

  e = undefined;

  if (!e) console.log(e);
}

class Entity {
  constructor() {}
}