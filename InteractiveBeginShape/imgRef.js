function checkRefImage() {
  push();
  imageMode(CENTER);
  if (img_ref) {
    image(img_ref, width * 0.5, height * 0.5);
  }
  pop();
}