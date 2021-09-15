let x,y,x1,y1;
let r = 180;
let r1;
let theta =0;
let theta1 =0;
let venus = 225; // Venus orbit around sun in Earth days
let mars = 686.9;
let earth = 365.26; // Earth orbit around sun in Earth days

//let m= earth/mars;
let m= venus/earth; // The orbit in days as a ratio

function setup(){
	createCanvas(800,800);
	r = width/2; // Earth position from center i.e. sun
    r1 = r/1.5; //  Venus closer to sun
    background(0);
    translate(width/2, height/2);
    stroke(255,50);
    fill(255);
}

function draw(){
	translate(width/2,height/2);
    // increase the angle each frame
    theta+=2;
    theta1+=(2/m); // moves at a different rate

    // get x y using polar to Cartesian 
    x=cos(radians(theta))*r;  //earth
    y=sin(radians(theta))*r;
    x1=cos(radians(theta1))*r1; // Venus
    y1=sin(radians(theta1))*r1;

    lx = lerp(x,x1, 0.5) // midpoint 
    ly = lerp(y,y1,0.5)
 	// display
    stroke(255, 64);  // line color
    line(x,y,x1,y1);
    stroke(0);
    fill(73,155,205,100); // earth color
    ellipse(x,y,20,20);
    fill(223,142,175,150); // Venus color
    ellipse(x1,y1,17,17);
    fill(255,255,0);  // mid-point color
    ellipse(lx,ly,5,5);
}