const introTextArray = [
  'H',
  'He',
  'Hey',
  'Hey ',
  'Hey t',
  'Hey th',
  'Hey the',
  'Hey ther',
  'Hey there',
  'Hey there!',
  'Hey there!',
  'Hey there!_',
  'Hey there!_',
  'Hey there! ',
  'Hey there! ',
  'Hey there!_',
  'Hey there!_',
  'Hey there! ',
  'Hey there! ',
  'Hey there!_',
  'Hey there!_',
  'Hey there! ',
  'Hey there! ',
  'Hey there!_',
  'Hey there!_',
  'Hey there! ',
  'Hey there! ',
  'Hey there!_',
  'Hey there!_',
  'Hey there!  ',
  'Hey there!  ',
  'Hey there! S',
  'Hey there! Sc',
  'Hey there! Scr',
  'Hey there! Scro',
  'Hey there! Scrol',
  'Hey there! Scroll',
  'Hey there! Scroll ',
  'Hey there! Scroll d',
  'Hey there! Scroll do',
  'Hey there! Scroll dow',
  'Hey there! Scroll down',
  'Hey there! Scroll down ',
  'Hey there! Scroll down f',
  'Hey there! Scroll down fo',
  'Hey there! Scroll down for',
  'Hey there! Scroll down for ',
  'Hey there! Scroll down for m',
  'Hey there! Scroll down for mo',
  'Hey there! Scroll down for mor',
  'Hey there! Scroll down for more',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more_',
  'Hey there! Scroll down for more ',
  'Hey there! Scroll down for more ',
];

const introAnimation = () => {
  let aniText = document.getElementById('clickMe');
  let num = 0;
  console.log('working', aniText);
  function writeMe() {
    if (num > 78) {
      return aniText;
    } else {
      aniText.innerHTML = introTextArray[num];
      num++;
      setTimeout(writeMe, 120);
    }
  }
  writeMe(0);
};

introAnimation();
