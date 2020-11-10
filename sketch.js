var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,block3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);
// creating ground sprite and givng shape color
	groundSprite=createSprite(width/2, 560, width,20);
	groundSprite.shapeColor= 220;
// creating package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 560, width, 20 , {isStatic:true} );
 	World.add(world, ground);

	 packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.5, isStatic:true});
	 World.add(world, packageBody);
	 

	 block1 = new Block(300,550,150,15);
	 block2 = new Block(230,520,15,100);
	 block3 = new Block(370,520,15,100);
	 
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.scale = 0.1;

  block1.display();
  block2.display();
  block3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}
