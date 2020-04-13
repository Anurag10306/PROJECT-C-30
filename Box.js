class Box extends baseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.Visibility = 255;
        if(gameState === "Win" || gameState === "Lose"){
          this.body.isStatic = true;
        }
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(pos.y < 510){
          push();
          translate(pos.x,pos.y);
          rectMode(CENTER);
          rotate(angle);
          stroke(0)
          strokeWeight(1);
          fill(255);
          rect(0,0,this.width,this.height);
          pop();
        }
        else{
            World.remove(world, this.body);
            score = score + 10;
            pos.y = -1000;
            this.body.isStatic = true;
            push();
            this.Visiblity = this.Visiblity - 0.1;
            fill(this.Visiblity);
            pop();
        }
    }
}
