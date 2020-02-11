var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background(128, 229, 245);

  push() ;
  translate(x, 0);
  boy();
  pop() ;

  x += 5 ;
  if (x > width) {
    x = -300 ;
  }

}

function boy() {
  noStroke();
  fill(197, 192, 192);
  ellipse(338, 156, 120, 120);

  fill(197, 192, 192);
  rect(278, 164, 119.5, 119.5);

  fill(224, 194, 158);
  quad(326, 174, 350, 174, 353, 185, 323, 185);

  fill(17, 117, 169);
  quad(312, 246, 364, 246, 358, 314, 319, 314);

  fill(243, 228, 189);
  ellipse(339, 127, 100, 100);

  fill(236, 32, 32);
  quad(310, 185, 365, 185, 372, 246, 303, 246);
  arc(339, 121, 100, 100, 110, 0);

  fill(255, 255, 255);
  ellipse(312, 119, 100, 10);
  quad(351, 189, 362, 189, 366, 203, 348, 203);

  fill(118, 62, 13);
  triangle(361, 120, 389, 120, 376, 134);

  fill(0);
  ellipse(304, 134, 10, 10);
  ellipse(339, 134, 10, 10);

  fill(224, 194, 158);
  triangle(320, 138, 313, 145, 320, 146);

  fill(0);
  ellipse(348, 315, 25, 15);
  ellipse(323, 314, 25, 15);

  fill(243, 228, 189);
  triangle(353, 203, 365, 203, 357, 230);
  ellipse(358, 229, 15, 15);
}
