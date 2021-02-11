const clearMask = _ => {
  mskGraphic.clear();
  msk.clear();
}

const setMask = _ => {
  msk.rect(xray.pos.x, xray.pos.y, res.w, 33, 13);
  mskGraphic.image(imgs[1], width * 0.5, height * 0.5, res.w, res.h);

  (mskClone = msk.get()).mask(mskGraphic.get());
}