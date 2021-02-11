let i = 0,
  speed = 42, //smaller the number the faster it types
  txt = '"Take root and flourish cosmic ocean a mote of dust suspended in a sunbeam Tunguska event another world worldlets? Of brilliant syntheses a still more glorious dawn awaits inconspicuous motes of rock and gas network of wormholes intelligent beings Euclid. Rings of Uranus two ghostly white figures in coveralls and helmets are soflty dancing the sky calls to us two ghostly white figures in coveralls and helmets are soflty dancing realm of the galaxies not a sunrise but a galaxyrise and billions upon billions upon billions upon billions upon billions upon billions upon billions." ~ Segan Ipsum';

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typedWords").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}