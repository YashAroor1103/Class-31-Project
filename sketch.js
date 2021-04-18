const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var maxDrops = 100;
var drops = [];


function preload(){
 
}

function setup(){
  var canvas = createCanvas(300,500);
  engine = Engine.create();
  world = engine.world;

  if(frameCount%100===0){
    for(var i=0; i<maxDrops; i++){
      drops.push(new Drop(random(0,400),random(0,400),3,10));
    }
  }

 
}

function draw(){
  background("black");
  Engine.update(engine);

 

  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }

}


