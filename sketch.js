// var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
// var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
// function preload() {}

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  //packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
  //World.add(world, packageBody);

  ball = new Paper(200, 100, 20);

  box1 = new Box(700, 522, 20, 100);
  box2 = new Box(810, 580, 200, 20);
  box3 = new Box(920, 522, 20, 100);
  //   Create a Ground
  //     ground = Bodies.rectangle(width / 2, 600, width, 10, { isStatic: true });
  //     World.add(world, ground);
  ground = new Ground(600, height, 1200, 20);

  Engine.run(engine);
}

function draw() {
  background(0);
  Matter.Engine.update(engine);
  rectMode(CENTER);

  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  //   drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, {
      x: 42,
      y: -42,
    });
  }
}
