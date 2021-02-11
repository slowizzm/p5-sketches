//memes
const gifs = ['https://media.giphy.com/media/XW77qPhX1by5G/giphy.gif',
  'https://media.giphy.com/media/vvIxKgElizkKA/giphy.gif',
  'https://media.giphy.com/media/ytJ5yeKBMNdPq/giphy.gif',
  'https://media.giphy.com/media/MYkPISup4TF60/giphy.gif',
  'http://giphygifs.s3.amazonaws.com/media/cLebJp7FLuhDG/giphy.gif',
  'https://media.giphy.com/media/l0Iy2MPfW2jmXeLgA/giphy.gif',
  'https://media.giphy.com/media/3o6Ztidg4wckXcMVSE/giphy.gif',
  'https://media.giphy.com/media/bDm4JsY87Skow/giphy.gif',
  'http://giphygifs.s3.amazonaws.com/media/aK7g0v3QXycik/giphy.gif'
];

//dom refs
const g_img = document.querySelector('.gifs'),
  p_elt = document.querySelector('.storyText'),
  theEnd_elt = document.querySelector('.theEnd'),
  startBtn_elt = document.querySelector('.start'),
  btnA_elt = document.querySelector('#btn-a'),
  btnB_elt = document.querySelector('#btn-b'),
    txt_input = document.querySelector('.input-txt'),
      cageFace = document.querySelector('.cage-face'),

  txtStory = [
    /*scene 1*/
    "This part I don't know if this really happened or I dreamt it later.",
    /*scene 2*/
    "In an era when there is so much to take in – when all we see is what is - our reality.",
    /*scene 3*/
    "The snake bit you, and a good portion of you died and was eaten.",
    /*scene 4*/
    "This is not a funny story, but I want to show you what we can do with a vampire. Let's talk about why.",
    /*scene 5*/
    "The soul. Or rather, the self, the ego, the soul. What the soul is does not concern us. Does it concern you?",
    /*scene 6*/
    "What's happening onscreen is what the person in the mirror looks like. I was surprised to see the resemblance. In that mirror you can see the person's mind, and the person in that mirror sees you.",
    /*scene 7*/
    "We've seen the good guys, but maybe the bad guy is actually pretty funny.",
    /*scene 8*/
    "Bats can't really laugh, but you can see them smile. Then the vampire eats you.",
    /*scene 9*/
    "I am the only survivor of the world that won't turn into a stone! I won't allow that to happen to the rest of you! I'm going to destroy you so that no more of us become this way!"
  ],

  txtBtn = ['clean the room', 'help Nick trash it', 'go left', 'go right', 'join me up on stage', 'look inside my pocket', 'go left', 'go right'],

  final_scene = gifs.length - 1;

//scene
let scene = 0;

let snds = [new Audio('snds/snd_1.mp3'),
  new Audio(''),
  new Audio(''),
  new Audio('snds/snd_2.mp3'),
  new Audio(''),
  new Audio(''),
  new Audio(''),
  new Audio(''),
  new Audio('snds/snd_4.mp3')
],
    snd_bg = new Audio('snds/lux.mp3');