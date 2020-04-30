var namesArray = [];


function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1MmhpaCQCz8Y4wsDeZtqUWL4WdbRUax0WtG-FQX7etRc'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(900, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].genre));
  }

}


function draw() {
  background(104, 0, 145);

  fill('black');
  textSize(45);
  text("My friends favorite movie genres!", 360, 65);

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
    namesArray[i].drive();
  }

}


// my circle class
function Circle(myGenre) {
  this.pos = createVector(random(width),random(height));
  this.genre = myGenre;
  this.vel = random(3) ;

  this.display = function() {

 // put an ellipse here
 textSize(30);
 fill('white');
 text(this.genre, this.pos.x, this.pos.y);

  }

  this.drive = function() {
    this.pos.x = this.pos.x + this.vel;
    if(this.pos.x > width) this.pos.x = -20;

  }

}
