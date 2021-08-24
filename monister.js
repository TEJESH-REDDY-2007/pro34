class Monister {
    constructor(x,y,width,height) {
        var options = {
            //isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("monster2.png");
        this.width = width;
        this.height = height;
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
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
        }
      
        else {
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image,pos.x,pos.y,this.width,this.height);
            pop();
        }
       // console.log( this.body.velocity)
    }
      
    score(){
      if (this.body.speed>6){
        score = score+20;
      }
    }
}
