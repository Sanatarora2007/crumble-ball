
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,leftBucket,rightBucket,bottomBucket;
var ball1

function setup(){
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	ball1= new Ball(200,400,20);
	ground = new Ground(600,500,1200,10);
	leftBucket= Bodies.rectangle(1100,450,20,100,{isStatic:true})
	World.add(world,leftBucket)
	bottomBucket= Bodies.rectangle(1000,500,200,20,{isStatic:true})
	World.add(world,leftBucket)
	rightBucket= Bodies.rectangle(900,450,20,100,{isStatic:true})
	World.add(world,leftBucket)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball1.display();
  rectMode(CENTER)
  fill("green")
  rect(leftBucket.position.x,leftBucket.position.y,20,100);
  rectMode(CENTER)
  rect(bottomBucket.position.x,bottomBucket.position.y,200,20);
  rectMode(CENTER)
  rect(rightBucket.position.x,rightBucket.position.y,20,100);
 
  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:70,y:-85 })

	}

}



