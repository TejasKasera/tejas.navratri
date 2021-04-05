var navratriIMG, navratri;
var tejas, tejasIMG;
var ki, kiIMG;
var taraf, tarafIMG;
var se, seIMG;
var balls = [];
var rects = [];
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function preload()
{
	navratriIMG = loadImage("navratri.jpg");
	tejasIMG = loadImage("tejas1Image.png");
	kiIMG = loadImage("ki-Image.png");
	tarafIMG = loadImage("tarafImage.png");
	seIMG = loadImage("seImage.png");
}

function setup() {
	createCanvas(1230,705);

	navratri = createSprite(600,350,10,20);
	navratri.addImage(navratriIMG);
	navratri.scle = 0.1;

	tejas = createSprite(200,70,10,10);
	tejas.addImage(tejasIMG);
	tejas.scale = 0.4;

	ki = createSprite(415,90,10,20);
	ki.addImage(kiIMG);
	ki.scale = 0.5;

	taraf = createSprite(600,80,20,20);
	taraf.addImage(tarafIMG);
	taraf.scale = 0.6;

	se = createSprite(300,190,20,10);
	se.addImage(seIMG);
	se.scale = 0.6;


	engine = Engine.create();
	world = engine.world;


	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
		  width:1230,
		  height:705,
		  wireframes:false
		}
	})
	  Render.run(render)

	  var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
		  width:1230,
		  height:705,
		  wireframes:false
		}
	})
	  Render.run(render)
	
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
  navratri.display();
  tejas.display();
  ki.display();
  taraf.display();
  se.display();
  drawSprites();
  if(frameCount%1===0){
    ball = new Ball(random(5,1230),20,10);
    balls.push(ball);
   }

   for(var k=0;k<balls.length;k++){
    balls[k].display();
  }


  if(frameCount%1===0){
    deco = new Deco(random(5,1230),20,10,30);
    rects.push(deco);
   }

   for(var c=0;c<rects.length;c++){
    rects[c].display();
  }
 
}





