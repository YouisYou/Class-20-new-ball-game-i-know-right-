
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2
var stand
var stand2
var angle = 20
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball2_options = {
   restitution: 0.1,
   frictionAir: 0.02
  }

  ball2 = Bodies.circle(90,15,20,ball2_options)
  World.add(world,ball2)

 stand = Bodies.rectangle(50,195,100,20,ground_options);
 World.add(world,stand);

 stand2 = Bodies.rectangle(325,100,75,20,ground_options);
 World.add(world,stand2);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

 // ellipse(ball2.position.x,ball.position.y,15);
  rect(stand.position.x,stand.position.y,100,10);
  Matter.Body.rotate(stand2,angle)
  push ()
  translate (stand2.position.x,stand2.position.y)
  rotate(angle)
  rect(0,0,75,20)
  pop ()
 angle += 0.1
 Matter.Body.rotate(ball2,angle)
 push ()
 translate (ball2.position.x,ball2.position.y)
 rotate(angle)
 ellipse(0,0,20,20)
 pop ()
}

