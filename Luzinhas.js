let aleluias = [];
let numberElements = 40;

let asas;

let acolor = 255;
let speed = 10;
let size = 7;
let jiggle = 30;

let light;
let lightColor;
let lightSize = 600;
let lightDetectionRadius = 800;

let backgroundSound;

function preload(){

  backgroundSound = loadSound("tardinha.mp3");
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  noStroke();
  
  for (i = 0; i < numberElements; i++){
    
    aleluias.push( new Aleluia(
      
      random(size/2, windowWidth - (size/2)),
      random(size/2, windowHeight - (size/2)),
      speed,
      speed * randomFloat(-1, 1),
      speed * randomFloat(-1, 1),
      size,
      jiggle,
      acolor
    
    ));
    
    //asas = new Aleluia (windowWidth/2, windowHeight/2, 0, 0, 0, size, 0, acolor);
  }
  
  document.body.style.overflow = 'hidden';
  
  lightColor = color(255, 230, 100, 100);
  light = new Luz(lightColor, lightSize, lightDetectionRadius);
  
  
}

function draw() {
  
  background(0);
  
  light.showOnCursor();
  
  //asas.move(light);
  //asas.show();
  
  for (i in aleluias){
    
    aleluias[i].move(light);
    aleluias[i].show();
  }

}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function radialGradient(start_x, start_y, startRadius, end_x, end_y, endRadius, colorStart, colorEnd){

  let gradient = drawingContext.createRadialGradient(
    start_x, start_y, startRadius, end_x, end_y, endRadius
  );
  
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  
  drawingContext.fillStyle = gradient;
  
}

function mouseClicked() {
  backgroundSound.loop();
}
