const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1,log2,log3,log4,log5;
var ground, bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new pig(910,390)
    log1 = new Log(810,260,100, PI)
    bird = new Bird(100,100)
}

function draw(){
    background(177, 219, 228);
    Engine.update(engine);
    console.log(box1.body.position.x);
    console.log(box1.body.position.y);
    console.log(box1.body.angle);
    box1.display();
    ground.display();
    log1.display();
    pig1.display();  
    bird.display();
}