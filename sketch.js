
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world ;
var ground,ball;

function setup() {
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;
var ground_options={
  isStatic:true
}
ground=Bodies.rectangle(400,400,10,10,ground_options)
World.add(world,ground);
var ball_options={
 restitution:2
}
ball=Bodies.circle(300,100,50,ball_options)
World.add(world,ball);
console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  fill("red")
  rect(ground.position.x,ground.position.y,400,50);
  fill("blue");
  ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);


  //drawSprites();
}