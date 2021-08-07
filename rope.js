class rope{
	constructor(body1,body2,pointA,pointB)
	{
 this.pointA=pointA;
 this.pointB=pointB;
 
 var options={
	bodyA:body1,
	
	bodyB:body2,
	pointB:{x:this.pointA,y:this.pointB},
	length:300,
	stiffness:0.1,
 }
 this.rope=Constraint.create(options)
 World.add(world,this.rope);
 }
	
	//create rope constraint here
	
	
	display() {
		var pointA=this.rope.bodyA.position
		var pointB=this.rope.bodyB.position
		
			strokeWeight(2);
			
			line(300,100,ball1.position.x,ball1.position.y);
			line(350,100,ball2.position.x,ball2.position.y);
			line(400,100,ball3.position.x,ball3.position.y);
			line(450,100,ball4.position.x,ball4.position.y);
			line(500,100,ball5.position.x,ball5.position.y);
			}	
	
	
	
}

