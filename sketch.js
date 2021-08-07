const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var con;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	var roof_options={
		isStatic:true			
	}
var ball_options={
	isStatic:false,
	restitution:0.2,
}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
ball1=Bodies.circle(290,400,10,ball_options);
World.add(world,ball1)
ball2=Bodies.circle(340,400,10,ball_options);
World.add(world,ball2)
ball3=Bodies.circle(390,400,10,ball_options);
World.add(world,ball3)
ball4=Bodies.circle(440,400,10,ball_options);
World.add(world,ball4)
ball5=Bodies.circle(490,400,10,ball_options);
World.add(world,ball5)
	Engine.run(engine);
	rope1=new rope(ball1,roof,-90,10)
rope2=new rope(ball2,roof,-40,10)
rope3=new rope(ball3,roof,10,10)
rope4=new rope(ball4,roof,60,10)
rope5=new rope(ball5,roof,110,10)
ellipseMode (CENTER)
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
 //create ellipse shape for multiple bobs here
  rect(roof.position.x,roof.position.y,250,20);
ellipse(ball1.position.x,ball1.position.y,50,50);
ellipse(ball2.position.x,ball2.position.y,50,50);
ellipse(ball3.position.x,ball3.position.y,50,50);
ellipse(ball4.position.x,ball4.position.y,50,50);
ellipse(ball5.position.x,ball5.position.y,50,50);
  //call display() to show ropes here
 rope1. display();
 rope2.display ();
 rope3.display ();
 rope4.display ();
 rope5.display ();

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(ball1,{x:0,y:0},{x:0,y:0.05})
	}

}