function Sliderz() {

	this.setup = function() {
		sliders[0] = createSlider(2, 33, 4);
		sliders[1] = createSlider(0, 100, 0);
		sliders[2] = createSlider(1, 100, 4);
		sliders[3] = createSlider(7, 13, 10);
		sliders[4] = createSlider(1, 100, 4);
		sliders[5] = createSlider(1, 100, 4);
		
		sliders[0].position(width*.7,20);
		sliders[1].position(width*.7,40);
		sliders[2].position(width*.7,60);
		sliders[3].position(width*.7,80);
		sliders[4].position(width*.7,100);
		sliders[5].position(width*.7,120);
	}
	
	this.display = function() {
		slider[0] = sliders[0].value();
		text(slider[0],33, 20);
	}
}