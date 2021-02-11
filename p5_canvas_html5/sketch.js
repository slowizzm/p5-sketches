// mixing in canvas js with p5

setup = _ => {
  let canvas = createCanvas(400, 400);

  let ctx = canvas.drawingContext;

  ctx.font = "42px JetBrains Mono"; // linked to google fonts - see index.html
  ctx.fillStyle = "#FF0000";
  ctx.fillText("Hello, Darkness", 10, 50);
}