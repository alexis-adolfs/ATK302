var myState = 0;
var x = 0 ;
var brighton ;
var eiffel ;
var hamilton;
var jameson ;
var pier ;
var ticket ;
var timer = 0;


function setup() {
  // put setup code here
  createCanvas(1500, 1500);

  brighton = loadImage("assets/brighton.jpg");
  eiffel = loadImage("assets/eiffel.jpg");
  hamilton = loadImage("assets/hamilton.jpg");
  jameson = loadImage("assets/jameson.jpg");
  pier = loadImage("assets/pier.jpg");
  ticket = loadImage("assets/ticket.jpg");

}

function draw() {
  // put drawing code here
    background(120, 255, 254);

switch(myState){
  case 0:
  textSize(30);
  text("I am going to tell you about the coolest experience of my life!", 80, 80);
  image(ticket, 220, 100, 500, 500);
  timer++ ;
  if (timer > 200){
    myState = 1;
    timer = 0;
  }
  break;

  case 1:
  textSize(30);
  text("Last semester I studied abroad in Brighton, England ", 100, 100);
  text("and got to live close to the coast where the infamous pier is located.", 100, 150);
  image(pier, 220, 200, 500, 500);
  break;

  case 2:
  image(hamilton, 220, 200, 500, 500);
  textSize(30);
  text("During part of the program, I won front row tickets", 100, 100);
  text("to the West End production of Hamilton which was insane!", 100, 150);

  break;

  case 3:
  textSize(30);
  text("I got to travel to Ireland where I got to tour the Jameson Distillery.", 100, 100);
  image(jameson, 220, 150, 500, 500);
  break;

  case 4:
  image(eiffel, 220, 200, 500, 500);
  textSize(30);
  text("I also got to travel to Paris where I went up the eiffel tower, saw the", 100, 100);
  text("Versailles Gardens, and toured the Louvre.", 100, 150);
  break;

  case 5:
  textSize(30);
  text("Those were the craziest parts of my time abroad!", x, 100);
  x = x + 5 ;
  if (x > width){
    x = -300;
  }
  image(brighton, 220, 150, 500, 500);
  break;




    }
}

function mouseReleased(){
  myState = myState + 1 ;
  if (myState > 5) {
    myState = 0 ;

}
  }
