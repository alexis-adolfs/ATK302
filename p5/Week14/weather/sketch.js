var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var temperature = 0;


function setup() {
  createCanvas(400, 410);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=a8affb27847871320c918bf9160fe080'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  temperature = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(117, 221, 251);
      fill('black');
      textSize(25);
      text("Weather in Oswego, IL!", 20, 20);
      // parse the weather object and put some text or images using at least 3 different weather data!
      fill('black');
      textSize(15);
      text("The temperature is " + weather.main.temp, 20, 40);
      text("The humidity is " + weather.main.humidity, 20, 60);
      text("The windspeed is " + weather.wind.speed, 20, 80);

      fill('white');
      noStroke();
      ellipse(x, 250, 220, 100);
      ellipse(x, 215, 140, 90);
      x = x + ws / 3;
      if (x > width) x = 0;

      fill('red');
      var tmp = 0;
      tmp = map(temperature, -10, 90, 2, height - 50);
      rect(width - 70, height - 40, 30, -tmp);

      fill('red');
      ellipse(345, 370, 60, 60);
      break;

  }
}
