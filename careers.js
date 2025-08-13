const careerList = [
  'Classroom music teacher & tutor',
  'Record label director & producer',
  'Tour manager & touring musician',
  'Bar supervisor & chef in a cafe',
  'Decorator for The National Trust',
  'Window & conservatory fitter',
  'Specialist roofing fabricator',
  'Sales manager & field sales exec',
  'Administrator & bookeeper',
];
let x = document.getElementById('animated-footer');

function display(i) {
  if (i >= careerList.length) {
    i = 0;
  }

  x.innerHTML = careerList[i];
  setTimeout(function () {
    display(i + 1);
  }, 2000);
}

display(0);
