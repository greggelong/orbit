
let earth = 365;
let venus = 225;
let wave = [];
let orbit = [];
let t =0;

function setup() {
  createCanvas(1000, 800);
  
  background(0);
  strokeWeight(2)
  translate(width / 4, height / 2);
  //angleMode(DEGREES)
}

function draw() {
  background(0);
  translate(width / 4, height / 2);
  noFill();
  stroke(255);

  //set earth center
  let x =0;
  let y=0;
  
  
  
  for (let i = 0; i < 2; i++) {
    
    let prevx=x;
    let prevy=y
    
    // get radius offset
    let n = 1+i*(9/12.555)
    //print(n)
    
    let radius = 250/(n+1)
  
     
    x+= radius * cos((n)* t)
    y+= radius * sin((n)* t)
    
    // draw light circle
    stroke(255,200)
    ellipse(prevx,prevy,radius*2)

    // draw darker line
    stroke(0,255,0,255)
    line(prevx,prevy,x,y)
    
    
  }

    // save ly as a point in the wave
    wave.unshift(y);
    orbit.unshift({ x: x, y: y });

   
  // show orbit
  stroke(255, 255, 0);
  beginShape();
  noFill();
  for (let i = 0; i < orbit.length; i++) {
    vertex(orbit[i].x, orbit[i].y);
  }
  endShape();

  /// show wave
  translate(300, 0);
  stroke(0, 255, 0);
  line(x - 300, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();
  
  
  // increace time
  
  t=t+0.05;

  // clean up wave array
  if (wave.length > 800) {
    wave.pop();
  }

  if (orbit.length > 800) {
    orbit.pop();
  }
  
  
}
