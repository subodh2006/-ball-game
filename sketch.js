const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var chain1;
var ball;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box (700,20,50,50);
    box2 = new Box(700,20,50,50);
    box3 = new Box (750,20,50,50);
    box4 = new Box(800,20,50,50);
    box5 = new Box (750,40,50,50);
    box6 = new Box (700,50,50,50);
    box7 = new Box (700,20,50,50);
    box8 = new Box (650,20,50,50);
    box9 = new Box (650,20,50,50);
    box10 = new Box (600,20,50,50);
    ball = new Ball(100,100,40,40);
chain = new Chain(ball.body,{x:400,y:200});

    ground = new Ground(600,380,1200,20)

   
   
}  

function draw(){
    background("lightblue");
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
ball.display();
chain.display();

    ground.display();
}