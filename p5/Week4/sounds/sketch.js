var song1;

function preload() {
  song1 = loadSound('assets/bells.mp3');
}

function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);
  song1.play();  // this is what starts the sound

}
function touchStarted() {
  getAudioContext().resume();
}


function draw() {

}

function mouseReleased() {
  if (song1.isplaying()) {
  song1.pause();
} else {
  song1.play() ;
}


}
function touchStarted() {
  getAudioContext().resume();

}
