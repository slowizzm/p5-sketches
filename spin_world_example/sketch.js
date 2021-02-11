let world = [],
  imgs_env = [],
  num_imgs_env = 3,
  imgs_world = [],
  num_imgs_world = 2;

let offset = [];
offset[0] = {
  x: 0,
  y: 0
};

offset[1] = {
  x: -210,
  y: -210
};

function preload() {
  for (let i = 0; i < num_imgs_env; i++) {
    imgs_env[i] = loadImage(`assets/images/environment/env${i}.png`);
  }

  for (let i = 0; i < num_imgs_world; i++) {
    imgs_world[i] = loadImage(`assets/images/world/world${i}.png`);
  }
}

function setup() {
  createCanvas(1024, 360);
  imageMode(CENTER);

  for (let i = 0; i < num_imgs_world; i++) {
    world[i] = new World(imgs_world[i], width * 0.5, height, offset[i]);
  }
}

function draw() {
  background('#28223F');

  image(imgs_env[0], width * 0.5, height * 0.35);
  image(imgs_env[1], width * 0.28, height * 0.9);
  image(imgs_env[2], width * 0.7, height * 1.2);

  for (let i = 0; i < world.length; i++) {
    world[i].render();
  }
}

function keyPressed(e) {
  switch (e.code) {
    case 'ArrowLeft':
    case 'KeyA':
      for (let i = 0; i < world.length; i++) {
        world[i].dir = 'right';
      }
      break;
    case 'ArrowRight':
    case 'KeyD':
      for (let i = 0; i < world.length; i++) {
        world[i].dir = 'left';
      }
      break;
  }
}

function keyReleased() {
  for (let i = 0; i < world.length; i++) {
    world[i].dir = 'idle';
  }
}