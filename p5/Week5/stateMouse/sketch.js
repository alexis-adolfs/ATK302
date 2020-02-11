var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background(245, 179, 197);
      text("Hello here is my life story so far...", 100, 100);
      break;

    case 1:
      background(255, 255, 157);
      text("I was born in Naperville, Illinois.", 100, 100);
      break;

    case 2:
      background(140, 246, 120);
      text("I grew up in Plainfield and went to high school at Plainfield North.", 100, 100);
      break;

    case 3:
      background(103, 222, 241);
      text("I lived and studied in Brighton, England during my 3rd semester of college.", 100, 100);
      break;

    case 4:
      background(232, 160, 255);
      text("I am currently in my 4th semester of college here at Illinois State.", 100, 100);
      break;

  }

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 4) {
    myState = 0;
  }
}
