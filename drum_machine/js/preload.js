function preload() {
  for (let i = 0; i < NUM_PADS; i++) {
    snds_0[i] = loadSound('assets/audio/soundpacks/unit808/snd_' + i + '.mp3');
    snds_0[i].setVolume(0.25);
    snds_1[i] = loadSound('assets/audio/soundpacks/haze/snd_' + i + '.mp3');
    snds_1[i].setVolume(0.25);
    snds_2[i] = loadSound('assets/audio/soundpacks/brick-city/snd_' + i + '.mp3');
    snds_2[i].setVolume(0.25);
  }

  //query selectors to update css
  pads = [select('.pad-synth1'),
    select('.pad-synth2'),
    select('.pad-synth3'),
    select('.pad-hat1'),
    select('.pad-hat2'),
    select('.pad-snare'),
    select('.pad-clap'),
    select('.pad-kick'),
    select('.pad-open')
  ];
  soundPacksElt = [select('.sound-pack-1'),
    select('.sound-pack-2'),
    select('.sound-pack-3')
  ];
  toggleSwitch = select('.toggle-switch-on');
  display_txt = select('.display-txt');
  doc = select('html');
}