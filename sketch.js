const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    block1 = new Block(330,335,30,40);
    block2 = new Block(365,335,30,40);
    block3 = new Block(390,335,30,40);
    block4 = new Block(420,335,30,40);
    block5 = new Block(450,335,30,40);
    block6 = new Block(360,295,30,40);
    block7 = new Block(390,295,30,40);
    block8 = new Block(420,295,30,40);
    block9 = new Block(390,255,30,40);
    ground = new Ground(400,690,800,5);
    ground2 = new Ground(400,350,300,5);
    polygon = new Polygon(200,100,50,50);
    slingshot = new SlingShot(polygon.body, {x:200, y:50})
}

function draw(){
    background(0);
    Engine.update(engine);
    block1.display("purple");
    block2.display("purple");
    block3.display("purple");
    block4.display("purple");
    block5.display("purple");
    block6.display("pink");
    block7.display("pink");
    block8.display("pink");
    block9.display("blue");
    ground.display();
    ground2.display();
    polygon.display();
    fill("white")
    textSize(20);
    text("Drag the Hexagonal stone and release it, to lauch it towards the blocks",100,600);
}