class Ball{
    constructor(x,y,width,height,angle){
        var optionss={
           
            'frictionAir':0.005,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,optionss);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){

      //  var pos=this.body.position
        var angle=this.body.angle

       push();
       translate(this.body.position.x,this.body.position.y);
       rotate(angle);
       rectMode(CENTER)
       strokeWeight(4)
       stroke("blue");
       fill("red")
       rect(0,0,this.width,this.height);
       pop();
       
    }
    
    
    
    
    
    
    
    
    
    
    }