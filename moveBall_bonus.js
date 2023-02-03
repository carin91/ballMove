


var velocity = 5;
var position = 0;
var ball = document.getElementById('ball');

// YOUR CODE 
// ----------------
function mover(){
  if(position>300){
    //clearInterval(intervalo1);
    //var intervalo2=setInterval(mover,100,-5);
    velocity=-5;
  }
  if(position<0){
   // clearInterval(intervalo1);
    //var intervalo1=setInterval(mover,100,5);
    velocity=5;
  }
  ball.style.left=position+"px";
  console.log("la posicion es",position)
  position=position+velocity;
  
  
}
//if(position>300){velocity=-5}
//if(position<5){velocity=5}
var intervalo1=setInterval(mover,100);

