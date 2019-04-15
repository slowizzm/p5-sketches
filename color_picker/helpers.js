function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function rgbToHsl(rgb) {
	var a, add, b, diff, g, h, hue, l, lum, max, min, r, s, sat;
	r = parseFloat(rgb[0]) / 255;
	g = parseFloat(rgb[1]) / 255;
	b = parseFloat(rgb[2]) / 255;
	max = Math.max(r, g, b);
	min = Math.min(r, g, b);
	diff = max - min;
	add = max + min;
	hue = min === max ? 0 : r === max ? ((60 * (g - b) / diff) + 360) % 360 : g === max ? (60 * (b - r) / diff) + 120 : (60 * (r - g) / diff) + 240;
	lum = 0.5 * add;
	sat = lum === 0 ? 0 : lum === 1 ? 1 : lum <= 0.5 ? diff / add : diff / (2 - add);
	h = Math.round(hue);
	s = Math.round(sat * 100);
	l = Math.round(lum * 100);
	//a = parseFloat(rgb[3]) || 1;
	return [h, s, l, /*a*/ ];
}