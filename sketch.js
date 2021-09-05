const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world ,engine;
var snowi;
var snow = [];
var sound;

function preload(){
snowi = loadImage("snow3.jpg");
sound=loadSound("music.mp3");
}


function setup() {

  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);

  background(snowi); 
  sound.play();

  if(frameCount%40=== 0){
    snow.push(new Snow(random(0,800),10));
  }

  for(var i = 0; i < snow.length; i++){
    snow[i].display();
  }
  
  drawSprites();
}