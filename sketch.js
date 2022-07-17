
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter,Bodies.circle(80,30,5,Options)

	var Options={
		isStatic:false,
		restitution:3,
		friction:0.3,
		density:0.3
	}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		circle.applyForce()
	}
}



