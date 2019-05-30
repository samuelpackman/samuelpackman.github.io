let s=600;
let B=[];
var C;
let b;
let return_value;
function setup() {
  createCanvas(s, s);
  C = [random(255),random(255),random(255)]
  for (i=0;i<5;i++){
  	B.push(new Bubble(s/2 - 25 + 10*i));
  }
}

class Bubble {
	constructor(x) {
  this.x = x;
  this.y = s/2;
  this.sx = 5*random(-1,1)
  this.sy = 5*random(-1,1)
  this.r=25
  this.colour=[random(255),random(255),random(255)]
  this.anticolour = [255 - this.colour[0],255 - this.colour[1],255 - this.colour[2]]
  }
  make(){
  if (this.overlap()) {fill(this.anticolour)}
  else{fill(this.colour)}
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
  overlap() {
    for (b of B) {
      if ((this.x - b.x)**2 + (this.y - b.y)**2 < (this.r + b.r)**2 && this != b) {
        return true 
      }
    }
    return false
  }
}

function draw() {
  background(C)
	for (p=0;p<B.length;p++){
    B[p].make();
  	B[p].detect();
  }
}