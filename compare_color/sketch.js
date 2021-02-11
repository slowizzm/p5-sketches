let img,
  overCnv = false,
  colToCompare = [0, 0, 0, 255];

preload = _ => {
  img = loadImage('https://picsum.photos/200/300/?random');
}

setup = _ => {
  let cnv = createCanvas(img.width, img.height);
  cnv.mouseOut(_ => {
    overCnv = false;
  });
  cnv.mouseOver(_ => {
    overCnv = true;
  });
}

draw = _ => {
  background(220);

  let pix = img.get(mouseX, mouseY);

  image(img, 0, 0);

  if (overCnv) compareColorArray(pix, colToCompare) ? console.log('color match') : null;

}

const compareColorArray = (pix, col) => {
  for (let i = 0; i < col.length; i++) {
    if (pix[i] != col[i]) {
      return false;
    }
    return true;
  }
}