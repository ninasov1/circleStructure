function setup() { //all global variables
  createCanvas(600,600);
  circleHeight = 600; //starts at bottom of canvas
  smallCircleHeight = 750;
  secondSmallCircle = 770;
  thirdSmallCircle= 900;
  fourthSmallCircle = 770;
}

function draw() {
  background(190, 110, 180); //color in rgb
  ellipse(200, circleHeight, 40,100);
  ellipse(200, smallCircleHeight, 200, 200 ); //first 2 peramters are x and y coordinates 0,0 is in the top left corner, third and 4th peramter is width and hight
  ellipse(200, smallCircleHeight, 10, 200); //middle inside circle
  ellipse(350,secondSmallCircle, 100, 40);
  ellipse(200,thirdSmallCircle, 50, 100);
  ellipse(50,fourthSmallCircle, 100, 40);
  fill(200,220,255); //fills 
  ellipse(200, circleHeight, 200,10);
  stroke(255,255,255); //outline
  //update circleHeight
  circleHeight -=1; //subtracts value from it makes it go up the diagram
  smallCircleHeight -=1;
  secondSmallCircle -=1;
  thirdSmallCircle -=1;
  fourthSmallCircle -=1;
}
