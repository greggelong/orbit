float r;
float r2;
float theta=0;
float theta2=0;
float mars = 687;
float earth = 365;
float venus = 225;
int days;
int year;
// It will show the five synodic peridos of Venus's orbit
// It will complete in about 8 earth years
// I am using degrees for the theta to get close to an Earth year
// for each trip around the circle
// the inner circle is Venus the outer is Earth
// the inner circle moves faster
//

void setup() {
  size(600, 600);
  background(0);
  stroke(250, 196, 15, 10);
  r= width/2;
  r2 = r*(0.75);
  translate(width/2, height/2);
  noFill();
  ellipse(0, 0, r*2, r*2);
  println(mars/earth);
  println(earth/venus);
}

void draw() {
  stroke(250, 196, 15, 10);
  translate(width/2, height/2);
  // get x y coords
  float x = r *cos(radians(theta));
  float y = r *sin(radians(theta));
  float x2 = r2 *cos(radians(theta2));
  float y2 = r2 *sin(radians(theta2));

  // show ellipse
  noFill();
  ellipse(x, y, 20, 20);
  ellipse(x2, y2, 20, 20);

  // show line
  line(x, y, x2, y2);

  // show midpoint

  float mx = lerp(x, x2, 0.5);
  float my = lerp(y, y2, 0.5);
  noStroke();
  fill(255, 255, 0);
  ellipse(mx, my, 2, 2);
  // increment the angle
  theta+=1; // will use radians() on these degrees
  theta2 = theta*(earth/venus);
  days++;
  //theta2 = theta*(mars/earth);
  // theta2 is for the inside planet and move faster
  // so do divison accordingly
  if (days > 365) {
    year++;
    days =0;
    println("Earth year: ", year);
  }
}
