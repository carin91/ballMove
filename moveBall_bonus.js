

var velocityX = 5;
var velocityY = 3;
var positionX = 0;
var positionY = 0;
var ball = document.getElementById('ball');

// YOUR CODE 
// ----------------

function mover(){
  if(positionX>=500){
    //clearInterval(intervalo1);
    //var intervalo2=setInterval(mover,100,-5);
    velocityX=-5;
  }
  if(positionX<=0){
   // clearInterval(intervalo1);
    //var intervalo1=setInterval(mover,100,5);
    velocityX=5;
  }
  if(positionY>=500){
    //clearInterval(intervalo1);
    //var intervalo2=setInterval(mover,100,-5);
    velocityY=-3;
  }
  if(positionY<=0){
   // clearInterval(intervalo1);
    //var intervalo1=setInterval(mover,100,5);
    velocityY=3;
  }
  positionX=positionX+velocityX;
  positionY=positionY+velocityY;
  ball.style.left=positionX+"px";
  ball.style.top=positionY+"px";

  
}
//if(position>300){velocity=-5}
//if(position<5){velocity=5}
var intervalo1=setInterval(mover,100);

