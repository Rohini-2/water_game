
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg=loadImage("screen-5.jpg")
	
}



var ground;
function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,500,1600,10)

	//Create the Bodies Here.
	b1=new Basket(500,300,10,200);
	b2=new Basket(600,300,10,200);
	// b2=new Basket(200,100,200,100);
	// b3=new Basket(300,40,50,600);


	paper = new Paper(100,100,100)
	Engine.run(engine);
	

}


function draw() {
  rectMode(CENTER);
  background(bg);
  ground.display();
  b1.display();
   b2.display();
//   b3.display();
//   groundObject.display();
//   basketObject.display();
  paper.display()
  drawSprites();
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 40, y :-150})
	}
}
