class Shard extends Particle {
  constructor(info) {
    super();
    this.size = info.sz / 1.5;
    this.pos.x = info.pos.x;
    this.pos.y = info.pos.y - info.sz;

    this.theta = random(-PI, 0);
    this.vel.x = info.vel / 1.5 * cos(this.theta);
    this.vel.y = info.vel / 1.5 * sin(this.theta);
    this.color = info.cl;
  }
}