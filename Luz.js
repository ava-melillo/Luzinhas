class Luz {

  constructor(lightColor, size, detectionDiameter){
  
    this.lightColor = lightColor;
    this.size = size;
    this.detectionDiameter = detectionDiameter;
    this.position = {x: null, y: null}
    
  }
  
  showOnCursor(){
  
    
    radialGradient(
    
      mouseX, mouseY, 0,
      mouseX, mouseY, this.size/2,
      this.lightColor,
      color(0, 0, 0, 0)
    );
    
    //fill(this.lightColor);
    this.position.x = mouseX;
    this.position.y = mouseY;
    
    //push();
    circle(this.position.x, this.position.y, this.size);
    //pop();
  }
}

function radialGradient(start_x, start_y, startRadius, end_x, end_y, endRadius, colorStart, colorEnd){

  let gradient = drawingContext.createRadialGradient(
    start_x, start_y, startRadius, end_x, end_y, endRadius
  );
  
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  
  drawingContext.fillStyle = gradient;
  
}
