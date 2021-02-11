class ParticleSystem {
	constructor(pos) {
		this.origin = pos.copy();
		this.particles = [];
	}

	addParticle() {
		this.particles.push(new Particle(this.origin));
	}

	run() {
		for (var i = this.particles.length - 1; i >= 0; i--) {
			var p = this.particles[i];
			p.run();
			if (p.isDead()) {
				this.particles.splice(i, 1);
			}
		}
	}
}