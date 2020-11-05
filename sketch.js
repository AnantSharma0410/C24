const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myengine, myworld, ground,paper,basket1,basket2,basket3;
function setup() {
  createCanvas(1400,400);
  myengine=Engine.create();
  myworld=myengine.world;
  var groundoption={isStatic:true}
  ground=Bodies.rectangle(200,390,400,20,groundoption);
  World.add(myworld, ground);
  var paperoption={restitution:0.3,
  friction:0.5,density:1.2}
  paper=Bodies.circle(200,200,20,paperoption);
  World.add(myworld, paper);
  var basketoption={isStatic:true}
  basket1=Bodies.rectangle(1000,280,100,100,basketoption)
  basket2=Bodies.rectangle(1200,280,100,100,basketoption)
  basket3=Bodies.rectangle(1100,370,100,100,basketoption)
  World.add(myworld, basket1,basket2,basket3)

}

function draw() {
  background(0); 
  Engine.update(myengine);
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x, ground.position.y,2400,20);
  fill("green");
  rect(basket1.position.x,basket1.position.y,20,200);
  fill("green");
  rect(basket2.position.x,basket2.position.y,20,200);
  rect(basket3.position.x,basket3.position.y,220,20);
  ellipseMode(RADIUS);
  fill("white");
  ellipse(paper.position.x,paper.position.y,20,20);
}
function keyPressed(){
  if(keyCode==UP_ARROW){
    Matter.Body.applyForce(paper.Body.position,paper.Body.position,{x:85,y:85});
  }
}