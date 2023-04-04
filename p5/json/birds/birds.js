var data;

function preload(){
  data=loadJSON("bird.json");
}
function setup() {
  //createCanvas(400, 400);
  noCanvas();
  
  var birds=data.birds;
  for(var i=0;i<birds.length;i++){
    createElement("h1",birds[i].family);
    var birdsmember=birds[i].members;
    for(var j=0;j<birdsmember.length;j++){
      createDiv(birdsmember[j]);
    }
  }
}

