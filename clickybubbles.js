let s=600;
let B=[];
let  backgroundbutton, colorbutton, velocitybutton;
var C
function setup() {
  createCanvas(s, s);
  C = [random(255),random(255),random(255)]
  for (i=50;i<s-50;i+=10){
  	B.push(new Bubble(i));
  }
    backgroundbutton = createButton('Change Backround Color');
  backgroundbutton.position(50,50);
  backgroundbutton.mousePressed(changebackground);
   
  colorbutton = createButton('Change Bubble Color');
  colorbutton.position(220,50);
  colorbutton.mousePressed(changebubblecolors);
  
  velocitybutton = createButton('Change Bubble Velocity');
  velocitybutton.position(370,50);
  velocitybutton.mousePressed(changebubblevelocities);

 
  textAlign(CENTER);
  textSize(50);
}

class Bubble {
	constructor(x) {
  this.x = x;
  this.y = s/2;
  this.sx = random(-10,10)
  this.sy = random(-10,10)
  this.r=25
  this.colour=[random(255),random(255),random(255)]
  }
  make(){
  fill(this.colour);
  ellipse(this.x,this.y,2*this.r,2*this.r)
  this.x+=this.sx
  this.y+=this.sy
  }
  detect(){
  if (this.x>s-this.r) {
    this.sx=-this.sx
    this.x = 2*s-2*this.r - this.x
  } 
  if (this.x<this.r) {
  	this.sx=-this.sx
    this.x = 2*this.r - this.x
  }
  if (this.y>s-this.r) {
    this.sy=-this.sy
    this.y = 2*s-2*this.r - this.y
  }
    if (this.y<this.r) {
  	this.sy=-this.sy
    this.y = 2*this.r - this.y
  }
  }
}

function draw() {
  background(C);
	for (p=0;p<B.length;p+=10){
		B[p].make();
  	B[p].detect();
  }
}

function changebubblevelocities() {
  for (i = 0; i < B.length; i++) {
    B[i].sx = random(-10,10)
    B[i].sy = random(-10,10)
  }
}

function changebubblecolors() {
  for (i = 0; i < B.length; i++) {
    B[i].colour = [random(255),random(255),random(255)]
  }
}

function changebackground() {
  C = [random(255),random(255),random(255)]
}
