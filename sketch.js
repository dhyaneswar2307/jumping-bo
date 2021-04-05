var fixSprite1,fixSprite2,fixSprite3,fixSprite4;
var movingSprite;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


movingSprite=createSprite(random(10,750),300,20,20);
movingSprite.shapeColour="white";
movingSprite.velocityX=3;
movingSprite.velocityY=3;



fixSprite1=createSprite(100,580,180,30);
fixSprite1.shapeColour="red";

fixSprite2=createSprite(300,580,180,30);
fixSprite2.shapeColour="green";

fixSprite3=createSprite(500,580,180,30);
fixSprite3.shapeColour="yellow";

fixSprite4=createSprite(700,580,180,30);
fixSprite4.shapeColour="blue";

}

function draw() {
    background(rgb(169,169,169));
    fixSprite1.display();
fixSprite2.display();
fixSprite3.display();
fixSprite4.display();
movingSprite.display();
    

    if(movingSprite.x<0){
        music.stop()
        movingSprite.velocityX=3;

    }
    if(movingSprite.x>800){
        music.stop()
        movingSprite.velocityX=3;
    }

    if(movingSprite.isTouching(fixSprite4)){
        music.play()
        movingSprite.shapeColour="yellow";
        movingSprite.bounceoff(fixSprite4)
        
    }

    else if(movingSprite.isTouching(fixSprite3)){
        music.stop()
        movingSprite.shapeColour="blue"
        bounceoff(movingSprite,fixSprite3)
          }



    else if(movingSprite.isTouching(fixSprite2)){
        music.stop()
        movingSprite.shapeColour="red"
        movingSprite.velocityX=0;
        movingSprite.velocityY=0;
    }

    else if(movingSprite.isTouching(fixSprite1)){
        movingSprite.shapeColour="red"
        movingSprite.bounceoff(fixSprite1);
    }


    if(movingSprite.y<0){
        music.stop()
        movingSprite.velocityY=3;
    }
    


}