const{Engine, World, Bodies, MouseConstraint, Mouse, Constraint, Composites} = Matter;
var world, engine;

let ground;
let trigger;

var constraint;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var base1, base2;
var sling;
var topEdge, leftEdge, rightEdge;

var score = 0;
var Time = 2000;
var gameState = "Play";

var r,g,b;
function setup(){

    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 610, 1200, 100);
    trigger = new Trigger(200, 300, 20);

    box1 = new Box(600, 490, 60, 60);
    box2 = new Box(700, 490, 60, 60);
    box3 = new Box(800, 490, 60, 60);
    box4 = new Box(650, 400, 60, 60);
    box5 = new Box(750, 400, 60, 60);
    box6 = new Box(700, 310, 60, 60);

    box7 = new Box(600, 290, 60, 60);
    box8 = new Box(700, 290, 60, 60);
    box9 = new Box(800, 290, 60, 60);
    box10 = new Box(650, 200, 60, 60);
    box11 = new Box(750, 200, 60, 60);
    box12 = new Box(700, 110, 60, 60);

    base1 = new Base(700, 500, 300, 10);
    base2 = new Base(700, 300, 300, 10);

    leftEdge = new Edge(-50,350,100,900);
    rightEdge = new Edge(1250,350,100,900);
    topEdge = new Edge(600,-50,1200,100);

    sling = new Slingshot(trigger.body, {x:200, y:300});

    const mouse = Mouse.create(canvas.elt);

	var options = {
		mouse: mouse
	}

    constraint = MouseConstraint.create(engine, options);
    World.add(world, constraint);
}

function draw(){
    background(100);
    Engine.update(engine);
     r = random(0,255);
		 g = random(0,255);
		 b = random(0,255);

    ground.display();
    trigger.display();

    if(gameState === "Play"){
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
        box11.display();
        box12.display();
    }

    base1.display();
    base2.display();

    leftEdge.display();
    rightEdge.display();
    topEdge.display();

    sling.display();

    //Decrease the Time count
    if(gameState === "Play" && Time > 0){
        Time --;
    }
    //Write the winning conditions
    if(Time > 0 && world.bodies.length === 7 && gameState === "Play"){
        gameState = "Win";
    }
    if(Time === 0 && world.bodies.length === 7 && gameState === "Play"){
        gameState = "Win";
    }
    if(gameState === "Win"){
        win();
    }
    //Write the losing condition
    if(Time === 0 && world.bodies.length > 7 && gameState === "Play"){
        gameState = "Lose";
    }
    if(gameState === "Lose"){
        lose();
    }

    //Display the score and the Time
    push();
    textSize(20);
    fill(255);
    text("Score: " + score, 40, 40);
    text("Time left: " + Time, 40, 80);
    pop();
}

function mouseReleased(){
    setTimeout(() =>{
        sling.fly();
    },15);

}

function keyPressed(){
    if(keyCode === 32){
        World.remove(world, trigger.body);
        trigger = new Trigger(200, 300, 20);
        sling.attach(trigger.body);
    }
}

function win(){
  textSize(30);
  fill(255);
	background(0,g,b);
  text("**You win!**", 450, 50);
  World.remove(world, box1.body);
  World.remove(world, box2.body);
  World.remove(world, box3.body);
  World.remove(world, box4.body);
  World.remove(world, box5.body);
  World.remove(world, box6.body);
  World.remove(world, box7.body);
  World.remove(world, box8.body);
  World.remove(world, box9.body);
  World.remove(world, box10.body);
  World.remove(world, box11.body);
  World.remove(world, box12.body);
}

function lose(){
  textSize(30);
  fill(255);
	background(r,0,0)

  text("**You lose!**", 450, 40);
  World.remove(world, box1.body);
  World.remove(world, box2.body);
  World.remove(world, box3.body);
  World.remove(world, box4.body);
  World.remove(world, box5.body);
  World.remove(world, box6.body);
  World.remove(world, box7.body);
  World.remove(world, box8.body);
  World.remove(world, box9.body);
  World.remove(world, box10.body);
  World.remove(world, box11.body);
  World.remove(world, box12.body);
}
