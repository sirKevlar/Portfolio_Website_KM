let bandList = [
  "'Lazlo Baby'",
  "'Robert John & Kev Morel'",
  "'Forge On'",
  "'The Jannocks'",
  "'The Consolations'",
  "'Kev Morel' - solo",
  "'Still Down Gill'",
  "'The Four Nobodies'",
  "'Clarke Van Gelder'",
  "'TurboBoost' - Guest",
  "'Peer Van See' - Guest",
  "And several I can't remember",
];
let y = document.getElementById('animatedBands');

function display2(j) {
  if (j >= bandList.length) {
    j = 0;
  }

  y.innerHTML = bandList[j];
  setTimeout(function () {
    display2(j + 1);
  }, 2000);
}
display2(0);

let productionList = [
  "'The Liar' LP",
  "'Peer Van See' EP",
  "'Richard Lomax' EP",
  "'Edwin Putnam' EP",
  "'Quincey May Brown' EP",
  "'AllFM Christmas' EP",
  "'Flat Pack Gallows' LP",
  'So many singles...',
];
let z = document.getElementById('animatedAlbums');

function display3(k) {
  if (k >= productionList.length) {
    k = 0;
  }

  z.innerHTML = productionList[k];
  setTimeout(function () {
    display3(k + 1);
  }, 2000);
}
display3(0);
