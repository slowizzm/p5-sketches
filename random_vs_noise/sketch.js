const randomArr = [],
  perlinArr = [];

let num = 10,
  xoff = 0;

function setup() {
  createCanvas(600, 400);
  noStroke();

  // add values to array via random and noise to show the difference in range
  //   let n = 1;
  //   for (let i = 0; i < num; i++) {
  //     randomArr[i] = int(random(width));
  //     perlinArr[i] = int(map(noise(n), 0, 1, 0, width));
  //     n += 0.005;
  //   }

  //   console.log(randomArr);
  //   console.log(perlinArr);
}


function draw() {
  clear();

  //update position along x-axis using random()
  ellipse(random(width), height * 0.4, 33);

  //update position along x-axis using noise();
  ellipse(map(noise(xoff), 0, 1, 0, width), height * 0.6, 33);

  //increment the x offset (smaller the value the smoother the motion)
  xoff += 0.005;
}