class Snow{
    constructor(x,y,r){
        var options = {
          'restitution' : 0.1,
          'friction': 0,
		      'density': 1.2,
          
        }
        this.x=x;
	    	this.y=y;
	    	this.r=40;
        this.body = Bodies.circle(x,y,(this.r-20)/2, options);
        this.image = loadImage("snow4.webp");
		    World.add(world, this.body);
     
    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image (this.image,0,0,this.r,this.r);
      noStroke();
      
      pop();
  }

      
    }


