const careerList = [
  'Classroom music teacher and tutor...         ',
  'Record label director and producer..',
  'Tour manager and touring musician...         ',
  'Bar supervisor & chef in a cafe...  ',
  'Decorator for The National Trust...  ',
  'Window and conservatory fitter...            ',
  'Specialist roofing fabricator...  ',
  'Sales manager and field sales exec...        ',
  'Administrator and bookeeper...               ',
];
let x = document.getElementById('animatedFooter');

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
