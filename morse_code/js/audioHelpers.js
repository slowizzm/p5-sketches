function audioInit() {
  osc = new p5.SinOsc();

  // Instantiate the envelope
  envelope = new p5.Env();

  // set attackTime, decayTime, sustainRatio, releaseTime
  // envelope.setADSR(0.1, 0.9, 0.1, 0.5);

  // set attackLevel, releaseLevel
  envelope.setRange(1, 0);

  osc.start();

  fft = new p5.FFT();
  noStroke();

  osc.freq(0);
}

function playNote(n) {
  let midiValue = scaleArray;
  let freqValue = midiToFreq(midiValue);
  osc.freq(freqValue);

  
  if (n) {
    envelope.setADSR(0.025, 0.04, 0.1, 0.1);
  } else {
    envelope.setADSR(0.025, 0.04, 0.3, 0.3);
  }
  envelope.play(osc);
}