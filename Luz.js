class Luz {

  constructor(lightColor, size, detectionDiameter){
  
    this.lightColor = lightColor;
    this.size = size;
    this.detectionDiameter = detectionDiameter;
    this.position = {x: null, y: null}
    
  }
  
  showOnCursor(touchDetected){
  
    if (touchDetected) {
      
      let touch = touches[0];
    
      radialGradient(
    
      touch.x, touch.y, 0,
      touch.x, touch.y, this.size/2,
      this.lightColor,
      color(0, 0, 0, 255)
      );
    
      this.position.x = touch.x;
      this.position.y = touch.y;
      
    } else {
    
      radialGradient(
      
        mouseX, mouseY, 0,
        mouseX, mouseY, this.size/2,
        this.lightColor,
        color(0, 0, 0, 230)
      );
      
      this.position.x = mouseX;
      this.position.y = mouseY;
    
    }
    
    //push();
    rect(0, 0, windowWidth, windowHeight);
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
