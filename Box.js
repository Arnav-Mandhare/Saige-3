class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
        
    }
    this.visiblity=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    console.log(this.body.speed)
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    if(this.body.speed<3){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();


    }else{
      World.remove(world,this.body) 
      push() 
      this.visiblity = this.visiblity - 5;
      tint(255,this.visiblity)
      //rect(this.body.position.x,this.body.position.y,50,50)
      pop()
    }
  }
}
