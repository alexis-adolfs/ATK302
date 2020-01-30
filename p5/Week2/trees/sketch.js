function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background(51,216,255);
  noStroke();

  fill(44,121,25);
  rect(0, 320, 900, 900);

  fill(241, 241, 241);
  ellipse(445, 106, 120, 50);

  fill(251, 251, 251);
  ellipse(64, 94, 120, 50);

  fill(251, 251, 251);
  ellipse(508, 134, 128, 48);

  fill(241, 241, 241);
  ellipse(202, 66, 128, 48);

  fill(64,186,13);
  triangle(81, 35, 25, 326, 140, 326);

  fill(255,248,51);
  ellipse(615, 78, 120, 120);

  fill(253, 253, 253);
  ellipse(669, 110, 127, 47);

  fill(58,255,51);
  triangle(249, 18, 189, 357, 322, 357);

  fill(179, 135, 19);
  rect(240, 357, 30, 30);

  fill(179, 135, 19);
  rect(68, 326, 30, 30);

  fill(158, 119, 15);
  rect(449, 290, 200, 20);

  fill(182, 137, 19);
  rect(460, 214, 175, 50);

  fill(177, 173, 164);
  rect(488, 264, 10, 26);

  fill(177, 173, 164);
  rect(596, 264, 10, 26);

  fill(154, 152, 145);
  rect(466, 310, 12, 28);

  fill(154, 152, 145);
  rect(620, 310, 12, 28);

  fill(177, 173, 164);
  ellipse(490, 238, 8, 8);

  fill(177, 173, 164);
  ellipse(600, 238, 8, 8);

}

function mouseReleased() {
  console.log(mouseX + ", " + mouseY) ;
}
