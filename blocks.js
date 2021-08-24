class Block {
    constructor(x,y) {
        var options = {
           // isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,60,60,options);
        World.add(world,this.body);
        this.Visiblity = 255;
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;


        if (this.body.speed<6) {
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            strokeWeight(2)
            fill("red")
            rectMode(CENTER);
            rect(0,0,60,60);
            pop();
        }
      
        else {
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 51;
            tint(255,this.Visiblity);
            pop();
        }
        //console.log( this.body.velocity)
    }
      
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score = score+1;
      }
    }
}