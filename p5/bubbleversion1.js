let bubbles = [];
function setup() {
  createCanvas(400, 400);
  

  for (let i = 0; i < 100; i++) {
    let x = random(height);
    let y = random(width);
    let radius = random(10, 20);

    bubbles.push(new Bubble(x, y, radius));
  }
}

function draw() {
  background(0);

  bubbles.forEach((bubble) => {
    bubble.show();
    bubble.move();
  });
}

function mousePressed() {

  bubbles.forEach((bubble) => {
    bubble.clicked();
  
  });
}

class Bubble {

  constructor(positionX, positionY, radius) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.radius = radius;
    this.brightness=0;
  }

  show() {
    
    
    
    let minBrightness = 20;
    let maxBrightness = 255;
    this.brightness = map(this.positionY, 0, height, minBrightness, maxBrightness);
    
    stroke(255);
    
    fill(this.brightness,0,0);
   

    ellipse(this.positionX, this.positionY, this.radius * 2);
  }

  move() {
    this.positionX = this.positionX + random(-1, 1);
    this.positionY = this.positionY + random(-1, 1);
  }
  
  clicked(){
    let d=dist(mouseX,mouseY,this.positionX,this.positionY);
    if(d<this.radius){
      this.brightness=255;
      console.log("haire");
      
    }
  }
}
