var myState = 0 ;
var timer = 0 ;

function preload(){

}

function setup() {
  // put setup code here
  createCanvas(1000, 1000);

}

function draw() {
  // put drawing code here
  background('pink');
    switch(myState){
      case 0:
        textSize(35);
        text("What's the best thing about Switzerland?", 100, 100);
        timer++ ;
        if (timer > 200){
          myState = 1 ;
          timer = 0 ;
        }
        break ;

      case 1:
        textSize(35);
        text("I don't know, but the flag is a big plus.", 100, 100);
        timer++ ;
        if (timer > 200){
          myState = 0 ;
          timer = 0 ;
        }
        break ;
    }
}

function mouseReleased(){
  myState = myState + 1 ;
  if (myState > 1) {
    myState = 0 ;
  }
}
