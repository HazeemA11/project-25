
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,bin1,bin2,ball,paper;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  Ground=new ground(400,20,700,20);
  bin1=new bin (650,25,30,100);
  bin2= new Bin (680,25,30,100);
  ball= new ball(100,30,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
 
  ground.display();
  bin1.display();
  bin2.display();
  ball.diplay();
  drawSprites();
 
}



