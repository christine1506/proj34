class Monster {
  constructor(x,y,width,height)
	{
		var options = { 
			isStatic: true,
      		density: 5, 
      		frictionAir: 0
    };
		//this.x=x;
		//this.y=y;
		//this.r=r;
		this.width = width;
		this.height = height;
		this.image=loadImage("monster1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}
