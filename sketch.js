 const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var score = 0;

function preload() {
  timeChange();
}

function setup() {
  createCanvas(1280, 616);
  engine = Engine.create();
  world = engine.world;

  block1 = new Block(600,463);
  block2 = new Block(600,401);
  block3 = new Block(600,339);
  block4 = new Block(600,277);
  block5 = new Block(600,215);
  block6 = new Block(600,153);
  block7 = new Block(600,91);
  block8 = new Block(600,29);

  block9 = new Block(710,463);
  block10 = new Block(710,401);
  block11 = new Block(710,339);
  block12 = new Block(710,277);

  block13 = new Block(820,463);
  block14 = new Block(820,401);
  block15 = new Block(820,339);
  block16 = new Block(820,277);
  block17 = new Block(820,215);

  block18 = new Block(930,463);
  block19 = new Block(930,401);
  block20 = new Block(930,339);
  block21 = new Block(930,277);
  block22 = new Block(930,215);
  block23 = new Block(930,153);
  block24 = new Block(930,91);

  monister = new Monister(1120,394,200,200);

  hero = new Hero(150,350,250,100);

  ground = new Ground(641,500,1280,10);

  rope = new Rope(hero.body ,{x:150, y:100});
}

function draw() {
 // if(backgroundImg)
   //   background(backgroundImg);
  //
  background(100);
  Engine.update(engine);

  text("scoer :" + score , 1100, 40)

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();

  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();

  rope.display();

  monister.display();

  hero.display();

  ground.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

function mousePressed(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(hero.body,{x:150,y:300});
    rope.attach(hero.body);
  }
}

async function timeChange() {
  var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responceJSON = await responce.json();
  var datetime = responceJSON.datetime
  var hour = datetime.slice(11,13)

  if(hour <=0600 && hour >= 1300){
      bg =  "gamingbackground1.png";
  }

  else {
      bg = "gamingbackground2.png";
  }

  backgroundImg = loadImage(bg);
}