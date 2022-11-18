
let earth = 365.2;
let venus = 225;
let mars =687;
let wave = [];
let orbit = [];
let theta =0;   // earth rotation angle
let theta1 =0; // venus rotation angle
let x =0;
let y =0;
let x1=0;
let y1=0;
let r =0;
let r1 =0;
let offset;
let pick;
let clr;

function setup() {
  createCanvas(1000, 800);
  
  background(0);
  strokeWeight(2)
  translate(width / 4, height / 2);
  angleMode(DEGREES)
  offset = (earth/venus);
  //offset = (mars/earth);
  r = 150;
  r1 = 100//(r / offset)  // 1.6222
  clr = color(255,255,0)
  pick = createSelect();
  pick.option('Venus');
  pick.option('Mars');
  pick.changed(setOrbit)


}

function setOrbit(){
  if (pick.value()=='Venus'){
    offset =(earth/venus);
    clr = color(255,255,0)

  }else{
    offset =(mars/earth);
    clr = color(255,0,0)
  }
  // clear wave and orbit arrays
  wave = [];
  orbit = [];
  x=0;
  y=0;
  
}

function draw() {
  background(0);
  
  // need to zero out venus each time through draw
  // its location is a function of the suns movement 
  // x and y
  x1=0;
  y1=0;
  
  // translate to earth center
  translate(width / 4, height / 2);
  noFill();
  stroke(255);
  
    // get x and y of sun moving around earth

    x = r * cos(theta)
    y = r* sin(theta)
    
    // draw earth circle
    stroke(255,200)
    ellipse(0,0,r*2)

    // draw line from earth to sun
    stroke(0,255,0,255)
    line(0,0,x,y)
    
    // venus
    // translate to sun
    // don't need to translate just and x and y after cos sin
    // calculation
    
    // get x1 and y1 of venus moving around sun
    
    x1 += (r1 *cos(theta1))+x
    y1 += (r1 * sin(theta1))+y
    //print(theta1,x1,y1)
    // draw venus circle
    stroke(255,200)
    ellipse(x,y,r1*2)

    // draw line from sun to venus
    stroke(0,255,0,255)
    line(x,y,x1,y1)
    
    
    // save ly as a point in the wave
    wave.unshift(y1);
    orbit.unshift({ x: x1, y: y1 });

   
  // show orbit
  //translate(400,0)
  stroke(clr);
  beginShape();
  noFill();
  for (let i = 0; i < orbit.length; i++) {
    vertex(orbit[i].x, orbit[i].y);
  }
  endShape();

  /// show wave
  translate(300, 0);
  stroke(0, 255, 0);
  line(x1 - 300, y1, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();
  
  
  // increase time
  
  theta +=2;
  theta1 = theta*offset;

  // clean up wave array
  if (wave.length > 800) {
    wave.pop();
  }

  if (orbit.length > 1600) {
    orbit.pop();
  }
  
  
}