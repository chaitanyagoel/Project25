class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'restitution':0.8,
          'friction':1.0,
         'density':1.0
      }
    
      this.bodyleft = Bodies.rectangle(x, y, 15, 130, options);
      this.bodyright = Bodies.rectangle(x, y, 15, 130, options);
      this.bodybottom = Bodies.rectangle(x, y, 130, 15, options);
      
      this.width = width;
      this.height = height;
      this.image = loadImage("image/dustbin.png")
      World.add(world, this.bodyleft);
      World.add(world, this.bodyright);
      World.add(world, this.bodybottom);
  
    }
    display(){
      var pos =this.bodyleft.position;
      var angle = this.bodyleft.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, 15, 130);
      pop();

      push();
      translate(this.bodyright.x, this.bodyright.y);
      rotate(this.bodyright.angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0,15, 130);
      pop();

      push();
      translate(this.bodybottom.x,this.bodybottom.y);
      rotate(this.bodybottom.angle);
      imageMode(CENTER);
      fill("red");
      image(this.image,this.bodybottom.x,this.bodybottom.x,this.width, this.height);
      pop();
    
    
    
    }
  };