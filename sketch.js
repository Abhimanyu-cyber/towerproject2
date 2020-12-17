const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,catapult,attacker;

function preload() {
    backgroundImg = loadImage("bg.png");
    //ground=loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,200,250,10);
    ground2=new Ground(400,350,250,10);
    //1st floor
    block1=new Box(260,120,30,30);
    block2=new Box(230,120,30,30);
    block3=new Box(200,120,30,30);
    block4=new Box(170,120,30,30);
    block5=new Box(140,120,30,30);
    block6=new Box(290,120,30,30);
    block7=new Box(110,120,30,30);
    //2nd floor
    block8=new Box(260,90,30,30);
    block9=new Box(230,90,30,30);
    block10=new Box(200,90,30,30);
    block11=new Box(170,90,30,30);
    block12=new Box(140,90,30,30);
    //3rd floor
    block13=new Box(230,60,30,30);
    block14=new Box(200,60,30,30);
    block15=new Box(170,60,30,30);
    //4th floor
    block16=new Box(200,30,30,30)

    //1st floor stage 2
    block17=new Box(490,330,30,30);
    block18=new Box(460,330,30,30);
    block19=new Box(430,330,30,30);
    block20=new Box(400,330,30,30);
    block21=new Box(370,330,30,30);
    block22=new Box(340,330,30,30);
    block23=new Box(310,330,30,30);
    //2nd floor stage 2
    block24=new Box(460,330,30,30);
    block25=new Box(430,330,30,30);
    block26=new Box(400,330,30,30);
    block27=new Box(370,330,30,30);
    block28=new Box(340,330,30,30);
    //3rd floor stage 2
    block29=new Box(430,330,30,30);
    block30=new Box(400,330,30,30);
    block31=new Box(370,330,30,30);
    //4th floor stage 2
    block32=new Box(400,330,30,30)

    attacker=new Attacker(990,170)
    chain=new Chain(attacker.body,{x:990,y:170})

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    attacker.display();
    chain.display();
}
function mouseDragged(){
    Matter.Body.setPosition(attacker.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
    if(keyCode===32){
        chain.attach(attacker.body);
    }
}
