const introTextArray = [
  'HEY THERE! SCROLL DOWN FOR MORE_',
  '⬇   ⬇   ⬇   ⬇   ⬇   ⬇   ⬇',
];

const introAnimation = () => {
  let aniText = document.getElementById('welcome-message');
  let counter = 0;
  let numSwitch = 0;
  function writeMe() {
    if (counter > 100) {
      return aniText;
    } else {
      if (counter < 32) {
        aniText.innerHTML = introTextArray[0].substring(0, counter);
      } else {
        aniText.innerHTML = introTextArray[numSwitch];
        numSwitch === 0 ? numSwitch = 1 : numSwitch = 0;
      }
    }
    const timeDelay = counter < 32 ? 80 : 1000;
    counter++;
    setTimeout(writeMe, timeDelay);
  }
  writeMe(0);
};

introAnimation();
