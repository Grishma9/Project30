class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,options);
      World.add(world, this.ground);
    }
    display(){
      var pos =this.ground.position;
     push()
      fill("pink");
      rectMode(CENTER);
      rect(pos.x, pos.y, 900, 20);
      pop()
    }
  };
