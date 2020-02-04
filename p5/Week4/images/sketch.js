var jameson ;
var paris ;
var stone ;

function setup() {
  // put setup code here
createCanvas(800, 800);

  jameson = loadImage("assets/jameson.jpg");
  paris = loadImage("assets/paris.jpg");
  stone = loadImage("assets/stone.jpg");

}

function draw() {
  // put drawing code here
  image(jameson, 0, 0, 200, 200);
  image(paris, 0, 200, 200, 200);
  image(stone, 0, 400, 200, 200);
  
}
