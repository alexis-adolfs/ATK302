var cars = [];
var frogPos;
var myState = 0;
var maxCars = 10;
var maxTimer = 15*60 ;
var timer = maxTimer ;
var corona ;
var sanitizer ;
var title ;
var win ;
var lose ;
var theme ;
var winner ;
var loss ;



function preload() {
  theme = loadSound('assets/theme.mp3');
  winner = loadSound('assets/winner.mp3');
  loss = loadSound('assets/loss.mp3');

}


function setup() {
  // put setup code here
  createCanvas(800, 800);

  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());

    corona = loadImage("assets/corona.png");
    sanitizer = loadImage("assets/sanitizer.png");
    title = loadImage("assets/title.png");
    win = loadImage("assets/win.png");
    lose = loadImage("assets/lose.png");
  }

  frogPos = createVector(400, height-100);

  textAlign(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

}

function draw() {
  // put drawing code here

  switch(myState){

    case 0:

    image(title, 400, 400, 800, 800);
    break;

    case 1:
    game();

    timer = timer - 1;
    if (timer <= 0) {
      timer = maxTimer ;
      myState = 3 ;
      theme.stop();
      loss.play();
    }
    break;

    case 2:
    image(win, 400, 400, 800, 800);
    break;

    case 3:
    image(lose, 400, 400, 800, 800);
    break;
  }


}

function mouseReleased(){
  switch(myState){
    case 0:
    theme.play();
    myState = 1 ;
    break;

    case 2:
    timer = maxTimer ;
    cars = [];
    for (var i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }
    myState = 0;
    break;

    case 3:
    timer = maxTimer ;
    cars = [];
    for (var i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }
    myState = 0;
    break;
  }
}



function game(){
  background('lightblue');

for (var i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].drive();
  if (cars[i].pos.dist(frogPos) < 50) {
    cars.splice(i, 1) ;

  }
}

if (cars.length == 0){
  theme.stop();
  winner.play();
  myState = 2;
}



//frog

image(sanitizer, frogPos.x, frogPos.y, 90, 200);
checkForKeys();
}

function checkForKeys(){
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}


function Car() {
  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods
  this.display = function() {
    image(corona, this.pos.x, this.pos.y, 60, 60);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function touchStarted() {
  getAudioContext().resume();

}
