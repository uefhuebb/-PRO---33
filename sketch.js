var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var count=0;
var gameState='PLAY';
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

  
   
 
      
  
    

    
}
 
function mousePressed(){
  if(gameState!=='end'){
    particle=new Particle(mouseX,10,10);
  }
}

function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 

     for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
     }
  
    for (var k = 0; k < divisions.length; k++) {
      




      divisions[k].display();

    }   




      if(particle){

        particle.display();

    if(particle.body.position.y>760){
      count++;
      
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
      }
   else   if(particle.body.position.x>300 && particle.body.position.x<600){
        score=score+100;
        particle=null;
      }
     else if(particle.body.position.x>600){
        score=score+200;
        particle=null;
      }
    }  
  }
    
      if(count>=5){
        gameState='end';
        textSize(30);
text('Game Over',400,250);

      }

    
    
    
    
     
    

textSize(25);
fill('white')
text('500',15,560);
text('500',95,560);
text('500',175,560);
text('500',255,560);
text('100',335,560);
text('100',415,560);
text('100',495,560);
text('200',575,560);
text('200',655,560);
text('200',735,560);
text('Score : '+score,10,30);




  }
