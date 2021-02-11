const projectiles = [];

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
}

function draw() {
  background(13, 17, 21);
  for (let i = 0; i < projectiles.length; i++) {
    projectiles[i].render();
  }
  if (mouseIsPressed) {
    projectiles.push(new Projectile({
      x: mouseX + random(-1, 1),
      y: mouseY + random(-1, 1)
    }));
  }

  if (projectiles.length >= 33) projectiles.splice(0, 1);
}