function setup() {
  let cnv = createCanvas(400, 400);
  background(222);
  cnv.dragOver(_ => {
    background(157);
  });

  cnv.dragLeave(_ => {
    background(222);
  });

  cnv.drop(file => {
    let snd = loadSound(file.data, _ => {
      snd.play();
      p.html('playing').position(125, 100);
    });
  }, _ => {
    background(222);
  });

  let p = createP('Drag your file here ...').position(25, 100).style('font-size', '27pt');
}