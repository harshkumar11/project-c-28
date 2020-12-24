
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	tree = createSprite(750,500,50,300);
	
	ground = new ground(400,650,800,10);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  
  drawSprites();
 
}



