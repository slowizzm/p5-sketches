class DrumMachine {
	constructor(_k1, _k2, _s1, _s2, _s, _c, _h, _sh) {
		this.kick1 = _k1;
		this.kick1Inc = 0;
		this.kick1Color = 0;
		this.kick1draw = false;

		this.kick2 = _k2;
		this.kick2Inc = 0;
		this.kick2Color = 0;
		this.kick2draw = false;

		this.snare1 = _s1;
		this.snare1Inc = 400 / 2;
		this.snare1Color = 0;
		this.snare1draw = false;

		this.snare2 = _s2;
		this.snare2Inc = 400 / 2;
		this.snare2Color = 0;
		this.snare2draw = false;

		this.snap = _s;
		this.snapInc = 1;
		this.snapColor = 0;
		this.snapdraw = false;

		this.clap = _c;
		this.clapInc = 1;
		this.clapColor = 0;
		this.clapdraw = false;

		this.hat = _h;
		this.hatInc = 1;
		this.hatColor = 0;
		this.hatdraw = false;

		this.shake = _sh;
		this.shakeInc = 1;
		this.shakeColor = 0;
		this.shakedraw = false;


		this.kick1.setVolume(1);
	}

	kick1_anim() {
		if (this.kick1draw == true) {
			fill(this.kick1Color);
			rect(width >> 1, height >> 1, width / 2, this.kick1Inc);
			this.kick1Inc += 20;
			if (this.kick1Inc > height) {
				this.kick1draw = false;
				background(0);
				print("kick1");
				this.kick1Inc = 0;
			}
		}
	}

	kick2_anim() {
		if (this.kick2draw == true) {
			fill(this.kick2Color);
			rect(width >> 1, height >> 1, this.kick2Inc, this.kick2Inc);
			this.kick2Inc += 20;
			if (this.kick2Inc > height) {
				this.kick2draw = false;
				background(0);
				print("kick2");
				this.kick2Inc = 0;
			}
		}
	}


	snare1_anim() {
		if (this.snare1draw == true) {
			fill(this.snare1Color);
			rect(width >> 1, height >> 1, this.snare1Inc, height);
			this.snare1Inc -= 10;
			if (this.snare1Inc < 0) {
				this.snare1draw = false;
				background(0);
				print("snare1");
				this.snare1Inc = 400 / 2;
			}
		}
	}

	snare2_anim() {
		if (this.snare2draw == true) {
			fill(this.snare2Color);
			rect(width >> 1, height >> 1, this.snare2Inc, this.snare2Inc);
			this.snare2Inc -= 10;
			if (this.snare2Inc < 0) {
				this.snare2draw = false;
				background(0);
				print("snare2");
				this.snare2Inc = 400 / 2;
			}
		}
	}


	hat_anim() {
		if (this.hatdraw == true) {
			fill(this.hatColor);
			ellipse(random((width >> 1) - 33, (width >> 1) + 33), random((height >> 1) - 33, (height >> 1) + 33), 50, this.hatInc);
			this.hatInc += 2;
			if (this.hatInc > 33) {
				this.hatdraw = false;
				background(0);
				print("hat");
				this.hatInc = 1;
			}
		}
	}

	clap_anim() {
		if (this.clapdraw == true) {
			fill(this.clapColor);
			ellipse((width >> 1) + this.clapInc, height >> 1, 50, this.clapInc);
			this.clapInc += 15;
			if (this.clapInc > 150) {
				this.clapdraw = false;
				background(0);
				print("clap");
				this.clapInc = 1;
			}
		}
	}

	snap_anim() {
		if (this.snapdraw == true) {
			fill(this.snapColor);
			ellipse((width >> 1) - this.snapInc, height >> 1, 50, this.snapInc);
			this.snapInc += 13;
			if (this.snapInc > 150) {
				this.snapdraw = false;
				background(0);
				print("snap");
				this.snapInc = 1;
			}
		}
	}

	shake_anim() {
		if (this.shakedraw == true) {
			fill(this.shakeColor);
			rect(random((width >> 1) - 33, (width >> 1) + 33), this.shakeInc, 50, 50);
			this.shakeInc += 15;
			if (this.shakeInc > height) {
				this.shakedraw = false;
				background(0);
				print("shake");
				this.shakeInc = 1;
			}
		}
	}
}