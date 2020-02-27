var myState = 0 ;

function preload(){

}

function setup() {
  // put setup code here
  createCanvas(1500, 1500);

}

function draw() {
  // put drawing code here
  background(160, 244, 255);
    switch(myState){
      case 0:
        textSize(35);
        text("What is the definition of an optimist?", 100, 100);
        break ;

      case 1:
        textSize(35) ;
        text("A college student who opens his wallet and expects to find money.", 100, 100);
        break ;
    }
}

function mouseReleased(){
  myState = myState + 1 ;
  if (myState > 1) {
    myState = 0 ;
  }
}
