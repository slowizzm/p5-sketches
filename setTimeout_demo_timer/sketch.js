function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(42);
  fill(33);
  
  timer(5);
}

const timer = (startTime) => {
  startTime++;
  for (let i = 0; i < startTime; i++) {
    setTimeout(i => {
      background(220), text(--startTime, width * 0.5, height * 0.5)
    }, 1000 * i);
  }
}