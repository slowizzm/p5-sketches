function slidersSetup() {
  for (let i = 0; i < 4; i++) {
  sliders[i] = createSlider(0, 32, 4, 1);
  }

  sliders[0].position(width * 0.7, 20);
  sliders[1].position(width * 0.7, 60);
  sliders[2].position(width * 0.7, 80);
  sliders[3].position(width * 0.7, 100);
}