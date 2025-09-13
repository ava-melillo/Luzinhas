class Aleluia{

  constructor(position_x, position_y, maxSpeed, speed_x, speed_y, size, jiggle, acolor){
    
    this.position = {
    
      x: position_x,
      y: position_y
    };
    
    this.maxBoySpeed = maxSpeed;
    this.speed = {    
      x: speed_x,
      y: speed_y
    };
    
    this.size = size;
    this.jiggle = jiggle;
    this.acolor = acolor;
    this.distance = {x: null, y: null};
    this.nearLight = false;
    this.wingUp = true;
  
  }
  
  move(light){
    
    this.manageCollision();
    this.manageAttraction(light);
    this.flapWings();
  
    if (this.nearLight == false){
      
      this.position.x += this.speed.x + random(this.jiggle * -1, this.jiggle);
      this.position.y += this.speed.y + random(this.jiggle * -1, this.jiggle);
    } else {
    
      this.position.x += random(this.jiggle/2 * -1, this.jiggle/2);
      this.position.y += random(this.jiggle/2 * -1, this.jiggle/2);
    }
  
  }
  
  manageCollision(){
    
    if (this.position.x > windowWidth - this.jiggle || this.position.x < this.jiggle){
    
      this.speed.x *= -1;
    }
    if (this.position.y > windowHeight - this.jiggle || this.position.y < this.jiggle){
    
      this.speed.y *= -1;
    }
  }
  
  manageAttraction(light){
    
    if (this.position.x > (light.position.x - light.detectionDiameter/2) && this.position.x < (light.position.x + light.detectionDiameter/2)){
      if (this.position.y > (light.position.y - light.detectionDiameter/2) && this.position.y < (light.position.y + light.detectionDiameter/2)){
      
        //print("ueeepaaa entrou hein");
        let distance = dist(mouseX, mouseY, this.position.x, this.position.y);
        let vx = (mouseX - this.position.x)/distance;
        let vy = (mouseY - this.position.y)/distance;
        this.position.x += vx;
        this.position.y += vy;
        this.nearLight = true;
      
      } else {
      
        this.nearLight = false;
      }
      
    } else {
    
      this.nearLight = false;
    }
  }
  
  show(){
    
    drawingContext.fillStyle = color;
    fill(this.acolor);
    circle(this.position.x, this.position.y, size);
  }
  
  flapWings(){
  
    fill(color(255, 255, 255, 40));
    translate(this.position.x, this.position.y);
    
    if (this.wingUp == true){
      
      print("baixo");
      rotate(QUARTER_PI/2);
      ellipse(0 - this.size*2, 0, this.size*4, this.size); 
      rotate(-QUARTER_PI/2);
      rotate(-QUARTER_PI/2);
      ellipse(0 + this.size*2, 0, this.size*4, this.size);
      
      if (frameCount % 5 == 0) this.wingUp = false;
      
    } else {
    
      print("cima");
      rotate(-QUARTER_PI/2);
      ellipse(0 - this.size*2, 0, this.size*4, this.size); 
      rotate(QUARTER_PI/2);
      rotate(QUARTER_PI/2);
      ellipse(0 + this.size*2, 0, this.size*4, this.size);
      
      if (frameCount % 5 == 0) this.wingUp = true;
    }
    
    resetMatrix();
    
  }
}
