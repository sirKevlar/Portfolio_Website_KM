let bandList = ["'Lazlo Baby'","'Robert John & Kev Morel'","'Forge On'","'The Jannocks'",
"'The Consolations'","'Kev Morel' - solo","'Still Down Gill'","'The Four Nobodies'",
"'Clarke Van Gelder'","'TurboBoost' - Guest","'Peer Van See' - Guest",
"And several I can't remember"];
let y = document.getElementById("animatedBands")

function display(i){
if(i >= bandList.length){
i = 0;
}

y.innerHTML = bandList[i];
setTimeout(function(){
display(i + 1)
}, 3000)
}