let careerList = ["Classroom music teacher and tutor...         ","Record label director and in-house producer..",
                    "Tour manager and touring musician...         ","Bar supervisor & chef in vegetarian cafe...  ",
                    "Painter and decorator for National Trust...  ","Window and conservatory fitter...            ",
                    "Specialist reinforced roofing fabricator...  ","Sales manager and field sales exec...        ",
                    "Administrator and bookeeper...               "];
let x = document.getElementById("animatedFooter")

function display(i){
    if(i >= careerList.length){
        i = 0;
    }

    x.innerHTML = careerList[i];
    setTimeout(function(){
       display(i + 1)
    }, 3000)
}

display(0);




